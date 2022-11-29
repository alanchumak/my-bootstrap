import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import buttonBarStyles from '../ButtonBar.module.css'
import styles from './NotificationsBtn.module.css'
import { Notification } from './Notification';
import {data} from './data.js'
import { OffcanvasHeader } from './OffcanvasHeader'

export function NotificationsBtn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let notifications = data.map(item => 
        <Notification 
            key={item.id}
            name={item.name}
            subject={item.subject}
            content={item.content}
            timeAgo={item.timeAgo}
            avatarUrl={item.avatar}
        />)

    return (
        <>
            <button  onClick={handleShow}
                className={`${buttonBarStyles.dropdownToggle} position-relative`}
            >
                <BellIcon/>
                <span className={`${styles.badge}  translate-middle badge rounded-pill bg-danger`}>
                    20+
                    {/* <span class="visually-hidden">unread messages</span> */}
                </span>
            </button>

            <Offcanvas show={show} onHide={handleClose} placement='end' backdropClassName={styles.backdrop}>
                <OffcanvasHeader onCloseClick={handleClose}/>
                <Offcanvas.Body className='p-0'>
                    {notifications}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function BellIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={buttonBarStyles.icon} viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
    </svg>
}

function CloseButton({onClick}) {
    return <div className={styles.closeBtn} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.icon} viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    </div>
}