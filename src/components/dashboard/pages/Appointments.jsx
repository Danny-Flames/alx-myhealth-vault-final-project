import React from "react";
import DashboardWrapper from "../components/DashboardWrapper";
import DashboardHeader from "../components/DashboardHeader";
import { Box, Button, Typography } from "@mui/material";
import { MdDelete, MdSchedule } from "react-icons/md";
import AppointmentCard from "../components/AppointmentCard";
import CustomDateRangePicker from "../components/CustomDateRangePicker";
import { useNavigate } from "react-router-dom";

const appointmentsData = [
  {
    id: "XWQGH-1",
    title: "Appointment At Faith Clinics",
    status: "Upcoming",
    date: "Oct 21, 2024",
    time: "11:00 - 12: 00",
  },
  {
    id: "XWQGH-2",
    title: "Appointment At John's Smith",
    status: "Completed",
    date: "Oct 06, 2024",
    time: "14:00 - 15: 00",
  },
  {
    id: "XWQGH-3",
    title: "Appointment At FMC, Lagos",
    status: "Upcoming",
    date: "Nov 16, 2024",
    time: "16:00 - 17: 00",
  },
];

function Appointments() {
  const navigate = useNavigate();

  // To handle the navigation to the page for creating a new appointment
  const handleBookAppointment = () => {
    navigate("/dashboard/appointments/book-new");
  }; 

  const handleReschduleAppointment = (id) => {
    navigate(`/dashboard/appointments/reschedule/${id}`);
  };

  return (
    <DashboardWrapper>
      {/* Header - starts */}
      <DashboardHeader
        title="Appointments"
        rightElement={
          <span>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#1D676B", color: "white" }}
              onClick={() => handleBookAppointment()}
            >
              Schedule Appointment
            </Button>
          </span>
        }
      />
      {/* Header - ends */}

      {/* List of appointments  */}
      <Box as="div" className="table" sx={{ marginTop: "4%" }}>
        {appointmentsData?.length > 0
          ? appointmentsData.map((item, index) => (
              <AppointmentCard item={item} handleReschduleAppointment={handleReschduleAppointment} />
            ))
          : "No Appointments"}
      </Box>

    </DashboardWrapper>
  );
}

export default Appointments;
