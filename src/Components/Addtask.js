import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addtask } from "./Action";

const AddTask = () => {
  const dispatch = useDispatch();
  const [des, setDes] = useState("");
  const handleAdd = () => {
    if(des){
          dispatch(
      Addtask({
        id: Math.random(),
        description: des,
        isDone: false,
      }));
    }
    empty();
  };
  const empty = () => (setDes(""));
  const change = (e) => {setDes(e.target.value)};
  return (
    <div>
      <input onChange={change} type="text" value={des} />
      <button onClick={handleAdd}>add todo</button>
    </div>
  );
};
export default AddTask;