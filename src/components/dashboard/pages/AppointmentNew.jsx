import React from "react";
import DashboardWrapper from "../components/DashboardWrapper";
import DashboardHeader from "../components/DashboardHeader";
import { Box, Button, TextField } from "@mui/material";
import ReusableSelect from "../components/ReusableSelect";
import CustomDateRangePicker from "../components/CustomDateRangePicker";
import dayjs from "dayjs";

function AppointmentNew() {
  const [medicalDoctor, setMedicalDoctor] = React.useState("");
  const [selectedDateRange, setSelectedDateRange] = React.useState([
    dayjs("2023-01-01T10:00"),
    dayjs("2023-01-05T18:00"),
  ]);

  // Handle the onchange on the dropdown select for record type
  const handleChange = (event) => {
    setMedicalDoctor(event.target.value);
  };

  // Record types
  const medicalDoctorsData = [
    { value: "doctor_1", label: "Dr Palmer Smith" },
    { value: "doctor_2", label: "Dr Enoch David" },
    { value: "doctor_3", label: "Dr John Doe" },
  ];

  // Handle onchange event in the date-tiem picker
  const handleDateChange = (newDateRange) => {
    setSelectedDateRange(newDateRange);
    // console.log("Updated Date Range:", newDateRange);
  };

  // To handle creation of a new record
  const handleBookAppointment = () => {
    console.log("Heyyyy", selectedDateRange);
  };
  

  return (
    <DashboardWrapper>
      {/* Header - starts */}
      <DashboardHeader title="Book New Appointment" showBackArrow={true} />
      {/* Header - ends */}

      {/* Form - starts  */}
      <div className="lower-section">
        <div className="vault-form">
          <Box className="vault-form-row-single">
            <TextField
              label="Appointment Title?"
              id="filled-hidden-label-small"
              variant="outlined"
              size="small"
            />
          </Box>
          <Box className="vault-form-row-single">
            <ReusableSelect
              label="Select Medical Pactitioner"
              value={medicalDoctor}
              onChange={handleChange}
              options={medicalDoctorsData}
            />
          </Box>
          <Box className="vault-form-row-single">
            <CustomDateRangePicker
              initialValue={selectedDateRange}
              label="Proposed Date"
              onDateChange={handleDateChange}
            />
          </Box>
          <Box className="vault-form-row-single">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#1D676B", color: "white" }}
              onClick={() => handleBookAppointment()}
            >
              Schedule Now
            </Button>
          </Box>
        </div>
      </div>
      {/* Form - ends  */}
    </DashboardWrapper>
  );
}

export default AppointmentNew;
