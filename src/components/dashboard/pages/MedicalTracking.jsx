import { useState } from 'react';
import DashboardWrapper from '../components/DashboardWrapper';
import { TextField, MenuItem, Button } from '@mui/material';

function MedicalTracking() {
  const [medications, setMedications] = useState([]);
  const [medicationName, setMedicationName] = useState('');
  const [frequency, setFrequency] = useState('');
  const [time, setTime] = useState('');  
  const [frequencies, setFrequencies] = useState([]);  
  const [isMedicationNameSet, setIsMedicationNameSet] = useState(false);  // New state to track if medication name is set

  // Add frequency and time to the list of frequencies
  const handleAddFrequency = () => {
    if (frequency && time) {
      setFrequencies([...frequencies, { frequency, time }]);
      setFrequency('');
      setTime('');
    }
  };

  // Submit the medication after the user is done adding frequencies
  const handleSubmit = () => {
    if (medicationName && frequencies.length > 0) {
      setMedications([...medications, { name: medicationName, frequencies }]);
      setMedicationName('');
      setFrequencies([]);
      setIsMedicationNameSet(false);  // Reset medication name input to allow a new one
    }
    console.log(medications);  // Log or process the medications
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

  // Handle when medication name is set
  const handleMedicationNameSet = () => {
    if (medicationName) {
      setIsMedicationNameSet(true);
    }
  };

  return (
    <DashboardWrapper>
      <h4>Medical Tracking</h4>

      {/* Medication Name Input */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <TextField
          label="Medication Name"
          variant="outlined"
          size="small"
          value={medicationName}
          onChange={(e) => setMedicationName(e.target.value)}
          sx={{ width: '30%' }}
          disabled={isMedicationNameSet}  // Disable after medication name is set
        />
        {!isMedicationNameSet && (
          <Button
            variant="contained"
            onClick={handleMedicationNameSet}
            sx={{ backgroundColor: "#1D676B", "&:hover": { backgroundColor: '#2e8b57' }, color: "white" }}
            disabled={!medicationName}  // Disable if medication name is empty
          >
            Set Medication Name
          </Button>
        )}
      </div>

      {/* Frequency and Time Inputs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <TextField
          select
          label="Frequency"
          variant="outlined"
          size="small"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          sx={{ width: '20%' }}
          disabled={!isMedicationNameSet}  // Disable until medication name is set
        >
          <MenuItem value="">Select Frequency</MenuItem>
          <MenuItem value="Morning">Morning</MenuItem>
          <MenuItem value="Afternoon">Afternoon</MenuItem>
          <MenuItem value="Night">Night</MenuItem>
        </TextField>

        <TextField
          select
          label="Time"
          variant="outlined"
          size="small"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          sx={{ width: '20%' }}
          disabled={!isMedicationNameSet}  // Disable until medication name is set
        >
          <MenuItem value="">Select Time</MenuItem>
          {generateTimeOptions().map((timeOption) => (
            <MenuItem key={timeOption} value={timeOption}>
              {timeOption}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          onClick={handleAddFrequency}
          sx={{ backgroundColor: "#1D676B", "&:hover": { backgroundColor: '#2e8b57' }, color: "white" }}
          disabled={!isMedicationNameSet || !frequency || !time}  // Disable if medication name is not set or no frequency/time is selected
        >
          Add Frequency
        </Button>
      </div>

      {/* Display Added Frequencies */}
      {frequencies.length > 0 && (
        <ul>
          {frequencies.map((freq, index) => (
            <li key={index}>
              {freq.frequency} - {freq.time}
            </li>
          ))}
        </ul>
      )}

      {/* Submit Button */}
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ backgroundColor: "#1D676B", "&:hover": { backgroundColor: '#2e8b57' }, color: "white" }}
        disabled={frequencies.length === 0}  // Disable if no frequencies are added
      >
        Submit Medication
      </Button>

      {/* Medication List */}
      {medications.length > 0 && (
        <>
          <h5>Medications List</h5>
          <ul>
            {medications.map((med, index) => (
              <li key={index}>
                <strong>{med.name}</strong>
                <ul>
                  {med.frequencies.map((freq, freqIndex) => (
                    <li key={freqIndex}>
                      {freq.frequency} - {freq.time}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}
    </DashboardWrapper>
  );
}

export default MedicalTracking;
