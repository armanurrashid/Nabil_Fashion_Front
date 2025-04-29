import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import React from 'react'
import Facebook from 'svgs/facebook';
import logo from "images/Nabil Fashion.svg";
import { AiFillTikTok } from "react-icons/ai";

const FooterSection = () => {
  return (
    <div>
      <div className='bg-[#111926]'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  md:mx-10 mx-4 md:p-12 p-4">
          <div className='text-white p-5'>
            <h3 className='mb-4 font-semibold text-xl'>NABIL FASHION</h3>
           <div>
           {/* <img src={logo} className=" block w-full h-[40px]" alt="..." /> */}
           </div>

            <p className='mb-2'>Nabil Fashion offers stylish, high-quality clothing at affordable prices. Find your perfect look for every occasion.</p>
            <div>
              <p className='text-lg mb-2'>FOLLOW US:</p>
              <div className='flex gap-4'>
                {/* <Facebook /> */}
                {/* <div className="group">
                  <Facebook color="white" />
                  <style jsx>{`
          .group:hover svg {
            stroke: #1877F2;
          }
        `}</style>
                </div> */}
                <a href='https://www.facebook.com/shareemusium' target='_blank' rel='noopener noreferrer'>
                  <FaFacebook size={24} className='hover:text-blue-600 '/>
                </a>
                <a href='https://tiktok.com' target='_blank' rel='noopener noreferrer'>
                  <AiFillTikTok  size={24} className='hover:text-cyan-300'/>
                </a>
                <a href='https://wa.me/yourphonenumber' target='_blank' rel='noopener noreferrer'>
                  <FaWhatsapp size={24} className='hover:text-green-600 '/>
                </a>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                  <FaInstagram size={24} className='hover:text-[#fbad50]'/>
                </a>
                <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' >
                  <FaYoutube size={24} className='hover:text-red-600 '/>
                </a>
              </div>
            </div>
          </div>
          <div className='text-white p-5'>
            <h3 className='mb-4 font-semibold text-xl'>Contact Us</h3>
            <p className='mb-2'>House #8, Road # 14, <br />
              Dhanmondi, Dhaka-1209.</p>
            <p className='mb-2'>Email: shareemusium@gmail.com</p>
          </div>
          <div className='text-white items-cente r p-5'>
            <h3 className='mb-4 font-semibold text-xl'>Let Us Help You</h3>
            <p className='mb-2'>Terms & Conditions </p>
            <p className='mb-2'>Return & Refund Policy</p>
          </div>
          <div className='text-white items-cente r p-5'>
            <h3 className='mb-4 font-semibold text-xl'>Let Us Help You</h3>
            <p className='mb-2'>Terms & Conditions </p>
            <p className='mb-2'>Return & Refund Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection;