import { useState } from "react";

const Form = (props) => {

    const [content, setContent] = useState("");
    const { updateToDo } = props;

    const submit = (e) => {
        e.preventDefault();

        updateToDo({
            content: content,
            isCompleted: false,
            id: crypto.randomUUID(),
        });
        setContent("");
    }

    return (
        <div className="form">
            <form onSubmit={submit}>
                <input 
                    value={content} 
                    onChange={(e) => {
                        setContent(e.target.value)
                        }}
                        type="text" 
                    />
                    <button>Add</button>
            </form>
        </div>
    );

};

export default Form;