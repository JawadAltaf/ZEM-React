import { Route } from 'react-router-dom';
import AdminLayout from '../modules/portal/admin/layouts/AdminLayout';
import Report from '../modules/portal/admin/pages/Report';
import DashboardHome from '../modules/portal/admin/pages/DashboardHome';
import Profile from '../modules/portal/admin/pages/Profile';

const AdminRoutes = () => (
    <Route path="/admin" element={<AdminLayout />}>
        <Route path='dashboard' element={<DashboardHome />} />
        <Route path="organization-profile" element={<Profile />} />
        <Route path="reports" element={<Report />} />

        <Route index element={<DashboardHome />} />
    </Route>
);

export default AdminRoutes;
