import styles from './NavItem.module.css'
import { useState } from 'react'
import {Collapse, Nav} from 'react-bootstrap';
import { DropdownArrow } from './Icons';


export const NavItemDropdown = ({ href, title, icon, children }) => {
    const [open, setOpen] = useState(true);
    let collapseId = `${title}-collapse`
    let subitems = children.map((item, i) =>
        <div key={i.toString()} className={styles.subitem}>
            {item}
        </div>
    )

    return (
        <div>
            <Nav.Link
                onClick={() => setOpen(!open)}
                aria-controls={collapseId} 
                aria-expanded={open}
                href={href}
                className={styles.navLink}
            >
                {icon}
                {title}
                <DropdownArrow />
            </Nav.Link>

            <Collapse in={open}>
                <div id={collapseId}>
                <Nav  className={`${styles.subitems} flex-column`} >
                    {/* <ul className={styles.subitems}> */}
                        {subitems}
                    {/* </ul> */}
                </Nav>
                </div>
            </Collapse>
            
        </div >
    )

}