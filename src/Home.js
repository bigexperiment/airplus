import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Calendar, Mountain, Camera, Map, Star } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const activities = [
  {
    name: "Trekking",
    icon: <Mountain className="w-10 h-10" />,
    description: "Explore the majestic Himalayas on world-class trekking routes",
    color: "primary"
  },
  {
    name: "Cultural Tours",
    icon: <Camera className="w-10 h-10" />,
    description: "Discover ancient temples and rich cultural heritage",
    color: "accent"
  },
  {
    name: "Adventure Sports",
    icon: <Map className="w-10 h-10" />,
    description: "Experience thrilling activities in stunning landscapes",
    color: "primary"
  },
];

const testimonials = [
  {
    name: "John Doe",
    text: "AirPlusNepal turned my Nepal dreams into an unforgettable reality. Absolutely stellar service!",
    rating: 5
  },
  {
    name: "Jane Smith",
    text: "From the majestic Himalayas to the cultural richness of Kathmandu, every moment was perfect.",
    rating: 5
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/main.jpeg"
          alt="Nepal Landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-display">
            Discover Nepal
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light text-white/90">
            Embark on a journey through breathtaking landscapes, ancient cultures, and unforgettable adventures
          </p>
          <Link
            to="/all-activities"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white text-lg font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Trekking Packages Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Trekking Packages</h2>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
              Explore the world's most iconic trekking destinations
            </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {trekkingPackages.map((trek, index) => (
              <SwiperSlide key={index}>
                <Link to={trek.link} className="block group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg card-hover bg-white">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={trek.image}
                        alt={trek.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2">{trek.name}</h3>
                      <p className="text-white/90 flex items-center text-sm">
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
            <Link to="/all-activities" className="btn-primary inline-block">
              View All Treks
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Tour Packages</h2>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
              Immerse yourself in Nepal's rich culture and heritage
            </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {tourPackages.map((tour, index) => (
              <SwiperSlide key={index}>
                <Link to={tour.link} className="block group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg card-hover bg-white">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2">{tour.name}</h3>
                      <p className="text-white/90 flex items-center text-sm">
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
            <Link to="/all-activities" className="btn-primary inline-block">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">About AirPlusNepal</h2>
            <p className="text-xl text-slate-600 leading-relaxed mt-6 mb-10">
              At AirPlusNepal, we're passionate about showcasing the wonders of Nepal. From the towering peaks of the Himalayas to the lush jungles of Chitwan, we curate experiences that blend adventure, culture, and luxury. Our expert guides and personalized service ensure your journey through Nepal is nothing short of extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link to="/all-activities" className="btn-primary inline-block">
                Our Services
              </Link>
              <Link to="/contact" className="btn-accent inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-primary-50 rounded-3xl overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row items-center md:items-start p-8 md:p-12 gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="/madan.JPG"
                    alt="Madan Bhandari"
                    className="w-48 h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-700 text-center md:text-left font-display">
                    Message from Director
                  </h2>
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p>
                      Welcome to AirPlus Travels and Treks! As the Director, I am thrilled to invite you to explore the world with us. Our dedicated team is committed to providing exceptional travel experiences, ensuring your journeys are seamless, memorable and filled with adventure.
                    </p>
                    <p>
                      Whether you're seeking a serene getaway, a cultural expedition or an adrenaline-pumping adventure, we have something for every traveler. We pride ourselves on our personalized service and attention to detail.
                    </p>
                    <p>
                      Thank you for choosing AirPlus Travels & Treks. We look forward to creating unforgettable memories with you.
                    </p>
                  </div>
                  <p className="text-primary-700 text-lg font-semibold mt-6 text-center md:text-left">
                    <span className="font-display italic">Madan Bhandari</span>, Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Experiences Await</h2>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
              Immerse yourself in the beauty and culture of Nepal
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-${activity.color}-100 text-${activity.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{activity.name}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">What Our Travelers Say</h2>
            <p className="text-primary-100 text-lg">Real stories from real adventurers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:bg-white/20 transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-primary-100">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Capture the Moments</h2>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
              A glimpse of the adventures that await
            </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {[...Array(8)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="group overflow-hidden rounded-2xl shadow-lg card-hover">
                  <img
                    src={`/${index + 1}.JPG`}
                    alt={`Nepal travel destination ${index + 1}`}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Reviews Summary */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent-50 to-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="section-title mb-8">Traveler Reviews</h2>
          <div className="flex justify-center items-center gap-3 mb-6">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="w-10 h-10 md:w-12 md:h-12 text-accent-500 fill-accent-500"
              />
            ))}
          </div>
          <p className="text-5xl md:text-6xl font-bold text-accent-600 mb-4">4.8 / 5</p>
          <p className="text-xl text-slate-600">
            Based on 150+ happy travelers
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
