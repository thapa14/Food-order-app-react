import React, { useState } from "react";
// icons imports
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

function ModifiersItem({ modifier_item, setSelectedModierItems }) {
  const [modifierIcon, setModifierIcon] = useState(true);
  const { itemName, taxValue, valuebeforetax } = modifier_item;

  const handleModifierAddIconClick = () => {
    setModifierIcon(!modifierIcon);

    setSelectedModierItems((preVal) => {
      if (!preVal.modifiersNames.length) {
        return {
          modifiersNames: [itemName],
          modifiersSubTotal: valuebeforetax,
          modifiersTotalTax: taxValue,
        };
      }
      return {
        modifiersNames: [...preVal.modifiersNames, itemName],
        modifiersSubTotal:
          preVal.modifiersSubTotal + parseFloat(valuebeforetax),
        modifiersTotalTax: preVal.modifiersTotalTax + parseFloat(taxValue),
      };
    });
  };

  const handleModifierRemoveIconClick = () => {
    setModifierIcon(!modifierIcon);
    setSelectedModierItems((preVal) => {
      const tempdata = preVal.modifiersNames.filter(
        (item) => item !== itemName
      );
      return {
        modifiersNames: tempdata,
        modifiersSubTotal: preVal.modifiersSubTotal - valuebeforetax,
        modifiersTotalTax: preVal.modifiersTotalTax - taxValue,
      };
    });
  };

  return (
    <div className="d-flex flex-row justify-content-between align-items-center">
      <div className="d-flex flex-column py-1">
        <span className="modifier__item-name">{itemName}</span>
        <span className="modifier__item-price">+ {valuebeforetax}$</span>
      </div>
      {modifierIcon ? (
        <AddCircleOutlineIcon
          className="modifier__icon"
          onClick={handleModifierAddIconClick}
        />
      ) : (
        <RemoveCircleOutlineIcon
          className="modifier__icon"
          onClick={handleModifierRemoveIconClick}
        />
      )}
    </div>
  );
}

export default ModifiersItem;
