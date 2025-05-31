import { Route } from 'react-router-dom';
import AdminLayout from '../modules/portal/admin/layouts/AdminLayout';
import Report from '../modules/portal/admin/pages/Report';
import DashboardHome from '../modules/portal/admin/pages/DashboardHome';
import Profile from '../modules/portal/admin/pages/Profile';
import Director_profile_list from '../modules/portal/admin/pages/Director_profile_list';
import Upload_company from '../modules/portal/admin/pages/Upload_company';
import Document_list from '../modules/portal/admin/pages/Document_list';
import Options_list from '../modules/portal/admin/pages/Options_list';

const AdminRoutes = () => (
    <Route path="/admin" element={<AdminLayout />}>
        <Route path='dashboard' element={<DashboardHome />} />
        <Route path="organization-profile" element={<Profile />} />
        <Route path="director-profile-list" element={<Director_profile_list />} />
        <Route path="upload-company-profile" element={<Upload_company />} />
        <Route path="organization-document" element={<Document_list />} />
        <Route path="organization-options" element={<Options_list />} />
        <Route path="reports" element={<Report />} />

        <Route index element={<DashboardHome />} />
    </Route>
);

export default AdminRoutes;
