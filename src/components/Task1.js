import {useState} from "react";
import "./Task1.css"
function Task1()
{
    const [text,setText] = useState("");
    const count = text.split(/\s+/).filter(Boolean).length;
    const handleChange = (event) => {
        setText(event.target.value);
    }
    return(
        <div class="container">
            <h1>Responsive Paragraph Word <br/> Counter</h1>
            <textarea value={text} onChange={handleChange}></textarea>
            <div class="c1">
                <p>Word Count:{count}</p>
            </div>
        </div>
    )
}

export default Task1;