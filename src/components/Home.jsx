import React from "react";
import "../stylesheets/Home.css";
import Account from "./Account";

const Home = () => {
  return (
    <>
      <div className="mainHomeContainer">
        <div className="homeHeader">
          <h1>Home</h1>
        </div>

        <Account></Account>

        {/* <div className="homeContainer">
          <div className="transactionsHeader">
            <div>
              <h2>£5,000.00</h2>
              <p>british pound</p>
            </div>

            <img src={ukIcon} alt="ukIcon" className="currencyIcon" />
          </div>

          <div className="transactionsMain">
            <div className="transactionsMainHeader">
              <h2>Transactions</h2>

              <div className="homeIcons">
                <ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon>
              </div>
            </div>

            <div className="transactionElement">
              <div className="elementSection">
                <ArrowCircleUpOutlinedIcon></ArrowCircleUpOutlinedIcon>
              </div>

              <div className="elementSection elementsCentre">
                <div>
                  <div className="transactionDetails">
                    <h3>details</h3>
                  </div>

                  <div className="transactionExtra">
                    <p>sent</p>
                    <p>5 March 2023</p>
                  </div>
                </div>
              </div>

              <div className="elementSection">
                <div>
                  <h3>£199.99</h3>
                </div>
              </div>
            </div>

            <div className="transactionElement">
              <div className="elementSection">
                <ArrowCircleDownOutlinedIcon></ArrowCircleDownOutlinedIcon>
              </div>

              <div className="elementSection elementsCentre">
                <div>
                  <div className="transactionDetails">
                    <h3>details</h3>
                  </div>

                  <div className="transactionExtra">
                    <p>received</p>
                    <p>15 september 2022</p>
                  </div>
                </div>
              </div>

              <div className="elementSection">
                <div>
                  <h3>£870.34</h3>
                </div>
              </div>
            </div>

            <div className="transactionElement">
              <div className="elementSection">
                <ArrowCircleUpOutlinedIcon></ArrowCircleUpOutlinedIcon>
              </div>

              <div className="elementSection elementsCentre">
                <div>
                  <div className="transactionDetails">
                    <h3>details</h3>
                  </div>

                  <div className="transactionExtra">
                    <p>sent</p>
                    <p>5 March 2023</p>
                  </div>
                </div>
              </div>

              <div className="elementSection">
                <div>
                  <h3>£199.99</h3>
                </div>
              </div>
            </div>

            <div className="transactionElement">
              <div className="elementSection">
                <ArrowCircleDownOutlinedIcon></ArrowCircleDownOutlinedIcon>
              </div>

              <div className="elementSection elementsCentre">
                <div>
                  <div className="transactionDetails">
                    <h3>details</h3>
                  </div>

                  <div className="transactionExtra">
                    <p>received</p>
                    <p>15 september 2022</p>
                  </div>
                </div>
              </div>

              <div className="elementSection">
                <div>
                  <h3>£870.34</h3>
                </div>
              </div>
            </div>

            <div className="transactionElement">
              <div className="elementSection">
                <ArrowCircleUpOutlinedIcon></ArrowCircleUpOutlinedIcon>
              </div>

              <div className="elementSection elementsCentre">
                <div>
                  <div className="transactionDetails">
                    <h3>details</h3>
                  </div>

                  <div className="transactionExtra">
                    <p>sent</p>
                    <p>5 March 2023</p>
                  </div>
                </div>
              </div>

              <div className="elementSection">
                <div>
                  <h3>£199.99</h3>
                </div>
              </div>
            </div>

            <div className="transactionElement">
              <div className="elementSection">
                <ArrowCircleDownOutlinedIcon></ArrowCircleDownOutlinedIcon>
              </div>

              <div className="elementSection elementsCentre">
                <div>
                  <div className="transactionDetails">
                    <h3>details</h3>
                  </div>

                  <div className="transactionExtra">
                    <p>received</p>
                    <p>15 september 2022</p>
                  </div>
                </div>
              </div>

              <div className="elementSection">
                <div>
                  <h3>£870.34</h3>
                </div>
              </div>
            </div>

            <div className="transactionElement">
              <div className="elementSection">
                <ArrowCircleUpOutlinedIcon></ArrowCircleUpOutlinedIcon>
              </div>

              <div className="elementSection elementsCentre">
                <div>
                  <div className="transactionDetails">
                    <h3>details</h3>
                  </div>

                  <div className="transactionExtra">
                    <p>sent</p>
                    <p>5 March 2023</p>
                  </div>
                </div>
              </div>

              <div className="elementSection">
                <div>
                  <h3>£199.99</h3>
                </div>
              </div>
            </div>

            <div className="transactionElement">
              <div className="elementSection">
                <ArrowCircleDownOutlinedIcon></ArrowCircleDownOutlinedIcon>
              </div>

              <div className="elementSection elementsCentre">
                <div>
                  <div className="transactionDetails">
                    <h3>details</h3>
                  </div>

                  <div className="transactionExtra">
                    <p>received</p>
                    <p>15 september 2022</p>
                  </div>
                </div>
              </div>

              <div className="elementSection">
                <div>
                  <h3>£870.34</h3>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="homeContainer">
          <div className="transactionsHeader">
            <div>
              <h2>Analytics</h2>
            </div>
          </div>

          <div className="transactionsMain">
            <div className="transactionElement">
              <div className="elementSection">
                <SwapHorizontalCircleOutlinedIcon></SwapHorizontalCircleOutlinedIcon>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
