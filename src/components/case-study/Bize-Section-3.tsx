import Image from 'next/image'
import React from 'react'
export default function CaseStudySection3(props: { image?: string; isBottom?: boolean; video?: string; image2?: string; video2?: string }) {
    return (
        !props.isBottom ? <div className='w-full flex flex-col items-center gap-16 mt-20'>
            {/* Heading */}
            <div className='flex flex-col items-center'>
                <div className="text-white text-center text-[40px] md:text-[120px] 2xl:text-[200px] font-normal font-blauer uppercase leading-none">Inner pages</div>
                <div className="lg:block hidden text-white text-[120px] 2xl:text-[200px] font-normal font-blauer uppercase leading-none">PAGES</div>
            </div>
            <div className='md:w-full lg:h-[1100px]'>
                <Image src={props.image!} alt="Bize4" width={1200} height={1200} className='w-full h-full md:object-cover' />
            </div>
        </div> : <div className='flex justify-center lg:flex-row flex-col mt-20 w-4/5 mx-auto gap-10'>
            <div className='lg:w-1/2'>
                {props.image && <Image src={props.image} alt="Bize4" width={1000} height={1000} className='w-full h-[650px] rounded-[28px]' />}
                {props.video2 ? <video
                    src={props.video2}
                    autoPlay
                    loop
                    muted
                    width={600}
                    height={500}
                    className={`w-full h-[650px] object-cover rounded-[28px]`}
                ></video> : null}
            </div>
            <div className='lg:w-1/2'>
                {props.video ? <video
                    src={props.video}
                    autoPlay
                    loop
                    muted
                    width={600}
                    height={500}
                    className={`w-full h-[650px] object-cover rounded-[28px]`}
                ></video> : null}
                {props.image2 &&
                    <Image src={props.image2} alt="Bize4" width={1000} height={1000} className='w-full h-[650px] rounded-[28px] object-cover' />
                }
            </div>
        </div>
    )
}
