import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { MdDelete, MdSchedule } from "react-icons/md";

function AppointmentCard({ item, handleReschduleAppointment }) {
  //   const { id, title, status, date, time } = item;
  return (
    <Box
      as="div"
      sx={{ display: "flex", justifyContent: "space-between" }}
      className="vault-rectangular-box"
    >
      <Box>
        <Typography
          sx={{ fontSize: "16px", fontWeight: 600 }}
          className="vault-mb-4"
        >
          {item?.title || "Appointment At Faith Clinics"}
        </Typography>
        <Box className="vault-mt-4">
          <Typography sx={{ fontSize: "14px" }} className="vault-no-padding">
            <span style={{ fontWeight: 600, marginRight: "10px" }}>
              App-ID:
            </span>{" "}
            <span>{item?.id || "XWQGH-1"}</span>
          </Typography>
          <Typography sx={{ fontSize: "14px" }} className="vault-no-padding">
            <span style={{ fontWeight: 600, marginRight: "10px" }}>
              Status:
            </span>{" "}
            <span>{item?.status || "Upcoming"}</span>
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Button
            variant="contained"
            className="vault-btn-black vault-mr-2 vault-btn"
            startIcon={<MdSchedule />}
            onClick={() => handleReschduleAppointment(item?.id)}
          >
            Reschedule
          </Button>
          <Button
            variant="contained"
            className="vault-btn-green vault-btn"
            startIcon={<MdDelete />}
            onClick={() => console.log("Hiii")}
          >
            Cancel
          </Button>
        </Box>
        <Typography sx={{ fontSize: "14px" }} className="vault-text-right">
          <span tyle={{ marginRight: "10px" }}>
            {item?.date || "Oct 21, 2024"}{" "}
          </span>{" "}
          |<span>{item?.time || "11:00 - 12: 00"}</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default AppointmentCard;
