import { ArrowRight, Network, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import orangePortrait from '../assets/silas-orange.jpg';
import Callout from '../components/Callout.jsx';
import PageShell from '../components/PageShell.jsx';

export default function About() {
  return (
    <PageShell eyebrow="GET TO KNOW YOUR CANDIDATE" title="MEET" accent="OSHOMA'H SILAS." lead="A Computer Science student with a strong interest in cybersecurity, networking, and building a more connected student community.">
      <section className="about section-light">
        <div className="container about-grid">
          <div className="about-photo-wrap">
            <img src={orangePortrait} alt="Oshoma'h Silas wearing an orange top" className="about-photo" />
            <div className="photo-stamp">MEET<br /><span>SILAS</span></div>
            <div className="photo-caption"><span className="caption-dot" /> Leadership · Service · Impact</div>
          </div>
          <div className="about-copy">
            <span className="section-kicker">WHY I'M CONTESTING</span>
            <h2>A leader in cybersecurity, networking <span>& beyond.</span></h2>
            <p>I'm Oshoma'h Silas, a Computer Science student with a strong interest in cybersecurity and networking. I'm aspiring to become Director of Software because I believe our student community should be more than a place to study Computer Science.</p>
            <p>It should be a place where we learn, build, create, collaborate, and turn our ideas into real projects — together.</p>
            <Link className="text-link" to="/vision">Explore my vision <ArrowRight size={17} /></Link>
          </div>
          <div className="about-points">
            <div className="about-point"><span><ShieldCheck /></span><div><strong>Cybersecurity</strong><small>Protecting systems and data</small></div></div>
            <div className="about-point"><span><Network /></span><div><strong>Networking</strong><small>Connecting people and ideas</small></div></div>
            <div className="about-point"><span><Users /></span><div><strong>Community</strong><small>Making room for every tech mind</small></div></div>
          </div>
        </div>
      </section>
      <Callout />
    </PageShell>
  );
}
