import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <p>🐾 Nacho Pet Shop &copy; {new Date().getFullYear()}</p>
      <p className="footer-sub">Todo para tu mascota con amor</p>
    </footer>
  )
}