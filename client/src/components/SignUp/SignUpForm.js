import React from 'react'
import { useForm } from 'react-hook-form';
import API from '../../utils/API';

function SignUpForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        API.saveUser(data);
        console.log(data);
    }
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
                    <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                        <option>Select</option>
                        <option>Create New Group</option>
                        <option>Enter Existing Group ID</option>
                    </select>
                </div>
                <div className="col">
                    <input className="form-control form-control-lg" type="text" placeholder="" />
                </div>
            </div>
            <button type="submit" className="btn btn-lg btn-block mb-4">Create Account</button>
        </form>
    );
}

export default SignUpForm;