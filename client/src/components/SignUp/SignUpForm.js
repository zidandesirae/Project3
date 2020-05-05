import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import API from '../../utils/API';

function SignUpForm() {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        // Data gets saved to Users Table
        API.saveUser({
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            phone: data.phone,
            birthday: data.birthday
        })
            .then(() => {
                const numbers = /^[0-9]+$/;
                // Checks to see if user input is a number
                if ((data.typeInput).match(numbers)) {
                    return console.log("Existing group");
                } else {
                    // Data (group name) gets saved to Groups Table
                    API.saveGroup({ name: data.typeInput })
                    // Checks to see if user inputs 'new group name'
                    return console.log("Create a new group");
                }
            })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                className="form-control form-control-lg my-4"
                name="fullname"
                placeholder="Full Name"
                ref={register}
            />
            <input
                className="form-control form-control-lg my-4"
                name="email"
                placeholder="Email"
                ref={register}
            />
            <input
                className="form-control form-control-lg my-4"
                name="password"
                placeholder="Create Password (8-20 characters)"
                ref={register}
            />
            <input
                className="form-control form-control-lg my-4"
                type="tel"
                name="phone"
                placeholder="Phone Number (XXX-XXX-XXXX)"
                ref={register}
            />
            <input
                className="form-control form-control-lg my-4"
                name="birthday"
                placeholder="Birthday (MM/DD)"
                ref={register}
            />
            <div className="row my-4">
                <div className="col">
                    <select className="form-control form-control-lg" name="grouptype">
                        <option>Select</option>
                        <option value="new">Create New Group</option>
                        <option value="groupID">Enter Existing Group ID</option>
                    </select>
                </div>
                <div className="col">
                    <input
                        className="form-control form-control-lg"
                        name="typeInput"
                        ref={register}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-lg btn-block mb-4">Create Account</button>
        </form>
    );
}

export default SignUpForm;