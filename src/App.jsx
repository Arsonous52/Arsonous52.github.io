import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/home';
import About from './pages/about';
import FOF from './pages/404';

import Unity from './pages/unitygames';
import UnityPage from './pages/projects/unitypage';
import NDS from './pages/3dsgames';
import NDSPage from './pages/projects/3dspage';

import Other from './pages/other';
import OtherPage from './pages/projects/otherpage';
/*
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='unity' element={<Unity/>}/>
      <Route path='unity/:id' element={<UnityPage/>}/>
      <Route path='3ds' element={<NDS/>}/>
      <Route path='3ds/:id' element={<NDSPage/>}/>
      <Route path='other' element={<Other/>}/>
      <Route path='other/:id' element={<OtherPage/>}/>

      <Route path='*' element={<FOF/>}/>
    </>
  )
)*/

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<FOF/>}/>
        
        <Route path='/unity' element={<Unity/>}/>
        <Route path='/3ds' element={<NDS/>}/>
        <Route path='/other' element={<Other/>}/>
        
        <Route path='/unity/:id' element={<UnityPage/>}/>
        <Route path='/3ds/:id' element={<NDSPage/>}/>
        <Route path='/other/:id' element={<OtherPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}