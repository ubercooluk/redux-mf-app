import React from "react";

function Todo(props) {
    return(
        <div key={props.id} onClick={() => props.removeTodo(props.id)}>
            <span>{props.description}</span>
        </div>
    )
}
export default Todo;