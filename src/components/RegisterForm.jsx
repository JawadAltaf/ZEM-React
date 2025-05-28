import { Link } from 'react-router-dom';
import '../styles/index.css';
import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';



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

const RegisterForm = () => {
    const Dropdownref = useRef(null)
    const [selectedCountry, setSelectedCountry] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState(countries);


    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [generatedPassword, setGeneratedPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [copied, setCopied] = useState(false);

    const checks = {
        lowercase: /[a-z]/.test(password),
        uppercase: /[A-Z]/.test(password),
        number: /\d/.test(password),
        special: /[!@#$%^&*]/.test(password),
        length: password.length >= 8,
    };




    const generatePassword = () => {
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialChars = "!@#$%^&*";
        const allChars = lowercase + uppercase + numbers + specialChars;

        let password = [
            lowercase[Math.floor(Math.random() * lowercase.length)],
            uppercase[Math.floor(Math.random() * uppercase.length)],
            numbers[Math.floor(Math.random() * numbers.length)],
            specialChars[Math.floor(Math.random() * specialChars.length)],
        ];

        for (let i = password.length; i < 8; i++) {
            password.push(allChars[Math.floor(Math.random() * allChars.length)]);
        }

        // Shuffle password
        password = password.sort(() => Math.random() - 0.5);

        const finalPassword = password.join("");

        // 🔄 Update all states
        setGeneratedPassword(finalPassword);
        setPassword(finalPassword);
        setConfirmPassword(finalPassword);

    };


    useEffect(() => {
        $("input[name='registerAs']").on("change", function () {
            if ($(this).val() === "user") {
                // Clear company fields
                $("#companyFields")
                    .find("input, select, textarea")
                    .val("");

                $("#userFields").show();
                $("#companyFields").hide();
            } else {
                // Clear user fields
                $("#userFields")
                    .find("input, select, textarea")
                    .val("");

                $("#userFields").hide();
                $("#companyFields").show();
            }
        });

        // Trigger once on load
        $("input[name='registerAs']:checked").trigger("change");
    }, []);







    const HandleCopied = () => {
        if (!generatedPassword) return;

        navigator.clipboard.writeText(generatedPassword);
        setCopied(true);
        // setToastVisible(true);

        toast.success("Password copied!", {
            duration: 3000,
            style: {
                background: '#4CAF50',
                color: '#fff',
            },
        });


        setTimeout(() => {
            setCopied(false);
        }, 3000); // Icon back after 3 seconds


    }




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
            <div className="bg-[#BEE1E6] full-width bg-bg-6 px-5 text-center flex flex-col items-center justify-center pt-[127px] pb-[100px]  ">
                <div >
                    <h2 className="font-bold font-chivo text-[35px] lg:text-[40px] md:text-[30px] leading-[30px] md:text-heading-3 mb-[50px]">
                        Let's Register Now
                    </h2>

                    <form className="bg-white  w-full register_page_form p-8 shadow-3 rounded-xl md:p-10 lg:p-12" action="#">

                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <div className="relative w-full">
                                <input
                                    className="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                    type="text"
                                    placeholder="Enter Your User Name"
                                    required
                                />
                                <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">
                                    User Name *
                                </span>

                            </div>

                            <div className="relative w-full">
                                <input
                                    className="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                    type="text"
                                    placeholder="Enter your Forename "
                                    required
                                />
                                <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">
                                    Forename *
                                </span>
                            </div>
                        </div>


                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <div className="relative w-full">
                                <input
                                    className="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                    type="text"
                                    placeholder="Enter Your Surname "
                                    required
                                />
                                <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">
                                    Surname *
                                </span>

                            </div>

                            <div className="relative w-full">
                                <input
                                    className="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                    type="text"
                                    placeholder="Enter Your Email"
                                    required
                                />
                                <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">
                                    Email *
                                </span>
                            </div>
                        </div>





                        <div className="relative mb-6">
                            <input
                                className="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                type="text"
                                placeholder="Enter Your Phone Number"
                                required
                            />
                            <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">
                                Contact Number*
                            </span>
                        </div>



                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <div className="relative w-full">
                                <input
                                    className="outline-none flex-1 pr-10 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                    required
                                    type={showPassword ? "text" : "password"}
                                    name="retype-password"
                                    placeholder="Enter Your Password"
                                    id="retype-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px] peer-focus:text-green-900">
                                    Password*
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]"
                                >
                                    <i className={`fa-solid text-gray-400 ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </button>
                            </div>

                            <div className="relative w-full">
                                <input
                                    className="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                    type="password"
                                    placeholder="Enter Your Confirm Password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <span className="text-gray-400 text-sm px-1 font-chivo  font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">
                                    Confirm Password *
                                </span>
                            </div>
                        </div>


                        <div className="text-sm font-chivo text-gray-600 space-y-1 pl-1">
                            <ChecklistItem label="1 lowercase letter" isValid={checks.lowercase} />
                            <ChecklistItem label="1 uppercase letter" isValid={checks.uppercase} />
                            <ChecklistItem label="1 number (0–9)" isValid={checks.number} />
                            <ChecklistItem label="1 special character (!@#$%^&*)" isValid={checks.special} />
                            <ChecklistItem label="At least 8 characters" isValid={checks.length} />
                        </div>



                        <div className="flex flex-col gap-4 items-center mb-6 mt-8 md:flex-row md:gap-4">
                            {/* Input Field (full width on mobile, flex-1 on desktop) */}
                            <div className="relative w-full md:flex-1">
                                <input
                                    type="text"
                                    readOnly
                                    value={generatedPassword}
                                    placeholder="Generated Password"
                                    className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px] h-[48px]"
                                />
                                <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px] peer-focus:text-green-900">
                                    Generated Password
                                </span>

                                <button
                                    type="button"
                                    onClick={HandleCopied}
                                    className="absolute top-1/2 -translate-y-1/2 right-3 hover:opacity-70"
                                    title="Copy to clipboard"
                                >
                                    <i className={`text-gray-500 ${copied ? "fa-solid text-green-500 fa-check" : "fa-regular fa-copy"}`}></i>
                                </button>
                            </div>

                            {/* Button (full width on mobile, flex-1 on desktop) */}
                            <button
                                onClick={generatePassword}
                                type="button"
                                className="bg-[#409299] w-full md:flex-1 text-white font-chivo text-sm rounded-[4px] h-[48px] flex items-center justify-center hover:opacity-80 transition-all"
                            >
                                Generate Password
                            </button>
                        </div>





                        <div className="space-y-6 mt-6">
                            {/* Radio Buttons */}
                            <div className="flex flex-col md:flex-row justify-around lg:justify-around lg:items-center md:items-start">
                                <label className="flex  items-center gap-2">
                                    <input type="radio" name="registerAs" value="user" defaultChecked />
                                    <span className="text-md font-bold text-gray-700 ">Register as a User</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="registerAs" value="company" />
                                    <span className="text-md font-bold text-gray-700">Register as a Company</span>
                                </label>
                            </div>

                            {/* User Fields */}
                            <div id="userFields" className="space-y-4">
                                <div className="relative w-full user_fields">
                                    <select className="outline-none pr-10 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] appearance-none focus:border-green-900 focus:border-[2px]">
                                        <option>Please Select</option>
                                        <option>Employeed</option>
                                        <option>Self Employee</option>
                                    </select>

                                    {/* Custom dropdown icon */}
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>

                                    {/* Floating label */}
                                    <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                        Employment Type *
                                    </span>
                                </div>


                                <div className="relative w-full user_fields">
                                    <input
                                        type="text"
                                        className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                        placeholder="Enter Your Address Line 1"
                                    />
                                    <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                        Address Line 1
                                    </span>
                                </div>

                                <div className="relative w-full user_fields">
                                    <input
                                        type="text"
                                        className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                        placeholder="Enter Your Address Line 2"
                                    />
                                    <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                        Address Line 2
                                    </span>
                                </div>

                                <div className="flex flex-col gap-4 md:flex-row md:gap-4 user_fields">
                                    <div className="relative w-full md:w-1/3">
                                        <input
                                            type="number"
                                            className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                        />
                                        <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                            Age
                                        </span>
                                    </div>

                                    <div className="relative w-full md:w-1/3">
                                        <input
                                            type="text"
                                            className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                        />
                                        <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                            Height
                                        </span>
                                    </div>

                                    <div className="relative w-full md:w-1/3">
                                        <input
                                            type="text"
                                            className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                        />
                                        <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                            Weight
                                        </span>
                                    </div>
                                </div>

                            </div>

                            {/* Company Fields */}
                            <div id="companyFields" className="space-y-4 hidden">
                                <div className="relative w-full company_fields ">
                                    <input
                                        type="text"
                                        className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                        placeholder="Enter Your Company Name"
                                    />
                                    <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                        Company Name
                                    </span>
                                </div>

                                <div className="relative w-full company_fields">
                                    <input
                                        type="text"
                                        className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                        placeholder="Enter Your Company No"
                                    />
                                    <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                        Company Reg Number
                                    </span>
                                </div>

                                <div className="relative w-full company_fields">
                                    <input
                                        type="text"
                                        className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                        placeholder="Enter Your Designation"
                                    />
                                    <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                        Your Designation
                                    </span>
                                </div>

                                <div className="relative w-full company_fields">
                                    <input
                                        type="text"
                                        className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                        placeholder="Enter Your Company Address Line 1"
                                    />
                                    <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                        Company Address Line 1
                                    </span>
                                </div>

                                <div className="relative w-full company_fields mb-6">
                                    <input
                                        type="text"
                                        className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                        placeholder="Enter Your Company Address Line 2"
                                    />
                                    <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                        Company Address Line 2
                                    </span>
                                </div>
                            </div>

                        </div>



                        <div className="flex flex-col gap-4 mt-8 md:flex-row md:gap-4">
                            {/* Country Selector */}


                            <div ref={Dropdownref} className="relative w-full md:w-1/3">
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="cursor-pointer border border-[#C2C8D0] text-start  rounded-[4px] py-[14px] px-[16px] focus-within:border-green-900"
                                >
                                    {selectedCountry || "Search Country..."}
                                </div>

                                {isOpen && (
                                    <div className="absolute z-10 w-full bg-white border border-[#C2C8D0] rounded mt-1 shadow-md">
                                        <input
                                            type="text"
                                            placeholder="Search Country..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full px-3 py-2 outline-none border-b  border-gray-200 placeholder:text-sm"
                                        />
                                        <ul className="max-h-60 overflow-y-auto">
                                            {filteredCountries.length > 0 ? (
                                                filteredCountries.map((country, idx) => (
                                                    <li
                                                        key={idx}
                                                        onClick={() => {
                                                            setSelectedCountry(country);
                                                            setIsOpen(false);
                                                            setSearchTerm("");
                                                        }}
                                                        className="px-3 py-2 hover:bg-gray-100 text-gray-400  text-start cursor-pointer"
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

                                <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                    Country *
                                </span>
                            </div>

                            {/* Country Name */}
                            <div className="relative w-full md:w-1/3">
                                <input
                                    type="text"
                                    placeholder="Enter Your Country"
                                    className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                />
                                <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                    Country *
                                </span>
                            </div>

                            {/* City Name */}
                            <div className="relative w-full md:w-1/3">
                                <input
                                    type="text"
                                    placeholder="Enter Your City"
                                    className="outline-none pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                />
                                <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-5 top-[10px]">
                                    City *
                                </span>
                            </div>
                        </div>




                        <div className="relative  mt-10">
                            <input
                                className="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                type="text"
                                placeholder="Enter Your Post Code"
                                required
                            />
                            <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">
                                Post Code*
                            </span>
                        </div>

                        <div className="flex items-center gap-[7px] mt-6">
                            <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                                <input
                                    className="opacity-0 cursor-pointer relative z-10 peer"
                                    id="term1"
                                    type="checkbox"
                                    name="term1"
                                />
                                <img
                                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                                    src="assets/images/icons/icon-check-gray.svg"
                                    alt="checked icon"
                                />
                                <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-[#3B4256]" />
                            </div>
                            <span className="text-sm font-bold text-gray-500">
                                By Registering you confirm that you accept the Terms & conditions and privacy policy
                            </span>
                        </div>

                        <div className="flex items-center  mb-6 gap-[7px]">
                            <div className="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                                <input
                                    className="opacity-0 cursor-pointer relative z-10 peer"
                                    id="term2"
                                    type="checkbox"
                                    name="term2"
                                />
                                <img
                                    className="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"
                                    src="assets/images/icons/icon-check-gray.svg"
                                    alt="checked icon"
                                />
                                <div className="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-[#3B4256]" />
                            </div>
                            <span className="text-sm font-bold text-gray-500">
                                I consent to having this website store my submitted information so they can respond to my inquiry.

                            </span>
                        </div>


                        <button
                            className="mb-6 w-full text-white bg-[#409299] transition-opacity duration-200 text-heading-6 font-chivo font-bold shadow-sm py-[13px] hover:opacity-75"
                            type="submit"
                        >
                            Register
                        </button>

                        <div className="flex gap-2">
                            <p className="text-text text-gray-500">Already have an account?</p>
                            <div className="text-[#409299] hover:opacity-70" href="#">
                                <Link to={'/login'} className="text-text">Login Here</Link>
                            </div>
                        </div>
                    </form>
                </div >
            </div >

            <Toaster />

        </>
    )
}




const ChecklistItem = ({ label, isValid }) => {
    return (
        <div className={`flex items-center gap-2 ${isValid ? "text-green-700" : "text-gray-500"}`}>
            <span className="w-4 h-4 flex items-center justify-center ">
                {isValid ? <i className="fa-solid fa-check"></i> : <i className="fa-regular  fa-file-lines"></i>}
            </span>
            <span>{label}</span>
        </div>
    );
};

export default RegisterForm;