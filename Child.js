import React from "react";

class Child extends React.Component
{
    render(){
        // const{passData ,passData1} = this.props;
        const arrayList = this.props.passData;
        return(
            <div>
                <table>
                <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CITY</th>
                    </tr>
                    {
                        arrayList.map((item)=>(
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                        </tr>   
                        ))
                    }
                </table>
                {/* {
                    arrayList.map((item)=>(
                        <li>{item.name}</li>
                    ))
                } */}
                {/* <h1>{this.props.passData}</h1>
                <h1>{this.props.passData1}</h1>

                <hr/>

                <h1>{passData}</h1>
                <h1>{passData1}</h1> */}
            </div>
        )
    }
}
export default Child