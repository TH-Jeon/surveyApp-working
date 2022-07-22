import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './add'
function AddSurvey() {
  return (
    <>
      <div className="center">
      <FloatingLabel
        controlId="floatingInput"
        label="Please input your survey name"
        className="mb-3"
      >
        <Form.Control type="text"  />
      </FloatingLabel>
      </div>
    </>
  );
}

export default AddSurvey;