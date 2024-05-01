import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

interface State  {
    open: boolean;
    handleClick : () => void;
  }

const SocaialSnackBar = (props:State)=>{
    const {open,handleClick} = props;

    return(

            <Box sx={{ width: 500 }}>
            <Snackbar
                anchorOrigin={{ vertical:"top", horizontal:'right' }}
                open={open}
                onClose={handleClick}
                message="I love snacks"
                key={"top" + "center"}
            />
            </Box>
        
    )
}
export default SocaialSnackBar