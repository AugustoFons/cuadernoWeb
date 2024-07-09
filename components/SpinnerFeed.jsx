import Image from "next/image"

const SpinnerFeed = () => {
  return (
        <div className="w-full h-[90vh] flex justify-center items-center">
            <div>
            <Image 
            src='/assets/escc.png'
            width={440}
            height={242}
            alt="line"
            className="sm:h-[242px] sm:w-[460px] sm:mb-[150px] mb-[90px] w-[300px] loading "
            style={{zIndex: '100'}}
            />
            </div>
        </div>    
    )
}

export default SpinnerFeed