import { Offcanvas } from 'react-bootstrap';
import styles from './OffcanvasHeader.module.css'
import { NotificationsMenu } from '../NotificationsMenu';


export function OffcanvasHeader({onCloseClick}){
    return (
        <Offcanvas.Header className={styles.header} >
            <Offcanvas.Title className={styles.title}>Notifications</Offcanvas.Title>
            {/* <CloseButton onClick={handleClose}/> */}
            <div className='d-flex align-items-center'>
                <NotificationsMenu />
                <button className={`btn-close ${styles.closeBtn}`} onClick={onCloseClick}></button>
            </div>
        </Offcanvas.Header>
    )
}