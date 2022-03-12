import { ReactComponent as GitIcon } from 'assets/img/gitIcon.svg'
import './style.css'

export default function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/SDAndreSantos"></a>
                    <div className="dsmovie-contact-container">
                        <GitIcon />
                        <p className="dsmovie-contact-link">/SDAndreSantos</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}