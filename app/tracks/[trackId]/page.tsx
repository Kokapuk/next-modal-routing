'use client';

import Modal from '@/components/Modal';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  params: { trackId: string };
  searchParams: { fromDetails?: boolean };
}

export default function TrackPage({ params, searchParams }: Props) {
  const pathname = usePathname();

  const openModal = () => {
    window.history.replaceState(null, '', `/tracks/${params.trackId}/details`);
  };

  const closeModal = () => {
    window.history.replaceState(null, '', `/tracks/${params.trackId}`);
  };

  useEffect(() => {
    if (!searchParams.fromDetails) {
      return;
    }

    openModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Link href="/">{'<---'}</Link>
      <h1>Track {params.trackId}</h1>
      <button onClick={openModal}>Open Details</button>

      <Modal open={pathname.endsWith('/details')}>
        <p>Details for Track {params.trackId}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
