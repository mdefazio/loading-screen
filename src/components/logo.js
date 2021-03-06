import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// Set defaults for animations
gsap.defaults({
  ease: 'elastic.out(0.9, 0.5)',
});

const LogoAnimationA = props => {
  // Define all the pieces of the logo
  const logo = React.createRef();
  const yellow = React.createRef();
  const teal = React.createRef();
  const red = React.createRef();
  const blue = React.createRef();
  const darkblue = React.createRef();
  const green = React.createRef();

  // Create a master timeline
  const master = gsap.timeline({ repeat: -1, repeatDelay: 0.25 });

  // Creates an individual timeline for each piece passed to it.
  function anim(p) {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(
      p,
      {
        scale: 0.0,
        transformOrigin: '50%',
        opacity: 0,
        y: '-10px',
      },
      {
        scale: 1,
        transformOrigin: '50%',
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'elastic.out(0.875, 0.75)',
      }
    )
      .to(p, {
        duration: 0.0,
      })
      .to(p, {
        scale: 0.0,
        transformOrigin: '50%',
        opacity: 0,
        duration: 0.75,
        y: '-10px',
        ease: 'elastic.in(0.875, 0.75)',
      });
    return tl;
  }

  // Adjust the trailing numbers to modify timing.  Absolute numbers are specific points on the master timeline. Add '-=0.5 or '+=0.5' uses relative timeline points based on the end of the previous timeline.
  useEffect(() => {
    master
      .add(anim(red.current))
      .add(anim(blue.current), 0.1)
      .add(anim(teal.current), 0.125)
      .add(anim(green.current), 0.15)
      .add(anim(darkblue.current), 0.175)
      .add(anim(yellow.current), 0.2);
  });

  return (
    <div style={{ width: '200px', margin: '20% auto', textAlign: 'center' }}>
      <svg
        ref={logo}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 218 204">
        <path
          ref={yellow}
          fill="#FDD009"
          stroke="#fff"
          strokeWidth="3"
          d="M81.8849 89.6007l.2338.4999.5021.2291 28.4942 13.0033.883.403.729-.639 28.75-25.2173.382-.3351.1-.4983c.436-2.1787.648-4.3515.648-6.6185 0-18.5689-15.086-33.677-33.641-33.677-11.0992 0-21.4505 5.4716-27.74 14.6406l-.1768.2578-.0592.3071-4.7818 24.8355-.0921.4782.2064.4411 5.5624 11.8896z"
        />
        <path
          ref={teal}
          fill="#23BAB1"
          stroke="#fff"
          strokeWidth="3"
          d="M52.742 118.059l-.3674.332-.0971.486c-.4359 2.178-.6589 4.435-.6589 6.715 0 18.615 15.1291 33.762 33.7316 33.762 11.188 0 21.5908-5.522 27.8708-14.786l.174-.256.058-.303 4.746-24.752.098-.514-.242-.464-6.334-12.116-.238-.456-.468-.214-28.6075-13.0518-.8975-.4095-.7315.6618L52.742 118.059z"
        />
        <path
          ref={red}
          fill="#EE5097"
          stroke="#fff"
          strokeWidth="3"
          d="M52.1597 70.325l.278.7571.785.1855 19.5281 4.6155 1.5223.3597.2956-1.536 4.2782-22.2253.1754-.9111-.7369-.5638c-2.931-2.2423-6.5454-3.4677-10.2621-3.4677-9.3167 0-16.8881 7.5856-16.8881 16.9074 0 2.045.3418 4.0198 1.0245 5.8787z"
        />
        <path
          ref={blue}
          fill="#17A7E0"
          stroke="#fff"
          strokeWidth="3"
          d="M52.2177 73.0039l-.4138-.0979-.4036.1339c-9.3366 3.0969-15.8186 12.0412-15.8186 21.8984 0 9.5887 5.924 18.1537 14.8209 21.5437l.859.328.6815-.617 27.3975-24.7898.8218-.7436-.4694-1.004-5.0301-10.7594-.3073-.6575-.7063-.167-21.4316-5.0678z"
        />
        <path
          ref={green}
          fill="#92C73D"
          stroke="#fff"
          strokeWidth="3"
          d="M115.515 143.442l-.174.908.733.564c2.937 2.26 6.536 3.496 10.217 3.496 9.316 0 16.888-7.582 16.888-16.904 0-2.042-.341-4.017-1.025-5.876l-.279-.759-.787-.184-19.511-4.571-1.521-.356-.295 1.534-4.246 22.148z"
        />
        <path
          ref={darkblue}
          fill="#0678A0"
          stroke="#fff"
          strokeWidth="3"
          d="M119.629 117.152l.318.609.67.156 21.48 5.029.411.097.402-.133c9.341-3.091 15.823-12.039 15.823-21.899 0-9.5759-5.941-18.1305-14.853-21.5098l-.843-.3196-.678.5945-28.094 24.6389-.886.777.546 1.045 5.704 10.915z"
        />
      </svg>
      <p>Loading...</p>
    </div>
  );
};

export default LogoAnimationA;
