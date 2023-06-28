import React from "react";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";

const TransactionElement = (props) => {
  const { element, currencySymbol } = props;

  return (
    <>
      <div className="transactionElement">
        <div className="elementSection">
          {element.type === "sent" ? (
            <ArrowCircleUpOutlinedIcon />
          ) : (
            <ArrowCircleDownOutlinedIcon />
          )}
        </div>

        <div className="elementSection elementsCentre">
          <div>
            <div className="transactionDetails">
              <h3>{element.details}</h3>
            </div>

            <div className="transactionExtra">
              <p>{element.type}</p>
              <p>{element.date}</p>
            </div>
          </div>
        </div>

        <div className="elementSection">
          <div>
            <h3>{currencySymbol + element.amount}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionElement;
