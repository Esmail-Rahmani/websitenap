import {
  Box,
  Button,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { multipleFilesUpload } from "../api/api";

const StyledButton = styled(Button)`
  background-color: grey;
  color: #fff;
  padding: 8px 15px;

  &:hover {
    background-color: #0096ff;
  }
`;

const Form = () => {
  const [multipleFile, setMultipleFile] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  // const [value, setValue] = React.useState(null);
  const MultipleFileChange = (e) => {
    setMultipleFile(e.target.files);
    console.log("data?", title, date, desc, multipleFile);
  };
  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("desc", desc);
    for (let i = 0; i < multipleFile.length; i++) {
      formData.append("files", multipleFile[i]);
    }
    await multipleFilesUpload(formData);
    setTitle("");
    setDate("");
    setDesc("");
  };
  useEffect(() => {});

  console.log("data?", title, date, desc, multipleFile);

  return (
    <Box
      sx={{
        overflowX: "hidden",
        bgcolor: "#F9F9F9",
        marginTop: { md: "7%", xs: "20%" },
        padding: "5%",
        margin: "10%",
      }}
    >
      <Typography variant="h4" pb={3}>
        Upload project details
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            label="Name"
            id="fullWidth"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              fullWidth
              label="Date  "
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: "100%" }} pr={0}>
            <TextField
              multiline
              rows={7.6}
              fullWidth
              label="Project description..."
              id="fullWidth"
              onChange={(e) => setDesc(e.target.value)}
            ></TextField>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              color: "black",
              backgroundColor: "inheret",
              borderColor: "black",
            }}
            inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                margin: "auto",
                width: "50%",
                padding: "7px",
                marginLeft: "0px",
              }}
            >
              <input
                id="file-input"
                type="file"
                color="black"
                multiple
                style={{ width: "100%" }}
                title="pease select som photos"
                name="filename"
                onChange={(e) => MultipleFileChange(e)}
              />
              <div id="preview"></div>
            </Box>
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box textAlign="end" pt={1}>
            <StyledButton
              variant="outlined"
              size="large"
              onClick={() => {
                UploadMultipleFiles();
              }}
              sx={{
                color: "white",
                backgroundColor: " #0000ff",
                borderRadius: "10px",
              }}
            >
              Submit
            </StyledButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
