import styles from './Header.module.css'
import { SearchBar } from './SearchBar'
import { ButtonBar } from './ButtonBar/ButtonBar'

export const Header = () => {
    // return <header className='container-fluid d-flex py-6 mb-4'>
    return <header className={styles.header}>
        {/* <SearchBar /> */}
        <ButtonBar/>
    </header>
}