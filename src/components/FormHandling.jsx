import React, { useState } from 'react'

function FormHandling() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const [error, setError] = useState({})

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validate = () => {
        let tempErrors = {};
        if(!formData.name) tempErrors.name = "Name is required";
        if(!formData.email) tempErrors.email = "Email is required";
        setError(tempErrors)
        return Object.keys(tempErrors).length===0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate) {
            console.log("Form submitted", formData);
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" id="name" placeholder='Enter your name' value={formData.name} onChange={handleChange} />
            {error.name && <span style={{color: "red"}}>{error.name}</span>}
            <br />
            <label>Email</label>
            <input type="email" name="email" id="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} />
            {error.email && <span style={{color: "red"}}>{error.email}</span>}
            <br />
            <input type="submit" name="btn" id="btn" value="Submit" />
        </form>
    </>
  )
}

export default FormHandling