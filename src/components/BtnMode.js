import moon from '../assets/moon.png'
import sun from '../assets/sun.png'
import React from 'react';

export const BtnMode = ({darkMode, changeMode}) => {
  return(
    <img
      className='btn-dark-mode'
      src={darkMode ? sun : moon}
      onClick={changeMode}
    >
    </img>
  )
}
