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
        ReadMore: "Read More",
        description: "Job Description Security",
        jobList1: "The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises...",
        jobList2: "The ideal candidate will have strong creative skills and a portfolio of work which demonstrates...",
        experience: "Essential Knowledge, Skills, and Experience",
        Preferred: "Preferred Experience",
        product: "Product Designer",
        product1: "Product knowledge: Deeply understand the technology and features of the product area...",
        product2: "Research: Provide human and business impact and insights for products.",
        product3: "Deliverables: Create deliverables for your product area (e.g., competitive analyses, user flows, wireframes...",
        product4: "Communication: Communicate the results of UX activities within your product area to the design team...",
        PreferredList: [
            { listone: "Designing user experiences for enterprise software / services" },
            { listone: "Creating and applying established design principles and interaction patterns" },
            { listone: "Aligning or influencing design thinking with teams working in other geographies" },
        ],
        experienceList: [
            { listone: "A portfolio demonstrating well thought through and polished end to end customer journeys" },
            { listtwo: "5+ years of industry experience in interactive design and / or visual design" },
            { listthree: "Excellent interpersonal skills" },
            { listfour: "Aware of trends in mobile, communications, and collaboration" },
            { listfive: "Ability to create highly polished design prototypes, mockups, and other communication artifacts" },
            { listsix: "The ability to scope and estimate efforts accurately and prioritize tasks and goals independently" },
            { listseven: "History of impacting shipping products with your work" },
            { listeight: "A Bachelor’s Degree in Design(or related field) or equivalent professional experience" },
            { listnine: "Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch" }
        ],
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
        ReadMore: "Read More",
        description: "Job Description Operations",
        jobList1: "The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises...",
        jobList2: "The ideal candidate will have strong creative skills and a portfolio of work which demonstrates...",
        experience: "Essential Knowledge, Skills, and Experience",
        Preferred: "Preferred Experience",
        product: "Product Designer",
        product1: "Product knowledge: Deeply understand the technology and features of the product area...",
        product2: "Research: Provide human and business impact and insights for products.",
        product3: "Deliverables: Create deliverables for your product area (e.g., competitive analyses, user flows, wireframes...",
        product4: "Communication: Communicate the results of UX activities within your product area to the design team...",
        PreferredList: [
            { listone: "Designing user experiences for enterprise software / services" },
            { listone: "Creating and applying established design principles and interaction patterns" },
            { listone: "Aligning or influencing design thinking with teams working in other geographies" },
        ],
        experienceList: [
            { listone: "A portfolio demonstrating well thought through and polished end to end customer journeys" },
            { listtwo: "5+ years of industry experience in interactive design and / or visual design" },
            { listthree: "Excellent interpersonal skills" },
            { listfour: "Aware of trends in mobile, communications, and collaboration" },
            { listfive: "Ability to create highly polished design prototypes, mockups, and other communication artifacts" },
            { listsix: "The ability to scope and estimate efforts accurately and prioritize tasks and goals independently" },
            { listseven: "History of impacting shipping products with your work" },
            { listeight: "A Bachelor’s Degree in Design(or related field) or equivalent professional experience" },
            { listnine: "Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch" }
        ],
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
        ReadMore: "Read More",
        description: "Job Description Door Supervisor",
        jobList1: "The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises...",
        jobList2: "The ideal candidate will have strong creative skills and a portfolio of work which demonstrates...",
        experience: "Essential Knowledge, Skills, and Experience",
        Preferred: "Preferred Experience",
        product: "Product Designer",
        product1: "Product knowledge: Deeply understand the technology and features of the product area...",
        product2: "Research: Provide human and business impact and insights for products.",
        product3: "Deliverables: Create deliverables for your product area (e.g., competitive analyses, user flows, wireframes...",
        product4: "Communication: Communicate the results of UX activities within your product area to the design team...",
        PreferredList: [
            { listone: "Designing user experiences for enterprise software / services" },
            { listone: "Creating and applying established design principles and interaction patterns" },
            { listone: "Aligning or influencing design thinking with teams working in other geographies" },
        ],
        experienceList: [
            { listone: "A portfolio demonstrating well thought through and polished end to end customer journeys" },
            { listtwo: "5+ years of industry experience in interactive design and / or visual design" },
            { listthree: "Excellent interpersonal skills" },
            { listfour: "Aware of trends in mobile, communications, and collaboration" },
            { listfive: "Ability to create highly polished design prototypes, mockups, and other communication artifacts" },
            { listsix: "The ability to scope and estimate efforts accurately and prioritize tasks and goals independently" },
            { listseven: "History of impacting shipping products with your work" },
            { listeight: "A Bachelor’s Degree in Design(or related field) or equivalent professional experience" },
            { listnine: "Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch" }
        ],
    },
]

const CareerPage = () => {

    return (
        <>
            <div className="px-[12px] md:px-[36px] xl:px-0 mt-[30px] mx-auto  max-w-[1248px]">
                <div className="grid grid-cols-1 gap-y-[30px]">
                    <p className='text-center'>Jobs Career</p>
                    <h3 className="font-chivo font-bold text-[22px] leading-[36px] sm:text-[35px] sm:leading-[44px] md:text-[46px] text-left md:leading-[52px] ">
                        All Current Jobs
                    </h3>
                    {data.map((item, index) => {
                        return (
                            <div key={item.id || index} className="bg-white shadow rounded-xl p-6">
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
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CareerPage;