import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {languages} from '../../i18n/settings';
import Image from "next/image"
import Link from 'next/link'

export default function LangMenu(props:{t:any,currentLang:string}) {
  const {t, currentLang} = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  >
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Language">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >          
            <Avatar sx={{ width: 24, height: 24 }} className='hover:scale-110 border border-black' >            
                <Image src={`/${currentLang}.png`} alt={currentLang} width={32} height={32}   />            
            </Avatar>          
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        
      > 
        <div className='w-[280px] grid grid-cols-2 bg-black ' >       
            {
                languages.map((lng:string,index:number)=>(
                    <Link href={lng} key={lng+index} >
                    <MenuItem onClick={handleClose} className='bg-black text-white font-Oxanium text-[12px]'  >                        
                        <Image src={`/${lng}.png`} alt={lng} width={26} height={26}  className='mx-2 hover:scale-110' /> <span>{t(lng)}</span>                                            
                    </MenuItem>
                    </Link>
                ))
            }
            </div>
      </Menu>
    </div>
  );
}
