import React, { useEffect, useState } from 'react'

function DataMap() {

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        setUsers(data)
    },[])
    let data = [
        {
            id: 1,
            name: "A",
            email: "a@gmail.com",
            age: 23,
            phone: "6524682964",
        },
        {
            id: 2,
            name: "B",
            email: "b@gmail.com",
            age: 23,
            phone: "6524682964",
        },
        {
            id: 3,
            name: "C",
            email: "c@gmail.com",
            age: 23,
            phone: "6524682964",
        },
        {
            id: 4,
            name: "D",
            email: "d@gmail.com",
            age: 23,
            phone: "6524682964",
        },
        {
            id: 5,
            name: "E",
            email: "e@gmail.com",
            age: 23,
            phone: "6524682964",
        },
        {
            id: 6,
            name: "F",
            email: "f@gmail.com",
            age: 23,
            phone: "6524682964",
        },
        {
            id: 7,
            name: "G",
            email: "g@gmail.com",
            age: 23,
            phone: "6524682964",
        },
        {
            id: 8,
            name: "H",
            email: "h@gmail.com",
            age: 23,
            phone: "6524682964",
        },
        {
            id: 9,
            name: "I",
            email: "i@gmail.com",
            age: 23,
            phone: "6524682964",
        },
        {
            id: 10,
            name: "J",
            email: "j@gmail.com",
            age: 23,
            phone: "6524682964",
        },   
    ]

  return (
    <>
        <table border={2} width={"100%"} style={{textAlign: "center", color: "blue"}} >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.phone}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default DataMap