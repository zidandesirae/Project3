import React, { useState } from 'react';
// import API from '../../utils/API';

function ECform(props) {
    const [group, setGroup] = useState({
        name: "",
        id: ""
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setGroup(prevGroup => ({ ...prevGroup, [name]: value }))
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log(group);
    };

    return (
        <form onSubmit={e => onSubmit(e)}>
            <label className="text-left h5 pt-4 pb-2">Enter the Group ID of the Circle you would like to join: </label>
            <div className="row mx-auto">
                <div className="col-8">
                    <input
                    value={group.id}
                    onChange={e => handleInputChange(e)}
                    className="form-control form-control-lg mb-4"
                    name="id"
                    />
                </div>
                <div className="col-4">
                    <button type="submit" className="btn btn-lg mb-4">Search</button>
                </div>
            </div>
        </form>
    );
}

export default ECform;