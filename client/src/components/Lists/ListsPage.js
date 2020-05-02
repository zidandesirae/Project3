import React from 'react';
import SaveBtn from '../Universal/SaveBtn';

function ListsPage() {
    return (
        <div className="card card1">
            <div className="card-body card-body1">
                <div className="row">
                    <div className="col-4 list-container">
                        <button type="button" className="btn">New List</button>
                        <div className="card">
                            <ul className="list-group">
                            </ul>
                        </div>
                    </div>
                    <div className="col-8">
                        <button type="button" className="btn mb-4">Save</button>
                        <input className="note-title h4" placeholder="List Title" maxLength="28" type="text" />
                        <textarea className="note-textarea" placeholder="List Text"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ListsPage;