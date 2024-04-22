import React, { useEffect, useState } from "react";
import "./filter.css";
import { filterOptions, languages, types } from "../../constants/data";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BsCheckLg, BsDisplay } from "react-icons/bs";

interface dataType {
  data: any[];
  setFilteredData: Function;
  filter: any;
  setFilter: Function;
}
const Filter = ({ data, setFilteredData, filter, setFilter }: dataType) => {
  const [selectedDropDown, setSelectedDropDown] = useState<any>({
    selectedDropDownName: null,
    isOpen: false,
  });

  const handleFilter = (event: any, name: string, value?: any) => {
    const updatedFilter = { ...filter, [name]: event.target.value };
    setFilter({ ...filter, [name]: event.target.value });
    let filteredData: any[] = data.filter(
      (item) =>
        item.name
          .toLowerCase()
          .includes(updatedFilter.searchText.toLowerCase()) &&
        (item?.language === updatedFilter?.language ||
          updatedFilter?.language === "All") &&
        (updatedFilter?.type ===
          item?.updatedFilter?.type?.toLocaleLowerCase() ||
          updatedFilter?.type === "All")
    );
    setFilteredData(filteredData);
  };
  const openDropDown = (dropdownType: string) => {
    if (
      selectedDropDown.selectedDropDownName &&
      dropdownType === selectedDropDown.selectedDropDownName
    ) {
      setSelectedDropDown({ selectedDropDownName: null, isOpen: false });
    } else {
      setSelectedDropDown({
        selectedDropDownName: dropdownType,
        isOpen: true,
      });
    }
  };
  const shouldOpenDropDown = (data: string): boolean => {
    return data === selectedDropDown?.selectedDropDownName;
  };
  const renderMenuItem = (data: string) => {
    const dropDownType =
      selectedDropDown?.selectedDropDownName?.toLocaleLowerCase();

    return (
      <div>
        <div>
          {filter?.[dropDownType]?.toLowerCase() ===
          data?.toLocaleLowerCase() ? (
            <div className="filter check">✓</div>
          ) : (
            <div className="filter dummy">. </div>
          )}
        </div>
        <div>{" " + data}</div>
      </div>
    );
  };
  const renderDropDown = () => {
    const menuItems =
      selectedDropDown?.selectedDropDownName === "Type" ? types : languages;
    return (
      <div className="filter dropDown">
        <div className="filter saperate ">
          <div>{`Select ${selectedDropDown?.selectedDropDownName}`}</div>
          <RxCross2 />
        </div>
        {menuItems?.map((data: string) => {
          return (
            <option
              className="filter menuItem"
              value={data}
              onClick={(event) =>
                handleFilter(
                  event,
                  selectedDropDown?.selectedDropDownName?.toLowerCase()
                )
              }
              key={data}
            >
              {renderMenuItem(data)}
            </option>
          );
        })}
      </div>
    );
  };

  return (
    <div className="filter root">
      <input
        className="filter searchBox"
        placeholder="Find a repository..."
        name="searchText"
        onChange={(event) => handleFilter(event, "searchText")}
        value={filter?.searchText}
      />
      <div className="filter dropDownFlex">
        {filterOptions?.map((data: string) => {
          return (
            <div
              key={data}
              className="filter flex"
              onClick={() => openDropDown(data)}
            >
              <div>{data}</div>
              <IoMdArrowDropdown className="filter downArrow" />
              {data !== "Sort" && shouldOpenDropDown(data) && renderDropDown()}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Filter;
