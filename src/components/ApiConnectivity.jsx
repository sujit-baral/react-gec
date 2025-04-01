import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ApiConnectivity() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.log(error);            
        })
    })

  return (
    <div>
        <table border={1} cellPadding={0} cellSpacing={0} width={"100%"}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.phone}</td>
                                <td>{element.website}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ApiConnectivity