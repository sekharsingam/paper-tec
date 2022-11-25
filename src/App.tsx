
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './components/login/Login';
import LayoutContainer from './components/layout/Layout';
import { NewOrder } from './components/new-order';
import { NotFound } from './components/not-found';
import { AllOrders } from './components/all-orders';


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LayoutContainer />}>
            <Route path='allOrders' element={<AllOrders />}/>
            <Route path='newOrder' element={<NewOrder />}/>
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
