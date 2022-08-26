import { toggleButtonClasses } from '@mui/material';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderMenu.css'

function HeaderMenu({title, nav, items=[], multiSelect= false, margin}){
    const [open, setOpen] = useState(false);

    const navigate= useNavigate()

    const toggle = () => setOpen(!open)

    function handleOnClick(item){
    }

    const showDropdown = () => {
        setOpen(true);
    }

    const hideDropdown = () => {
        setOpen(false);
    }

    return (

       <div className='dropdown'>
            <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <div className='dropdown-title' onClick={() => {navigate(nav)}}>
                {title}
                </div>
                {open ? (
                <div className='ddcontainer' style={{marginTop:{margin}}}>
                <div style={{marginTop:{margin}}} className='dropdown-list'>
                  
                    {items.map((item) => (
                        <li>
                            <div className='text' type='button' onClick={() => {navigate(item.nav)}}>
                            {item.value}
                            </div>
                        </li>
                    ))}
                </div>
                </div>) 
                 : <div/> }
                
            </div>
       </div>
    )
}

export default HeaderMenu;