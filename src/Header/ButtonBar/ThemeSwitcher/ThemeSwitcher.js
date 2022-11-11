import Dropdown from 'react-bootstrap/Dropdown';
import { ThemeSwitcherIcon, DarkModeIcon, AutoModeIcon } from './Icons'
// import style from './ThemeSwitcher.module.css'
import buttonBarStyles from '../ButtonBar.module.css'

import {useState} from 'react'

export function ThemeSwitcher() {
    const [active, setActive] = useState('light')

    const MenuItem = ({id, title, icon}) => {
        return <Dropdown.Item 
                    id={id}
            className={buttonBarStyles.menuItem} 
                    active={(active == id)} 
                    onClick={() => setActive(id)} 
                    href={"#/action-" + id}>
                        {icon} {title}
                </Dropdown.Item>
    }
        
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className={buttonBarStyles.dropdownToggle}>
                <ThemeSwitcherIcon />
            </Dropdown.Toggle>

            <Dropdown.Menu className={buttonBarStyles.dropdownMenu} >
                <MenuItem id='light' title='Light mode' icon={<ThemeSwitcherIcon />}/>
                <MenuItem id='dark' title='Dark mode' icon={<DarkModeIcon />}/>
                <MenuItem id='auto' title='Auto' icon={<AutoModeIcon />}/>
            </Dropdown.Menu>
        </Dropdown>
    );
}

