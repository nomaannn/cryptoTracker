import React,{useState} from 'react';
import Drawer from '@mui/material/Drawer';
import {IconButton} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';


export default function TemporaryDrawer() {
 const[open,setOpen] = useState(false)

 
  return (
    <div>
          <IconButton onClick={()=>setOpen(true)} >
            <MenuRoundedIcon className="link"/>
          </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
            
          >
            <div className='right_toggle'>
              <Link href='/'><p className='link'>Home</p></Link>
              <Link href='/'><p className='link'>Compare</p></Link>
              <Link href='/'><p className='link'>Watchlist</p></Link>
              <Link href='/'><p className='link'>Dashboard</p></Link>
            </div>
          </Drawer>
        
    </div>
  );
}