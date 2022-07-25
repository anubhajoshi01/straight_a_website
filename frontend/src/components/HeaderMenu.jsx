import { toggleButtonClasses } from '@mui/material';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderMenu.css'

function HeaderMenu({title, nav, items=[], multiSelect= false}){
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
                <div onClick={() => {navigate(nav)}} title='title'>
                {title}
                </div>
                {open ? (
                <div className='ddcontainer'>
                <ul className='dropdown-list'>
                    {items.map((item) => (
                        <li>
                            <div className='text' type='button' onClick={() => {navigate(item.nav)}}>
                            {item.value}
                            </div>
                        </li>
                    ))}
                </ul>
                </div>) 
                 : null }
                
            </div>
       </div>
    )
}

export default HeaderMenu;