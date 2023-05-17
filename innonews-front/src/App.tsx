import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import Main from './routes/Main';
import { useCustomFeedMutation } from './store/slices/newsApiSlice';
import { setCustomFeed } from './store/slices/newsSlice';

function App() {

  
  
  return (
   <Main/>
  );
}

export default App;
