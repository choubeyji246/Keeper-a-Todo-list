import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
const [expand, setExpand]=useState(false)

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function save(event) {
    props.onAdd(note);

    event.preventDefault();
  }
  function expanded(){
       setExpand(true)
  }

  return (
    <div>
      <form>
        {expand?<input 
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />: ""}
        <textarea
        onClick={expanded}
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="expand?3:1"
        />
        <button onClick={save}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
