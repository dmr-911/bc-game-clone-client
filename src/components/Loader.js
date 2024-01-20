import React from 'react'
import LoadingImage from "@/data/images/d1.png"

const Loader = ({setLoading}) => {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <div className='relative h-60 w-60 cover-img'>
                <img src={LoadingImage.src} className='h-full w-full' objectFit='cover' alt='loader image' />
                <button onClick={()=>{
                    setLoading(false)
                }} className='login-button absolute bottom-4 left-0 right-0 mx-auto inline rounded-md w-[75%] font-bold transition-all duration-150'>Claim Bonus 100 USDT</button>
            </div>
        </div>
    )
}

export default Loader