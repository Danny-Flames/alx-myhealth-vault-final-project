import { useState } from 'react';
import DashboardWrapper from '../components/DashboardWrapper';
import { TextField, MenuItem, Button } from '@mui/material';

function MedicalTracking() {
  const [medications, setMedications] = useState([]);
  const [medicationName, setMedicationName] = useState('');
  const [frequency, setFrequency] = useState('');
  const [time, setTime] = useState('');  // State for selected time
  
  const handleAddMedication = () => {
    if (medicationName && frequency && time) {
      setMedications([...medications, { name: medicationName, frequency, time }]);
      setMedicationName('');
      setFrequency('');
      setTime('');
    }
  };

  // Generate options for the 24-hour time dropdown
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      const formattedHour = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      times.push(formattedHour);
    }
    return times;
  };

  return (
    <DashboardWrapper>
      <h4>Medical Tracking</h4>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        {/* Medication Name TextField */}
        <TextField
          label="Medication Name"
          variant="outlined"
          size="small"
          value={medicationName}
          onChange={(e) => setMedicationName(e.target.value)}
          sx={{ width: '30%' }}
        />

        {/* Frequency Dropdown */}
        <TextField
          select
          label="Frequency"
          variant="outlined"
          size="small"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          sx={{ width: '20%' }}
        >
          <MenuItem value="">Select Frequency</MenuItem>
          <MenuItem value="Morning">Morning</MenuItem>
          <MenuItem value="Afternoon">Afternoon</MenuItem>
          <MenuItem value="Night">Night</MenuItem>
        </TextField>

        {/* Time Dropdown (24-hour format) */}
        <TextField
          select
          label="Time"
          variant="outlined"
          size="small"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          sx={{ width: '20%' }}
        >
          <MenuItem value="">Select Time</MenuItem>
          {generateTimeOptions().map((timeOption) => (
            <MenuItem key={timeOption} value={timeOption}>
              {timeOption}
            </MenuItem>
          ))}
        </TextField>

        {/* Add Medication Button */}
        <Button variant="contained" onClick={handleAddMedication}
              sx={{ backgroundColor: "#1D676B", "&:hover": { backgroundColor: '#2e8b57' }, color: "white" }}//sx={{ backgroundColor: 'seaGreen', '&:hover': { backgroundColor: '#2e8b57' } }} 
         >
           Add Medication
        </Button>
      </div>

      {/* Medication List */}
      <ul>
        {medications.map((med, index) => (
          <li key={index}>
            {med.name} - {med.frequency} - {med.time}
          </li>
        ))}
      </ul>
    </DashboardWrapper>
  );
}


export default MedicalTracking;
