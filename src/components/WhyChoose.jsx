import '../styles/index.css';

const WhyChoose = () => {
    return (
        <>
            <div className="px-[12px] m-3  md:px-[36px] xl:px-0 mt-[70px] lg:mt-[100px]">
                <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
                    <div className="relative"><img className="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1 " src="/assets/images/Door-Supervisor.jpg" alt="Agon" /></div>
                    <div className="flex-1 order-1">
                        <h3 className="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">WHY CHOOSE US</h3>
                        <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">ZEM is a trusted security company in the UK, providing professional, licensed security guards to protect people and property. With a focus on reliability, experience, and customer satisfaction, our tailored security solutions ensure peace of mind for both commercial and residential clients.
                        </p>
                        <div className="border border-green-900 border-dashed mb-[48px]"></div>
                        <div className="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
                            <div className="mb-[30px] lg:mb-0">
                                <div className="flex items-center mb-[17px]"><img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                                    <h4 className="text-heading-6 font-chivo font-bold"> Affordable Price</h4>
                                </div>
                            </div>
                            <div className="mb-[30px] lg:mb-0">
                                <div className="flex items-center mb-[17px]"><img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                                    <h4 className="text-heading-6 font-chivo font-bold">Expert & Well-trained Staff</h4>
                                </div>

                            </div>
                            <div className="mb-[30px] lg:mb-0">
                                <div className="flex items-center mb-[17px]"><img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                                    <h4 className="text-heading-6 font-chivo font-bold">24/7 Hours Support</h4>
                                </div>

                            </div>
                            <div className="mb-[30px] lg:mb-0">
                                <div className="flex items-center mb-[17px]"><img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                                    <h4 className="text-heading-6 font-chivo font-bold">Deliver a great candidate experience</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose