import { useState } from 'react';
import { Check } from 'lucide-react';

export default function FloatingWasteBin() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`floating-bin-wrap ${open ? 'bin-open' : ''}`}>
      {open && (
        <div className="bin-note">
          <strong>Vote once. Vote right.</strong>
          <span>Vote Silas for Director of Software.</span>
        </div>
      )}
      <button
        className="floating-waste-bin"
        onClick={() => setOpen(!open)}
        aria-label="Open Vote Silas campaign reminder"
        aria-expanded={open}
      >
        <span className="bin-icon"><Check size={22} /></span>
        <span className="bin-label">Vote Silas</span>
      </button>
    </div>
  );
}
