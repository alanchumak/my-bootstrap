import Dropdown from 'react-bootstrap/Dropdown';
import { ThemeSwitcherIcon, DarkModeIcon, AutoModeIcon } from './Icons'
import style from './ThemeSwitcher.module.css'
import {useState} from 'react'

export function ThemeSwitcher() {
    const [active, setActive] = useState('light')

    const Item = ({id, title, icon}) => {
        return <Dropdown.Item 
                    id={id}
                    className={style.item} 
                    active={(active == id)} 
                    onClick={() => setActive(id)} 
                    href={"#/action- " + id}>
                        {icon} {title}
                </Dropdown.Item>
    }
        
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className={style.dropdownToggle}>
                <ThemeSwitcherIcon />
            </Dropdown.Toggle>

            <Dropdown.Menu className={style.dropdownMenu} dataPopperPlacement='bottom-end'>
                {/* <Dropdown.Item id='light' className={style.item} active={(active=='light')} onClick={() => setActive('light')} href="#/action-1"><ThemeSwitcherIcon /> Light mode</Dropdown.Item>
                <Dropdown.Item id='dark' className={style.item} active={(active == 'dark')} onClick={() => setActive('dark')} href="#/action-2"><DarkModeIcon /> Dark mode</Dropdown.Item>
                <Dropdown.Item id='auto' className={style.item}  active={(active=='auto')} onClick={() => setActive('auto')} href="#/action-3"><AutoModeIcon />Auto</Dropdown.Item> */}
                <Item id='light' title='Light mode' icon={<ThemeSwitcherIcon />}/>
                <Item id='dark' title='Dark mode' icon={<DarkModeIcon />}/>
                <Item id='auto' title='Auto' icon={<AutoModeIcon />}/>
            </Dropdown.Menu>
        </Dropdown>
    );
}

// function Item())
