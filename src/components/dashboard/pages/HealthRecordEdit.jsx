import React, { useState } from "react";
import "./HealthRecord.css";
import DashboardWrapper from "../components/DashboardWrapper";
import DashboardHeader from "../components/DashboardHeader";
import { Box, Button, TextField, Typography } from "@mui/material";
import ReusableSelect from "../components/ReusableSelect";
import FileUpload from "../components/FileUpload";

function HealthRecordEdit() {
  const [recordType, setRecordType] = React.useState("");

  // Handle the onchange on the dropdown select for record type
  const handleChange = (event) => {
    setRecordType(event.target.value);
  };

  // To handle onChnge on record file
  const handleFileChange = (file) => {
    console.log("File uploaded:", file);
  };

  // Record types
  const recordTypeOptions = [
    { value: "lab_report", label: "Lab Report" },
    { value: "surgical_report", label: "Surgical Report" },
    { value: "prescription", label: "Prescription" },
    { value: "consultation_report", label: "Consultation Report" },
    { value: "imaging_report", label: "Imaging Report" },
    { value: "treatment_plan", label: "Treatment Plan" },
    { value: "mental_health_assessment", label: "Mental Health Assessment" },
    { value: "dental_record", label: "Dental Record" },
    { value: "vaccination_report", label: "Vaccination Report" },
    { value: "fitness_report", label: "Fitness Report" },
    { value: "nutritional_assessment", label: "Nutritional Assessment" },
  ];

  // To handle creation of a new record
  const handleCreateRecord = () => {
    console.log("Heyyyy");
  };

  return (
    <DashboardWrapper>
      {/* Header - starts */}
      <DashboardHeader title="Edit Record" showBackArrow={true} />
      {/* Header - ends */}

      {/* Form - starts  */}
      <div className="lower-section">
        <div className="flex-box-container">
          {/* Left part - starts  */}
          <div className="vault-form">
            <Box className="vault-form-row">
              <TextField
                label="Record Name"
                id="filled-hidden-label-small"
                variant="outlined"
                size="small"
                sx={{ width: "48%" }}
              />
              <TextField
                label="Health Care Provider"
                id="filled-hidden-label-small"
                variant="outlined"
                size="small"
                sx={{ width: "48%" }}
              />
            </Box>
            <Box className="vault-form-row">
              <TextField
                id="filled-multiline-static"
                label="Diagnosis"
                multiline
                rows={4}
                variant="outlined"
                sx={{ width: "48%" }}
              />
              <TextField
                id="filled-multiline-static"
                label="Additional Notes"
                multiline
                rows={4}
                variant="outlined"
                sx={{ width: "48%" }}
              />
            </Box>
            <Box className="vault-form-row-single">
              <ReusableSelect
                label="Record Type"
                value={recordType}
                onChange={handleChange}
                options={recordTypeOptions}
              />
            </Box>
            <Box className="vault-form-row-single">
              <FileUpload
                buttonLabel="Change Medical Record File"
                onFileChange={handleFileChange}
              />
            </Box>
            <Box className="vault-form-row-single">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#1D676B", color: "white" }}
                onClick={() => handleCreateRecord()}
              >
                Update Record
              </Button>
            </Box>
          </div>
          {/* Left part - ends  */}

          {/* Right part - starts  */}
          <div className="vault-image-preview-box">
            <img src="assets/img/medical_report.webp" alt="medical_report" />
          </div>
          {/* Right part - ends  */}
        </div>
        {/* Form - ends  */}
      </div>
    </DashboardWrapper>
  );
}

export default HealthRecordEdit;
