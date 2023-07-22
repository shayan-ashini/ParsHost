import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home'
import Host from './pages/host'
import Server from './pages/server'
import Menu from './pages/menu'
import Domain from './pages/domain'
import Support from './pages/support';
import Work from './pages/work';
import Ssl from './pages/ssl'
import Site from './pages/site'

import './pages/adv.css'






function Main(){
    return(

        <main  className='container-fluid p-0 container-xxl'>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu/>}>
                    <Route index element={<Home/>}/>
                    <Route path='host' element={<Host/>}/>
                    <Route path='domain' element={<Domain/>}/>
                    <Route path='server' element={<Server/>}/>
                    <Route path='support' element={<Support/>}/>
                    <Route path='work' element={<Work/>}/>
                    <Route path='ssl' element={<Ssl/>}/>
                    <Route path='site' element={<Site/>}/>
                </Route>
            </Routes>




        </BrowserRouter>
        </main>
        

        

    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);



