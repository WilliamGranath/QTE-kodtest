import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function ReplyInput() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        position: "absolute",
        left: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <input
            style={{}}
            type="text"
            className="Post-input"
            name="name"
            placeholder="Name"
          />
          <textarea
            className="Post-input"
            name="content"
            placeholder="Comment"
          />
          <Button variant="contained" sx={{ height: 3, marginBottom: 1 }}>
            POST
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ReplyInput;
