import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://i.ibb.co/NyQhDBZ/my-img1.jpg",
    testimonial: "consectetur adipiscing elit. Sed consequat vestibulum lorem, eget aliquam mauris pulvinar ut.",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://i.ibb.co/TYJ7MwT/my-img3.png",
    testimonial: "In eget est vitae libero vestibulum commodo. Ut vestibulum odio eget congue laoreet. Phasellus posuere orci non diam facilisis, sed aliquam erat faucibus.",
  },
  {
    id: 3,
    name: "Soikat Smith",
    avatar: "https://i.ibb.co/nP6Fx1g/my-img2.png",
    testimonial: "In eget est vitae libero vestibulum commodo. Ut vestibulum odio eget congue laoreet. Phasellus posuere orci non diam facilisis, sed aliquam erat faucibus.",
  },

  // Add more testimonial data
];

const ExtraSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const testimonials = testimonialsData;

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Testimonials
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-2xl">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
