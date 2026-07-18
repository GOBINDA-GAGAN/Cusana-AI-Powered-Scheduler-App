import React from 'react'
import Navbar from '../components/common/Navbar'
import SideGrid from '../components/ui/SideGrid'
import Hero from '../components/landing/Hero'
import Footer from '../components/common/Footer'
import FAQ from '../components/landing/Faq'
import Pricing from '../components/landing/Pricing'
import Testimonials from '../components/landing/Testimonials'
import Stats from '../components/landing/Stats'

const Homepage = () => {
    return (

        <div className="min-h-screen bg-background">
            <SideGrid />

            <header className="sticky top-0 z-50 w-full">
                <div className="mx-auto max-w-7xl">
                    <Navbar />
                </div>
                <div className='border-border relative  border z-100'></div>
            </header>

            <div className='mx-auto max-w-7xl'>
                <Hero />
            </div>
            <div className='relative'>
                <Testimonials />
            </div>
            <div className='z-100 mx-auto max-w-7xl'>
                <Stats />
            </div>


            <div className='border-border relative  border '></div>
            <div className='z-100 mx-auto max-w-7xl'>
                <Pricing />
            </div>
            <div className='border-border relative  border z-100'></div>

            <div className='mx-auto max-w-7xl'>
                <FAQ />
            </div>


            <div>
                <Footer />
            </div>



        </div>


    )
}

export default Homepage