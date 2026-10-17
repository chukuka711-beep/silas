import { Rocket, ShieldCheck, Users } from 'lucide-react';
import Callout from '../components/Callout.jsx';
import PageShell from '../components/PageShell.jsx';

export default function WhySilas() {
  return (
    <PageShell eyebrow="LEADERSHIP · SERVICE · IMPACT" title="WHY" accent="SILAS?" lead="Because a stronger software community starts with people who are willing to learn together, support one another, and make room for ideas.">
      <section className="section-light why-section">
        <div className="container">
          <div className="why-grid">
            <article><span className="why-icon"><ShieldCheck /></span><h2>Knows his focus.</h2><p>Silas brings a personal interest in cybersecurity and networking while respecting the depth of other computing disciplines.</p></article>
            <article><span className="why-icon"><Users /></span><h2>Values the team.</h2><p>Progress should not depend on one person knowing everything. It grows when people with different skills contribute together.</p></article>
            <article><span className="why-icon"><Rocket /></span><h2>Wants practical growth.</h2><p>The vision is to encourage hands-on learning, collaborative projects, beginner support, and work students can showcase.</p></article>
          </div>
          <div className="why-quote"><span>“</span><p>Our student community should be more than a place to study Computer Science. It should be a place where we build, create, collaborate, and turn our ideas into real projects.</p><strong>— Oshoma'h Silas</strong></div>
        </div>
      </section>
      <Callout />
    </PageShell>
  );
}
