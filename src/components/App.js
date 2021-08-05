import React, {useState} from 'react';
import { BtnMode }from './BtnMode';
import { Title }from './Title';
import { Description }from './Description';

import "./App.css";

const desc1 = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quisquam facilis perspiciatis aut ipsum dolorem laborum aspernatur ipsa, explicabo quas blanditiis nihil incidunt id impedit officiis voluptatibus debitis illum tenetur!'
const desc2 = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quisquam facilis perspiciatis aut ipsum dolorem laborum aspernatur ipsa, explicabo quas blanditiis nihil incidunt id impedit officiis voluptatibus debitis illum tenetur!'


const Input = ({placeholder, type}) => {
  return(
    <input
      type={type}
      placeholder={placeholder}
    >
    </input>
  )
}
const Btn = ({value, color}) => {
  return(
    <input
      className={'btn ' + color}
      type='button'
      value={value}
    />
  )
}


const App = () =>{
  const [darkMode, setDarkMode] = useState(false)
  const changeMode = () => setDarkMode(!darkMode)
  return(
    <main className={darkMode ? 'dark-bg': ''}>
      <div className='card'>
        <Title darkMode={darkMode} />
        <BtnMode
          darkMode={darkMode}
          changeMode={changeMode}
        />
        <Description text={desc1} darkMode={darkMode}/>
        <Description text={desc2} darkMode={darkMode}/>
        <div className='inputs'>
          <Input placeholder='Name' />
          <Input placeholder='Email' />
        </div>
        <div className='btns'>
          <Btn value='Exit' color='success'/>
          <Btn value='Save' color='delete'/>
        </div>
      </div>
    </main>
  )
}
export default App
