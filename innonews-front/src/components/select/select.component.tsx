import React, { SelectHTMLAttributes, useState } from "react";
import Multiselect from 'multiselect-react-dropdown';

type SelectBoxProps = {
options:any
label:string,
onSearch:(event:any) => void,
onSelect:(event:any) => void,
selectedValues:any
}
  const SelectBox:React.FC<SelectBoxProps> = ({options,label,onSearch,onSelect,selectedValues}) => {
    const onSelectSearch = (selectedList: any) => {
        onSelect(selectedList)
    }

    const onRemove = (selectedList: any) =>{
      onSelect(selectedList)  
    }
    
  
    return (
      <div>
        <h1>{label}</h1>
        <Multiselect
  displayValue="key"
  onKeyPressFn={function noRefCheck(){}}
  onRemove={onRemove}
  onSearch={val => onSearch(val)}
  onSelect={onSelectSearch}
  options={options}
  selectedValues={selectedValues}
  selectionLimit={5}
/>
      </div>
    );
  };
  
  export default SelectBox;