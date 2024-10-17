import React, { useState } from "react";
import DashboardWrapper from "../components/DashboardWrapper";
import DashboardHeader from "../components/DashboardHeader";
import { Box, Button, TextField } from "@mui/material";
import FileUpload from "../components/FileUpload"; // For changing profile picture

function EditProfile() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  // Handle file change for the profile picture
  const handleFileChange = (file) => {
    setProfileImage(file);
  };

  // Function to handle the form submission
  const handleUpdateProfile = () => {
    // Add logic to handle profile update here
    console.log("Profile updated:", { fullName, phoneNumber, address, profileImage });
  };

  return (
    <DashboardWrapper>
      {/* Header */}
      <DashboardHeader title="Edit Profile" showBackArrow={true} />

      {/* Form - starts */}
      <div className="lower-section">
        <div className="vault-form">
          <Box className="vault-form-row">
            <TextField
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              variant="outlined"
              size="small"
              sx={{ width: "48%" }}
            />
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              variant="outlined"
              size="small"
              sx={{ width: "48%" }}
            />
          </Box>
          <Box className="vault-form-row">
            <TextField
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              multiline
              rows={4}
              variant="outlined"
              sx={{ width: "48%" }}
            />
          </Box>
          <Box className="vault-form-row-single">
            <FileUpload
              buttonLabel="Change Profile Image"
              onFileChange={handleFileChange}
            />
          </Box>
          <Box className="vault-form-row-single">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#1D676B", color: "white" }}
              onClick={handleUpdateProfile}
            >
              Update Profile
            </Button>
          </Box>
        </div>
      </div>
      {/* Form - ends */}
    </DashboardWrapper>
  );
}

export default EditProfile;
