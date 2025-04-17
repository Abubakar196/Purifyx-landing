
import ContactSection from '@/components/homepage/ContactPageForm'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="  relative flex  justify-center ">
                {/* Navigation */}
                {/* <div className="absolute inset-0 h-[calc(100%+160px)] w-full bg-gradient-to-t from-[#6938EF]  via-transparent to-transparent border-b -z-10"></div> */}
                <div className="mt-16 xl:mt-40 w-full flex flex-col items-center max-w-[420px] sm:max-w-[600px] lg:max-w-[840px] 2xl:max-w-[1221px]">
                    <main className="mt-12 text-center space-y-4 xl:space-y-6 px-[100px]">
                        <h1 className="max-w-[900px] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[100%] font-semibold tracking-[-0.02em] text-text-color text-center px-4 lg:px-0">
                        Contact our Team
                        </h1>

                        <p className=" text-[16px]  text-text-color font-medium leading-[150%] text-center mt-4 sm:mt-6">
                        We are here to help you. Our friendly support team is here for you 24/7
                        </p>
                        {/* <div className='space-x-2'>
                            <button className='px-8 py-3 border rounded-md'>
                                Book a Call
                            </button>
                            <button className='px-8 py-3 border rounded-md bg-blue-500 text-white'>
                                Get in Touch
                            </button>
                        </div> */}
                    </main>
                </div>

            </div>
            <div>
                <ContactSection />
            </div>
        </>
    )
}

export default page