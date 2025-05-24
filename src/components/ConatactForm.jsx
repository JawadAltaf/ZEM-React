import '../styles/index.css';


const ConatactForm = () => {
    return (
        <>
            <div className="bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-[120px] rounded-[58px]">
                <div className="mx-auto relative max-w-[1320px]">
                    <img className="absolute right-0 max-w-[129px] top-[-50px]" src="assets/images/mail.png" alt="mail image" />

                    <p className="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">GET IN TOUCH</p>

                    <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">
                        Don't be a Stranger!
                    </h2>
                    <div className="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">

                        <div>
                            <div className="flex gap-[13px] mb-[15px] md:mb-[25px]">
                                <i>
                                    <img src="assets/images/logo.png" alt="home icon" />
                                </i>

                            </div>
                            <p className="text-text text-gray-600">26 Kings Hill Ave, Kings Hill, West <br className='mbl_none' /> Malling ME19 4AE</p>
                            {/* <p className="text-text text-gray-600 mb-[10px] md:mb-[16px]">Manchester, Kentucky 39495</p> */}
                            <p className="text-text text-gray-600 mt-2">01622370830</p>
                            <p className="text-text text-gray-600 mt-2">
                                <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="aac9c5c4decbc9deeacbcdc5c484c9c5c7">admin@zemservices.co.uk</a>
                            </p>
                        </div>

                        <form className="flex-1" action="/">
                            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                <input className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Your full name" />
                                <input className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Your email address" />
                            </div>

                            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                <input className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Your Subject" />
                                <input className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Your Phone" />
                            </div>

                            <textarea className="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]" name="message" cols="100" rows="10" placeholder="Your message..."></textarea>

                            <div className="flex flex-col gap-5">
                                <button
                                    className="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 w-fit"
                                    type="submit"
                                >
                                    Send Message
                                    <i>
                                        <img className="ml-[7px] w-[12px] filter-white" src="assets/images/icons/icon-right.svg" alt="arrow right icon" />
                                    </i>
                                </button>
                                <p className="text-md text-gray-500">
                                    By clicking contact us button, you agree to our terms and policy.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[138px] m-3">
                <div className="text-center mb-[100px]">
                    <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-full">Our Location</h2>
                    <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[743px]">In a professional context, private and corporate clients often rely on ZEM Services Limited to publish updates and announcements about security-related developments.
                    </p>
                </div>
                <div className="justify-around lg:flex lg:items-center gap-[30px]">
                    <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px]  pb-[50px] last:mb-0"><img className="h-full w-full object-cover max-w-[64px]" src="assets/images/icons/icon-resources.svg" alt="icon" />
                        <div>
                            <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Office
                            </h3>
                            <p className="text-[#7E7E7E] text-[14px] leading-[18px]">26 Kings Hill Ave, Kings Hill, West <br className='mbl_none' /> Malling ME19 4AE</p>

                        </div>
                    </div>
                    <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px]  pb-[50px] last:mb-0"><img className="h-full w-full object-cover max-w-[64px]" src="assets/images/icons/icon-cards.svg" alt="icon" />
                        <div>
                            <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Email
                            </h3>
                            <p className="text-[#7E7E7E] text-[14px] leading-[18px]">admin@zemservices.co.uk</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px]  pb-[50px]"><img className="h-full w-full object-cover max-w-[64px]" src="assets/images/icons/icon-stats.svg" alt="icon" />
                        <div>
                            <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Conact Us
                            </h3>
                            <p className="text-[#7E7E7E] text-[14px] leading-[18px]">01622370830</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ConatactForm;