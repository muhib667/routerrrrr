import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


// use hook to insert the new movie 
const AddMovie = ({handleAdd}) => {
    const [newMovie,setNewMovie] = useState({
        title:"",
        description:"",
        rating:"",
        poster:""
    })
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /* function for adding for the button */
const handleChange = (e) => {
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
}

    return (
    <div>
        {/* insert a button for adding a new movie */}
    <Button variant="outline-light" onClick={handleShow} style={{fontWeight:'bolder',fontStyle:'italic'}} >
    ADD SERIE
    </Button>
    
    {/* insert a modal from bootsrap  with two button*/}
<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title style={{color:'rgb(228,6,19)',fontWeight:'bold'}}>ADD A NEW SERIE</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{fontWeight:'bolder'}}>Title : </Form.Label>
            <Form.Control
            type="text"
            placeholder="Add a title of serie"
            onChange={handleChange} name='title' value={newMovie.title}
            autoFocus/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{fontWeight:'bolder'}}>Description : </Form.Label>
            <Form.Control
            type="text"
            placeholder="Add a description for the serie"
            onChange={handleChange} name='description' value={newMovie.description}
            autoFocus/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{fontWeight:'bolder'}}>Rating :</Form.Label>
            <Form.Control
            type="number"
            placeholder="Add a rating for serie"
            onChange={handleChange} name='rating' value={newMovie.rating}
            autoFocus/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{fontWeight:'bolder'}}>Poster URL:</Form.Label>
            <Form.Control
            type="text"
            placeholder="Add URL for the serie"
            onChange={handleChange} name='poster' value={newMovie.poster}
            autoFocus/>
        </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
        Close
        </Button>
        <Button variant="danger" onClick={() => {handleAdd(newMovie);handleClose()}}>
        Save Changes
        </Button>
    </Modal.Footer>
</Modal>

</div>
)
}

export default AddMovie

