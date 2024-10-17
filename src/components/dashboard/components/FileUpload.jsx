import { useState } from "react";
import { Button, Box } from "@mui/material";

export default function FileUpload({
  buttonLabel = "Upload File",
  onFileChange,
}) {
  const [filename, setFilename] = useState("");

  const handleFileUpload = (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const { name } = file;
    setFilename(name);

    // Call the onFileChange prop if provided
    if (onFileChange) {
      onFileChange(file);
    }
  };

  return (
    <>
      <Button
        component="label"
        variant="outlined"
        sx={{
          marginRight: "10px",
          borderColor: "#1D676B",
          color: "#1D676B",
          "&:hover": {
            borderColor: "#1D676B",
            backgroundColor: "rgba(29, 103, 107, 0.1)",
          },
        }}
      >
        {buttonLabel}
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileUpload}
        />
      </Button>
      {filename && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#1D676B",
            marginTop: "8px",
            padding: "8px 15px",
            backgroundColor: "whitesmoke",
            borderRadius: "6px",
          }}
        >
          {filename}
        </Box>
      )}
    </>
  );
}
