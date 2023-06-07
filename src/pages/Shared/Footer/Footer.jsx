import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 font-serif py-8">
            <div className="container mx-auto px-4">
                <div className="grid mx-6 grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="mb-4">
                        <h3 className="text-xl text-white font-bold mb-2">About Us</h3>
                        <p className="text-gray-400">
                            We are a language learning platform dedicated to helping people
                            improve their language skills in an interactive and engaging
                            manner.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl text-white font-bold mb-2">Courses</h3>
                        <ul className="text-gray-400">
                            <li>English</li>
                            <li>Spanish</li>
                            <li>French</li>
                            <li>German</li>
                            <li>Japanese</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl text-white font-bold mb-2">Resources</h3>
                        <ul className="text-gray-400">
                            <li>Blog</li>
                            <li>FAQ</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl text-white font-bold mb-2">Contact</h3>
                        <p className="text-gray-400">123 Main St, City</p>
                        <p className="text-gray-400">contact@example.com</p>
                        <p className="text-gray-400">123-456-7890</p>
                    </div>
                </div>
                <hr className="my-6 border-gray-800" />
                <p className="text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Language Learning. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
