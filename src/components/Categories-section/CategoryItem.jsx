import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuItem from "./MenuItem";
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function CategoryItem({ item }) {
  const [expanded, toggleExpanded] = useState(false);

  const {
    tabName,
    fnbtabs_items: menu_items,
    fnbtabs_images: [{ imageurl }],
  } = item;

  return (
    <div id={tabName} className="card w-100 mb-4 shadow">
      <img src={imageurl} alt="img" />
      <div
        className="card-body d-flex justify-content-between align-items-center"
        onClick={() => toggleExpanded(!expanded)}
      >
        <h1 className="card-title fw-bold">{tabName}</h1>
        {expanded ? (
          <KeyboardArrowUpIcon className="fs-1" />
        ) : (
          <KeyboardArrowDownIcon className="fs-1" />
        )}
      </div>
      {expanded && (
        <div className="menu__list-wrapper">
          {menu_items.map((node) => {
            return <MenuItem key={node.id} menuItemData={node} />;
          })}
        </div>
      )}
    </div>
  );
}

export default CategoryItem;
