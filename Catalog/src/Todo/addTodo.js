import React, {useState} from 'react';

function AddTodoComponent(props) {
    const [inputValue, setInputValue] = useState('');
    function addTodo() {
        props.addTodo(inputValue);
        setInputValue('');
    }
    return(
        <div>
            <label>TODO</label>
            <input type='text' placeholder='Enter TODO' value={inputValue}
             onChange={(e) => setInputValue(e.target.value)} />
             <button onClick={addTodo}>Submit</button>
        </div>
    )
}
export default AddTodoComponent;