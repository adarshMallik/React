import Logo from '../../img/Logo.jpg'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={Logo} alt="AchieversIt"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to="/" className="nav-link active" aria-current="page">
                Home
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link">
                About
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/service" className="nav-link">
                Services
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/client" className="nav-link">
                Clients
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/blog" className="nav-link">
                Blogs
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className="nav-link">
                Contacts
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header