import styles from './NavItemDropdown.module.css'
import { useState } from 'react'
import {Collapse, Nav} from 'react-bootstrap';
import { DropdownArrow } from './Icons';
import stylesNavbar from './Navbar.module.css'


export const NavItemDropdown = ({ title, icon, children }) => {
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
                href="#home"
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