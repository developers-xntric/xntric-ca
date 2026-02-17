import BlogHeader from '@/components/blog/blog-header'
import React from 'react'

const TermsAndConditions = () => {
    return (
        <main>
            <div
                className="w-full h-[70vh] lg:bg-cover bg-top bg-no-repeat relative"

            >
                {/* Content */}
                <BlogHeader
                    description=""
                    title="Terms and Conditions"
                    videoSrc="/Blog/hero-video.webm"
                />

            </div>
            <div className='lg:max-w-[92%] max-w-[96%] mx-auto pb-20'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-6 text-white'>
                        <h2 className='text-3xl font-bold'>Welcome to Xntric</h2>
                        <p className='lg:text-xl'>Accessing or using our website indicates that you have read, understood, and agreed to the following terms and conditions. These terms control how you use our website and Xntric&apos;s offerings.</p>
                    </div>
                    <div className='flex flex-col gap-6 text-white'>
                        <h2 className='text-3xl font-bold'>General Use of the Website</h2>
                        <p className='lg:text-xl'>This website&lsquo;s content is for your personal use only and for general knowledge. Xntric does not guarantee the completeness, dependability, or correctness of the material even though we aim to provide correct and current information. You undertake to use the website solely for authorized reasons and in a way that does not limit, restrict, or prevent the use and enjoyment of this site by any third person. Legal claims might result from illegal use of this website or material, including intellectual property infringement but not limited to those.</p>
                    </div>
                    <div className='flex flex-col gap-6 text-white'>
                        <h2 className='text-3xl font-bold'>Intellectual Property Rights</h2>
                        <p className='lg:text-xl'>Copyright, trademark, and other relevant laws protect all of the items on this website—text, graphics, logos, pictures, and software—that belong to Xntric or its licensors. Without first written permission from Xntric, you may not duplicate, distribute, or otherwise use any of the material. Any illegal use of our intellectual property is totally forbidden and might lead to legal action.</p>
                    </div>
                    <div className='flex flex-col gap-6 text-white'>
                        <h2 className='text-3xl font-bold'>Third-Party Links</h2>
                        <p className='lg:text-xl'>For your convenience or to provide more information, our website could include links to other websites. These links do not indicate our support of the goods, services, or information these websites provide. Xntric takes no responsibility for the content, privacy policies, or practices of such websites and has no control over them. You run some danger while accessing such outside URLs.</p>
                    </div>
                    <div className='flex flex-col gap-6 text-white'>
                        <h2 className='text-3xl font-bold'>Limitation of Liability</h2>
                        <p className='lg:text-xl'>Xntric is not responsible for any direct, indirect, incidental, or consequential damages resulting from your use of our website, even when we aim to guarantee that it runs safely and without faults. This covers loss of data, business disruption, or other problems brought on by technological faults, viruses, or server downtime but is not limited to these. Your usage of the website exposes you personally, hence we highly advise using the necessary security precautions when surfing the internet.</p>
                    </div>
                    <div className='flex flex-col gap-6 text-white'>
                        <h2 className='text-3xl font-bold'>Changes to Terms</h2>
                        <p className='lg:text-xl'>Xntric retains the right to change these terms and conditions at any moment without first notification. This page will show updates; your job is to routinely evaluate the terms. Using the website consistently after revisions indicates your acceptance of the revised terms.</p>
                    </div>
                    <div className='flex flex-col gap-6 text-white'>
                        <h2 className='text-3xl font-bold'>Governing Law</h2>
                        <p className='lg:text-xl'>These terms and conditions are controlled by and interpreted in line with the laws. Any conflicts resulting from or in relation to your use of this website will be subject to the exclusive jurisdiction of the courts in this area.</p>
                    </div>
                    <div className='flex flex-col gap-6 text-white'>
                        <h2 className='text-3xl font-bold'>Contact Information</h2>
                        <p className='lg:text-xl'>Please get in touch with us at any inquiries or worries about these Terms & Conditions.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TermsAndConditions