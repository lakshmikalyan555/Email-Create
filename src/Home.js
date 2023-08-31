import React from "react";
import { useState } from "react";
function Home(){
    const [input, setInput] = useState(
        {
            name:"",
            email:"",
        }
    );
    const [tableData, setTableData] = useState([])
const handleChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        });
};
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log("input",input);
        setTableData([...tableData, input]);
    };
    console.log("tableData", tableData);
    return(
        <div>
            <h1>CRUD App</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={input.name} placeholder="Enter name" onChange={handleChange}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={input.email} placeholder="Enter mail" onChange={handleChange}/>
                </div>
                <button type="submit">Add {" "}</button>
            </form>
        </div>
         <div>    
         <table>
             <thead>
                 <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Actions</th>
                 </tr>
             </thead>
             <tbody>
             {tableData.map((item)=>{
                    <tr>
                         <td>{item.name}</td>
                         <td>{item.email}</td>
                         <td>
                             <button>Edit</button>
                             <button>Delete</button>
                         </td>
                     </tr>
                     })
                 }
             </tbody>
         </table>
     </div>
        </div>
    )
}
export default Home;