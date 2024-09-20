import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Calendar, ChevronDown, Menu, X, Heart, Mountain, Camera, Map } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const destinations = [
  { name: "Kathmandu", image: "/api/placeholder/800/500" },
  { name: "Pokhara", image: "/api/placeholder/800/500" },
  { name: "Chitwan", image: "/api/placeholder/800/500" },
];

const activities = [
  {
    name: "Trekking",
    icon: <Mountain className="w-12 h-12 text-emerald-500" />,
  },
  {
    name: "Cultural Tours",
    icon: <Camera className="w-12 h-12 text-purple-500" />,
  },
  {
    name: "Adventure Sports",
    icon: <Map className="w-12 h-12 text-orange-500" />,
  },
];

const testimonials = [
  {
    name: "John Doe",
    text: "AirPlusNepal turned my Nepal dreams into an unforgettable reality. Absolutely stellar service!",
  },
  {
    name: "Jane Smith",
    text: "From the majestic Himalayas to the cultural richness of Kathmandu, every moment was perfect.",
  },
];

const Home = () => {
  const trekkingPackages = [
    { name: "Everest Base Camp", duration: "11 Days", image: "/images/everest-base-camp.jpg", link: "/treks/everest-region/everest-base-camp" },
    { name: "Annapurna Base Camp", duration: "11 Days", image: "/images/annapurna-base-camp.jpg", link: "/treks/annapurna-region/annapurna-base-camp" },
    { name: "Annapurna Circuit", duration: "15 Days", image: "/images/annapurna-circuit.jpg", link: "/treks/annapurna-region/annapurna-circuit" },
    { name: "Manaslu Circuit", duration: "15 Days", image: "/images/manaslu-circuit.jpg", link: "/treks/manaslu-region/manaslu-circuit" },
    { name: "Poon Hill", duration: "8 Days", image: "/images/poon-hill.jpg", link: "/treks/annapurna-region/poon-hill" },
  ];

  const tourPackages = [
    { name: "Kathmandu & Nagarkot", duration: "4 Days", image: "/images/kathmandu-nagarkot.jpg", link: "/tours/kathmandu-nagarkot" },
    { name: "Kathmandu & Pokhara", duration: "5 Days", image: "/images/kathmandu-pokhara.jpg", link: "/tours/kathmandu-pokhara" },
    { name: "Kathmandu & Chitwan", duration: "6 Days", image: "/images/kathmandu-chitwan.jpg", link: "/tours/kathmandu-chitwan" },
    { name: "Kathmandu & Lumbini", duration: "5 Days", image: "/images/kathmandu-lumbini.jpg", link: "/tours/kathmandu-lumbini" },
  ];

  return (
    <div className="font-['Poppins',sans-serif] bg-slate-50 text-slate-800">
      {/* Hero Section with Main Image */}
      <section className="relative h-screen">
        <img
          src="/main.jpeg"
          alt="Nepal Landscape"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.9)" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Discover the Magic <br />
              of Nepal
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
              Embark on a journey through breathtaking landscapes, ancient
              cultures, and unforgettable adventures
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Trekking Packages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Trekking Packages</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {trekkingPackages.map((trek, index) => (
              <SwiperSlide key={index}>
                <Link to={trek.link} className="block">
                  <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <img src={trek.image} alt={trek.name} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                      <h3 className="text-white text-xl font-bold mb-2">{trek.name}</h3>
                      <p className="text-white flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {trek.duration}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center mt-8">
            <Link to="/all-activities" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
              See More Treks
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Tour Packages</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {tourPackages.map((tour, index) => (
              <SwiperSlide key={index}>
                <Link to={tour.link} className="block">
                  <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                      <h3 className="text-white text-xl font-bold mb-2">{tour.name}</h3>
                      <p className="text-white flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {tour.duration}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center mt-8">
            <Link to="/all-activities" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
              See More Tours
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About AirPlusNepal</h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              At AirPlusNepal, we're passionate about showcasing the wonders of
              Nepal. From the towering peaks of the Himalayas to the lush
              jungles of Chitwan, we curate experiences that blend adventure,
              culture, and luxury. Our expert guides and personalized service
              ensure your journey through Nepal is nothing short of
              extraordinary.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                Our Services
              </button>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Director's Message */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-indigo-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-center p-8">
              <div className="md:flex-shrink-0">
                <img
                  src="/madan.JPG"
                  alt="Madan Bhandari"
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                />
              </div>
              <div className="md:ml-8 mt-4 md:mt-0">
                <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-center md:text-left">
                  Message from Director
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Welcome to AirPlus Travels and Treks! As the Director, I am
                  thrilled to invite you to explore the world with us. Our
                  dedicated team is committed to providing exceptional travel
                  experiences, ensuring your journeys are seamless, memorable
                  and filled with adventure.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Whether you're seeking a serene getaway, a cultural expedition
                  or an adrenaline-pumping adventure, we have something for
                  every traveler. We pride ourselves on our personalized service
                  and attention to detail.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Thank you for choosing AirPlus Travels & Treks. We look
                  forward to creating unforgettable memories with you.
                </p>
                <p className="text-indigo-600 italic text-lg font-semibold mt-6 text-center md:text-left">
                  <span style={{ fontFamily: "cursive" }}>Madan Bhandari</span>,
                  Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Activities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Experiences Await
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl shadow-lg p-8 text-center transition duration-300 hover:shadow-2xl"
              >
                <div className="mb-6">{activity.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{activity.name}</h3>
                <p className="text-slate-600">
                  Immerse yourself in the beauty and culture of Nepal through
                  our carefully curated experiences.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-indigo-700 rounded-xl p-8 shadow-xl"
              >
                <p className="text-xl mb-6 italic">"{testimonial.text}"</p>
                <p className="font-bold text-indigo-200">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Capture the Moments
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {[...Array(8)].map((_, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`/${index + 1}.JPG`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-xl transition duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Reviews */}
      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Traveler Reviews</h2>
          <div className="flex justify-center items-center mb-8">
            {[...Array(5)].map((_, index) => (
              <Heart
                key={index}
                className="w-10 h-10 text-emerald-500 fill-current"
              />
            ))}
            <span className="ml-4 text-4xl font-bold text-emerald-600">
              4.8 / 5
            </span>
          </div>
          <p className="text-xl text-slate-600">
            Based on 150+ happy travelers
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
