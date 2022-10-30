import { NavDropdown } from 'react-bootstrap'
import styles from './Navbar.module.css'


export const NavItemDropdown = (href="#1", title) => {
    return <NavDropdown.Item href={href}>
        {title}
    </NavDropdown.Item>
}