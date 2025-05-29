import { Link } from "react-router-dom";
import "../styles/index.css";

const HomeSlider = () => {
  return (
    <>
      <div className="  full-width banner-hero lg:h-150  md:h-auto bg-orange-100 banner-1 home_slider_Sec">
        <div className="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center">
          <div className="flex-1 lg:mt-20">
            <h1 className="font-chivo font-bold lg:text-display-2 md:text-[56px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[10px]">
              ZEM SECURITY SERVICES
            </h1>
            <h5 className="font-chivo font-bold lg:text-display-2 md:text-[34px] md:leading-[70px] sm:text-[30px] sm:leading-[58px]  mb-[20px]">
              Your Peace of Mind Is Our Job!
            </h5>
            <p className="text-quote  md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[40px]">
              Zem Services Limited is a well-known security company, offers a
              range of leading security services. Our mission is to provide
              hassle-free security services by providing experienced, licensed,
              and highly dedicated security personnel. We offer state-of-the-art
              and fully equipped with the latest technology tools security
              personnel to secure your premises and properties.
            </p>
            <div className="flex items-center justify-start">
              <button type="button">
                {" "}
                <Link
                  to={"/register"}
                  className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px]  text-white hover:bg-gray-100 hover:text-gray-900 bg-gray-900 text-heading-6 tracking-wide mr-[22px] hover:translate-y-[-2px]"
                  href="#"
                >
                  <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Join Now
                  </span>
                </Link>
              </button>
            </div>
          </div>
          <div className="hidden relative flex-1 h-auto self-stretch lg:block">
            <div className="absolute w-full left-20 animate-hero-thumb-sm-animation max-w-[526px]">
              <img
                className=" object-cover"
                src="/assets/images/Zem-Security-Guard-2.png"
                alt="Agon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
