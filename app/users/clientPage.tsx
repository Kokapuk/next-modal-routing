'use client';

import Modal from '@/components/Modal/Index';
import { User } from '@/types/user';
import styles from './clientPage.module.css';

interface Props {
  users: User[];
}

export default function ClientUsers({ users }: Props) {
  return (
    <>
      <div className={styles.list}>
        {users.map((i) => (
          <button key={i.id}>
            View <strong>{i.name}</strong> details
          </button>
        ))}
      </div>
      <Modal open={false} onClose={() => {}} title={`Details`}>
        <h1>Test</h1>
      </Modal>
    </>
  );
}
