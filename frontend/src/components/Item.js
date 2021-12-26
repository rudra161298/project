import React from "react";
import "../css/item.css";
function Item({ data }) {
  return (
    <div className="item">
      <div className="item-header">
        <div className="item-header-title">{data.title}</div>
        <div className="item-header-title">{data.date}</div>
      </div>
      <div className="item-header-notes">{data.notes}</div>
      <div className="item-header-notes">
        Bunting: {data.bunting ? "true" : "false"}
      </div>
    </div>
  );
}

export default Item;
