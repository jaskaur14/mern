const Display = (props) => {

    const { toDo, completed, deleteTask } = props;

    return (
        <>
        {
        toDo.map((todo, index) => (
            <div key={todo.id}>
                <p className={todo.isCompleted? "completed" : ""}>{todo.content}</p>
                <input type="checkbox" onChange={() => completed(todo)} />
                <button onClick={() => deleteTask(todo.id)}>Delete</button>
            </div>
        ))
        }
    </>
    );

};

export default Display;