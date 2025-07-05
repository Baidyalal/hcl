import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Booking(){


    const book = async ()=>{

    };
     
    return(
    <div className='login-page'>

        <Form.Select aria-label="Slots">
        <option>Select one slot</option>
        <option value="9-10">9AM-10AM</option>
        <option value="10-11">10AM-11AM</option>
        <option value="11-12">11AM-12AM</option>
        </Form.Select><br/>

        <Form.Select aria-label="Slots">
        <option>Select Doctor</option>
        <option value="Dr. Raghu">Dr. Raghu</option>
        <option value="Dr. Monish">Dr. Monish</option>
        <option value="Dr. Ajay">Dr. Ajay</option>
        </Form.Select><br/>
         <Button type='button' variant="primary" onClick={book} >Book</Button>

    </div>)
}

export default Booking;