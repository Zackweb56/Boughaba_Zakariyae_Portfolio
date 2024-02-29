import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimationSections = ({ children }) => {
  const [ref, inView] = useInView();

  const props = useSpring({
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    filter: inView ? 'blur(0px)' : 'blur(8px)',
    config: { duration: 500 },
  });

  return (
    <animated.div ref={ref} style={props}>
      { children }
    </animated.div>
  );
};

export default AnimationSections;
