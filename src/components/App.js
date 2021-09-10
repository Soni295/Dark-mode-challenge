import React, {useState} from 'react';
import { BtnMode }from './BtnMode';
import { Title }from './Title';
import { Description }from './Description';
import "./App.css";

const desc1 = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet ut est
a tincidunt. Vestibulum vitae torem ac eros aluquam euismod sed sit amet neque.
Atiquam quis pellentesque ex. Integer nec consectetur dui, quis sagittis felis.
Vestibulum lobortis, massa et egestas posuere, dui quam ullamcorper velit, ut
gravida velit tortor id sem
`
const desc2 = `Pellentesque sollicitudin cursus magna, nec pharetra metus alquam nec.
Phasellus ac enim viverra, interdum metus eu, interdum metus. Suspendisse
pretium lacus id justo consequat, non iaculis sem egestas. Ut condimentum
dignissim risus ac accumsan. Integer rhoncus mauris eget dolor condimentum
consequat id eu sapien. Quisque a rhoncus est, a mattis diam. Integer facilisis
nisi ac mattis lobortis. Donec sit amet mollis nibh`

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
          <Btn value='Exit' color='delete'/>
          <Btn value='Save' color='success'/>
        </div>
      </div>
    </main>
  )
}
export default App
