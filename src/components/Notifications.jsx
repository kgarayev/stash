import React from "react";
import "../stylesheets/Home.css";
import "../stylesheets/AltTemplate.css";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import Button from "./Button";

const Notifications = () => {
  return (
    <Accordion sx={{ borderRadius: "10rem", backgroundColor: "white" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ borderRadius: "10rem" }}
      >
        <div className="accordionTitle">
          <NotificationsOutlinedIcon />
          <h3>notifications</h3>
        </div>
      </AccordionSummary>

      <AccordionDetails sx={{ borderRadius: "10rem" }}>
        <div className="accordionBody">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="in app"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="email"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="sms"
            />

            <p>
              there are some things that we'll always need to tell you about –
              like changes to our t&cs
            </p>

            <div className="notificationsButton">
              <Button text="save changes" type="submit" textSize="1.2rem" />
            </div>
          </FormGroup>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Notifications;
