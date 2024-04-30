import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);
// the simple method is to first install the react router doma then
// 1) wrap th eapp component in index.js wrap it around the BrowserRouter component like this 

/* <BrowserRouter>
<React.StrictMode>
  <App />
</React.StrictMode>
</BrowserRouter> */
// 2) in the second step the app.js compoenet me be edieted as add the {Route,Routs}
// Routes>
// <Route path='/' element={<Page/>}/>
// <Route path='/login' element={<Login/>}/>
// <Route path='/page' element={<Page/>}/>
// </Routes> give path and then just rock