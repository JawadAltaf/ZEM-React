import '../styles/index.css';

const Footer = () => {
    return (
        <>
            <footer className="mt-[52px]  pb-3">
                <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">

                    <div className="w-full bg-gray-200 h-[1px] mb-[52px]"></div>
                    <div className="text-gray-600 flex flex-wrap justify-center lg:justify-center md:justify-between  gap-8 xl:gap-[98px] mb-[48px]">
                        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5'>
                            <img src="/assets/images/logo.png" alt="" className='max-w-[100%]' />
                            <p className="text-text mb-5 mt-4">OUR COMPANY is the most credible viable and technology- driven total facility management provider in the UK.
                            </p>
                            <div className="flex items-center justify-start gap-5 mt-5 lg:mt-0"><a className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img className="h-full w-full object-cover" src="assets/images/icons/icon-facebook-green.svg" alt="facebook icon" /></a><a className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img className="h-full w-full object-cover" src="assets/images/icons/icon-instagram-green.svg" alt="instagram icon" /></a><a className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img className="h-full w-full object-cover" src="assets/images/icons/icon-twitter-green.svg" alt="twitter icon" /></a><a className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img className="h-full w-full object-cover" src="assets/images/icons/icon-linkedin-green.svg" alt="linkedin icon" /></a></div>
                        </div>
                        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5'>
                            <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Useful Links</h5>
                            <ul>
                                <li className="mb-2"><a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">About Us</a></li>
                                <li className="mb-2"><a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Contact Us</a></li>
                                <li className="mb-2"><a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Login</a></li>
                                <li className="mb-2"><a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Join Now</a></li>
                            </ul>
                        </div>
                        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5'>
                            <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Contact us</h5>
                            <ul>
                                <li className="mb-2">
                                    26 Kings Hill Ave, Kings Hill, West Malling ME19 4AE
                                </li>
                                <li className="mb-2">admin@zemservices.co.uk</li>
                                <li className="mb-2">01622370830</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 h-[1px] mb-[46px]"></div>
                    <div className="text-gray-400 text-center">
                        <p>Copyright @ 2024 Zem Services Limited All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;