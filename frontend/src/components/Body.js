import React from "react";
import "../css/body.css";
import Item from "./Item";
function Body({ england, scotland, northern }) {
  return (
    <div className="body">
      <div className="body-title">England-and-wales</div>
      {england.length > 0 &&
        england.map(
          (data) => !data.unhide && <Item key={data.id} data={data} />
        )}

      <div className="body-title">Scotland</div>
      {scotland.length > 0 &&
        scotland.map(
          (data) => !data.unhide && <Item key={data.id} data={data} />
        )}

      <div className="body-title">Northern-ireland</div>
      {northern.length > 0 &&
        northern.map(
          (data) => !data.unhide && <Item key={data.id} data={data} />
        )}
    </div>
  );
}

export default Body;
