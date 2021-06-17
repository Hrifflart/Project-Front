import React, {Component} from 'react'
import Form from './Formulaire';


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Start hour</th>
                <th>End hour</th>
                <th>Topic</th>
                <th>Link</th>
                <th></th>
            </tr>
        </thead>
    )
}

const TableBody = ({props}) => (
    <tbody>{props?.map((index) => {
        console.log(props);
        return (
                <tr key={_id}>
                    <td>{_id}</td>
                    <td>{start_hour}</td>
                    <td>{end_hour}</td>
                    <td>{topic}</td>
                    <td>{link}</td>

                    <button type="submit" onClick={() => {DeleteMeeting_by_id(_id) }}>Delete</button>
                </tr>
        )
    })}
    </tbody>

)

function DeleteMeeting_by_id(id){
    console.log(id)
    fetch('http://localhost:5000/meeting/'+id, { method: 'DELETE' })
}



class Table extends Component {
    render() {
        const {resultData} = this.props;
        console.log(this.props.resultData);
        return (
            <body>
                <h1>Meetings : </h1><br></br>
                <table>
                    <TableHeader/>
                    <TableBody props={resultData} />
                </table>
                
                <br></br><br></br>
                <hr></hr>
                <br></br><br></br>
                
                <center>
                    <Form />
                </center>

                <br></br>
            </body>
        )
    }
}

export default Table