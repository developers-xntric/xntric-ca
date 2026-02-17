import React from 'react'
import Image from 'next/image';

const data = [
    "Multi global language",
    "Simplified booking process",
    "Mobile-First approach",
    "Immersive visual design",
    "Optimized performance and SEO"
];
export default function CaseStudySection4(props: { image1?: string; image2?: string; bigImage?: string; cardData?: string[] }) {
    return (
        <div className='w-full flex justify-center gap-20 py-20 flex-col items-center'>
            
             <div className='w-[75%] flex flex-col items-center gap-16'>
                <div className='flex flex-col justify-center items-center'>
                    {/* Shadow Heading */}
                    <div className='flex items-center gap-5'>
                        <div className="text-center text-white text-[15px] font-bold font-blauer leading-[38px]">Solutions</div>
                    </div>
                    {/* Heading */}
                    <div className="text-white text-3xl md:text-[70px] font-bold font-blauer md:leading-[102.60px]">We&apos;ve delivered!</div>
                </div>
                <div>
                    {/* Card */}
                    <div className="w-full relative flex flex-wrap gap-4 justify-center">
                        {(props.cardData || data).map((text, index) => (
                            <div key={index} className="relative rounded-3xl  hover:border-6 hover:border-dotted hover:border-primaryNeon hover:bg-primaryNeon">
                                {/* Card */}
                                <div className="lg:w-[370px]  md:w-[270px] md:h-[200px] xl:w-[300px] xl:h-[220px] 2xl:w-[345px] 2xl:h-[250px] p-[50px] lg:p-[70px] bg-gradient-to-b from-[#0b3c28] to-[#062219] hover:border-6 hover:border-dotted hover:border-primaryNeon flex flex-col justify-start items-center gap-10 transition-all duration-300 hover:opacity-35 rounded-3xl hover:bg-primaryNeon">
                                    <div className="text-center text-white text-xl md:text-2xl text-[16px] xl:text-2xl 2xl:text-2xl font-medium font-blauer md:leading-[37.50px] bg-opacity-100">
                                        {text}
                                    </div>
                                </div>

                                {/* Floating Circle */}
                                <div className="w-20 h-20 absolute left-[50%] transform -translate-x-1/2 top-[-40px]" >
                                    <div className="w-20 h-20 bg-black rounded-full border border-white/40 flex justify-center items-center">
                                        <Image src={"/Bize/check-icon.png"} alt='Check' width={100} height={100} className='w-[40%] h-[40%]' />
                                    </div>
                                    <div className="w-[30px] h-[30px] absolute left-[25.5px] top-[25px]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
           
            {/* Double Image */}
            {props.image1 && props.image2 && <div className='w-full md:flex-row flex-col flex gap-4'>
                <div className='md:w-1/2'>
                    <Image src={props.image1} alt='' width={1000} height={1000} className='lg:w-full max-w-[100%] mx-auto h-full' />
                </div>
                <div className='md:w-1/2'>
                    <Image src={props.image2} alt='' width={1000} height={1000} className='lg:w-full max-w-[100%] mx-auto h-full' />
                </div>
            </div>}

            {props.bigImage && <div className='w-full flex justify-center'>
                <Image src={props.bigImage} alt='None' width={1200} height={1200} className='object-cover' />
            </div>}
        </div>
    )
}

