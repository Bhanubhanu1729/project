import React from "react";

const arObj =[
    {id:18,name:"Bhanu",city:"alwal"},
    {id:5,name:"Teja",city:"alwal"},
    {id:8,name:"Joanna",city:"alwal"},
];

class ArrayMap extends React.Component{
    render(){
        return(
            <div>
               {/* { arObj.map((item) => (
                    <li>
                        {item.id}-{item.name}-{item.city}
                    </li>
                ))} */}
                <table>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CITY</th>
                    </tr>

                    {
                        arObj.map((item)=>(
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                        </tr>   
                        ))
                    }
                </table>
            </div>
        )
    }
}
export default ArrayMap