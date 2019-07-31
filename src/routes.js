
import Dashboard from "./views/Dashboard.jsx";
// import Notifications from "./views/Notifications.jsx";
import Guru from "./views/guru/Guru.jsx"
import UserPage from "./views/UserPage/UserPage.jsx";
import Absen from "./views/absen/Absen.jsx"
import Admin from "./views/admin/ManageAdmin.jsx"
import Siswa from "./views/siswa/Siswa.jsx"

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "business_bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/siswa",
    name: "Manage Siswa",
    icon: "education_hat",
    component: Siswa,
    layout: "/admin"
  },
  {
    path: "/guru",
    name: "Manage Guru",
    icon: "business_badge",
    component: Guru,
    layout: "/admin"
  },

  {
    path: "/Absen",
    name: "Absen Siswa",
    icon: "ui-1_calendar-60",
    component: Absen,
    layout: "/admin"
  },
  {
    path: "/Admin",
    name: "Manage Admin",
    icon: " ui-2_settings-90",
    component: Admin,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin"
  },


];
export default dashRoutes;
