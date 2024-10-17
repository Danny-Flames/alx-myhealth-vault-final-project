import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/website/LandingPage";
import Dashboard from "./components/dashboard/pages/Dashboard";
import LoginPage from "./components/website/LoginPage";
import RegisterPage from "./components/website/RegisterPage";
import ContactPage from "./components/website/ContactPage";
import HealthRecord from "./components/dashboard/pages/HealthRecord";
import Settings from "./components/dashboard/pages/Settings";
import Profile from "./components/dashboard/pages/Profile";
import Appointments from "./components/dashboard/pages/Appointments";
import HealthRecordCreate from "./components/dashboard/pages/HealthRecordCreate";
import HealthRecordView from "./components/dashboard/pages/HealthRecordView";
import HealthRecordEdit from "./components/dashboard/pages/HealthRecordEdit";
import AppointmentNew from "./components/dashboard/pages/AppointmentNew";
import AppointmentReschedule from "./components/dashboard/pages/AppointmentReschedule";
import MedicalTracking from "./components/dashboard/pages/MedicalTracking";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/health-records" element={<HealthRecord />} />
        <Route
          path="/dashboard/health-records/create"
          element={<HealthRecordCreate />}
        />
        <Route
          path="/dashboard/health-records/edit"
          element={<HealthRecordEdit />}
        />
        <Route
          path="/dashboard/health-records/:id"
          element={<HealthRecordView />}
        />
        <Route path="/dashboard/appointments" element={<Appointments />} />
        <Route path="/dashboard/appointments/book-new" element={<AppointmentNew />} />
        <Route path="/dashboard/appointments/reschedule/:id" element={<AppointmentReschedule />} />
        <Route path="/dashboard/medication-tracking" element={<MedicalTracking />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/users-management" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
