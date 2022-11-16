import buttonBarStyles from '../ButtonBar.module.css'
import Dropdown from 'react-bootstrap/Dropdown';



export function ExternalServices(){
    return (
        <Dropdown>
            <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className={`${buttonBarStyles.dropdownToggle}`}
            >
                <BtnIcon/>
            </Dropdown.Toggle>

            <Dropdown.Menu className={buttonBarStyles.dropdownMenu} >
                <Dropdown.Header className={buttonBarStyles.menuHeader}>apps & services</Dropdown.Header>
               hi

            </Dropdown.Menu>
        </Dropdown>
    );
}

function BtnIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={buttonBarStyles.icon} viewBox="0 0 16 16">
        <path d="M7.987 16a1.526 1.526 0 0 1-1.07-.448L.45 9.082a1.531 1.531 0 0 1 0-2.165L6.917.45a1.531 1.531 0 0 1 2.166 0l6.469 6.468A1.526 1.526 0 0 1 16 8.013a1.526 1.526 0 0 1-.448 1.07l-6.47 6.469A1.526 1.526 0 0 1 7.988 16zM7.639 1.17 4.766 4.044 8 7.278l3.234-3.234L8.361 1.17a.51.51 0 0 0-.722 0zM8.722 8l3.234 3.234 2.873-2.873c.2-.2.2-.523 0-.722l-2.873-2.873L8.722 8zM8 8.722l-3.234 3.234 2.873 2.873c.2.2.523.2.722 0l2.873-2.873L8 8.722zM7.278 8 4.044 4.766 1.17 7.639a.511.511 0 0 0 0 .722l2.874 2.873L7.278 8z" />
    </svg>
}