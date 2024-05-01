import React from "react"
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";

const theme  =createTheme({
    typography:{
        fontFamily:"Oxanium"
    },
    palette:{
        
    }
})


const ThemeProvider = ({children}:any)=>{
return (
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
    )
}

export default ThemeProvider;
