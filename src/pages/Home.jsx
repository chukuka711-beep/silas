import { ArrowDown, ArrowRight, BookOpen, Check, Code2, GraduationCap, Rocket, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import formalPortrait from '../assets/silas-formal.jpg';
import Callout from '../components/Callout.jsx';
import TechversePreview from '../components/TechversePreview.jsx';

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-grid" /><div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow"><span className="pulse-dot" />DIRECTOR OF SOFTWARE · EDO STATE UNIVERSITY</span>
            <h1>ONE COMMUNITY.<br /><span>EVERY TECH MIND.</span></h1>
            <p className="hero-lead">Different skills. Different interests. One community.</p>
            <p className="hero-desc">Let's create an environment where students learn from one another, collaborate across disciplines, and turn knowledge into real projects.</p>
            <div className="hero-actions">
              <Link className="button button-lime" to="/vote"><Check size={18} /> Vote for Silas <ArrowRight size={17} /></Link>
              <Link className="button button-outline" to="/vision">Explore the vision <ArrowDown size={16} /></Link>
            </div>
            <div className="hero-values"><span><GraduationCap /> Learn</span><span><Code2 /> Build</span><span><Users /> Collaborate</span><span><Rocket /> Grow</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-halo" /><div className="security-orbit orbit-one" /><div className="security-orbit orbit-two" />
            <div className="floating-lock"><ShieldCheck size={29} /><span>SECURE BY DESIGN</span></div>
            <img className="hero-portrait" src={formalPortrait} alt="Oshoma'h Silas in formal campaign attire" />
            <div className="candidate-tag"><span>YOUR CANDIDATE</span><strong>Oshoma'h<br />Silas<span className="lime-dot">.</span></strong><small>Director of Software</small></div>
            <div className="quote-card"><span>“</span><p>Technology works best when people work together.</p></div>
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>
      <section className="home-intro section-light">
        <div className="container home-intro-inner">
          <div><span className="section-kicker">THE IDEA IS SIMPLE</span><h2>From learning <span>to building.</span></h2></div>
          <p>Our student community can be more than a place to study Computer Science. It can be a place where curious students find support, share skills, and work together on ideas that matter.</p>
          <Link className="text-link" to="/about">Meet Silas <ArrowRight size={17} /></Link>
        </div>
      </section>
      <section className="home-pillars">
        <div className="container">
          <div className="section-heading"><span className="section-kicker">WHAT WE CAN GROW TOGETHER</span><h2>Skills become stronger <span>when shared.</span></h2></div>
          <div className="pillar-grid">
            {[
              { icon: BookOpen, title: 'Practical learning', desc: 'Make space for hands-on sessions and learning by doing.' },
              { icon: Users, title: 'Student collaboration', desc: 'Bring students together to share ideas and build as a team.' },
              { icon: Rocket, title: 'Projects with purpose', desc: 'Encourage members to create work they can learn from and showcase.' },
            ].map(({ icon: Icon, title, desc }) => (
              <article className="pillar-card" key={title}><span className="pillar-icon"><Icon /></span><h3>{title}</h3><p>{desc}</p></article>
            ))}
          </div>
          <div className="center-action"><Link className="button button-lime" to="/vision">Explore the full vision <ArrowRight size={17} /></Link></div>
        </div>
      </section>
      <TechversePreview />
      <Callout />
    </>
  );
}
