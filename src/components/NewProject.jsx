import Input from "./Input.jsx"
import { useRef } from "react";
import Model from "./Model.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const model = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === ""){
      model.current.open()
      return;
    }
    
    onAdd({
      title: enteredTitle,
      description : enteredDescription,
      dueDate : enteredDueDate
    })
    
    
    
  }


  return (
    <>
    <Model ref = {model} buttonCaption = "Okay">
      <h2  className="text-xl font-bold text-stone-500 my-4 ">
        Invalid input
      </h2>
      <p className="text-stone-800 mb-4">Ops you forget to enter the value</p>
    </Model>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={onCancel} className="text-stone-800 hover:text-stone-950 " >Cancle</button>
        </li>
        <li>
          <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      <Input type = "text" ref = {title} label = "Title"/>
      <Input ref = {description} label = "Description" textarea/>
      <Input type = "date" ref = {dueDate} label = "Due Date"/>

    </div></>
  );
}
