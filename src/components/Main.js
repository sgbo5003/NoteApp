import React from "react";
import { useHistory } from "react-router-dom";
import searchImg from "../images/search_icon1.png";

const Main = () => {
  const history = useHistory();

  const onCreateHandler = () => {
    history.push("/Write");
  };

  const onWritePageHandler = (data) => {
    history.push(`/WriteEdit?idx=${data.id}`);
  };

  const isWriteData = localStorage.getItem("writeData");
  const writeDataJSON = JSON.parse(isWriteData);

  return (
    <div className="main_content_container">
      {/*serach container*/}
      <div className="search_container">
        <input
          type="text"
          name="search_text"
          id="search_text"
          placeholder="검색어를 입력해 주세요."
        />
      </div>
      {/*content container*/}
      <div className="content_container">
        {isWriteData ? (
          writeDataJSON.map((data, idx) => {
            return (
              <div
                className="write_content_container"
                key={idx}
                onClick={() => onWritePageHandler(data, idx)}
              >
                <div className="write_content_title">
                  <h3>{data.title}</h3>
                </div>
              </div>
            );
          })
        ) : (
          <p className="content_initial">no result</p>
        )}
      </div>
      {/*button container*/}
      <div className="button_container">
        <button
          type="button"
          className="main_submit_btn"
          onClick={onCreateHandler}
        >
          Create Note
        </button>
      </div>
    </div>
  );
};

export default Main;
