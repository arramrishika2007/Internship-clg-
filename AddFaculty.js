import React from "react";
function AddFaculty(){
    return(
        <div>
            <form>
                Employee Name: <input type="text" name="ename"></input><br></br>
                Employee Id: <input type="text" name="eid"></input><br></br>
                Email: <input type="email" name="eemail"></input><br></br>
                 Econtact: <input type="tel" name="econtact"></input><br></br>
                 Employee Qualification: <br></br>
                 <input type="checkbox" name="study"></input>SSC<br></br>
                 <input type="checkbox" name="study"></input>Inter<br></br>
                 <input type="checkbox" name="study"></input>Btech<br></br>
                 <input type="checkbox" name="study"></input>Mtech<br></br>
                 <input type="checkbox" name="study"></input>Phd<br></br>
                 Gender:<br></br>
                 <input type="radio" name="gender"></input>Male
                 <input type="radio" name="gender"></input>Female<br></br>
                 Contact:<input type="tel" name="contact"></input><br></br>
                 Address:<input type="text" name="addr"></input><br></br>
                 Photo Upload:<input type="file" name="photo"></input><br></br>
                <input type="submit" name="submit"value="Save Record"></input>
                <input type="reset" name="reset" value="reset"></input><br></br>
            </form>
        </div>
    )
}
export default AddFaculty;