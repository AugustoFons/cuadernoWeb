import NoteViewer from "@/components/Editor";

export default function Home() {
  return (
    <>
    <NoteViewer/>
        <main className="flex min-h-screen flex-col justify-between p-24">
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <section style={{display: 'flex', zIndex:1}}>
            <div className='anillado' style={{position: 'relative', flex:1}}>
              <img src={'/assets/anillados.png'} alt='' style={{height:'100%', backgroundColor:'#FADD99', zIndex:0}}/>
              <div className='cuaderno'></div>
            </div>
            <div className="hoja">
              <span className='encabezado'></span>
                {
                  Array(32).fill().map((_, i) => (
                    <div key={i} className='renglon content-end overflow-visible '>
                      <input
                          type="text"
                          placeholder=""
                          required
                          className="relative -bottom-[8px] caret-blue700 outline-none text-2xl h-[26px] bg-transparent overflow-visible text-blue-700 w-full"
                          />
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
