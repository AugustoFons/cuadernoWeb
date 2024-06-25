'use client'
import dynamic from 'next/dynamic';

const NoteViewer = dynamic(() => import('@/components/Editor'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full py-4">
      <div className="note">
      <NoteViewer/>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
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
    {/*                <input
                          type="text"
                          placeholder=""
                          required
                          className="relative -bottom-[8px] caret-blue700 outline-none text-2xl h-[26px] bg-transparent overflow-visible text-blue-700 w-full"
                          /> */}
                    </div>                  
                  ))
                }  
            </div>
        </section>
    </ div>
    </main>
    </>

  );
}
