import { Navbar } from './Navbar'
import { Header } from './Header'
import styles from './App.module.css'

export const App = () => {
  return <>
    <Navbar/>
      <main className={styles.main}>
        <Header/>
    </main>
  </>
}
