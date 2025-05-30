import React, { useState } from "react";


function AddFaculty(){
    const [name,setName]=useState("");
const [id,setId]=useState("");
const [email,setEmail]=useState("");
const [econtact,setContact]=useState("");
const [contact,setEContact]=useState("");
const [addr,setAddress] =useState("");
const [photo,setUpload] = useState("");
    return(
        <div>
            <table border="1">
                <tr>
                  <th>Employee Name</th>
                  <th>Employee Id</th>
                <th>Email</th>
                   <th>Econtact</th>
                    <th>Contact</th>
                     <th>Address</th>
                      <th>Photo Upload</th>

                </tr>
                <tr>
            <td>{name}</td>
            <td>{id}</td>
            <td>{email}</td>
            <td>{econtact}</td>
            <td>{contact}</td>
            <td>{addr}</td>
            <td><img src={photo?URL.createObjectURL(photo):""} width="100px"></img></td>
            </tr>
            </table>
            <center>
            <h3>Add New Student Details</h3>
            <form>
                Employee Name: <input type="text" name="ename" onChange={(event)=>{setName(event.target.value)}}></input><br></br>
                Employee Id: <input type="text" name="eid" onChange={(event)=>{setId(event.target.value)}}></input><br></br>
                Email: <input type="email" name="eemail" onChange={(event)=>{setEmail(event.target.value)}}></input><br></br>
                 Econtact: <input type="tel" name="econtact" onChange={(event)=>{setContact(event.target.value)}}></input><br></br>
                 Employee Qualification: <br></br>
                 <input type="checkbox" name="study" ></input>SSC<br></br>
                 <input type="checkbox" name="study" ></input>Inter<br></br>
                 <input type="checkbox" name="study" ></input>Btech<br></br>
                 <input type="checkbox" name="study" ></input>Mtech<br></br>
                 <input type="checkbox" name="study" ></input>Phd<br></br>
                 Gender:<br></br>
                 <input type="radio" name="gender" ></input>Male
                 <input type="radio" name="gender" ></input>Female<br></br>
                 Contact:<input type="tel" name="contact" onChange={(event)=>{setEContact(event.target.value)}}></input><br></br>
                 Address:<input type="text" name="addr" onChange={(event)=>{setAddress(event.target.value)}}></input><br></br>
                 Photo Upload:<input type="file" name="photo" onChange={(e)=>{setUpload(e.target.files[0])}}></input><br></br>
                <input type="submit" name="submit"value="Save Record" ></input>
                <input type="reset" name="reset" value="reset"></input><br></br>

            </form>
            </center>
        </div>
    )
}
export default AddFaculty;