import { Magnifier } from './Icons'
import style from './SearchBar.module.css'


export const SearchBar = () => {
    return (
        // <div className={`d-none d-md-flex ${style.searchBar}`}> 
        <div className={` ${style.searchBar}`} >
            <input placeholder='Search...' />
            <button><Magnifier /></button>
        </div >
    )
}