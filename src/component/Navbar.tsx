export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand active" href="/home">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/events" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Event
                        </a>                        
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/events">Create event</a></li>
                            <li><a className="dropdown-item" href="/events">My events</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-danger" href='/'>Log out</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}