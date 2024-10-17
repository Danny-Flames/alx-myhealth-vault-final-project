import React, { useState } from "react";
import DashboardWrapper from "../components/DashboardWrapper";
import DashboardHeader from "../components/DashboardHeader";
import { Button, Box } from "@mui/material";
import ReusableTable from "../components/ReUsableTable";
import ReusableSelect from "../components/ReusableSelect";
import { useNavigate } from "react-router-dom";
import ReusableModal from "../components/ReusableModal";

function Settings() {
  const [selectedActions, setSelectedActions] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [actionType, setActionType] = useState("");

  // To handle the onchange on the select dropdown
  const handleActionChange = (event, row) => {
    const action = event.target.value;
    console.log("action", action);
    console.log("row", row);
    setSelectedActions({
      ...selectedActions,
      [row.key]: action,
    });

    // Open confirm modal
    setSelectedRow(row);
    setActionType(action);
    handleOpenModal();

    // Make api call
  };

  // Table row dropdown list
  const actionOptions = [
    { value: "disable", label: "Disable Account" },
    { value: "enable", label: "Enable Account" },
    { value: "make_admin", label: "Make Admin" },
  ];

  // Column list for table header
  const columns = [
    { id: "full_name", label: "Full Name" },
    { id: "email", label: "Email" },
    { id: "user_type", label: "User Type" },
    { id: "phone_number", label: "Phone Number" },
    { id: "address", label: "Address", align: "right" },
    { id: "action", label: "Actions", align: "right" },
  ];

  // Table row data
  const data = [
    {
      full_name: "Akinwale Joseph",
      email: "akinjo@gmail.com",
      user_type: "User",
      phone_number: "08011223344",
      address: "House number 1, Test Street, Lagos",
      key: "001",
    },
    {
      full_name: "Ifeanyi Onye",
      email: "ifyonye@gmail.com",
      user_type: "Medical Doctor",
      phone_number: "08011223355",
      address: "House number 2, Test Street, Lagos",
      key: "002",
    },
    {
      full_name: "Edidong Micheal",
      email: "michealedi@gmail.com",
      user_type: "User",
      phone_number: "08011223366",
      address: "House number 3, Test Street, Lagos",
      key: "003",
    },
    {
      full_name: "Samuel Jospeh",
      email: "sammyjay@gmail.com",
      user_type: "Medical Doctor",
      phone_number: "08011223377",
      address: "House number 4, Test Street, Lagos",
      key: "004",
    },
    {
      full_name: "Onyekachi Franklin",
      email: "frankonyeka@gmail.com",
      user_type: "Super Admin",
      phone_number: "08011223388",
      address: "House number 5, Test Street, Lagos",
      key: "005",
    },
    {
      full_name: "Buken Daniel",
      email: "bukendaniel@gmail.com",
      user_type: "Super Admin",
      phone_number: "08011223399",
      address: "House number 6, Test Street, Lagos",
      key: "006",
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
      bgColor: "#4D4D4D",
    },
    {
      label: "Proceed",
      onClick: handleConfirmDelete,
      bgColor: "#1D676B",
    },
  ];

  

  return (
    <DashboardWrapper>
      {/* Header - starts */}
      <DashboardHeader title="Users Management(Super-admin)" />
      {/* Header - ends */}

      {/* Table section - starts */}
      <div className="table" style={{ marginTop: "2%" }}>
        {/* Add Box wrapper for horizontal scrolling */}
        <Box sx={{ overflowX: "auto" }}>
          <ReusableTable
            columns={columns.map((col) => ({
              ...col,
              sx: { fontWeight: "bold" },
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
        title={
          actionType == "make_admin"
            ? "Make User Admin"
            : actionType == "enable"
            ? "Enable User Account"
            : "Disable User Account"
        }
        content={`Are you sure you want to ${
          actionType == "make_admin"
            ? `make ${selectedRow?.full_name} a super admin`
            : actionType == "enable"
            ? `enable the account - ${selectedRow?.full_name}`
            : `disable the account - ${selectedRow?.full_name}`
        }...?`}
        actions={modalActions}
      />
    </DashboardWrapper>
  );
}

export default Settings;
