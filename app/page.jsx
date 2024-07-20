'use client'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../components/SpinnerFeed';
import Image from 'next/image';

const NoteViewer = dynamic(() => import('@/components/Editor'), {
  ssr: false
});

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3800); // Simula 2 segundos de carga

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
    {isLoading ? (
      <div className=' w-full flex justify-center'>
          <Loading />

      </div>
        )
        : (
      <main className="flex">
          <div className='bg-white w-[109px] h-[104px] z-50 rounded-full absolute -top-[-13px] border-2 border-black logo'>
            <Image 
            src='/assets/escc.png'
            width={440}
            height={242}
            alt="line"
            className="h-[62px] w-[99px] absolute top-6 left-[1px] "
            quality={100}
            />
            </div>
          <>
          <div className="note">
            <NoteViewer />
          </div>
      <div className='flex justify-start mt-6 w-full'>
        <section style={{display: 'flex', zIndex:1}}> 
            <div className='' style={{position: 'relative', flex:1}}>
              <div className='cuaderno'></div>
            </div>
            <div className='anillado' style={{position: 'relative', flex:1}}>
            <img src={'/assets/an.png'} alt='' style={{height:'100%', backgroundColor:'transparent', zIndex:0}}/>
            </div>
            <div className="hoja">
            <span className='encabezado'></span>
                {
                  Array(31).fill().map((_, i) => (
                    <div key={i} className='renglon content-end overflow-visible '>
                    </div>                  
                  ))
                }  
            </div>
        </section>
    </ div>
    </>
    </main>
    )}

    </>

  );
}
