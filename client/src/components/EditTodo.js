import { useState } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react';

const EditTodo = ({todo}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedTodo, setSelectedTodo] = useState(todo.description)

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(selectedTodo)
    try {
        const body = { "description" : selectedTodo };
        const response = fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(body),
        });
        window.location = "/"
    } catch (error) {
      console.log(error.message)
      
    }
  }

      return (
        <>
          <Button onClick={onOpen}>Open Modal</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay>
              <ModalContent>
                <ModalHeader>EDIT TASK</ModalHeader>
                <ModalCloseButton onClick={e => setSelectedTodo(todo.description)} />

                <ModalBody>
                  <div>
                    <input
                      className="
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="text"
                      value={selectedTodo}
                      onChange={(e) => {
                        setSelectedTodo(e.target.value);
                      }}
                    ></input>
                  </div>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={() => {setSelectedTodo(todo.description); onClose()}}>
                    Close
                  </Button>
                  <Button onClick={(e) => {onSubmitForm(e)}} type="button" colorScheme='red'className="bg-grey-500" variant="ghost">
                    EDIT
                  </Button>
                </ModalFooter>
              </ModalContent>
            </ModalOverlay>
          </Modal>
        </>
      );
}









export default EditTodo