import Image from "next/image"

const SpinnerFeed = () => {
  return (
        <div className="w-full h-[90vh] mt-8 flex justify-center">
            <div>
            <Image 
            src='/assets/escc.png'
            width={440}
            height={242}
            alt="line"
            className="h-[242px] w-[440px] loading"
            style={{zIndex: '100'}}
            />
            </div>
        </div>    
    )
}

export default SpinnerFeed