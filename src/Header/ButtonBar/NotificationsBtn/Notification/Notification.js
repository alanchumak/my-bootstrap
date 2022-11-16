import styles from './Notification.module.css'

export function Notification({ name, subject, content, timeAgo, avatarUrl }) {
    let avatar = avatarUrl ? <Avatar src={avatarUrl}/> : <EmptyAvatar name={name}/>
        
    return <div className={styles.notif}>
        <div>{avatar}</div>
        <div>
            <div className='d-flex justify-content-between'>
                <span className={styles.name}>{name}</span>
                <span className={styles.timeAgo}>{timeAgo}</span>
            </div>
            <div className={styles.subject}>{subject}</div>
            <div className={styles.content}>{content}</div>
        </div>
    </div>
}


function Avatar({src}){
    return <img src={src} className={styles.avatar} />
}

function EmptyAvatar({ name }) {
    return <div className={styles.emptyAvatar}>
        {name[0].toUpperCase()}
    </div>
}