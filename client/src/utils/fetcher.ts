type HeadersType = {
  Accept: string;
  'Csrf-Token': string;
  Authorization: string;
  'Content-Type'?: string;
};

export type ErrorType = string | {
  message: string;
  statusText: string;
};

/**
 * Fetch data from the back-end
 */
const Fetch = <ReturnType>(url: string, data = {}, method = 'GET', additionalURLParams = {}): Promise<ReturnType> => {
  let body: Blob | FormData | string | null = null;
  let finalUrl = url;

  if (method === 'GET') {
    finalUrl += `?${new URLSearchParams({ ...data, ...additionalURLParams }).toString()}`;
  } else {
    finalUrl += `?${new URLSearchParams({ ...additionalURLParams }).toString()}`;
    body = (data instanceof FormData || data instanceof Blob) ? data : JSON.stringify(data);
  }

  return new Promise((resolve, reject) => {
    const headers: HeadersType = {
      Accept: 'application/json',
      'Csrf-Token': 'nocheck',
      Authorization: localStorage.getItem('user') ? `Basic ${btoa(`${localStorage.getItem('user') || ''}:${localStorage.getItem('token') || ''}`)}` : '',
    };

    if (!(data instanceof FormData) && !(data instanceof Blob)) {
      headers['Content-Type'] = 'application/json';
    }
    fetch(finalUrl, {
      headers,
      method,
      body,
    })
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          const json = response.json();

          if (response.status >= 200 && response.status < 300) {
            json.then((processedJson: ReturnType) => {
              resolve(processedJson);
            }).catch((err) => {
              reject(err);
            });
          } else {
            json.then((processedJson: ReturnType) => {
              reject(processedJson);
            }).catch((err) => {
              reject(err);
            });
          }
        } else if (contentType && contentType.indexOf('text/csv') !== -1) {
          response.blob().then((blob) => {
            resolve(blob as unknown as ReturnType);
          }).catch((err) => {
            reject(err);
          });
        } else {
          response.text().then((text) => {
            reject({
              message: text,
              statusText: response.statusText,
            });
          }).catch((err) => {
            reject(err);
          });
        }
      }).catch((error) => {
        reject(error);
      });
  });
};

export default Fetch;
