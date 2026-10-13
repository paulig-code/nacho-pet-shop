import { Nav } from "../Nav/Nav"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Header.css"

export const Header = () => {
  return (
    <header className="header">
      <Link to={"/"} className="logo-link">
        <img src={logo} alt="Nacho Pet Shop" className="logo" />
      </Link>
      <Nav />
    </header>
  )
}