import React, { useState } from "react";
import DashboardWrapper from "../components/DashboardWrapper"; // Adjust the import path as needed
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  maxWidth: "500px",
  margin: "0 auto",
  padding: "20px",
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function EditProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
    console.log("File:", file);
    // Here you would typically send the data to your backend
  };

  return (
    <DashboardWrapper>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Edit Profile
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            multiline
            rows={4}
            required
          />
          <Box>
            <Button
              component="label"
              variant="contained"
              sx={{ marginRight: "10px", backgroundColor: "#1D676B", "&:hover": { backgroundColor: '#2e8b57' }, color: "white" }} 
            >
              Change Image
              <VisuallyHiddenInput
                type="file"
                onChange={handleFileChange}
                accept="image/*"
              />
            </Button>
            {file && <Typography>{file.name}</Typography>}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
                variant="outlined"
                sx={{color: 'black', borderColor: "#1D676B", "&:hover": {backgroundColor: '#2e8b57', borderColor: "#2e8b57",} }} >
                Cancel
            </Button>
            <Button type="submit" variant="contained" sx={{ backgroundColor: "#1D676B", "&:hover": { backgroundColor: '#2e8b57' }, color: "white" }}>
              Save Changes
            </Button>
          </Box>
        </StyledForm>
      </Box>
    </DashboardWrapper>
  );
}

export default EditProfile;
