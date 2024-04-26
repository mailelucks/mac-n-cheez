import React from 'react';

interface Heading {
  level: number;
  text: string;
}

const Heading = ({ level, text }: Heading) => {
  const globalStyles = ['font-black text-cheddar'];

  let CompiledHeading;

  switch (level) {
    case 1:
      CompiledHeading = (
        <h1 className={globalStyles + ' text-5xl md:text-7xl lg:text-9xl'}>
          {text}
        </h1>
      );
      break;
    case 2:
      CompiledHeading = (
        <h2 className={globalStyles + ' text-4xl md:text-6xl lg:text-8xl'}>
          {text}
        </h2>
      );
      break;
    case 3:
      CompiledHeading = (
        <h3 className={globalStyles + ' text-3xl md:text-5xl lg:text-7xl'}>
          {text}
        </h3>
      );
      break;
    case 4:
      CompiledHeading = (
        <h4 className={globalStyles + ' text-2xl md:text-4xl lg:text-6xl'}>
          {text}
        </h4>
      );
      break;
    case 5:
      CompiledHeading = (
        <h5 className={globalStyles + ' text-xl md:text-3xl lg:text-5xl'}>
          {text}
        </h5>
      );
      break;
    case 6:
      CompiledHeading = (
        <h6 className={globalStyles + ' text-lg md:text-2xl lg:text-4xl'}>
          {text}
        </h6>
      );
      break;
    default:
      CompiledHeading = (
        <span className={globalStyles + ' text-4xl md:text-7xl lg:text-9xl'}>
          {text}
        </span>
      );
      break;
  }

  return <>{CompiledHeading}</>;
};

export default Heading;
