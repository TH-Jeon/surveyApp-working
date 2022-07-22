import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddSurvey() {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Survey Name</Form.Label>
        <Form.Control type="text"  />
        <Form.Text className="text-muted">
          create a name for your survey!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Add questions</Form.Label>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddSurvey;