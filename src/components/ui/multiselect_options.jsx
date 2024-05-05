import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

function MultiSelectOptions({ options, selected, setSelected }) {
  return (
    <div>
      {/* <h1>Select Approver</h1> */}
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <br></br>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
}

export default MultiSelectOptions;
