import { ThemeSwitcher } from './ThemeSwitcher'
import { LanguageSwitcher } from './LanguageSwitcher'
import { NotificationsBtn } from './NotificationsBtn'
import style from './ButtonBar.module.css'

export function ButtonBar() {
    return(
        <div className='d-flex justify-self-end'>
            <ThemeSwitcher/>
            <div className={style.separator}></div>
            <LanguageSwitcher/>
            <div className={style.separator}></div>
            <NotificationsBtn />
        </div>
    )
}

