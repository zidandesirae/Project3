import React from 'react';

function ECform(props) {
    return (
        <form onSubmit={e => props.onGroupSubmit(e)}>
            <label className="text-left h5 pt-4 pb-2">Enter the Group ID of the Circle you would like to join: </label>
            <div className="row mx-auto">
                <div className="col-8">
                    <input
                        value={props.group.id}
                        onChange={e => props.handleGroupInputChange(e)}
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