import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5 " id="contact">
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-[45vw]">
          Ready to take <span className="text-purple">your </span> dreams to the
          next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let&apos;s craft you something that&apos;s
          truly magical
        </p>
        <a href="mailto:mandelatrevor@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2024 Mandela Trevor
        </p>
        <div className="flex md:gap-3 gap-6 items-center">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer 
            flex justify-center items-center backdrop-filter backfrop-blur-lg 
            saturate-100 bg-opacity-75 bg-black-200 rounded-lg border  
            border-black-300"
            >
              <img src={profile.img} alt="icon" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer