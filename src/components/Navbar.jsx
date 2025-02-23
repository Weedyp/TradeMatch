
// import React from 'react';
// import logo from '../assets/image.png';

// const Navbar = () => {
//     return (
//         <nav className="text-white flex items-center justify-between px-24 py-4 w-full  top-0 bg-[#011A30] text-sm">
//             <div className="flex items-center">
//                 <img src={logo} alt="Logo" className="h-10 w-auto" />
//             </div>

// {/* container 1 */}
//             <ul className="flex space-x-12 text-sm mx-12">
//                 <li><a href="#" className="hover:text-gray-300 text-lg">Home</a></li>
//                 <li><a href="#" className="hover:text-gray-300 text-lg">Top 10 Firms</a></li>
//             </ul>
// {/* container 2 */}
//             <div className="flex items-center space-x-4">
//                 <a href="#" className="text-white text-lg font-medium hover:text-gray-300">Login</a>
//                 <a
//                     href="#"
//                     className="px-6 py-3 text-lg font-medium rounded-full text-white font-medium transition 
//                     bg-gradient-to-b from-blue-400 to-blue-950 shadow-lg">
//                     Sign Up
//                 </a>
//             </div>
            
//         </nav>
//     );
// };

// export default Navbar;


import React from 'react';
import logo from '../assets/image.png';

const Navbar = () => {
    return (
        <nav className="text-white flex items-center justify-between px-24 py-4 w-full top-0 bg-[#011A30] text-sm">
            {/* Logo */}
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Menu & Auth Section */}
            <div className="flex items-center space-x-16 ml-auto">
                {/* Menu Links */}
                <ul className="flex space-x-12 text-sm">
                    <li><a href="#" className="hover:text-gray-300 text-lg">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300 text-lg">Top 10 Firms</a></li>
                </ul>

                {/* Auth Links */}
                <div className="flex items-center space-x-6">
                    <a href="#" className="text-white text-lg font-medium hover:text-gray-300">Login</a>
                    <a
                        href="#"
                        className="px-6 py-2 text-lg rounded-full text-white font-medium transition 
                        bg-gradient-to-b from-blue-400 to-blue-950 shadow-lg">
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

