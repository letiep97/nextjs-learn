import { LayoutProps } from '@/models';
import { useEffect } from 'react';

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('mounting');
    return () => {
      console.log('un-mounting');
    };
  }, []);

  return (
    <div>
      <h1>Main layout</h1>
      {children}
    </div>
  );
}
