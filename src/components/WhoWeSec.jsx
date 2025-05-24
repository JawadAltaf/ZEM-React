import '../styles/index.css';

const WhoWeSec = ({title}) => {
    
    return (
        <>
            <div className="px-[12px] m-3  md:px-[36px] xl:px-0 mt-[70px] lg:mt-[120px]">
                <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
                    <div className="relative"><img className="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1 " src="/assets/images/CCTV-Security.jpg" alt="Agon" /></div>
                    <div className="flex-1 order-1"><span className="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">{title}</span>
                        <h3 className="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">Dedicated Team With Ontime Response The <br className='mbl_none'/> Leader In Protecting</h3>
                        <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">ZEM Services Limited is the most credible viable and technology-driven total facility management provider in the UK. We have designed our total management solutions structure for domestic and commercial sectors after a thorough study of the challenges faced by these sectors.
                        </p>
                        <div className="border border-green-900 border-dashed mb-[48px]"></div>
                        <div className="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
                            <div className="mb-[30px] lg:mb-0">
                                <div className="flex items-center mb-[17px]"><img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                                    <h4 className="text-heading-6 font-chivo font-bold">SECURITY GUARDING</h4>
                                </div>
                                <p className="text-excerpt text-gray-600">Choose trusted SIA security guards from ZEM Services.</p>
                            </div>
                            <div className="mb-[30px] lg:mb-0">
                                <div className="flex items-center mb-[17px]"><img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                                    <h4 className="text-heading-6 font-chivo font-bold">DOOR SUPERVISOR</h4>
                                </div>
                                <p className="text-excerpt text-gray-600">ZEM Door Supervisors ensure safety at venue entrances.</p>
                            </div>
                            <div className="mb-[30px] lg:mb-0">
                                <div className="flex items-center mb-[17px]"><img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                                    <h4 className="text-heading-6 font-chivo font-bold">CLOSE PROTECTION</h4>
                                </div>
                                <p className="text-excerpt text-gray-600">Highly trained officers ensure protection for all clients.</p>
                            </div>
                            <div className="mb-[30px] lg:mb-0">
                                <div className="flex items-center mb-[17px]"><img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                                    <h4 className="text-heading-6 font-chivo font-bold">24/7 Hours Support</h4>
                                </div>
                                <p className="text-excerpt text-gray-600">Dedicated support team available 24/7 to assist you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoWeSec