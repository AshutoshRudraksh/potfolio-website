import React from 'react';

function Footer(){
	return (
		<footer className="bg-gray-800 text-white p-4 mt-8">
			<div className="container mx-auto text-center">
				<p>&copy; {new Date().getFullYear} Ashutosh. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;


// base header component for example
// import React from 'react';
// import './Footer.css';

// function Footer() {
//   return (
//     <footer>
//       <p>&copy; 2023 Your Name</p>
//     </footer>
//   );
// }

// export default Footer;
