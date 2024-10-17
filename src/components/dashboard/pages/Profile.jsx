import React from 'react';
import DashboardWrapper from '../components/DashboardWrapper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Profile() {

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/dashboard/profile/edit-profile'); // router setup for edit site
  };

  return (
    <DashboardWrapper>
      <h4>User Profile</h4>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
        {/* Profile Picture */}
        <img
          src="https://via.placeholder.com/150" // Replace with the image URL
          alt="Profile"
          style={{ borderRadius: '50%', width: '150px', height: '150px', backgroundColor: '#eae7d6' }}
        />

        {/* Profile Information */}
        <div>
          <h4>Profile Information</h4>
          <p><strong>First name:</strong> Kene</p>
          <p><strong>Last name:</strong> Ken</p>
          <p><strong>Email address:</strong> kene@xyz.com</p>
          <p><strong>Phone number:</strong> 123456789</p>
          <p><strong>Address:</strong> Lagos, Nigeria</p>

          {/* Edit Profile Button */}
          <Button
            variant="contained"
            sx={{ backgroundColor: "#1D676B", "&:hover":{ backgroundColor: '#2e8b57' }, color: "white" }}//sx={{ backgroundColor: 'seaGreen', '&:hover': { backgroundColor: '#2e8b57' }, "white" }}
            //href="/edit-profile" // This will link to the Edit Profile page
            style={{ marginTop: '1rem' }}
            onClick={handleEditProfile}
          >
            Edit Profile
          </Button>
        </div>
      </div>
    </DashboardWrapper>
  );
}

export default Profile;
