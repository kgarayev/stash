import React from "react";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";

// a single transaction

const TransactionElement = (props) => {
  const { element, currencySymbol } = props;

  const formatDate = (sqlTimestamp) => {
    const date = new Date(sqlTimestamp);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so +1 is necessary
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  };

  const formatMoney = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(amount);
  };

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
              <p>{formatDate(element.created)}</p>
            </div>
          </div>
        </div>

        <div className="elementSection">
          <div>
            <h3>{currencySymbol + formatMoney(element.amount)}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionElement;
