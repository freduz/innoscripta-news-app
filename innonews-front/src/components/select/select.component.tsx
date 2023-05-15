import React, { SelectHTMLAttributes, useState } from "react";
import { MultiSelect, Option } from "react-multi-select-component";

interface SelectBoxProps extends SelectHTMLAttributes<HTMLSelectElement>{
options:Option[],
label:string
}
  const SelectBox:React.FC<SelectBoxProps> = ({options,label}) => {
    const [selected, setSelected] = useState([]);
  
    return (
      <div>
        <h1>{label}</h1>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
      </div>
    );
  };
  
  export default SelectBox;