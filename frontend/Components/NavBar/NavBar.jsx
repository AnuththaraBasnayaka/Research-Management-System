
const NavBar = props => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-4">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">QUICK LINKS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">Student</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">Supervisor</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">Co-Suppervisor</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">Panel Member</a>
            </li>
            
        </ul>
        
        </div>
    </div>
    </nav>
);
export default NavBar;