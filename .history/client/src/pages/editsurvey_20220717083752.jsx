import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useState, useEffect} from 'react';
import { getThisSurvey} from '../service/api'; 
import { useHistory, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`
const defaultValue={
    name:''
    
}


const EditSurvey=()=>{
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [survey, setSurvey] = useState(defaultValue);
    
    const {id} = useParams();
    
    useEffect(()=>{
        loadSurveyDetails();
    },[])
    
    const loadSurveyDetails =async()=>{
        const response = await getThisSurvey(id);
        setSurvey(response.data);
    }

    const onValueChange=(e)=>{
        //console.log(e.target.name, e.target.value)
        setSurvey({...survey, [e.target.name]: e.target.value});
       // console.log(user);
     }


    return(
        <Container>
            <Typography variant="h4">Edit Survey</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} name="name" value={survey.name}/>
            </FormControl>
            
            <Button variant="warning" onClick={() => setSmShow(true)} className="me-2">
        Create a T/F question
      </Button>

      <Button variant= "success" onClick={() => setLgShow(true)}>Create a multiple choice question</Button>

      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Add a T/F question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>please input your question</Form.Label>
              <Form.Control as="textarea" rows={3} name="statement"/>
            </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" } >
            Add Question
          </Button>
          </Modal.Footer>
      </Modal> 




      </Container>
    )

}

export default EditSurvey;