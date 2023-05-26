import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Clearer Windows
        </Link>


        <div className="dropdown d-flex justify-content-end">

          

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link custom-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link custom-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link custom-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/get-a-quote" className="nav-link custom-link">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

        


          <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
          >
            
          <span className="navbar-toggler-icon"></span>
          </button>
          <ul className=" navbar-toggler dropdown-menu text-reset fs-6 dropdown-menu-end p-1">
            <li className="dropdown-item text-center p-3 text-reset">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="dropdown-item text-center p-3 text-reset">
              <Link to="/about-us" className="nav-link">
                About
              </Link>
            </li>
            <li className="dropdown-item text-center p-3 text-reset">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="dropdown-item text-center p-3 text-reset">
              <Link to="/get-a-quote" className="nav-link">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;