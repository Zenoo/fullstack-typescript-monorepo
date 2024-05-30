/**
 * Pad an integer
 */
const pad = (n: number, width: number, z = '0') => {
  const nString = `${n}`;
  return nString.length >= width
    ? nString
    : `${new Array(width - nString.length + 1).join(z)}${n}`;
};

export default pad;
