import React from 'react';

const Translation = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/KwFsQVB/my-img1-1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className='flex justify-center items-center'>
                            <h1 className='w-1/2'> QUALITY YOU CONTROL</h1>
                            <div className="border-t-4  border-indigo-500 ..."></div>
                        </div>
                        <h1 className="text-5xl font-bold">Highly Creative Translation</h1>
                        <p className="py-6">Interpreting, or "interpretation," is the facilitation of oral or sign-language communication, either simultaneously or consecutively, between two, or among three or more, speakers who are not speaking, or signing, the same language. The term is used for this activity to avoid confusion.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Translation;