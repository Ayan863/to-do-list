import { FaRegSquare } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import "./../../../assets/css/main.css";
import { useRef } from "react";
const AddTask = () => {
  const inputRef = useRef();
    const enter =()=>{
        if(event.key=='Enter'){
            inputRef.current.style.border = "2px solid black";
        }
    }
  const focus = () => {
    if (inputRef.current) inputRef.current.style.border = "2px solid black";
  };
  return (
    <section className="task">
      <div className="buttons">
        <button className="add">Add Task</button>
        <button>All</button>
      </div>
      <div className="tasks">
        <div className="right">
          <div className="check">
            <FaRegSquare />
            <CiSquareCheck className="tik" />
          </div>
          <div className="txt">
            <input type="text" ref={inputRef} onFocus={focus} onKeyDown={enter}/>
            <br></br>
            <span className="date">
              <i>date</i>
            </span>
          </div>
        </div>
        <div className="icons">
          <FaClock />
          <FaTrash />
          <MdEdit />
        </div>
      </div>
    </section>
  );
};

export default AddTask;
