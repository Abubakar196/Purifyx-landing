import PrivacyContent from '@/components/homepage/PagesComponent/PrivacyContent';
import React from 'react'

export const metadata = {
    title: 'Privacy Policy',
    description: 'privacy policy'
  };
  

const page = () => {
    return (
        <>
            <div className="  relative flex  justify-center ">
                {/* Navigation */}
                <div className="mt-16 xl:mt-40 w-full flex flex-col items-center max-w-[420px] sm:max-w-[600px] lg:max-w-[840px] 2xl:max-w-[1000px]">
                    <main className="mt-12 text-center  space-y-4 xl:space-y-6 px-[100px]">
                        <h1 className="max-w-[900px] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[100%] font-semibold tracking-[-0.02em] text-text-color text-center px-4 lg:px-0">
                            Privacy Policy
                        </h1>

                        <p className=" text-[16px]  text-text-color font-medium leading-[150%] text-center mt-4 sm:mt-6">
                            Effective Date: <span className='text-primary-500' >01/01/2025</span> 
                        </p>
                    </main>
                </div>

            </div>
            <PrivacyContent />
        </>
    )
}

export default page