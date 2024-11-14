import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav>
          <a href="#about" className="mx-2">About</a>
          <a href="#projects" className="mx-2">Projects</a>
          <a href="#skills" className="mx-2">Skills</a>
          <a href="#contact" className="mx-2">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;




// basic header component
// import React from 'react';

// function Headers(){
// 	return (
// 		<header>
// 			<h1>Your Name</h1>
// 			<nav>
// 				<a href="#about">About</a>
// 				<a href="#projects">Projects</a>
// 				<a href="#contact">Contact</a>
// 			</nav>
// 		</header>
// 	)
// }

// export default Headers;
