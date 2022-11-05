import { Nav } from 'react-bootstrap'
import styles from './NavItem.module.css'


export const NavItem = ({href, title, icon}) => {
    return <Nav.Link className={styles.navLink} href={href}>
        {icon}
        {title}
    </Nav.Link>
}