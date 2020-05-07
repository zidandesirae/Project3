import React, { useState} from 'react';
import API from '../../utils/API';

function NCform(props) {
    const [group, setGroup] = useState({
        name: "",
        cirlecode: ""
    });

    // const code = Math.floor(Math.random() * 9000000000) + 1000000000;

    const handleInputChange = e => {
        const { name, value } = e.target;
        setGroup(prevGroup => ({ ...prevGroup, [name]: value }))
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log(group);
        API.saveGroup(group);
    };

    return (
        <form onSubmit={e => onSubmit(e)}>
            <label className="text-left h5 pt-4 pb-2">Create New Group Name: </label>
            <div className="row mx-auto">
                <div className="col-sm-8">
                    <input
                        value={group.name}
                        onChange={e => handleInputChange(e)}
                        className="form-control form-control-lg mb-4"
                        name="name"
                        placeholder=""
                    />
                </div>
                <div className="col-sm-4">
                    <button type="submit" className="btn btn-lg mb-4" value="">Create</button>
                </div>
            </div>
        </form>
    );
}

export default NCform;