import { useState } from 'react';
import { ArrowRight, BookOpen, ChevronRight, Network, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { disciplines } from '../data/campaign.js';

export default function TechversePreview() {
  const [active, setActive] = useState(null);

  return (
    <section className="techverse section-light" id="techverse">
      <div className="container">
        <div className="techverse-heading">
          <div>
            <span className="section-kicker">THE TECHVERSE</span>
            <h2>Every discipline. <span>One community.</span></h2>
            <p>Whether you're into cybersecurity, networking, software, AI, or another tech field — you have a place here.</p>
          </div>
          <div className="techverse-note"><Network size={19} /><span>Different paths.<br /><strong>Shared progress.</strong></span></div>
        </div>
        <div className="discipline-grid">
          {disciplines.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                className={`discipline-card ${active === index ? 'selected' : ''}`}
                onClick={() => setActive(active === index ? null : index)}
                aria-expanded={active === index}
              >
                <span className="discipline-icon"><Icon /></span>
                <strong>{item.name}</strong>
                <small>{item.sub}</small>
                <span className="card-arrow"><ChevronRight size={16} /></span>
              </button>
            );
          })}
        </div>
        {active !== null && (
          <div className="discipline-detail">
            <span className="detail-spark"><Sparkles size={18} /></span>
            <div><strong>{disciplines[active].name}</strong><p>{disciplines[active].detail}</p></div>
            <button onClick={() => setActive(null)} aria-label="Close detail"><X size={18} /></button>
          </div>
        )}
        <div className="techverse-bottom">
          <div className="bottom-icon"><BookOpen /></div>
          <div>
            <strong>Your field isn't listed?</strong>
            <p>There's room for you, too. Our community grows when every curious mind has a place to contribute.</p>
          </div>
          <Link to="/vote" className="button button-dark">Be part of it <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
