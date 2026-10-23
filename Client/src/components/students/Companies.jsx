import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <section className="bg-[#0F0F0F] py-20">

      <div className="max-w-7xl mx-auto " >

        <p className="text-center text-gray-400 text-lg leading-8 max-w-4xl mx-auto">

          Trusted by
          <span className="text-white font-semibold"> 1,000+ companies </span>
          around the world, our learning platform empowers students with
          industry-ready skills through practical courses, expert mentors,
          and real-world projects.

        </p>

        <div className="mt-14 flex flex-wrap justify-center items-center gap-12">

          <img
            src={assets.microsoft_logo}
            alt="Microsoft"
            className="h-8 opacity-60 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
          />

          <img
            src={assets.accenture_logo}
            alt="Accenture"
            className="h-8 opacity-60 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
          />

          <img
            src={assets.walmart_logo}
            alt="Walmart"
            className="h-8 opacity-60 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
          />

          <img
            src={assets.adobe_logo}
            alt="Adobe"
            className="h-8 opacity-60 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
          />

          <img
            src={assets.paypal_logo}
            alt="PayPal"
            className="h-8 opacity-60 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
          />

        </div>

      </div>

    </section>
  )
}

export default Companies