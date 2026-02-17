import AnimatedButtons from '@/components/ui/AnimatedButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <main className='py-60 relative h-auto bg-[url("/404/stars.png")] bg-center bg-cover'>
            <div className='flex justify-center items-center h-full mt-20 relative flex-col text-center gap-6'>
                {/* <div className='absolute -top-48 -right-64 w-1/2 h-full bg-[url("/404/Rocket.png")] bg-no-repeat'></div> */}
                <div className='flex items-center justify-center relative gap-32 md:gap-36'>
                    {/* <div className='absolute -top-72 left-72 w-1/2 h-full bg-[url("/404/tether.png")] bg-no-repeat'></div>
                    <div className='absolute -top-24 left-52 w-full h-full bg-[url("/404/spaceman.png")] bg-no-repeat'></div> */}
                    <Image src='/404/4-left.png' alt='404' width={200} height={500} />
                    <Image src='/404/xntric.png' alt='404' width={350} height={500} className='absolute md:-top-6 md:w-[350px] w-[200px] ' />
                    <Image src='/404/4-left.png' alt='404' width={200} height={500} />
                </div>
                <div className='flex flex-col gap-4 text-white'>
                    <span className='text-4xl'>OOPS!</span>
                    <p className='text-2xl'>Page not found</p>
                    <Link href='/'>
                        <AnimatedButtons buttonTitle='Go Back Home' variant='neon' />
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default NotFound