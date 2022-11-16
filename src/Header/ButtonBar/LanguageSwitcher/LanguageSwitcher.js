import Dropdown from 'react-bootstrap/Dropdown';
import buttonBarStyles from '../ButtonBar.module.css'
import styles from './LanguageSwitcher.module.css'

import { useState } from 'react'
import us from './flags/us.svg'
import gb from './flags/gb.svg'
import es from './flags/es.svg'
import fr from './flags/fr.svg'
import de from './flags/de.svg'
import cn from './flags/cn.svg'

export function LanguageSwitcher() {
    const [active, setActive] = useState('us')

    const MenuItem = ({ id, title, icon }) => {
        return <Dropdown.Item
            id={id}
            className={buttonBarStyles.menuItem}
            active={(active == id)}
            onClick={() => setActive(id)}
            href={"#/action-" + id}>
            <img src={icon} 
                className={`${buttonBarStyles.icon} ${styles.icon}`}/>
                {title}
        </Dropdown.Item>
    }



    return (
        <Dropdown>
            <Dropdown.Toggle 
                variant="success" 
                id="dropdown-basic" 
                className={`${buttonBarStyles.dropdownToggle} ${styles.dropdownToggle}`}
            >
                <img src={currLangIcon(active)} className={`${buttonBarStyles.icon} ${styles.icon}`} />
            </Dropdown.Toggle>

            <Dropdown.Menu className={buttonBarStyles.dropdownMenu} >
                <Dropdown.Header className={buttonBarStyles.menuHeader}>select language</Dropdown.Header>
                <MenuItem id='us' title='English (US)' icon={us} />
                <MenuItem id='gb' title='English (UK)' icon={gb} />
                <MenuItem id='es' title='Español' icon={es} />
                <MenuItem id='fr' title='Française' icon={fr} />
                <MenuItem id='de' title='Deutsch' icon={de} />
                <MenuItem id='cn' title='中文 (繁體)' icon={cn} />
                
            </Dropdown.Menu>
        </Dropdown>
    );
}

function currLangIcon(active){
   switch(active){
    case 'us': return us;
    case 'gb': return gb;
    case 'es': return es;
    case 'fr': return fr;
    case 'de': return de;
    case 'cn': return cn;
   }
}

