import React, { useState, useEffect } from "react";
import "./repo.css";
import { menu } from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../filter/filter";
import { getRepoData } from "../../actions";
import { Dispatch } from "redux";
import RepoDetail from "./repoDetail";
import { RxCrossCircled } from "react-icons/rx";
export const RepoSection = () => {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [filter, setFilter] = useState<{
    searchText: string;
    type: string;
    language: string;
  }>({
    searchText: "",
    type: "All",
    language: "All",
  });
  const { data, isLoading } = useSelector(
    (state: any) => state.repositoryReducer
  );
  const [filteredData, setFilteredData] = useState<any[]>();

  useEffect(() => {
    fetchRepoData(dispatch);
  }, []);
  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  const fetchRepoData = (dispatch: Dispatch<any>) => {
    dispatch(getRepoData());
  };
  const handleSelectedIndex = (index: number) => {
    if (index === selectedIndex) return;
    setSelectedIndex(index);
  };
  const clearFilter = () => {
    setFilter({ ...filter, searchText: "", type: "All", language: "All" });
    setFilteredData(data);
  };
  return (
    <div className="repoSection root">
      {/* <div className="repoSection menu">
        {menu?.map((data: string, index: number) => {
          return (
            <div
              className={`repoSection ${
                index === selectedIndex ? "selectedMenuItem" : "menuItem"
              }`}
              onClick={() => {
                handleSelectedIndex(index);
              }}
            >
              {data}
            </div>
          );
        })}
      </div> */}
      <div className="repoSection divider"></div>
      {selectedIndex === 1 ? (
        <>
          <Filter
            setFilteredData={setFilteredData}
            data={data}
            filter={filter}
            setFilter={setFilter}
          />

          {!isLoading && filteredData?.length > 0
            ? filteredData?.map((repoData: any, index: number) => {
                return (
                  <RepoDetail
                    repoData={repoData}
                    index={index}
                    totalItems={data?.length}
                  />
                );
              })
            : !isLoading && (
                <>
                  <div className="repoSection empty">
                    <div>
                      {`0 results for ${
                        filter?.type !== "All"
                          ? filter?.type?.toLocaleLowerCase()
                          : ""
                      } repositories${
                        filter?.language !== "All"
                          ? ` written in ${filter?.language}`
                          : ""
                      } ${
                        filter?.searchText?.length > 0
                          ? `starting wihth ${filter?.searchText}`
                          : `.`
                      }`}
                    </div>
                    <div className="repoSection flex" onClick={clearFilter}>
                      <RxCrossCircled />
                      <div>{"Clear Filter"}</div>
                    </div>
                  </div>
                  <div className="repoSection center">
                    {
                      "supreetsingh247 doesn’t have any repositories that match."
                    }
                  </div>
                </>
              )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default RepoSection;
