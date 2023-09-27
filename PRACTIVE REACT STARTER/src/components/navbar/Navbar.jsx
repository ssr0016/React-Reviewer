import "./navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <h2>Logo</h2>
        </div>
        <ul className="navbar-items">
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar