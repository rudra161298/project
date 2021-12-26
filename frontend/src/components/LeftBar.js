import React, { useState, useEffect } from "react";
import "../css/leftbar.css";

function LeftBar({
  england,
  scotland,
  northern,
  setEngland,
  setNothern,
  setScotland,
}) {
  const [filter, setFilter] = useState();

  useEffect(() => {
    if (filter && filter !== "custom") applyFilter(filter);
  }, [filter]);

  const applyFilter = (filter) => {
    let startDay;
    let today = new Date().toISOString().slice(0, 10);
    if (filter === "day") {
      startDay = new Date(Date.now() - 864e5);
    } else if (filter === "month") {
      var x = new Date();
      x.setMonth(x.getMonth() - 1);
      startDay = x;
    } else if (filter === "week") {
      startDay = new Date(Date.now() - 604800000);
    }
    startDay =
      startDay.getFullYear() +
      "-" +
      (startDay.getMonth() + 1) +
      "-" +
      startDay.getDate();

    let eng = [...england];
    let sco = [...scotland];
    let not = [...northern];
    eng = eng.map((dt) => {
      if (
        new Date(dt.date) <= new Date(today) &&
        new Date(dt.date) >= new Date(startDay)
      ) {
        dt.unhide = false;
      } else {
        dt.unhide = true;
      }
      return dt;
    });

    setEngland(eng);

    sco = sco.map((dt) => {
      if (
        new Date(dt.date) <= new Date(today) &&
        new Date(dt.date) >= new Date(startDay)
      ) {
        dt.unhide = false;
      } else {
        dt.unhide = true;
      }
      return dt;
    });

    setScotland(sco);

    not = not.map((dt) => {
      if (
        new Date(dt.date) <= new Date(today) &&
        new Date(dt.date) >= new Date(startDay)
      ) {
        dt.unhide = false;
      } else {
        dt.unhide = true;
      }
      return dt;
    });

    setNothern(not);
  };

  const applyConstDate = () => {
    const customStart = document.getElementById("from").value;
    const customEnd = document.getElementById("to").value;

    if (filter !== "custom" || !customEnd || !customStart) {
      return;
    }

    let eng = [...england];
    let sco = [...scotland];
    let not = [...northern];
    eng = eng.map((dt) => {
      if (
        new Date(dt.date) <= new Date(customEnd) &&
        new Date(dt.date) >= new Date(customStart)
      ) {
        dt.unhide = false;
      } else {
        dt.unhide = true;
      }
      return dt;
    });

    setEngland(eng);

    sco = sco.map((dt) => {
      if (
        new Date(dt.date) <= new Date(customEnd) &&
        new Date(dt.date) >= new Date(customStart)
      ) {
        dt.unhide = false;
      } else {
        dt.unhide = true;
      }
      return dt;
    });

    setScotland(sco);

    not = not.map((dt) => {
      if (
        new Date(dt.date) <= new Date(customEnd) &&
        new Date(dt.date) >= new Date(customStart)
      ) {
        dt.unhide = false;
      } else {
        dt.unhide = true;
      }
      return dt;
    });

    setNothern(not);
  };
  return (
    <div className="leftbar">
      <div className="leftbar-title">Filter</div>
      <div className="leftbar-menu">
        <div className="leftbar-menu-items">
          <input
            type="radio"
            name="filter"
            value="day"
            onChange={(e) => setFilter("day")}
            checked={filter === "day"}
          />
          <label htmlFor="filter" className="leftbar-menu-item-text">
            Last day
          </label>
        </div>

        <div className="leftbar-menu-items">
          <input
            type="radio"
            name="filter"
            value="week"
            onChange={(e) => setFilter("week")}
            checked={filter === "week"}
          />
          <label htmlFor="filter" className="leftbar-menu-item-text">
            Last week
          </label>
        </div>

        <div className="leftbar-menu-items">
          <input
            type="radio"
            name="filter"
            value="month"
            onChange={(e) => setFilter("month")}
            checked={filter === "month"}
          />
          <label htmlFor="filter" className="leftbar-menu-item-text">
            Last month
          </label>
        </div>

        <div className="leftbar-menu-items">
          <input
            type="radio"
            name="filter"
            value="custom"
            onChange={(e) => setFilter("custom")}
            checked={filter === "custom"}
          />
          <label htmlFor="filter" className="leftbar-menu-item-text">
            Custom
          </label>
        </div>

        {filter === "custom" && (
          <div className="leftbar-custom-menu">
            <input
              type="date"
              name="from"
              id="from"
              className="leftbar-custom-menu-item"
              onChange={(e) => {
                applyConstDate();
              }}
            />

            <input
              type="date"
              name="to"
              id="to"
              className="leftbar-custom-menu-item"
              onChange={(e) => {
                console.log(e.target.value);

                applyConstDate();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default LeftBar;
