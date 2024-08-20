'use client';

import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  params: { trackId: string };
}

export default function DetailsModal({ params }: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push(`/tracks/${params.trackId}?fromDetails=true`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal open={true}>
      <p>Details for Track {params.trackId}</p>
      <button onClick={() => router.push(`/tracks/${params.trackId}`)}>Close</button>
    </Modal>
  );
}
