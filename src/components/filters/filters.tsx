import React, { useState, useEffect } from "react";
import "./filters.css";

type OnChangeProps = {
  status: string;
  type: string;
  date: Date | undefined;
};
type SiteFiltersProps = {
  statusList: string[];
  typeList: string[];
  onChange?: (data: OnChangeProps) => void;
};

const SiteFilters = (props: SiteFiltersProps) => {
  const [selectedDate, setSelecteddate] = useState<Date>();
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  useEffect(() => {
    props.onChange && props.onChange({
      status: selectedStatus,
      type: selectedType,
      date: selectedDate,
    });
  }, [selectedDate, selectedStatus, selectedType]);
  const onTypeChange = (event: any) => {
    setSelectedType(event.target.value);
  };
  const onStatusChange = (event: any) => {
    setSelectedStatus(event.target.value);
  };
  const onDateChange = (event:any) => {
    setSelecteddate(event.target.value);
  }
  return (
    <div className="site-box">
      <div className="site-field">
        <select
          id="filter-status"
          className="site-field-item"
          value={selectedType}
          onChange={onTypeChange}
        >
          <option value="">Select Type</option>
          {props.typeList.map((status: string, index: number) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
        <label htmlFor="filter-status" className="site-field-select-label">
          Filter By Type
        </label>
      </div>
      <div className="site-field">
        <select
          id="filter-status"
          className="site-field-item"
          value={selectedStatus}
          onChange={onStatusChange}
        >
          <option value="">Select Status</option>
          {props.statusList.map((status: string, index: number) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
        <label htmlFor="filter-status" className="site-field-select-label">
          Filter By Status
        </label>
      </div>
      <div className="site-field">
        <input
          type="date"
          id="filter-daterange"
          className="site-field-item"
          name="birthday"
          onChange={onDateChange}
        />
        <label htmlFor="ilter-daterange" className="site-field-select-label">
          Filter By Date
        </label>
      </div>
    </div>
  );
};

export default SiteFilters;
