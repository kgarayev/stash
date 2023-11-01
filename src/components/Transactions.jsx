import React, { useState, useEffect } from "react";
import TransactionElement from "./TransactionElement";
import axios from "axios";
import { toastTrigger } from "../helpers/helpers";
import Loading from "./Loading";

import { useSelector, useDispatch } from "react-redux";
import { selectAccount, selectTransactions } from "../store/mainSlice";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

// summary of transactions

const Transactions = (props) => {
  const { currencySymbol } = props;

  const [expanded, setExpanded] = useState([
    false,
    <ExpandMoreOutlinedIcon fontSize="large" />,
  ]);

  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_LINK}transaction/`,
          {
            headers: {
              token: token,
            },
            withCredentials: true, // Include credentials
          }
        );

        console.log(data);

        if (data.status === 0) {
          console.log("Error:", data.reason);
          // navigate("/login");
          return;
        }

        setTransactions(data.results);

        setIsLoading(false);

        console.log("transactions work fine");
        return;
      } catch (error) {
        console.log(error);

        toastTrigger({
          message: "something has gone wrong",
          progressColor: "#c90909",
        });
      }
    };

    fetchData();
  }, []);

  const onClick = () => {
    if (expanded[0]) {
      setExpanded([false, <ExpandMoreOutlinedIcon fontSize="large" />]);
    } else {
      setExpanded([true, <ExpandLessOutlinedIcon fontSize="large" />]);
    }
  };

  // const transactions = useSelector(selectTransactions);

  let recentTransactions;
  let remainingTransactions;

  if (transactions.length >= 4) {
    recentTransactions = transactions.slice(0, 4);
    remainingTransactions = transactions.slice(4);
  } else {
    recentTransactions = [...transactions];
    remainingTransactions = [];
  }

  if (isLoading) {
    return <p style={{ textAlign: "center" }}>no transactions</p>;
  }

  return (
    <>
      <div className="transactionsMain">
        <div className="transactionsMainHeader">
          <h2>Transactions</h2>
        </div>

        {recentTransactions.map((element) => {
          return (
            <TransactionElement
              element={element}
              currencySymbol={currencySymbol}
              key={`${element.type}-${element.details}-${element.created}-${element.amount}`}
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

        <div className="expandContainer">
          <div className="homeIcons" onClick={onClick}>
            {expanded[1]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
