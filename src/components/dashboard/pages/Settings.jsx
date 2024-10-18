import React from "react";
import DashboardWrapper from "../components/DashboardWrapper";

function Settings() {
  return (
    <DashboardWrapper>
      <h4>Settings</h4>
    </DashboardWrapper>
  );
}

export default Settings;


/* import { useState } from 'react';
import DashboardWrapper from '../components/DashboardWrapper';
import { TextField, MenuItem, Button } from '@mui/material';

function MedicalTracking() {
  const [medications, setMedications] = useState([]);
  const [medicationName, setMedicationName] = useState('');
  const [frequency, setFrequency] = useState('');
  const [time, setTime] = useState('');  // State for selected time
  const [frequencies, setFrequencies] = useState([]);  // Track frequencies and times for one medication

  /*const handleAddFrequency = () => {
    if (frequency && time) {
      setFrequencies([...frequencies, { frequency, time }]);
      setFrequency('');
      setTime('');
    }
  };*/

  