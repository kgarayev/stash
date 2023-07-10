import React from "react";
import { useSelector } from "react-redux";
import { selectAccount } from "../store/mainSlice";
import ukIcon from "../assets/icons/uk.svg";
import Transactions from "./Transactions";

// the account component

const Account = () => {
  const account = useSelector(selectAccount);

  return (
    <>
      <div className="homeContainer">
        <div className="accountHeader">
          <div>
            <h2>
              {account.currencySymbol +
                account.balance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </h2>
            <p>{account.currencyName}</p>
          </div>

          <img src={ukIcon} alt="ukIcon" className="currencyIcon" />
        </div>

        <Transactions currencySymbol={account.currencySymbol} />
      </div>
    </>
  );
};

export default Account;
