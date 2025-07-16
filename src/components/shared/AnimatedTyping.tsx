'use client';

import { TypeAnimation } from 'react-type-animation';

type AnimatedTypingProps = {
  data: string[];
  delay?: number;
};

const AnimatedTyping = ({ data, delay = 2000 }: AnimatedTypingProps) => {
  const sequence: (string | number)[] = [];
  data.forEach((item) => {
    sequence.push(item, delay);
  });

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="block"
    />
  );
};

export default AnimatedTyping;
