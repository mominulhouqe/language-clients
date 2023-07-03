import React from 'react';

const Translation = () => {
    return (
        <div className='bg-base-200'>
            <div className="hero  container mx-auto">
                <div className="hero-content flex flex-col lg:flex-row-reverse ">
                    <div className="w-full lg:w-1/2">
                        <div className="flex justify-center items-center">
                            <h1 className=" my-6  text-2xl font-extrabold">QUALITY YOU CONTROL</h1>
                            <div className="border-t-4 border-indigo-500 ..."></div>
                        </div>
                        <h1 className="text-5xl font-bold">Highly Creative Translation</h1>
                        <p className="py-6">
                            Interpreting, or "interpretation," is the facilitation of oral or sign-language communication, either simultaneously or consecutively, between two, or among three or more, speakers who are not speaking, or signing, the same language. The term is used for this activity to avoid confusion.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div className="relative flex gap-12 justify-center items-center">
                        <div className="relative">
                            <img src="https://i.ibb.co/KwFsQVB/my-img1-1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div className="absolute lg:top-28 lg:right-40">
                            <img src="https://i.ibb.co/KwFsQVB/my-img1-1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Translation;
