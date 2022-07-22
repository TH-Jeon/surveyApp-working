import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddSurvey() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label=""
        className="mb-3"
      >
        <Form.Control type="text" placeholder="please input the survey name." />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>
  );
}

export default AddSurvey;