export default function Footer() {
  return (
    <div>
      <div className="social-and-pay">
        <img 
        src='/socialmedia-and-pay.png' 
        alt="Social Media und Zahlungsmöglichkeiten" 
        width="938" 
        height="64" 
        
        />
      </div>
      <footer className="site-footer">
        <div className="footer-content">
          <a href="">Datenschutzerklärung</a>
          <a href="">AGB</a>
          <a href="">Newsletter</a>
          <a href="">Lieferung & Rücksendung</a>
          <a href="">Karriere</a>
          <a href="">Gutscheine</a>
          <a href="">Zahlungsmittel</a>
        </div>
        <div>&copy; Isabelle le Moult {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}
