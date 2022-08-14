// DEPENDENCIES
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// PAGES
import Edit from './Pages/Edit';
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';

// COMPONENTS
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
// import HeaderBar from './Components/HeaderBar';
// import SideNavBar from './Components/SideNavBar';
function App() {
  return (
    <div className='grid-container'>
      {/* <h1>Tuner App</h1> */}
      <header className='flex-header'>TunerApp</header>
      <main className='flex-main'>
        <NavBar />
        {/* <HeaderBar/>
        <SideNavBar/> */}
        {/* <main */}
        <article className='flex-article'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/songs' element={<Index />} />
            <Route path='/songs/new' element={<New />} />
            <Route path='/songs/:id' element={<Show />} />
            <Route path='/songs/:id/edit' element={<Edit />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
        </article>
        {/* </main> */}
        <aside className='flex-aside'>
          <p
            style={{
              width: '15rem',
              padding: ' 1rem',
              textAlign: 'center',
              fontSize: '1.2rem',
            }}
          >
            A PERN Stack Music app which allows users to add,edit,view and
            delete playlist using react bootstrap with Holy Grail Layout
            style,scrollable table and transitions.
          </p>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// // DEPENDENCIES
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// // PAGES
// import Edit from './Pages/Edit';
// import FourOFour from './Pages/FourOFour';
// import Home from './Pages/Home';
// import Index from './Pages/Index';
// import New from './Pages/New';
// import Show from './Pages/Show';

// // COMPONENTS
// import NavBar from './Components/NavBar';
// import HeaderBar from './Components/HeaderBar';
// import SideNavBar from './Components/SideNavBar';
// function App() {
//   return (
//     <div className='App'>
//       {/* <h1>Tuner App</h1> */}
//       <main>
//         <NavBar />
//         {/* <HeaderBar/>
//         <SideNavBar/> */}
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/songs' element={<Index />} />
//           <Route path='/songs/new' element={<New />} />
//           <Route path='/songs/:id' element={<Show />} />
//           <Route path='/songs/:id/edit' element={<Edit />} />
//           <Route path='*' element={<FourOFour />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;
