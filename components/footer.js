import Link from "next/link";
import { footerLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand brand-footer">
            <span className="brand-mark">EC</span>
            <span>
              <strong>EduAnchor</strong>
              <small>Affordable CRM for education teams</small>
            </span>
          </Link>
          <p className="footer-copy">
            EduAnchor-style software helps education consultancies and coaching
            institutes centralize data, reduce manual follow-ups and deliver a
            better student journey.
          </p>
        </div>

        <div>
          <h4>Useful Links</h4>
          <div className="footer-links">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <div className="footer-contact">
            <p>info@eductrl.com</p>
            <p>+91-9242137092</p>
            <p>Bengaluru, Karnataka, India</p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 SASH INFO SERVICES PVT LTD. All rights reserved.</p>
        <div className="footer-meta">
          <Link href="/pricing">Pricing</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
