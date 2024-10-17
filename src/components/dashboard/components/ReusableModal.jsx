import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ReuasableModal = ({ open, onClose, title, content, actions }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <DialogTitle id="modal-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="modal-description">{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button
            key={index}
            onClick={action.onClick}
            color={action.color || "primary"}
            sx={{ backgroundColor: action.bgColor || "red", color: 'white' }}
          >
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default ReuasableModal;
