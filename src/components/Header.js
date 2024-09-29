import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
  return(
  <div className="header">
    <div className="logoContainer">
      <img src={HEADER_LOGO} className="imgLogo"/>
    </div>
    <div className="nav-items">
     <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
     </ul>
    </div>
  </div>
  )
}

export default Header;