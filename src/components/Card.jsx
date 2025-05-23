import '../styles/index.css';

const Card = () => {
    return (
        <>
            <div className="sm:m-2 lg:mt-8 px-5 lg:flex lg:gap-5 xl:gap-[30px] cards_Section">
                <div className="rounded-2xl bg-[#dbece5] p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-5 hover:translate-y-[-2px]">
                    <div><img className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]" src="/assets/images/icons/icon-flower.svg" alt="icon" />
                        <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">SIA Licenced
                        </h2>
                        <p className="text-excerpt text-gray-600 mb-[30px]">
                            A wide range of Door Supervisors are available for your premises.
                            Our Door Supervisors are SIA-licensed, experienced, and highly efficient in dealing with conflict.
                        </p>
                    </div>
                    <img className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0" src="/assets/images/icons/icon-flower-white.svg" alt="icon" />
                </div>
                <div className="rounded-2xl bg-[#d1ecfd]  p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-9 hover:translate-y-[-2px]">
                    <div><img className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]" src="/assets/images/icons/icon-map.svg" alt="icon" />
                        <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Cost Effective
                        </h2>
                        <p className="text-excerpt text-gray-600 mb-[30px]">
                            We will provide only the best and most cost-effective solutions to all our clients according to their needs and budgets.
                            Our service rates are competitively low compared to the market.
                        </p>
                    </div>
                    <img className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0" src="/assets/images/icons/icon-map-white.svg" alt="icon" />
                </div>
                <div className="rounded-2xl bg-[#fff3ea] p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-2 hover:translate-y-[-2px]">
                    <div><img className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]" src="/assets/images/icons/icon-pine.svg" alt="icon" />
                        <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">24/7 Hours Support
                        </h2>
                        <p className="text-excerpt text-gray-600 mb-[30px]">
                            Our dedicated and experienced support team works 24/7/365 to assist our valued customers.We are passionate about helping you with excellent service <br className='mbl_none'/> anytime.
                        </p>
                    </div>
                    <img className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0" src="/assets/images/icons/icon-pine-white.svg" alt="icon" />
                </div>
            </div>
        </>
    )
}

export default Card;