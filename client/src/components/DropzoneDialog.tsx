import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import filesize from 'file-size';
import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {DropzoneOptions, useDropzone} from 'react-dropzone';
import Text from './Text';

interface Props {
  accept: {
    [key: string]: string[];
  };
  children: React.ReactNode;
  onSave: (files: File[]) => void;
  title: string;
  options?: Omit<DropzoneOptions, 'accept'>;
}
function DropzoneDialog({accept, children, onSave, title, options}: Props) {
  const [open, setOpen] = useState(false);

  // Open ingredient dialog
  const openDialog = useCallback(() => {
    setOpen(true);
  }, []);

  // Close ingredient dialog
  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    ...options,
    accept,
  });

  const style = useMemo<CSSProperties>(() => {
    const baseStyle: CSSProperties = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderWidth: 2,
      borderRadius: 2,
      borderColor: '#eeeeee',
      borderStyle: 'dashed',
      backgroundColor: '#fafafa',
      color: '#bdbdbd',
      outline: 'none',
      transition: 'border .24s ease-in-out',
      cursor: 'pointer',
    };

    const activeStyle = {
      borderColor: '#2196f3',
    };

    const acceptStyle = {
      borderColor: '#00e676',
    };

    const rejectStyle = {
      borderColor: '#ff1744',
    };

    return {
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    };
  }, [isDragActive, isDragAccept, isDragReject]);

  const save = useCallback(() => {
    if (acceptedFiles.length > 0) {
      onSave(acceptedFiles);
      closeDialog();
    }
  }, [acceptedFiles, closeDialog, onSave]);

  return (
    <>
      {React.Children.map<ReactNode, ReactNode>(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement, {
            onClick: openDialog,
          });
        }

        return null;
      })}
      <Dialog onClose={closeDialog} open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <div {...getRootProps({style})}>
            <input {...getInputProps()} />
            <Text>Drag 'n' drop some files here, or click to select files</Text>
          </div>

          <List dense>
            {acceptedFiles.map(file => (
              <ListItem key={file.name}>
                <ListItemText
                  primary={file.name}
                  secondary={filesize(file.size, {fixed: 0}).human()}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button color="primary" onClick={save} variant="contained">
            Validate
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DropzoneDialog;
