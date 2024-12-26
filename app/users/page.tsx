import apiClient from '@/api/apiClient';
import { User } from '@/types/user';
import ClientUsers from './clientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
};

export default async function Users() {
  const users = await apiClient.get<User[]>(`/users`, { p: 1, l: 20 });

  return <ClientUsers users={users} />;
}
