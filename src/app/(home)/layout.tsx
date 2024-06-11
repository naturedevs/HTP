'use client'
import dynamic from 'next/dynamic';

const HomeLayout = dynamic(() => import('./homeLayout'), { ssr: false });

export default function App({ children }: {children: React.ReactNode}) {
 return (    
    <div>
      <HomeLayout>
        {children}
      </HomeLayout>
    </div>
 );
}