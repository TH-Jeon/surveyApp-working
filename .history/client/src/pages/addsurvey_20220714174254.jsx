import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddSurvey() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Please input your survey name"
        className="mb-3"
      >
        <Form.Control type="text"  />
      </FloatingLabel>
      
    </>
  );
}

export default AddSurvey;