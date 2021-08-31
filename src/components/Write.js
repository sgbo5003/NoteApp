import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const Write = (props) => {
  const history = useHistory();
  const id = uuidv4();
  const timestamp = moment().valueOf();
  const getData = localStorage.getItem("writeData");
  const getDataJSON = JSON.parse(getData);
  const [inputData, setInputData] = useState({
    title: "",
    content: "",
  });

  const getSavedNotes = () => {
    try {
      return getData ? getDataJSON : [];
    } catch (e) {
      return [];
    }
  };

  const notes = getSavedNotes();

  // 이전 버튼 제어
  const onPreviousHandler = () => {
    history.push("/");
  };

  // input 제어
  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  // 제출 제어
  const onSubmit = () => {
    notes.push({
      id: id,
      title: inputData.title,
      content: inputData.content,
      createTime: timestamp,
      updateTime: timestamp,
    });
    localStorage.setItem("writeData", JSON.stringify(notes));
  };

  return (
    <div className="write_container">
      <div className="wirte_header">
        <div>
          <button type="button" onClick={onPreviousHandler}>
            Back
          </button>
        </div>
        <div>
          <span>{`Last edited ${moment(timestamp).fromNow()}`}</span>
        </div>
      </div>
      <div className="write_title">
        <input
          type="text"
          placeholder="Note Title"
          name="title"
          onChange={onInputChangeHandler}
        />
      </div>
      <div className="write_content">
        <textarea
          typeof="text"
          placeholder="enter Note Text"
          rows="10"
          name="content"
          onChange={onInputChangeHandler}
        />
      </div>
      <div className="write_btn_container">
        <button type="button">Remove Note</button>
        <button type="button" onClick={onSubmit}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Write;
