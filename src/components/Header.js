import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import {HashLink} from 'react-router-hash-link'

 const Header = () => {
    
    return (
        <header>
            <nav>
                <ul>
                    <div className="logo">
                        <h3>
                            <Link to="/">
                                Abdelrahman <br></br>
                                Abdelhakim
                            </Link>
                        </h3>
                    </div>
                    <div className="nav-links">
                    <li>
                            <Link to="/" className="link">
                               Home
                             </Link>
                        </li>
                        <li>
                            <HashLink smooth to="/#projects" className="link">
                               Projects
                             </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/#contact" className="link">
                               Contact
                             </HashLink>
                        </li>

                    </div>
                </ul>
            </nav>
            
        </header>
    )
}


export default Header;