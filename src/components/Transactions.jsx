import React, { useState } from "react";
import TransactionElement from "./TransactionElement";

import { useSelector, useDispatch } from "react-redux";
import { selectAccount, selectTransactions } from "../store/mainSlice";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";

const Transactions = (props) => {
  const { currencySymbol } = props;

  const [expanded, setExpanded] = useState([
    false,
    <ExpandMoreOutlinedIcon fontSize="large" />,
  ]);

  const onClick = () => {
    if (expanded[0]) {
      setExpanded([false, <ExpandMoreOutlinedIcon fontSize="large" />]);
    } else {
      setExpanded([true, <ExpandLessOutlinedIcon fontSize="large" />]);
    }
  };

  const transactions = useSelector(selectTransactions);

  let recentTransactions;
  let remainingTransactions;

  if (transactions.length >= 4) {
    recentTransactions = transactions.slice(0, 4);
    remainingTransactions = transactions.slice(4);
  } else {
    recentTransactions = [...transactions];
    remainingTransactions = [...transactions];
  }

  return (
    <>
      <div className="transactionsMain">
        <div className="transactionsMainHeader">
          <h2>Transactions</h2>

          <div className="expandContainer">
            <div className="homeIcons" onClick={onClick}>
              {expanded[1]}
            </div>
          </div>
        </div>

        {recentTransactions.map((element) => {
          return (
            <TransactionElement
              element={element}
              currencySymbol={currencySymbol}
              key={`${element.type}-${element.details}-${element.date}-${element.amount}`}
            />
          );
        })}

        <div
          className={`expandedTransactions ${
            expanded[0] ? "visible" : "hidden"
          }`}
        >
          {remainingTransactions.map((element) => {
            return (
              <TransactionElement
                element={element}
                currencySymbol={currencySymbol}
                key={`${element.type}-${element.details}-${element.date}-${element.amount}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Transactions;
