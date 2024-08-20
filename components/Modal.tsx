import { ReactNode } from 'react';

interface Props {
  open: boolean;
  children: ReactNode;
}

export default function Modal({ open, children }: Props) {
  if (!open) {
    return null;
  }

  return (
    <div
      style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.5)', display: 'grid', placeItems: 'center' }}
    >
      <div style={{ background: 'white', height: 500, width: 500, borderRadius: 5, padding: 20 }}>{children}</div>
    </div>
  );
}
