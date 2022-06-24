import { toggleButtonClasses } from '@mui/material';
import React, {useState} from 'react';
import './HeaderMenu.css'

function HeaderMenu({title, items=[], multiSelect= false}){
    const [open, setOpen] = useState(false);

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
       /* <div>
            <ul className='ul1'>
            <li>
            <div className='dd-wrapper' tabIndex={0} role="button" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
                
                 <p>{title}</p>
                
               
            </div>
            </li>
            
            {open && (
                <li>
                     {items.map(item => (
                        <li key={item.id}>
                            <button type="button" onClick={()=> handleOnClick(item)}>
                                {item.value}
                            </button>
                        </li>
                    ))}
                </li>
            )}
            
            </ul>
        </div> */
       <div className='dropdown'>
            <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                {title}
                {open ? (<ul className='dropdown-list'>
                    {items.map((item) => (
                        <li>
                            <div>
                            {item.value}
                            </div>
                        </li>
                    ))}
                </ul>) : null }
                
            </div>
       </div>
    )
}

export default HeaderMenu;