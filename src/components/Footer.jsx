import { Link } from 'react-router-dom';
import { Network } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link className="brand" to="/">
          <span className="brand-mark"><Network size={18} /></span>
          <span><strong>SILAS ’26</strong><small>Edo State University</small></span>
        </Link>
        <p>LEARN <i>·</i> BUILD <i>·</i> COLLABORATE <i>·</i> GROW</p>
        <Link to="/vote" className="back-top">Vote Silas ↑</Link>
      </div>
    </footer>
  );
}
