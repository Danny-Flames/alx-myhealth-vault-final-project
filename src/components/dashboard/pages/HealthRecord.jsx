import React, { useState } from "react";
import DashboardWrapper from "../components/DashboardWrapper";
import DashboardHeader from "../components/DashboardHeader";
import { Button, Box } from "@mui/material";
import ReusableTable from "../components/ReUsableTable";
import ReusableSelect from "../components/ReusableSelect";
import { useNavigate } from "react-router-dom";
import ReusableModal from "../components/ReusableModal";

function HealthRecord() {
  const [selectedActions, setSelectedActions] = useState({});
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // To handle the onchange on the select dropdown
  const handleActionChange = (event, row) => {
    const action = event.target.value;
    setSelectedActions({
      ...selectedActions,
      [row.key]: action,
    });

    // Handle navigation based on selected action
    if (action === "edit") {
      navigate(`/dashboard/health-records/edit`);
    } else if (action === "view") {
      navigate(`/dashboard/health-records/${row?.key}`);
    } else if (action === "delete") {
      setSelectedRow(row);
      handleOpenModal(); 
    }
  };

  // To handle the navigation to the page for creating a new record
  const handleCreateNewRecord = () => {
    navigate("/dashboard/health-records/create");
  };

  // Table row dropdown list
  const actionOptions = [
    { value: "view", label: "View" },
    { value: "edit", label: "Edit" },
    { value: "delete", label: "Delete" },
    { value: "download", label: "Download" },
  ];

  // Column list for table header
  const columns = [
    { id: "record_name", label: "Record Name" },
    { id: "provider", label: "HealthCare Provider", align: "right" },
    { id: "record_type", label: "Type of record", align: "right" },
    { id: "diagnosis", label: "Diagnosis", align: "right" },
    { id: "notes", label: "Notes", align: "right" },
    { id: "createdAt", label: "Date Added", align: "right" },
    { id: "updatedAt", label: "Last Updated", align: "right" },
    { id: "action", label: "Actions", align: "right" },
  ];

  // Table row data
  const data = [
    {
      record_name: "Blood Test Report",
      provider: "Federal Medical Center, Ikeja",
      record_type: "Lab Result",
      diagnosis: "High Cholesterol",
      notes: "Fasting required",
      createdAt: "15/08/2024",
      updatedAt: "18/08/2024",
      key: "blood-test-report",
    },
    {
      record_name: "MRI Scan",
      provider: "XYZ Radiology",
      record_type: "Imaging Report",
      diagnosis: "Mild Disk Bulge",
      notes: "Follow-up needed",
      createdAt: "22/07/2024",
      updatedAt: "29/07/2024",
      key: "mri-scan",
    },
    {
      record_name: "Prescription - Hypertension",
      provider: "Bells Pharmacy",
      record_type: "Prescription",
      diagnosis: "Hypertension",
      notes: "Given some medications",
      createdAt: "22/07/2024",
      updatedAt: "29/07/2024",
      key: "prescription-hypertension",
    },
    {
      record_name: "Hepatitis B",
      provider: "Trump's Clinic",
      record_type: "Vaccination Record",
      diagnosis: "N/A",
      notes: "Booster in 6 months",
      createdAt: "22/07/2024",
      updatedAt: "29/07/2024",
      key: "prescription-hypertension",
    },
  ];

  // Table row data transformed to attach reusable select dropdown
  const enhancedData = data.map((row) => ({
    ...row,
    action: (
      <ReusableSelect
        label="Action"
        value={selectedActions[row.key] || ""}
        onChange={(event) => handleActionChange(event, row)}
        options={actionOptions}
      />
    ),
  }));

  // To open the modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // To close the modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // To handle delete
  const handleConfirmDelete = () => {
    console.log(`Deleting record with key: ${selectedRow?.key}`);
    handleCloseModal(); 
  };

  const modalActions = [
    {
      label: "Cancel",
      onClick: handleCloseModal,
      bgColor: '#4D4D4D'
    },
    {
      label: "Proceed",
      onClick: handleConfirmDelete, // Call the delete function
      bgColor: "#1D676B",
    },
  ];

  return (
    <DashboardWrapper>
      {/* Header - starts */}
      <DashboardHeader
        title="Health Records"
        rightElement={
          <span>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#1D676B", color: "white" }}
              onClick={() => handleCreateNewRecord()}
            >
              Create Record
            </Button>
          </span>
        }
      />
      {/* Header - ends */}

      {/* Table section - starts */}
      <div className="table" style={{ marginTop: "4%" }}>
        <h4 className="vault-table-header">List of my health records</h4>

        {/* Add Box wrapper for horizontal scrolling */}
        <Box sx={{ overflowX: "auto" }}>
          <ReusableTable
            columns={columns.map((col) => ({
              ...col,
              sx: { fontWeight: "bold" }, // Make header text bold
            }))}
            data={enhancedData}
          />
        </Box>
      </div>
      {/* Table section - ends */}

      {/* Custom Modal */}
      <ReusableModal
        open={openModal}
        onClose={handleCloseModal}
        title="Delete Record"
        content={`Are you sure you want to delete this record - ${selectedRow?.record_name || ''}? This action cannot be undone.`}
        actions={modalActions}
      />
    </DashboardWrapper>
  );
}

export default HealthRecord;
