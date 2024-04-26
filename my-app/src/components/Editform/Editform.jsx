import React, { useState } from "react";
import './Editform.scss'


const Editform = ({photo, onEdit}) => {
    const [title, setTitle] = useState(photo.title);
    

    function handleSubmit(e){
        e.preventDefault();
        const updatedPhoto={
            ...photo,
            title
        };
        onEdit(updatedPhoto);

    }
  return (
    <form onSubmit={handleSubmit} className="input-container">
        <input type="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button type="submit" id="submit">submit</button>
    </form>
  )
}

export default Editform