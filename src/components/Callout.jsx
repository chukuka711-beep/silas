import { ArrowRight, MessageCircle, Network } from 'lucide-react';
import { shareUrl } from '../data/campaign.js';

export default function Callout() {
  return (
    <section className="vote-section">
      <div className="vote-grid" />
      <div className="container vote-inner">
        <div className="vote-terminal">
          <span className="terminal-dots"><i /><i /><i /></span>
          <code><span>&gt;</span> build --future together<br /><span>&gt;</span> connect --students<br /><span>&gt;</span> status: <b>stronger together</b><span className="cursor">_</span></code>
        </div>
        <div className="vote-copy">
          <span className="section-kicker">THE FUTURE IS COLLABORATIVE</span>
          <h2>VOTE <span>SILAS</span></h2>
          <h3>FOR DIRECTOR OF SOFTWARE</h3>
          <p>Together, let's move from learning to building.</p>
          <a className="button button-lime" href={shareUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Share on WhatsApp <ArrowRight size={17} />
          </a>
        </div>
        <div className="vote-side">
          <div className="brand-mark large"><Network size={28} /></div>
          <strong>SILAS ’26</strong>
          <small>Edo State University</small>
          <p>A stronger student community<br /><span>is possible.</span></p>
        </div>
      </div>
    </section>
  );
}
