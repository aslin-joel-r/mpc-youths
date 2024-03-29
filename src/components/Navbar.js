import {  Link , Outlet } from "react-router-dom";

function Navbar(){
  const width={
    width:'80px',
  }
    return (
                
<header>

<nav  className="navbar navbar-expand-sm bg-light justify-content-center">

    <ul className="nav nav-pills"  role="tablist">
      <li className="nav-item">
        <a className="navbar-brand logo" href="javascript:void(0)">
          <img src="favicon.jpg" alt="Logo" style={width} className="rounded-pill" />
        </a>
      </li>
      <li className="nav-item">
        
        <Link className="nav-link" id="link" data-bs-toggle="pill"  to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" id="link" data-bs-toggle="pill"  to="/missions">Missions</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" id="link" data-bs-toggle="pill"  to="/points">Points</Link>
      </li>
    <li className="nav-item">
    <Link className="nav-link" id="link" data-bs-toggle="pill"  to="/events">Events</Link>
      </li>

    </ul>
    
</nav>
<Outlet />
</header>
       
    )
}


export default Navbar;
