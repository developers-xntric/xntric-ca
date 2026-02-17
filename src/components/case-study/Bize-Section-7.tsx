import React from 'react'
import Image from 'next/image'
import AnimatedButtons from '../ui/AnimatedButton'
import Link from 'next/link'

export default function CaseStudySection7() {
    return (
        <div className='w-full flex flex-col items-center justify-center mb-10'>
            <div className='w-[90%] flex md:flex-row flex-col justify-between md:items-center'>
                <div className="text-white text-3xl sm:text-[45px] md:text-[60px] lg:text-[76px] font-bold font-blauer leading-[102.60px]">Featured work</div>
                <Link href="/our-work">
                    <AnimatedButtons buttonTitle='view all projects' variant='neon'  />
                </Link>
            </div>

            <div className='flex border-t border-b border-white/50 mt-4'>
                {/* Card 1 */}
                <div className="w-full overflow-hidden md:w-1/2 border-t border-b border-r border-white/50 font-blauer">
                    <div className="relative h-[260px] 2xl:h-[340px]">
                        <Image
                            src="/Bize/image7.png"
                            alt="Builder Renderings"
                            width={600}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="py-8 px-4 md:px-14">
                        <p className="text-sm uppercase text-white mb-2">E-commerce</p>
                        <h2 className="text-2xl font-bold mb-4 text-white">Builder renderings</h2>
                        <p className="text-white">
                            Builder renderings is a company of 3D visualization, devoted solely to the real estate market.
                            They help customers feel attached to their future homes before the construction even starts,
                            saving costs for alterations and remodeling.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="md:block hidden overflow-hidden w-1/2 border-t border-b border-l border-white/50 font-blauer">
                    <div className="relative h-[260px] 2xl:h-[340px]">
                        <Image
                            src="/Bize/image8.png"
                            alt="Rathskellers"
                            className="w-full object-cover"
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className="py-8 px-14">
                        <p className="text-sm uppercase text-white mb-2">E-Commerce</p>
                        <h2 className="text-2xl font-bold mb-4 text-white">Rathskellers</h2>
                        <p className="text-white">
                            Rathskellers is a family furniture makers brand, rooted back in the 50s. Combining traditional
                            and innovative approaches, the company creates tables of exceptional quality to last decades
                            for good friends, family, and games.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


