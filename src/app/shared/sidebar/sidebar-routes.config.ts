import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    // {
    //     path: '', title: 'Dashboard', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
    //         { path: '/dashboard/testAnswer', title: 'Dashboard1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
    { path: '/DoctorDashboard/waiting', title: 'Chief Complaint', icon: 'ft-cloud', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [
        ] },
    { path: '/DoctorDashboard/waiting', title: 'HPI', icon: 'ft-command', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/DoctorDashboard/drugRecord', title: 'History', icon: 'ft-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/DoctorDashboard/waiting', title: 'Physical Examination', icon: 'ft-feather', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/DoctorDashboard/waiting', title: 'Assessment & Plan', icon: 'ft-list', class: 'ft-credit-card', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/DoctorDashboard/prescription', title: 'ePrescriptions', icon: 'ft-copy', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/DoctorDashboard/laboratoryRequest', title: 'Orders', icon: 'ft-crosshair', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/DoctorDashboard/waiting', title: 'Progress Notes', icon: 'ft-codepen', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/DoctorDashboard/labRecord', title: 'Paraclinical Results', icon: 'ft-monitor', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/DoctorDashboard/patientList', title: 'Patient List', icon: 'ft-list', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },








    // {
    //     path: '', title: 'Pages', icon: 'ft-copy', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/pages/forgotpassword', title: 'Forgot Password', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         // { path: '/pages/login', title: 'Login', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/register', title: 'Register', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/pages/error', title: 'Error', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
];
