import { useEffect, useState } from 'react';

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    Organization_detail: { name: '', trading_name: '', corporated_date: '', nature_sector: '', web_address: '', licence_number: '', business_sector: '', company_house_reg: '' },
    address: { headOffice_reg_address: '', city: '', country_province: '', post_code: '', country: '', email: '', telephone: '', mobile: '' },
    authorising: { Title: '', Given_name: '', Family_name: '', Phone: '', Mobile: '', Email: '', Position_organization: '', resresentative: '' },
    Contract_details: { Given_name: '', Family_name: '', Phone: '', Mobile: '', Email: '', Position_organization: '', Representative: '' },
    Licence_dates: { licence_start_date: '', licence_expiry_date: '', Licence_rating: '' },
    Compliance: { five_years: '', three_years: '', details_one: '', details_two: '' },
    financial_info: { start_date: '', VAT_start_date: '' }
  });

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 w-full px-2 dark:bg-[#1F2937]">
      <h1 className='mb-4 text-3xl text-[#2a4263] font-bold dark:text-white'>Organization Profile</h1>
      <form onSubmit={handleSubmit} className="w-full mx-auto space-y-6">
        {/* Organization detail */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-white border-b bg-[#2a4263] rounded p-2 pb-2">Organization Details</h2>
            <div className="grid grid-cols-1  gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                <input
                  type="text"
                  value={formData.Organization_detail.name}
                  onChange={(e) => handleChange('Organization_detail', 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Trading Name</label>
                <input
                  type="text"
                  value={formData.Organization_detail.trading_name}
                  onChange={(e) => handleChange('Organization_detail', 'trading_name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">In Corporated Date</label>
                <input
                  type="text"
                  value={formData.Organization_detail.corporated_date}
                  onChange={(e) => handleChange('Organization_detail', 'corporated_date', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nature of Sector</label>
                <input
                  type="text"
                  value={formData.Organization_detail.nature_sector}
                  onChange={(e) => handleChange('Organization_detail', 'nature_sector', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Web Address</label>
                <input
                  type="text"
                  value={formData.Organization_detail.web_address}
                  onChange={(e) => handleChange('Organization_detail', 'web_address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sponsor Licence Number</label>
                <input
                  type="text"
                  value={formData.Organization_detail.licence_number}
                  onChange={(e) => handleChange('Organization_detail', 'licence_number', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Sector</label>
                <input
                  type="text"
                  value={formData.Organization_detail.business_sector}
                  onChange={(e) => handleChange('Organization_detail', 'business_sector', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company House Registration Number</label>
                <input
                  type="text"
                  value={formData.Organization_detail.company_house_reg}
                  onChange={(e) => handleChange('Organization_detail', 'company_house_reg', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Organization Address */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4  bg-[#2a4263] rounded text-white p-2 border-b pb-2">Organization Address</h2>

            {/* Full width input (Street Address) */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Head Office or Registered / Trading Address</label>
              <input
                type="text"
                value={formData.address.headOffice_reg_address}
                onChange={(e) => handleChange('address', 'headOffice_reg_address', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Two inputs in one row (City + ZIP) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  value={formData.address.city}
                  onChange={(e) => handleChange('address', 'city', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">County/Province</label>
                <input
                  type="text"
                  value={formData.address.country_province}
                  onChange={(e) => handleChange('address', 'country_province', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                <input
                  type="text"
                  value={formData.address.post_code}
                  onChange={(e) => handleChange('address', 'post_code', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  value={formData.address.country}
                  onChange={(e) => handleChange('address', 'country', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Four inputs - 3 in first row, 1 in second */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    value={formData.address.email}
                    onChange={(e) => handleChange('address', 'email', e.target.value)}
                    required
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telephone</label>
                  <input
                    value={formData.address.telephone}
                    onChange={(e) => handleChange('address', 'telephone', e.target.value)}
                    required
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                  <input
                    value={formData.address.mobile}
                    onChange={(e) => handleChange('address', 'mobile', e.target.value)}
                    required
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Authorising officer detail */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4  bg-[#2a4263] rounded text-white p-2 border-b pb-2">Authorising Officer Details</h2>

            {/* Full width input (Street Address) */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={formData.authorising.Title}
                onChange={(e) => handleChange('authorising', 'Title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Two inputs in one row (City + ZIP) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Given Name</label>
                <input
                  type="text"
                  value={formData.authorising.Given_name}
                  onChange={(e) => handleChange('authorising', 'Given_name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Family Name</label>
                <input
                  type="text"
                  value={formData.authorising.Family_name}
                  onChange={(e) => handleChange('authorising', 'Family_name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="text"
                  value={formData.authorising.Phone}
                  onChange={(e) => handleChange('authorising', 'Phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                <input
                  type="text"
                  value={formData.authorising.Mobile}
                  onChange={(e) => handleChange('authorising', 'Mobile', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Four inputs - 3 in first row, 1 in second */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="text"
                value={formData.authorising.Email}
                onChange={(e) => handleChange('authorising', 'Email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>


            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Position within the Organization</label>
              <input
                type="text"
                value={formData.authorising.Position_organization}
                onChange={(e) => handleChange('authorising', 'Position_organization', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>



            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Representative</label>
              <input
                type="text"
                value={formData.authorising.resresentative}
                onChange={(e) => handleChange('authorising', 'resresentative', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>



          </div>
        </div>



        {/* Key Contact Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4  bg-[#2a4263] rounded text-white p-2 border-b pb-2">Key Contact Details</h2>

            {/* Two inputs in one row (City + ZIP) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Given Name</label>
                <input
                  type="text"
                  value={formData.Contract_details.Given_name}
                  onChange={(e) => handleChange('Contract_details', 'Given_name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Family Name</label>
                <input
                  type="text"
                  value={formData.Contract_details.Family_name}
                  onChange={(e) => handleChange('Contract_details', 'Family_name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="text"
                  value={formData.Contract_details.Phone}
                  onChange={(e) => handleChange('Contract_details', 'Phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                <input
                  type="text"
                  value={formData.Contract_details.Mobile}
                  onChange={(e) => handleChange('Contract_details', 'Mobile', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Four inputs - 3 in first row, 1 in second */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="text"
                value={formData.Contract_details.Email}
                onChange={(e) => handleChange('Contract_details', 'Email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>


            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Position within the Organization</label>
              <input
                type="text"
                value={formData.Contract_details.Position_organization}
                onChange={(e) => handleChange('Contract_details', 'Position_organization', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>



            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Representative</label>
              <input
                type="text"
                value={formData.Contract_details.Representative}
                onChange={(e) => handleChange('Contract_details', 'Representative', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>



          </div>
        </div>


        {/* Licence key dates */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4  bg-[#2a4263] rounded text-white p-2 border-b pb-2">Licence Key Dates</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Licence Start Date</label>
              <input
                type="date"
                value={formData.Licence_dates.licence_start_date}
                onChange={(e) => handleChange('Licence_dates', 'licence_start_date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>


            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Licence Expiry Date</label>
              <input
                type="date"
                value={formData.Licence_dates.licence_expiry_date}
                onChange={(e) => handleChange('Licence_dates', 'licence_expiry_date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Licence Rating</label>
              <input
                type="text"
                value={formData.Licence_dates.Licence_rating}
                onChange={(e) => handleChange('Licence_dates', 'Licence_rating', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>



          </div>
        </div>






        {/* Compliance */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 bg-[#2a4263] rounded text-white p-2 border-b pb-2">Compliance</h2>

            {/* First Yes/No Dropdown with Textarea */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Have you changed organization/Trading Name in the last 5 years?</label>
              <select
                value={formData.Compliance.five_years}
                onChange={(e) => handleChange('Compliance', 'five_years', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">If yes, please provide details</label>
              <textarea
                value={formData.Compliance.details_one}
                onChange={(e) => handleChange('Compliance', 'details_one', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Second Yes/No Dropdown with Textarea */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Has your organization faced any penalties (e.g., recruiting illegal employees) in the last 3 years?</label>
              <select
                value={formData.Compliance.three_years}
                onChange={(e) => handleChange('Compliance', 'three_years', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">If yes, please provide details</label>
              <textarea
                value={formData.Compliance.details_two}
                onChange={(e) => handleChange('Compliance', 'details_two', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>



        {/* Financial Information */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4  bg-[#2a4263] rounded text-white p-2 border-b pb-2">Financial Information</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Financial Account Period Start Date</label>
              <input
                type="date"
                value={formData.financial_info.start_date}
                onChange={(e) => handleChange('financial_info', 'start_date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>


            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">VAT Start Date</label>
              <input
                type="date"
                value={formData.financial_info.VAT_start_date}
                onChange={(e) => handleChange('financial_info', 'VAT_start_date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;