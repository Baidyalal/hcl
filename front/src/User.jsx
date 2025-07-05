import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';



function User() {

    const[bookings, setBooking] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    async function getData(){
        let result = await fetch("http://localhost:2500/booking");
        result = await result.json();
        setBooking(result)

        console.log(bookings)

    }

    return(
    <div className="login-page">

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Doctor Name</th>
                <th>Slot</th>
                <th>Patient Name</th>
                </tr>
            </thead>
            <tbody>
                
                     <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                
            </tbody>
        </Table>

    </div>)
}

export default User;