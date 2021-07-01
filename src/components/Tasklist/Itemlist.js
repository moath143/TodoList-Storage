import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Itemlist({ item }) {
  const [show, setShow] = useState("none");
  const [textUpdate, setTextUpdate] = useState("");
  const dispatch = useDispatch();
  const showUpdate = () => {
    setShow("flex");
  };

  const cancelUpdate = () => {
    setShow("none");
  };

  const deleteTask = (item) => {
    dispatch({ type: "DELETE_ITEM", payload: item });
  };

  const updatedText = (item) => {
      // alert(item)
      dispatch({
        type: "UPDATED_ITEM",
        payload: { oldText: item, newText: textUpdate },
      });
        setShow('none')
  };
  return (
    <section className="task-list">
      <div className="task">
        <h2>{item}</h2>
        <div className="update-cansel">
          <button onClick={showUpdate} className="btn btn-primary">
            edit
          </button>
          <button
            onClick={() => {
              deleteTask(item);
            }}
            className="btn btn-danger"
          >
            delete
          </button>
        </div>
      </div>
      <div style={{ display: show }} className="update">
        <form className="form-update">
          <input
            value={textUpdate}
            onChange={(e) => {
              setTextUpdate(e.target.value);
            }}
            className="form-input input-width"
            type="text"
            placeholder="update your task..."
          />
        </form>
        <div className="update-cancel">
          <button onClick={() => {updatedText(item)}} className="btn btn-primary">
            update
          </button>
          <button onClick={cancelUpdate} className="btn btn-secondary">
            cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default Itemlist;
