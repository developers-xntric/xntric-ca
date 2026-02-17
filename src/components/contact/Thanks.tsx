/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import AnimatedButtons from '@/components/ui/AnimatedButton'
import Image from 'next/image'

const Thanks = ({ setIsSubmitted }: any) => {
    return (
        <div className='relative max-w-[90%] lg:w-full mx-auto'>
            <Image
                src="/contact.png"
                alt="Thank you"
                width={800}
                height={800}
                className='absolute -top-40 left-10  object-contain'
            />
            <div>
                <h3 className='text-4xl lg:text-7xl text-white'><span className='text-[#3BE29A]'>Thank you</span> for Contacting Us.</h3>
                <p className='text-white max-w-[70%] mt-5'>We have received your message and will contact you shortly to follow up. If you would like to speak to someone immediately feel free to call.</p>
            </div>
            <div className="flex mt-8 justify-start" onClick={() => setIsSubmitted(false)}>
                <AnimatedButtons buttonTitle="Let’s Connect" variant="neon" />
            </div>
        </div>
    )
}

export default Thanks