import styles from './NavItem.module.css'
import { useState } from 'react'
import {Collapse, Nav} from 'react-bootstrap';
import { DropdownArrow } from './Icons';


export const NavItemDropdown = ({ href, title, icon, children, onClick, active }) => {
    const [open, setOpen] = useState(true);
    let collapseId = `${title}-collapse`
    
    let subitems = children.map((item, i) =>
        <div key={i.toString()} className={styles.subitem} onClick={onClick}>
            {item}
        </div>
    )

    let isActive = active == title ? 'active' : ''

    return (
        <div>
            <a
            
                onClick={() => setOpen(!open)}
                aria-controls={collapseId} 
                aria-expanded={open}
                href={href}
                className={`${styles.navLink} nav-link ${isActive}`}
            >
                {icon}
                {title}
                <DropdownArrow />
            </a>
            

            <Collapse in={open}>
                <div id={collapseId}>
                <div  className={`${styles.subitems} flex-column`} >
                    {/* <ul className={styles.subitems}> */}
                        {subitems}
                    {/* </ul> */}
                </div>
                </div>
            </Collapse>
            
        </div >
    )

}