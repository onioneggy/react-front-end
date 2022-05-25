import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import { setSnackBar } from '../reducers/snackbar';

export default function SimpleSnackbar() {
  const dispatch = useDispatch()
  const openValue = useSelector((state: RootState) => state.snackbarReducer.isOpen)

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    dispatch(setSnackBar(false));
  };

  return (
    <div>
      <Snackbar
        open={openValue}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Sucessfully added new employee!"
      />
    </div>
  );
}
