import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function OnTop() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'fixed',
    right: '1rem',
    bottom: '10%',
    transform: 'translateY(50%)',
    zIndex: '9999',
    cursor:"pointer"
  };

  const [isvisible, setIsvisible] = useState(false);

  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const ListenToScroll = () => {
    let heightTohidden = "350";
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightTohidden) {
      setIsvisible(true)
    } else {
      setIsvisible(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', ListenToScroll);
    return () => window.removeEventListener("scroll", ListenToScroll);
  }, []);

  return (
    <>
      {isvisible && (
        <div className='top-btn' onClick={gotobtn}>
          <h1 className='p-3 bg-indigo-600 rounded-full' style={style}>
            <FaArrowUp className='text-white rounded-full text-2xl gotobtnicon' style={{ animation: 'bounce 1.2s linear alternate-reverse  infinite' }} />
          </h1>
        </div>
      )}
      <style>
        {`
          @keyframes bounce {
            0% {
                transform: translateY(-1rem);
            }
        
            100% {
                transform: translateY(1rem);
            }
          }
          
          .gotobtnicon {
            animation-fill-mode: both;
            animation-duration: 1.2s;
            animation-name: bounce;
            animation-timing-function: ease-in-out;
          }
        `}
      </style>
    </>
  );
};
