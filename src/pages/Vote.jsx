import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import formalPortrait from '../assets/silas-formal.jpg';
import PageShell from '../components/PageShell.jsx';
import { shareUrl } from '../data/campaign.js';

export default function Vote() {
  return (
    <PageShell eyebrow="LEADERSHIP · SERVICE · IMPACT" title="YOUR VOTE." accent="OUR NEXT CHAPTER." lead="Support a more connected, practical, and collaborative student software community.">
      <section className="section-light vote-page">
        <div className="container vote-page-card">
          <div className="vote-page-photo"><img src={formalPortrait} alt="Oshoma'h Silas campaign portrait" /></div>
          <div className="vote-page-copy">
            <span className="section-kicker">EDO STATE UNIVERSITY</span>
            <h2>Vote <span>Oshoma'h Silas</span></h2>
            <h3>Director of Software</h3>
            <p>Different skills. Different interests. One community. Let's move from learning to building — together.</p>
            <a className="button button-lime" href={shareUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Share campaign on WhatsApp <ArrowRight size={17} /></a>
            <Link className="text-link" to="/vision">Read the vision <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
