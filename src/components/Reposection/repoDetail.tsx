import React from "react";
import "./repo.css";
import { languageColorMapping } from "../../constants/data";
import { FaCodeFork } from "react-icons/fa6";
interface dataType {
  repoData: any;
  index: number;
  totalItems: number;
}
const RepoDetail = ({ repoData, index, totalItems }: dataType) => {
  const formatDate = (dateString: string): string => {
    const options: any = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  return (
    <div
      className={`repoDetail ${
        index === 0
          ? "rootFirst"
          : index === totalItems - 1
          ? "rootLast"
          : "root"
      }`}
    >
      <div className="repoDetail flex">
        <div className="repoDetail name">{repoData?.name}</div>
        {!repoData?.private && (
          <div className="repoDetail public">{"Public"}</div>
        )}
      </div>
      <div className="repoDetail desc">{repoData?.description}</div>
      <div className="repoDetail bottomFlex">
        {repoData?.language && (
          <div className="repoDetail language">
            {" "}
            <div className="repoDetail languageColorFlex">
              <div
                className="repoDetail languageColor"
                style={{
                  backgroundColor: languageColorMapping.get(repoData?.language),
                }}
              ></div>
              <div>{repoData?.language}</div>
            </div>{" "}
          </div>
        )}
        {repoData?.forks > 0 && (
          <div className="repoDetail languageColorFlex">
            <FaCodeFork />
            <div>{repoData?.forks}</div>{" "}
          </div>
        )}
        {repoData?.updated_at && (
          <div className="repoDetail languageColorFlex">
            <span>
              {"Updated at"} <span>{formatDate(repoData?.updated_at)}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default RepoDetail;
