import React from "react";
function AddStudent(){
    return(
        <div>
            <form>
                Student Name: <input type="text" name="sname"></input><br></br>
                Student Id: <input type="text" name="sid"></input><br></br>
                Email: <input type="email" name="semail"></input><br></br>
                 Scontact: <input type="tel" name="scontact"></input><br></br>
                 Eamcet Rank: 
                 <input type="tel" name="study"></input><br></br>
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
export default AddStudent;