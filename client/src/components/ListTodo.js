import { useState, useEffect, useDisclosure} from "react";
import EditTodo from "./EditTodo";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';



const ListTodo = () => {
    const [todos, setTodos] = useState([]);
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const list = ['first', 'second'];
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json()
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    //DELETE TODO
    const deleteTodo = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/todos/${id}`, {
          method: 'DELETE'
        });
        setTodos(todos.filter(todo => todo.todo_id !== id))
       } catch (error) {
        console.error(error.message)
      }
    }


  return (
    <div>
      <div className="flex flex-col">
        <div className="">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center table-fixed">
                <thead className="min-w-2 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-3 py-4 border-r"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo, index) => (
                    <tr key={todo.todo_id} className="border-b">
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                        {index + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                        {todo.description}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap border-r">
                        <EditTodo todo={todo} />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap border-r">
                        <button
                          className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                          onClick={() => deleteTodo(todo.todo_id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



















export default ListTodo