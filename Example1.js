import React from 'react'
import Example2 from './Example2'
class Display1 extends React.Component{
    render(){
    return(
        <div>
            <p>Displaying with palne function in Example1</p>
        </div>
    )
}
}
const Display2 = ()=>{
    return(
        <div>
            <p>Displaying with arrow function in Example1</p>
        </div>
    )
}
function Example1(){
    return(
        <div>
            <h1>Example1</h1>
            <Display1 />
             <Display2 />
        </div>
    )
}
export default Example1;