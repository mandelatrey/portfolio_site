import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, feedback } from '@/data'


const Clients = () => {
  return (
    <div className="py-20" id="feedback">
      <h1 className="heading">
        Feedback from <span className="text-purple"> past clients </span>
      </h1>

      <div className="flex flex-col items-center justify-center max-lg:mt-10 py-10">
          <InfiniteMovingCards
            items={feedback}
            direction="right"
            speed="slow"
          />

          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mx-lg:mt-10'>
            {companies.map(({id,img, name, nameImg}) => (
              <div key={id} className='flex md:max-w-60 max-w-32 gap-2 py-8'>
                <img src={img} alt={name} className='md:w-10 w-5'/>
                <img src={nameImg} alt={name} className='md:w-24 w-20'/>  
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Clients