import React, { useState } from "react";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { setPopupDisplay } from "../../reducers/fileReducer";
import { createDir } from "../../actions/file";

const Popup = () => {
  const [dirName, setDirName] = useState("");
  const { popupDisplay } = useSelector((state) => state.files);
  const { currentDir } = useSelector((state) => state.files);

  const dispatch = useDispatch();

  const createHandler = () => dispatch(createDir(currentDir, dirName));

  return (
    <div
      className="popup"
      style={{ display: popupDisplay }}
      onClick={() => dispatch(setPopupDisplay("none"))}
    >
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <div className="popup__header">
          <div className="popup__title">Create new directory</div>
          <button
            className="popup__close"
            onClick={() => dispatch(setPopupDisplay("none"))}
          >
            X
          </button>
        </div>
        <Input
          type="text"
          placeholder="Enter name directory..."
          value={dirName}
          setValue={setDirName}
        />
        <button className="popup__create" onClick={() => createHandler()}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Popup;
