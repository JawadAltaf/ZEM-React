import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.css";

const testimonials = [
    {
        name: "Emma Watson, ",
        company: "Teacher",
        feedback: "I cant speak highly enough of the exceptional service provided by this company. From the moment I reached out to them, their team was attentive, responsive, and truly went above and beyond.They took the time to understand my specific needs and delivered a solution that exceeded my expectations.Their expertise and professionalism are unmatched, and I highly recommend them.",
    },
    {
        name: "Mark Joe,",
        company: "Engineer",
        feedback: "I am incredibly impressed with the results I achieved with the help of this company. Their deep industry knowledge and innovative approach guided me towards significant growth and success. They understood the intricacies of my business and tailored their strategies to fit perfectly. Working with them was a game-changer, and I'm grateful for their partnership.",
    },
    {
        name: "Liaya Duexia, ",
        company: "Housewife",
        feedback: "I've had the pleasure of working with this company for several years now, and they consistently deliver outstanding results.Their attention to detail, commitment to excellence, and ability to adapt to evolving needs are truly commendable. I can always count on them to provide reliable solutions and exceptional customer service. They have become an invaluable partner to my business.",
    },
    {
        name: "Jane Ronan,",
        company: "Teacher",
        feedback: "The team at this company is simply phenomenal. Their expertise and guidance have been instrumental in achieving our goals and staying ahead of the competition. They not only understand our industry but also have a deep understanding of our specific challenges. Their strategic recommendations have helped us navigate complex situations and drive growth.I wholeheartedly recommend them to anyone seeking exceptional solutions and unparalleled support.",
    },
    {
        name: "Richard Duexia, ",
        company: "Enterprenour",
        feedback: "This Company is exceeded our expectations! Their door supervisors were professional, attentive, and ensured a secure environment. The close protection team was skilled and discreet, prioritizing our safety. For event security, they managed the crowd flawlessly. Their expertise and dedication are unparalleled. We highly recommend their exceptional services for any security needs!",
    },
];

const TestimonialSlider = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="px-4 md:px-10 xl:px-0 mt-20 max-w-7xl mx-auto mb-10 overflow-y-hidden">
            {/* Heading + Arrows */}
            <div className="flex justify-between items-center mb-12 ">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Some Sweet Talk Of Our  Happy Clients</h2>
                <div className="flex space-x-4">
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="group w-14 h-14 rounded-full border border-gray-300 hover:bg-gray-800 bg-[#e4e7ec] flex items-center justify-center transition-colors"
                    >
                        <img
                            src="assets/images/icons/icon-prev.svg"
                            alt="Previous"
                            className="group-hover:filter-white transition duration-300"
                        />
                    </button>
                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="group w-14 h-14 rounded-full border border-gray-300 hover:bg-gray-800 bg-[#e4e7ec] flex items-center justify-center transition-colors"
                    >
                        <img
                            src="assets/images/icons/icon-next.svg"
                            alt="Next"
                            className="group-hover:filter-white transition duration-300"
                        />
                    </button>
                </div>

            </div>

            {/* Slider */}
            <Slider {...settings} ref={sliderRef}>
                {testimonials.map((item, index) => (
                    <div key={index} className="px-2 sm:px-4 overflow-y-hidden overflow-x-hidden">
                        <div className="p-6 w-[304px] h-auto rounded-2xl shadow-md border border-gray-200 bg-white hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-500 font-medium mb-2">{item.company}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.feedback}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default TestimonialSlider;
