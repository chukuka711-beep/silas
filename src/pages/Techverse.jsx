import Callout from '../components/Callout.jsx';
import PageShell from '../components/PageShell.jsx';
import TechversePreview from '../components/TechversePreview.jsx';

export default function Techverse() {
  return (
    <PageShell eyebrow="EXPLORE THE POSSIBILITIES" title="EVERY DISCIPLINE." accent="ONE COMMUNITY." lead="Technology has many paths. Our student community can help students discover interests, share knowledge, and collaborate across them.">
      <TechversePreview />
      <Callout />
    </PageShell>
  );
}
