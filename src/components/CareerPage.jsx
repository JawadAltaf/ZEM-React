import { Link } from 'react-router-dom';
import '../styles/index.css';

export const data = [
    {
        id: "1",
        src: 'assets/images/icons/job-search1.png',
        heading: 'Security Operations Manager (10/2023)',
        location: " Location:",
        area: "Kent",
        jobCode: "Job Code:",
        code: 3319,
        closingDate: "Closing Date:",
        date: '31/10/2023',
        ReadMore: "Read More"
    },
    {
        id: "2",
        src: 'assets/images/icons/job-search1.png',
        heading: 'Operations Manager (11/2023)',
        location: " Location:",
        area: "Kent",
        jobCode: "Job Code:",
        code: 3319,
        closingDate: "Closing Date:",
        date: '31/10/2023',
        ReadMore: "Read More"
    },
    {
        id: "3",
        src: 'assets/images/icons/job-search1.png',
        heading: 'Door Supervisor (04/2023)',
        location: " Location:",
        area: "Kent",
        jobCode: "Job Code:",
        code: 3319,
        closingDate: "Closing Date:",
        date: '31/10/2023',
        ReadMore: "Read More"
    },
]

const CareerPage = () => {



    return (
        <>
            <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto lg:mt-[139px] max-w-[1248px]">
                <div className="grid grid-cols-1 gap-y-[30px]">
                    <p className='text-center'>Jobs Career</p>
                    <h3 className="font-chivo font-bold text-[22px] leading-[36px] sm:text-[35px] sm:leading-[44px] md:text-[46px] text-left md:leading-[52px] ">
                        All Current Jobs
                    </h3>
                    {data.map((item, index) => {
                        return <>
                            <div key={item.id ||index} className="bg-white shadow rounded-xl p-6">

                                <div className="flex items-start gap-3">
                                    <img
                                        src={item.src}
                                        alt="question icon"
                                        className="w-6 h-6 mt-1"
                                    />
                                    <div className="w-full">
                                        <h4 className="font-bold font-chivo text-[22px] xl:text-heading-5 mb-4">
                                            {item.heading}
                                        </h4>

                                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center">
                                            <div className="flex flex-wrap gap-x-12 text-[18px] text-black font-bold">
                                                <p>
                                                    {item.location} <span className="font-light">{item.area}</span>
                                                </p>
                                                <p>
                                                    {item.jobCode} <span className="font-light">{item.code}</span>
                                                </p>
                                                <p>
                                                    {item.closingDate} <span className="font-light">{item.date}</span>
                                                </p>
                                            </div>

                                            <div className="flex sm:justify-end justify-start mt-4 sm:mt-0">
                                                <Link to={`/career-detail/${item.id}`}>
                                                    <button className="bg-black text-white px-5 py-2 rounded whitespace-nowrap">
                                                        {item.ReadMore}
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    )
}

export default CareerPage;