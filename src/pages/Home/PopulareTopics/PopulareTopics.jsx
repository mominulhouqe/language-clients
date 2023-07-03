import React, { useRef } from 'react';
import SwiperCore, { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const PopulareTopics = () => {
    const swiperRef = useRef(null);

    const items = [
        {
            name: 'Teaching English',
            name2: 'University of Leeds',
            title: 'Interested in teaching English as a second language?',
            description: 'Learn effective teaching methods and techniques.',
            image: 'https://i.ibb.co/QPmHCc4/my-img7.jpg',
        },
        {
            name: 'French',
            name2: 'University of London',
            title: 'Discover the beauty of the French language and culture.',
            description: 'Explore French grammar, vocabulary, and conversation.',
            image: 'https://i.ibb.co/gySsnks/my-img2-1.jpg',
        },
        {
            name: 'Spanish',
            name2: 'University of Frence',
            title: 'Hola! Learn Spanish and communicate with millions of people.',
            description: 'Master essential Spanish phrases and expressions.',
            image: 'https://i.ibb.co/KwFsQVB/my-img1-1.jpg',
        },
        {
            name: 'Linguistics',
            name2: 'University of Leeds',
            title: 'Delve into the fascinating world of linguistics.',
            description: 'Explore the structure and evolution of languages.',
            image: 'https://i.ibb.co/cT0xfX1/my-img4-1.jpg',
        },
        {
            name: 'Russian',
            title: 'Explore the richness of the Russian language.',
            description: 'Learn Russian alphabet, grammar, and vocabulary.',
            image: 'https://i.ibb.co/Jdpzg8q/my-img6-2.jpg',
        },
        {
            name: 'Chinese',
            name2: 'University of Leeds',
            title: 'Embark on a journey to learn Mandarin Chinese.',
            description: 'Discover Chinese characters, tones, and culture.',
            image: 'https://i.ibb.co/XZ95pQr/my-img8.jpg',
        },
        {
            name: 'English Grammar',
            name2: 'University of Leeds',
            title: 'Master the intricacies of English grammar.',
            description: 'Learn grammar rules, syntax, and sentence structure.',
            image: 'https://i.ibb.co/xM8dQ4v/my-img4.webp',
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Popular Topics</h2>
  
          <div className="grid lg:grid-cols-7 grid-cols-2 mb-6 gap-1">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-2 border hover:bg-gray-600 hover:text-white text-center text-gray-600 rounded-lg shadow-lg"
              >
                <p className="font-bold">{item.name}</p>
              </div>
            ))}
          </div>
  
          <div>
            <Swiper
              slidesPerView={1}
              slidesPerGroup={2}
              spaceBetween={10}
              scrollbar={{ draggable: true }}
              modules={[Scrollbar]}
              className="mySwiper "
              ref={swiperRef}
            >
              {items.map((item, index) => (
                <SwiperSlide className='w-96' key={index}>
                  <div className="p-4 border rounded-lg flex justify-between shadow-md">
                    <div className='w-1/2'>
                      <div
                        key={index}
                        className="p-2 text-gray-600 rounded-lg shadow-lg"
                      >
                        <p className="font-bold">{item.name2}</p>
                      </div>
                      <h3 className="text-xl font-bold hover:underline mb-2">{item.title}</h3>
                      <p>{item.description}</p>
                      <button className="btn mt-12 btn-primary btn-sm btn-outline">
                        Learn More
                      </button>
                    </div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-lg w-1/2 h-56 ml-4"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
};

export default PopulareTopics;
