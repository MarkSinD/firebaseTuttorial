import { Link } from "react-router-dom";

const Header = () => {
  return(
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"/reset"}>Reset</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header;