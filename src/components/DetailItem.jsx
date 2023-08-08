import React from "react";

function DetailItem({name, title}) {
  return (
    <div className="flex gap-16 items-start">
      <h1 className="font-bold">{title}:</h1>
      <p className="text-gray-600">{name}</p>
    </div>
  );
}

export default DetailItem;
