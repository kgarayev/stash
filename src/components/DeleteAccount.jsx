import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Home.css";
import "../stylesheets/AltTemplate.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import Button from "./Button";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../store/mainSlice";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setScreenMode(0));
    navigate("/");
  };

  return (
    <>
      <Accordion sx={{ borderRadius: "10rem", backgroundColor: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <div className="accordionTitle">
            <HighlightOffOutlinedIcon />
            <h3>delete account</h3>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <div className="accordionBody">
            <FormGroup>
              <p>we are sorry to see you leave</p>

              <div className="notificationsButton">
                <Button
                  text="delete account"
                  type="submit"
                  textSize="1.2rem"
                  onClick={onClick}
                />
              </div>
            </FormGroup>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DeleteAccount;
