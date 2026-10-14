import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div>
        <p>🐾 Nacho Pet Shop &copy; {new Date().getFullYear()}</p>
        <p className="footer-sub">Todo para tu mascota con amor</p>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <img src="/img/whatsapp.png" alt="WhatsApp" className="footer-icon" />
          </li>
          <li>
            <img src="/img/instagram.png" alt="Instagram" className="footer-icon" />
          </li>
        </ul>
      </nav>
    </footer>
  );
};