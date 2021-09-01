import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const WriteEdit = (props) => {
  const history = useHistory();

  const paramsId = props.location.search.split("=")[1];
  const getData = localStorage.getItem("writeData");
  const getDataJSON = JSON.parse(getData);
  const getThisData = getDataJSON.filter((data) => data.id == paramsId);

  const [inputData, setInputData] = useState({
    title: "",
    content: "",
  });

  // input 제어
  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  // 이전 버튼 제어
  const onPreviousHandler = () => {
    history.push("/");
  };

  const onSubmit = () => {
    if (inputData.title == "" || inputData.content == "") {
      alert("제목과 내용을 모두 입력해주세요");
    } else {
      const noteIndex = getDataJSON.findIndex((data) => data.id === paramsId);
      getDataJSON.splice(noteIndex, 1, {
        id: paramsId,
        title: inputData.title,
        content: inputData.content,
      });
      localStorage.setItem("writeData", JSON.stringify(getDataJSON));
    }
  };

  const onRemoveHandler = () => {
    const noteIndex = getDataJSON.findIndex((data) => data.id === paramsId);
    if (noteIndex > -1) {
      getDataJSON.splice(noteIndex, 1);
    }
    localStorage.setItem("writeData", JSON.stringify(getDataJSON));
  };

  useEffect(() => {
    setInputData({
      title: getThisData[0].title,
      content: getThisData[0].content,
    });
    // console.log(getDataJSON);
  }, []);

  return (
    <div className="write_container">
      <div className="wirte_header">
        <div>
          <button type="button" onClick={onPreviousHandler}>
            Back
          </button>
        </div>
      </div>
      <div className="write_title">
        <input
          type="text"
          placeholder="Note Title"
          name="title"
          value={inputData.title}
          onChange={onInputChangeHandler}
        />
      </div>
      <div className="write_content">
        <textarea
          typeof="text"
          placeholder="enter Note Text"
          rows="10"
          name="content"
          value={inputData.content}
          onChange={onInputChangeHandler}
        />
      </div>
      <div className="write_edit_btn_container">
        <button type="button" onClick={onRemoveHandler}>
          Remove Note
        </button>
        <button type="button" onClick={onSubmit}>
          Done
        </button>
      </div>
    </div>
  );
};

export default WriteEdit;
