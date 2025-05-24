import '../styles/index.css';


const WhyChooseAbout = () => {
    return (
        <>
            <div className="px-4 md:px-8 xl:px-0 mt-[70px] lg:mt-[100px] lg:mb-[150px] flex justify-center">
                <div className="w-full max-w-screen-md text-center">
                    <h1 className='font-chivo font-bold text-[28px] leading-[36px] sm:text-[35px] sm:leading-[44px] md:text-[20px] text-left md:leading-[52px] mb-[10px]'>WHY CHOOSE US</h1>
                    <h3 className="font-chivo font-bold text-[28px] leading-[36px] sm:text-[35px] sm:leading-[44px] md:text-[46px] text-left md:leading-[52px] mb-[22px]">
                        Why We're the Perfect Choice
                    </h3>



                    <div className="border border-green-900 border-dashed mb-[28px]"></div>
                    <p className='text-left text-heading-6 font-chivo font-bold mb-[20px]'>There are several compelling reasons to choose us.</p>
                    <div className="grid grid-cols-1 gap-y-[30px] sm:grid-cols-2 sm:gap-x-[30px] sm:text-left">


                        <div className="flex items-center">
                            <img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                            <h4 className="text-heading-6 font-chivo font-bold">Affordable Price</h4>
                        </div>

                        <div className="flex items-center">
                            <img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                            <h4 className="text-heading-6 font-chivo font-bold">Expert & Well-trained Staff</h4>
                        </div>

                        <div className="flex items-center">
                            <img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                            <h4 className="text-heading-6 font-chivo font-bold">24/7 Hours Support</h4>
                        </div>

                        <div className="flex items-center">
                            <img className="mr-[9px]" src="assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                            <h4 className="text-heading-6 font-chivo font-bold">Deliver a great candidate experience</h4>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default WhyChooseAbout;