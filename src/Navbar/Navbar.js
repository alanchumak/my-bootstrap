import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo-dark.svg'
import stylesNavbar from './Navbar.module.css'
// import  './Navbar.css'
import { NavItemDropdown } from './NavItemDropdown'
import { HouseIcon, PagesIcon } from './Icons';
import stylesDropdown from './NavItemDropdown.module.css'




function BasicExample() { //expand="lg"
    let conteinerStyle = 'flex-lg-column'
    return (
        <Navbar 
        expand="lg" 
            className={stylesNavbar.navbar}
        >
            <Container 
                // className={conteinerStyle} 
                className={stylesNavbar.conteiner} 
                // className='g-0'
                fluid
            >
                <Navbar.Brand 
                href="#home"
                    className={stylesNavbar.brand}
                >
                    <img src={logo} alt="..." width="125" height="25"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" 
                    className={stylesNavbar.togler}
                />
                <Navbar.Collapse id="basic-navbar-nav" className={stylesNavbar.collapse} >
                    <Nav 
                        className={stylesNavbar.navbarNav}
                        
                    >
                        <NavItemDropdown title="Dashboards" icon={<HouseIcon/>}>
                            <Nav.Link className={stylesDropdown.navLink} href="#1">Default</Nav.Link>
                            <Nav.Link className={stylesDropdown.navLink} href="#2">E-commerce</Nav.Link>
                        </NavItemDropdown>
                            
                        <Nav.Link className={stylesDropdown.navLink}  href="#link0"><PagesIcon/>Pages</Nav.Link>
                        <Nav.Link className={stylesDropdown.navLink}  href="#link1"><PagesIcon/>Chat</Nav.Link>
                        <Nav.Link className={stylesDropdown.navLink}  href="#link2"><PagesIcon/>Calendar</Nav.Link>
                        <Nav.Link className={stylesDropdown.navLink}  href="#link3"><PagesIcon/>Email</Nav.Link>
                        <Nav.Link className={stylesDropdown.navLink}  href="#link4"><PagesIcon/>Tasks</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;