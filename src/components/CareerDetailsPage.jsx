import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../styles/index.css";
import { data } from './CareerPage';


const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina",
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
    "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
    "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
    "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco",
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia",
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "South Korea", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];


const CareerDetailsPage = () => {
    const [selectedSource, setSelectedSource] = useState("");
    const Dropdownref = useRef(null)
    const [selectedCountry, setSelectedCountry] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState(countries);



    const { id } = useParams();
    const job = data.find((j) => j.id === id)


    useEffect(() => {
        setFilteredCountries(
            countries.filter((country) =>
                country.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, countries]);


    useEffect(() => {
        function handleclickOutside(event) {
            if (Dropdownref.current && !Dropdownref.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleclickOutside);
        return () => {
            document.removeEventListener("mousedown", handleclickOutside);
        };
    }, [])


    return (
        <>
            <div className="full-width bg-[#FFF3EA] mt-[50px] lg:mt-[100px] md:mt-[50px]">
                <div className="text-center px-5 pt-[74px] pb-[90px]">
                    <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mx-auto mb-[22px] md:w-[27ch]">{job.heading}
                    </h2>
                    <div className="flex items-center justify-center"><Link to={'/'} className="text-text" href="index.html">Home</Link><a className="text-text text-gray-500" href="#">/ Jobs details</a></div>
                </div>
            </div>
            <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto max-w-[1090px]">
                <div className="mx-auto max-w-[866px]">
                    <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">Job Description</h3>
                    <p className="text-text">
                        The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy
                        enterprises...
                    </p>
                    <br />
                    <p className="text-text">
                        The ideal candidate will have strong creative skills and a portfolio of work which demonstrates...
                    </p>
                    <br />
                </div>

                <div className="mx-auto max-w-[866px]">
                    <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">
                        Essential Knowledge, Skills, and Experience
                    </h3>
                    <ul className="list-disc pl-5">
                        <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                        <li>5+ years of industry experience in interactive design and / or visual design</li>
                        <li>Excellent interpersonal skills</li>
                        <li>Aware of trends in mobile, communications, and collaboration</li>
                        <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                        <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                        <li>History of impacting shipping products with your work</li>
                        <li>A Bachelor’s Degree in Design (or related field) or equivalent professional experience</li>
                        <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                    </ul>
                    <br />

                    <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">Preferred Experience</h3>
                    <ul className="list-disc pl-5">
                        <li>Designing user experiences for enterprise software / services</li>
                        <li>Creating and applying established design principles and interaction patterns</li>
                        <li>Aligning or influencing design thinking with teams working in other geographies</li>
                    </ul>
                    <br />

                    <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">Product Designer</h3>
                    <p className="text-text">Product knowledge: Deeply understand the technology and features of the product area...</p>
                    <p className="text-text">Research: Provide human and business impact and insights for products.</p>
                    <p className="text-text">
                        Deliverables: Create deliverables for your product area (e.g., competitive analyses, user flows, wireframes...
                    </p>
                    <p className="text-text">
                        Communication: Communicate the results of UX activities within your product area to the design team...
                    </p>

                    <div className="w-full opacity-10 h-[1px] bg-[#061224] mt-[50px] mb-[34px]"></div>


                </div>
            </div>


            <div className="bg-gray-100 relative p-[40px] m-0 lg:m-3 md:m-0  md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-[80px] rounded-[58px]">
                <div className="mx-auto relative max-w-[1320px]">
                    <div className="flex flex-col  mb-[15px] md:mb-[25px] lg:flex-row ">
                        <form className="flex-1" action="/">
                            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="UserName" className="text-sm font-chivo mb-2 text-gray-700">User Name *</label>
                                    <input
                                        id="UserName"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Your Full Name"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="forename" className="text-sm font-chivo mb-2 text-gray-700">Forename *</label>
                                    <input
                                        id="forename"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Your First Name"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="surname" className="text-sm font-chivo mb-2 text-gray-700">Surname *</label>
                                    <input
                                        id="surname"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Your Last Name"
                                    />
                                </div>
                            </div>


                            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="Email" className="text-sm font-chivo mb-2 text-gray-700">Email *</label>
                                    <input
                                        id="Email"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="application date" className="text-sm font-chivo mb-2 text-gray-700">Application Date *</label>
                                    <input
                                        id="application-date"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="date"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="birthday" className="text-sm font-chivo mb-2 text-gray-700">Birthday *</label>
                                    <input
                                        id="birthday"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="date"
                                    />
                                </div>
                            </div>


                            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="height" className="text-sm font-chivo mb-2 text-gray-700">Height <span className="text-black">(Feet) *</span></label>
                                    <input
                                        id="Height"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Your Height "
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="Weight" className="text-sm font-chivo mb-2 text-gray-700">Weight <span className="text-black">(KG) *</span> </label>
                                    <input
                                        id="weight"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Your Weight "
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="phone-number" className="text-sm font-chivo mb-2 text-gray-700">Phone No</label>
                                    <input
                                        id="phone-no"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Phono No"
                                    />
                                </div>
                            </div>







                            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                {/* Country Dropdown */}
                                <div ref={Dropdownref} className="flex-1 flex flex-col">
                                    <label htmlFor="country-dropdown" className="text-sm font-chivo mb-2 text-gray-700">Country</label>
                                    <div


                                        className="relative w-full"
                                    >
                                        <div
                                            onClick={() => setIsOpen(!isOpen)}
                                            id="country-dropdown"
                                            className="cursor-pointer bg-white  border-none outline-none border border-gray-300 rounded py-5 px-[30px] placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo text-gray-400"
                                        >
                                            {selectedCountry || "Select Country"}
                                        </div>

                                        {isOpen && (
                                            <div className="absolute z-10 w-full  border border-gray-300 rounded mt-1 shadow-md">
                                                <input
                                                    type="text"
                                                    placeholder="Search Country..."
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    className="w-full bg-white  outline-none border-b border-gray-200 placeholder:text-gray-400 text-md font-chivo py-3 px-[20px]"
                                                />
                                                <ul className="max-h-60 overflow-y-auto bg-white">
                                                    {filteredCountries.length > 0 ? (
                                                        filteredCountries.map((country, idx) => (
                                                            <li
                                                                key={idx}
                                                                onClick={() => {
                                                                    setSelectedCountry(country);
                                                                    setIsOpen(false);
                                                                    setSearchTerm("");
                                                                }}
                                                                className="px-3 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer"
                                                            >
                                                                {country}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li className="px-3 py-2 text-gray-400">No results found</li>
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Manual Country Input */}
                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="country" className="text-sm font-chivo mb-2 text-gray-700">Country *</label>
                                    <input
                                        id="country"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Country"
                                    />
                                </div>
                            </div>



                            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="City" className="text-sm font-chivo mb-2 text-gray-700">City *</label>
                                    <input
                                        id="City"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Enter City"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="postal-code" className="text-sm font-chivo mb-2 text-gray-700">Post Code *</label>
                                    <input
                                        id="post-code"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Enter Post Code"
                                    />
                                </div>
                            </div>



                            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="address" className="text-sm font-chivo mb-2 text-gray-700">Address Line 1 *</label>
                                    <input
                                        id="address1"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Enter Address"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="address" className="text-sm font-chivo mb-2 text-gray-700">Address Line 2 *</label>
                                    <input
                                        id="address2"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Enter Address"
                                    />
                                </div>
                            </div>


                            <h2 className="text-xl  font-chivo text-black mb-1">Salary Expectation</h2>

                            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">

                                <div className="flex-1 flex flex-col">
                                    {/* Salary Expectation Text */}

                                    <label htmlFor="salary1" className="text-sm font-chivo mb-2 text-gray-700">Lower Range £</label>
                                    <input
                                        id="salary1"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Lower Range £"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="salary2" className="text-sm font-chivo mb-2 text-gray-700">Upper Range £</label>
                                    <input
                                        id="salary2"
                                        className="outline-none border-none placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] border border-gray-300 rounded"
                                        type="text"
                                        placeholder="Upper Range £"
                                    />
                                </div>
                            </div>



                            <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                <div className="flex flex-col w-full lg:w-1/2 relative">
                                    <label htmlFor="salarySource" className="text-sm font-chivo mb-2 text-gray-700">
                                        Source
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={selectedSource}
                                            onChange={(e) => setSelectedSource(e.target.value)}
                                            id="salarySource"
                                            className="appearance-none border-none outline-none w-full border border-gray-300 text-gray-700 text-md font-chivo py-5 px-[30px] pr-12 rounded"
                                        >
                                            <option value="" disabled>Please select</option>
                                            <option value="social">Social media campaign</option>
                                            <option value="referral">Referral</option>
                                            <option value="walkin">Walk In</option>
                                            <option value="search">Search Engine</option>
                                            <option value="other">Other</option>
                                        </select>

                                        {/* Dropdown Icon */}
                                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                            <svg
                                                className="w-4 h-4 text-gray-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.937a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {(selectedSource === "referral" || selectedSource === "other") && (
                                    <div className="flex flex-col w-full lg:w-1/2">
                                        <label htmlFor="sourceName" className="text-sm font-chivo mb-2 text-gray-700">
                                            Source Name
                                        </label>
                                        <input
                                            id="sourceName"
                                            type="text"
                                            placeholder="Source Name"
                                            className="outline-none border-none border-gray-300 rounded py-5 px-[30px] placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo"
                                        />
                                    </div>
                                )}

                            </div>


                            <div className="flex flex-col w-full mb-[35px] md:mb-[56px]">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-chivo mb-2 text-gray-700"
                                >
                                    Cover Letter
                                </label>
                                <textarea
                                    id="cover-letter"
                                    name="cover-letter"
                                    className="w-full py-5 resize-none border-none outline-0 px-[30px] max-h-[150px] border border-gray-300 rounded placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo"
                                    cols="100"
                                    rows="10"
                                    placeholder="Cover Letter"
                                ></textarea>
                            </div>


                            <div className="flex  flex-col w-full mb-[35px] md:mb-[56px]">
                                <label
                                    htmlFor="resume"
                                    className="text-sm font-chivo mb-2 text-gray-700"
                                >
                                    Resume *
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    className="w-full bg-white  py-3 px-[30px] border-none border-gray-300 rounded text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-chivo file:bg-black file:text-white hover:file:bg-gray-800"
                                />
                            </div>



                            <div className="flex flex-col gap-5">
                                <button
                                    className="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 w-fit"
                                    type="submit"
                                >
                                    Submit Your Application
                                    <i>
                                        <img className="ml-[7px] w-[12px] filter-white" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" />
                                    </i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerDetailsPage;