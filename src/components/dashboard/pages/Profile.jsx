import React from 'react';
import DashboardWrapper from '../components/DashboardWrapper';
import { Box, Avatar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Profile() {
  const profileData = {
    username: 'Frank',
    firstName: 'Franklin',
    lastName: 'Baddest',
    email: 'frank@alx.com',
    phoneNumber: '99393u893',
    groups: 'Long life',
  };

  return (
    <DashboardWrapper>
      <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4, p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Avatar sx={{ width: 100, height: 100, bgcolor: 'secondary.main' }}>
            {profileData.firstName[0]}
          </Avatar>
          <Typography variant="h5" sx={{ mt: 2 }}>Profile Picture</Typography>
        </Box>

        {Object.entries(profileData).map(([key, value]) => (
          <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </Typography>
            <Typography variant="body1">{value || '-'}</Typography>
          </Box>
        ))}

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#1D676B", "&:hover": { backgroundColor: '#2e8b57' }, color: "white" }}
            component={Link}
            to="/dashboard/editprofile" 
          >
            Edit Profile
          </Button>
        </Box>
      </Box>
    </DashboardWrapper>
  );
}

export default Profile;
