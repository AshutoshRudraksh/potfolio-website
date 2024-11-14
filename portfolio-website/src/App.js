//import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React from  'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';

function App(){
  return (
    <div className="App">
      {/* <Header Section */}
      <Header />
        {/* Main Content */}
        <main className='container mx-auto p-4'>
          {/* About Section */}
          <About />
          {/* Projects Section */}
          <Projects />
          {/* skills Section */}
          <Skills />
          {/* Contact Section */}
          <Contact />
        </main>
          {/* Footer Section */}
          <Footer />
       </div>
     
  );
}

export default App;
