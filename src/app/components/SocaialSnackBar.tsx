import * as React from 'react';
import Grid from '@mui/material/Grid';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

interface State  {
    open: boolean;
    handleClick : () => void;
  }

const SocaialSnackBar = (props:State)=>{
    const {open,handleClick} = props;

    return(

            <Grid sx={{ width: 500 }}>
            <Snackbar
                anchorOrigin={{ vertical:"top", horizontal:'right' }}
                open={open}
                onClose={handleClick}
                message="I love snacks"
                key={"top" + "center"}
            />
            </Grid>
        
    )
}
export default SocaialSnackBar