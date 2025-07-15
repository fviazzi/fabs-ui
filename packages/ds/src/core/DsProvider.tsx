
import { ReactNode } from 'react';
import '../tailwind.css';

interface DsProviderProps {
  children: ReactNode;
}

export const DsProvider = ({ children }: DsProviderProps) => {
  return <>{children}</>;
};
