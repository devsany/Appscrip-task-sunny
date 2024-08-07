import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  electronic,
  getAPIData,
  highTolow,
  jewelery,
  menClothing,
  priceHighToLow,
  priceLowToHigh,
  womenClothing,
} from "../../redux/action/action";

const ShopApiData = () => {
  const { loading, apiStoreData, error, HTL } = useSelector(
    (state) => state.api
  );
  const dispatch = useDispatch();
  const [appear, setAppear] = useState(false);
  const [isHideFilter, setHideFilter] = useState(true);
  const [selectNoneinput, setSelectNone] = useState(true);

  console.log(apiStoreData);
  console.log(HTL);
  //   console.log(HTL);

  useEffect(() => {
    dispatch(getAPIData());
    // dispatch(highTolow())
    // setApiShopData(apiStoreData)
  }, [dispatch, appear]);
  if (loading) {
    return <p>...loading</p>;
  }
  if (error) return <p>Error: Api data anable to call</p>;

  const handleSortHighToLow = () => {
    dispatch(priceHighToLow());
  };
  const handleSortLowToHigh = () => {
    dispatch(priceLowToHigh());
  };
  const reset = () => {
    dispatch(getAPIData());
  };
  const womenClothig = () => {
    setAppear(true);
    dispatch(womenClothing());
  };
  const menClothig = () => {
    setAppear(true);

    dispatch(menClothing());
  };
  const jeweleryShop = () => {
    setAppear(true);

    dispatch(jewelery());
  };
  const ElectronicShop = () => {
    setAppear(true);

    // dispatch(getAPIData());

    dispatch(electronic());
  };
  const handleHideFilter = () => {
    console.log("hide filter");
    setHideFilter(!isHideFilter);
    setSelectNone(false);
  };

  const handleShowIdeal = () => {
    setSelectNone(!selectNoneinput);
  };
  return (
    <div>
      <div className="filter">
        <div className="total_item">
          {apiStoreData.length} ITEMS{" "}
          <span className="hidefilter" onClick={handleHideFilter}>
            {"<"} <u>{isHideFilter ? "HIDE FILTER" : "SHOW FILTER"}</u>
          </span>
        </div>
        <div className="select">
          <select name="" id="select" className="select_option">
            <option className="option" value="">
              RECOMMENDED
            </option>
            <option className="option" value="">
              NEWEST FIRST
            </option>
            <option className="option" value="">
              POPULAR
            </option>
            <option className="option" value="">
              PRICE:HIGH TO LOW
            </option>
            <option className="option" value="">
              PRICE:LOW TO HIGH
            </option>
          </select>
        </div>
      </div>
      <hr style={{ marginTop: "10px", marginBottom: "20px" }} />
      <div className="mainStore">
        <div className={isHideFilter ? "storeElementCombiner" : "hide"}>
          <input type="checkbox" />
          COSTOMIZBLE
          <hr />
          <div>
            <div className="ideal">
              <p onClick={handleShowIdeal}>
                IDEAL FOR{" "}
                <div
                  className={selectNoneinput ? "rotate " : "notRotate"}
                  style={{ float: "right" }}
                >
                  ^
                </div>
                <br />
                All
              </p>
              <br />
            </div>
            <div className={selectNoneinput ? "inputs" : "hide"}>
              <span className="hidefilter1">
                <u>Select None</u>
                <br />
              </span>
              <input type="checkbox" /> Men <br />
              <input type="checkbox" /> Women <br />
              <input type="checkbox" /> Baby & kids <br />
            </div>
          </div>
          <hr />
          <div className="ideal">
            <p>
              OCCASION{" "}
              <span
                className={selectNoneinput ? "rotate sign" : "notRotate sign"}
                style={{ float: "right" }}
              >
                ^
              </span>
              <br />
              All
            </p>
            <br />
          </div>
          <hr />
          <div className="ideal">
            <p>
              WORK{" "}
              <span
                className={selectNoneinput ? "rotate sign" : "notRotate sign"}
                style={{ float: "right" }}
              >
                ^
              </span>
              <br />
              All
            </p>
            <br />
          </div>
          <hr />
          <div className="ideal">
            <p>
              FABRIC{" "}
              <span
                className={selectNoneinput ? "rotate sign" : "notRotate sign"}
                style={{ float: "right" }}
              >
                ^
              </span>
              <br />
              All
            </p>
            <br />
          </div>
          <hr />
          <div className="ideal">
            <p>
              SEGMENT{" "}
              <span
                className={selectNoneinput ? "rotate sign" : "notRotate sign"}
                style={{ float: "right" }}
              >
                ^
              </span>
              <br />
              All
            </p>
            <br />
          </div>
          <hr />
          <div className="ideal">
            <p>
              SUITABLE FOR{" "}
              <span
                className={selectNoneinput ? "rotate sign" : "notRotate sign"}
                style={{ float: "right" }}
              >
                ^
              </span>
              <br />
              All
            </p>
            <br />
          </div>
          <hr />
          <div className="ideal">
            <p>
              RAW MATERIALS{" "}
              <span
                className={selectNoneinput ? "rotate sign" : "notRotate sign"}
                style={{ float: "right" }}
              >
                ^
              </span>
              <br />
              All
            </p>
            <br />
          </div>
          <hr />
          <div className="ideal">
            <p>
              PATTERN{" "}
              <span
                className={selectNoneinput ? "rotate sign" : "notRotate sign"}
                style={{ float: "right" }}
              >
                ^
              </span>
              <br />
              All
            </p>
            <br />
          </div>
          
          
          {/*-----redux-----  */}
          {/*-----redux group for filter price and catogery-----  */}


          {/* <button onClick={reset}>Reset All Filter</button>
          <br />
          <button onClick={handleSortHighToLow}>
            Sort by Price High to Low
          </button>
          <br />
          <button onClick={handleSortLowToHigh}>
            Sort by Price Low to High
          </button>
          <br />
          <button onClick={womenClothig}>Women</button>
          <br />
          <button onClick={menClothig}>men</button>
          <br />
          <button onClick={jeweleryShop}>Jewelery</button>
          <br />
          <button onClick={ElectronicShop}>Electronic</button>
          <br /> */}
        </div>
        <div className="storeCardComponentShop">
          {apiStoreData &&
            apiStoreData.map((item, i) => {
              return (
                <>
                  <div className="shopCardMain">
                    <div className="shopCard" key={i}>
                      <img
                        src={item.image}
                        className="cardImg"
                        alt={item.title}
                      />
                      <hr />
                      <p className="category">{item.category}</p>
                      <p className="title">
                        {" "}
                        {item.title.slice(0, 50) + "..."}
                      </p>
                      <div className="rating">
                        {item.rating.rate}{" "}
                        <img
                          src="star.png"
                          style={{
                            width: "12px",
                            height: "12px",
                            marginTop: "-29px",
                          }}
                          alt="rating star"
                        />
                      </div>
                      <div className="ratingCount">
                        {"("}
                        {item.rating.count}
                        {")  "}
                      </div>
                      <div className="card-price">₹{item.price}</div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ShopApiData;
