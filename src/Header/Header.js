import styles from './Header.module.css'
import { SearchBar } from './SearchBar'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
    // return <header className='container-fluid d-flex py-6 mb-4'>
    return <header className={styles.header}>
        <SearchBar />

        <ThemeSwitcher/>
    </header>
}