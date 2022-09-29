import React from "react";
import ModifiersItem from "./ModifiersItem";

function Modifiers({ modifiers, setSelectedModierItems }) {
  const { tabName, modifier_items } = modifiers;

  return (
    <div className="modifiers mt-4">
      <h2 className="mb-0 modifier__title modifier__title-common">
        {tabName} ( Optional )
      </h2>
      {modifier_items.map((modifier_item, index) => {
        return (
          <ModifiersItem
            key={index}
            modifier_item={modifier_item}
            setSelectedModierItems={setSelectedModierItems}
          />
        );
      })}
      <div className="line mt-3"></div>
    </div>
  );
}

export default Modifiers;
