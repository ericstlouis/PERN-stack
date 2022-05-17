import {useState} from 'react';

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = fetch("http://localhost:5000/todos",{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(body)
        });
        console.log(response);
        console.log(description);
        window.location = "/";
        } catch (error) {
            console.log(error.message)
        }
    }

 return (
    <div>
      <h1 className="text-2xl mt-2">PERN STACK TODO APP</h1>
      <form onSubmit={onSubmitForm}  className="my-3">
        <input
          className="border bg-gray-200 rounded w-3/6 py-2 px-3"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value) }
        />
        <br />
        <button type='submit' className="mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </form>
    </div>
  );
}




export default InputTodo