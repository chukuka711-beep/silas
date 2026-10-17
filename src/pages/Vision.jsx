import { Check, Rocket, Sparkles } from 'lucide-react';
import Callout from '../components/Callout.jsx';
import PageShell from '../components/PageShell.jsx';

const missions = [
  'Encourage practical learning through software development sessions and hands-on projects.',
  'Promote teamwork by creating opportunities to collaborate on real projects.',
  'Support beginners and help them find their feet in software development.',
  'Encourage members to build projects they can showcase in their portfolios.',
  'Bridge the gap between practical and theoretical learning.',
];

const promises = [
  { n: '01', title: 'Learn by doing', desc: 'Support practical sessions that help students apply concepts.' },
  { n: '02', title: 'Build as a team', desc: 'Create more chances to work together across skill levels.' },
  { n: '03', title: 'Show your growth', desc: 'Encourage projects that students can demonstrate in portfolios.' },
];

export default function Vision() {
  return (
    <PageShell eyebrow="THE PLAN" title="FROM LEARNING" accent="TO BUILDING." lead="A practical, inclusive direction for a student community where every interested student can learn, contribute, and grow.">
      <section className="vision vision-page">
        <div className="vision-network" />
        <div className="container vision-grid">
          <div className="vision-block">
            <div className="vision-heading"><span className="vision-icon"><Sparkles /></span><div><span className="section-kicker">MY VISION</span><h2>An inclusive tech ecosystem for every student.</h2></div></div>
            <p>I envision a community where every interested student can learn, improve their technical skills, work on projects, and grow together — regardless of their current level of experience.</p>
          </div>
          <div className="mission-block">
            <div className="vision-heading"><span className="vision-icon"><Rocket /></span><div><span className="section-kicker">MY MISSION</span><h2>Make learning practical.</h2></div></div>
            <ul className="mission-list">{missions.map((mission) => <li key={mission}><Check />{mission}</li>)}</ul>
          </div>
          <div className="vision-mantra"><span>From</span><strong>learning</strong><span>to</span><strong>building.</strong><i /></div>
        </div>
      </section>
      <section className="section-light promise-section">
        <div className="container">
          <div className="section-heading"><span className="section-kicker">THE COMMITMENT</span><h2>Make room for <span>every learner.</span></h2><p>These are the priorities I want to help move forward with the student community.</p></div>
          <div className="promise-grid">
            {promises.map((promise) => <article className="promise-card" key={promise.n}><span>{promise.n}</span><h3>{promise.title}</h3><p>{promise.desc}</p></article>)}
          </div>
        </div>
      </section>
      <Callout />
    </PageShell>
  );
}
