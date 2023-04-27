import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FormGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

const DetailModal = (props) => {
  const { show, handleClose, food, handleSaveChanges, handleDelete } = props;

  const [editFood, setEditFood] = useState({ ...food });

  useEffect(() => {
    setEditFood({ ...food });
  }, [food]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditFood({
      ...editFood,
      [name]: value,
    });
  };
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [action, setAction] = useState("");

  const handleShowConfirmation = (action) => {
    setAction(action);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    if (action === "save") {
      handleSaveChanges(food.id, editFood);
    } else if (action === "delete") {
      handleDelete(food.id);
    }
    setShowConfirmation(false);
  };
  //console.log(food,editFood)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit/Delete Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <Form.Label>Food id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Food id"
                name="id"
                value={editFood.id}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Food Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Food Name"
                name="name"
                value={editFood.name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Food Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Food Price"
                name="price"
                value={editFood.price}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Food Discount</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Food Discount"
                name="discount"
                value={editFood.discount}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Food imageUrls</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Food imageUrls"
                name="imageUrls"
                value={editFood.imageUrls}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Food Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Food Type"
                name="type"
                value={editFood.type}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Food Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Food Description"
                name="description"
                value={editFood.description}
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleShowConfirmation("save");
            }}
          >
            Save Changes
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleShowConfirmation("delete");
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {action === "save" && (
            <p>Are you sure you want to save the changes?</p>
          )}
          {action === "delete" && (
            <p>Are you sure you want to delete this food?</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmation(false)}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DetailModal;