import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo-dark.svg'
import styles from './Navbar.module.css'
import { NavItemDropdown } from './NavItemDropdown'
import { HouseIcon, PagesIcon, ChatIcon, CalendarIcon, TasksIcon, EmailIcon } from './Icons';
import { NavItem } from './NavItem'
import { useState } from 'react'


function MyNavbar() { 
    // let conteinerStyle = 'flex-lg-column'
    const [active, setActive] = useState('Dashboards')
    const onClickedSubitem = (item) => { setActive(item) }

    return (
        <Navbar expand="lg" className={`${styles.navbar} scroller`}>
            <Container className={styles.conteiner} fluid>
                <Navbar.Brand href="#home" className={styles.brand}>
                    <img src={logo} alt="..." width="125" height="25"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.togler}/>
                <Navbar.Collapse id="basic-navbar-nav" className={styles.collapse} >
                    <Nav className={styles.navbarNav}>
                        <NavItemDropdown href="#l00" title="Dashboards" icon={<HouseIcon />} 
                            onClick={()=>setActive('Dashboards')} active={active}>
                            <NavItem href="#1" title='Default' />
                            <NavItem href="#2" title='E-commerce'/>
                        </NavItemDropdown>
                        <NavItemDropdown href="#l0" title='Pages' icon={<PagesIcon />}
                            onClick={() => setActive('Pages')} active={active}>
                            <NavItem href="#l01" title='Account' />
                            <NavItem href="#l02" title='User' />
                            <NavItem href="#l03" title='Priciing' />
                            <NavItem href="#l04" title='Wizzard' />
                            <NavItem href="#l05" title='Help Center' />
                            <NavItem href="#l06" title='Invoice' />
                            <NavItem href="#l07" title='Meitenance' />
                            <NavItem href="#l08" title='Default' />
                            <NavItem href="#l09" title='Default' />
                        </NavItemDropdown>
                        <NavItem href="#l11" title='Chat' icon={<ChatIcon />} onClick={()=>setActive('Chat')} />
                        <NavItem href="#l1" title='Calendar' icon={<CalendarIcon />} onClick={() => setActive('Calendar')} />
                        <NavItem href="#l2" title='Email' icon={<EmailIcon />} onClick={() => setActive('Email')} />
                        <NavItem href="#l3" title='Tasks' icon={<TasksIcon />} onClick={() => setActive('Tasks')} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export {MyNavbar as Navbar}
