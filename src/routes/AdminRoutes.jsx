import { Routes, Route } from 'react-router-dom';
import Home from '../modules/portal/admin/pages/Home/Home';


const AdminRoutes = () => {
    return [
        <>
             <Route key="admin-home" path="/admin-dashboard" element={<Home />} />

        </>
    ]
}

export default AdminRoutes;






// admin route is tarah banana hay

// routes/AdminRoutes.jsx
// import { Route } from 'react-router-dom';
// import Dashboard from '../modules/portal/admin/pages/Dashboard';
// import Settings from '../modules/portal/admin/pages/Settings';
// import AdminLayout from '../modules/portal/admin/index';

// export default function AdminRoutes() {
//   return [
//     <Route path="/admin" element={<AdminLayout />} key="/admin">
//       <Route path="dashboard" element={<Dashboard />} />,
//       <Route path="settings" element={<Settings />} />,
//     </Route>
//   ];
// }
