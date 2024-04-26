import React from 'react';
import { Heading } from '..';

const Hero = () => {
  return (
    <section className="flex h-[90vh] w-full px-10 flex-col items-center justify-center bg-peacock">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full px-5 items-start justify-between">
          <span className="font-sans font-bold text-xl text-orangejulius mb-6">
            a case study
          </span>
          <span className="font-sans font-bold text-xl text-orangejulius mb-6">
            and
          </span>
          <span className="font-sans font-bold text-xl text-orangejulius mb-6">
            celebration
          </span>
        </div>
        <Heading level={1} text="mac &amp; cheese" />
      </div>
    </section>
  );
};
export default Hero;
