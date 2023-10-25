import React from "react";
import { useSelector } from "react-redux";
import { selectAccount } from "../store/mainSlice";
import { toastTrigger } from "../helpers/helpers";

const BankTransfer = () => {
  const account = useSelector(selectAccount);
  const sortCode = account.sortCode.toString();

  // format the sort code
  const formattedSortCode =
    sortCode[0] +
    sortCode[1] +
    "-" +
    sortCode[2] +
    sortCode[3] +
    "-" +
    sortCode[4] +
    sortCode[5];

  let text = `\nBeneficiary: ${account.holderName}\n\nAccount: ${account.accountNumber}\n\nSort Code: ${formattedSortCode}`;

  // check 

  // copy to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toastTrigger({
        message: "copied to clipboard",
        progressColor: "var(--primary-color)",
      });
    } catch (error) {
      console.error("Error copying text to clipboard: ", error);
      toastTrigger({
        message: "error copying text to clipboard",
        progressColor: "#5d0000",
      });
    }
  };

  return (
    <>
      <div className="bankTransferBox">
        <div className="transferDetails">
          <div>
            <h3>Beneficiary</h3>
            <p>{account.holderName}</p>
          </div>
          <div>
            <h3>Account</h3>
            <p>{account.accountNumber}</p>
          </div>
          <div>
            <h3>Sort Code</h3>
            <p>{formattedSortCode}</p>
          </div>
        </div>

        <div className="clipboardCopy" onClick={handleCopy}>
          copy to clipboard
        </div>
      </div>
    </>
  );
};

export default BankTransfer;
