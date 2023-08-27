import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Dispatch, ReduxState } from './types';
import { fetchCharacterInfo } from './redux/actions';

import './App.css'

function App() {
  const [inputText, setInputText] = useState()
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  const handleInputTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    setInputText(event.target.value)
  }

  const handleClick = () => {
    dispatch(fetchCharacterInfo(inputText))
  }

  return (
    <>
      <input
        onChange={handleInputTextChange}
        type="text"
      />
      <button onClick={handleClick}>Pesquisar</button>
    </>
  )
}

export default App
