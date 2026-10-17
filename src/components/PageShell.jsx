export default function PageShell({ eyebrow, title, accent, lead, children, compact = false }) {
  return (
    <>
      <section className={`page-hero ${compact ? 'compact' : ''}`}>
        <div className="page-hero-grid" />
        <div className="container page-hero-inner">
          <span className="eyebrow"><span className="pulse-dot" />{eyebrow}</span>
          <h1>{title}<br /><span>{accent}</span></h1>
          <p>{lead}</p>
        </div>
      </section>
      {children}
    </>
  );
}
