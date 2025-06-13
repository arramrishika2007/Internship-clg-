import React from 'react'
class Print1 extends React.Component{
    render(){
    return(
        <div>
            <p>Displaying with palne function in Example2</p>
        </div>
    )
}
}
const Print2 = ()=>{
    return(
        <div>
            <p>Displaying with arrow function in Example2</p>
        </div>
    )
}
function Example2(){
    return(
        <div>
            <h1>Example2</h1>
            <Print1 />
             <Print2 />
        </div>
    )
}
export default Example2;