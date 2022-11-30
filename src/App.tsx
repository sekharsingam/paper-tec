
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './components/login/Login';
import LayoutContainer from './components/layout/Layout';
import { NewOrder } from './components/new-order';
import { NotFound } from './components/not-found';
import { AllOrders } from './components/all-orders';
import { Slide, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LayoutContainer />}>
          <Route index path='allOrders' element={<AllOrders />} />
          <Route path='newOrder' element={<NewOrder />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        transition={Slide}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
