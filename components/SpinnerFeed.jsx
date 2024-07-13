import Image from "next/image"

const SpinnerFeed = () => {
  return (
        <div className="w-full h-[70vh] flex justify-center items-center pb-[150px] sm:pb-[50px]">
            <div>
            <Image 
            src='/assets/escc.png'
            width={440}
            height={242}
            alt="line"
            className="sm:h-[242px] sm:w-[460px] w-[280px] loading "
            style={{zIndex: '100'}}
            quality={100}
            />
            </div>
        </div>    
    )
}

export default SpinnerFeed