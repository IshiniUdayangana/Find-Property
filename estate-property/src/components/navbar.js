import "./style.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faNoteSticky} from '@fortawesome/free-regular-svg-icons'
import { useState } from "react"


export default function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/home" className="site-name">
            <div className="site_logo">
                <img src="/images/logo.png" alt="Site Logo" className="logo" />
            </div>
                HELLO HOME
            </Link>

            <ul>
                <CustomLink to="/">Home</CustomLink>
                <Dropdown label="Properties">
                    <ul className="dropdown-menu">
                        <DropdownOption to="/properties/house">
                            <div className="dropdown-option-div">Houses</div>
                        </DropdownOption>
                        <DropdownOption to="/properties/flat">
                            <div className="dropdown-option-div">Flats</div>
                        </DropdownOption>
                        <DropdownOption to="/properties/apartment">
                            <div className="dropdown-option-div">Apartments</div>
                        </DropdownOption>
                    </ul>
                </Dropdown>
                
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact us</CustomLink>
                {/* <CustomLink><FontAwesomeIcon icon={faNoteSticky} /></CustomLink> */}
                <CustomLink to="/favourites"><FontAwesomeIcon icon={faHeart} className="heart-icon"/></CustomLink>
            </ul>

        </nav>
    ) 
}

function CustomLink({to, children}){
    const resolvedPath =  useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    );
}

function Dropdown({to, label, children}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedPath.pathname, end:false});
    const [open, setOpen] = useState(false);

    return(
        //to open the drop down when clicking a nav link and to close to by clicking on the nav link itself or elsewhere
        <li 
        className = {open ? "active" : ""} 
        onClick={() => setOpen(!open)} 
        > 
        <Link>
        <span className="dropdown-label">{label}</span>
        </Link>
            
        {open && children}
        </li>
    );
}

function DropdownOption({to, children}){
    return (
        <li>
            <Link to={to} className="dropdown-option">{children}</Link>
        </li>
    )
    
}