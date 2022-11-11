import { Nav } from 'react-bootstrap'
import styles from './NavItem.module.css'


export const NavItem = ({href, title, icon, onClick}) => {
    return <Nav.Link className={styles.navLink} href={href} onClick={onClick}>
        {icon}
        {title}
    </Nav.Link>
}