import React from 'react';

function NCform(props) {

    return (
        <form onSubmit={e => props.onGroupSubmit(e)}>
            <label className="text-left h5 pt-4 pb-2">Create New Group Name: </label>
            <div className="row mx-auto">
                <div className="col-sm-8">
                    <input
                        value={props.group.name}
                        onChange={e => props.handleGroupInputChange(e)}
                        className="form-control form-control-lg mb-4"
                        name="name"
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