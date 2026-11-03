
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <a href="#home" className="footer__logo">
          YOUSSEF
        </a>

        <p>
          © {new Date().getFullYear()} Youssef. All rights reserved.
        </p>

        <a href="#home" className="footer__top">
          Back to top ↑
        </a>

      </div>
    </footer>
  );
}
