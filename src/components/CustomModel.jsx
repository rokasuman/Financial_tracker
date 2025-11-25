
import Modal from 'react-bootstrap/Modal';
import { useUser } from '../context/userContext';

export const CustomModel=({children}) =>{
    const {toggleModel,show} = useUser();
  
  return (
    <>
      

      <Modal
        show={show}
        onHide={()=>toggleModel(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       {
        children
       }
        </Modal.Body>
       
      </Modal>
    </>
  );
}

