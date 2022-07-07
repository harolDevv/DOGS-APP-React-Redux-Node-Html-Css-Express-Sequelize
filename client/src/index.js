import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


//redux
import {createStore, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk),
      typeof window === 'object' && 
          typeof window.__REDUX_DEVTOOLS_EXTENSION__  !== 'undefined' ?
              window.__REDUX_DEVTOOLS_EXTENSION__() :
              f => f
      
  )
);


ReactDOM.render(
  
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
