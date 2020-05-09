import React, { Component } from 'react';
import Note from './Note';
import Titles from './Titles'
import './Lists.css';

const notesArray = [
    { id: 1, heading: 'To-Do List', value: 'Create a new list!' },
    { id: 2, heading: 'Grocery List', value: 'Create a new list!' },
    { id: 3, heading: 'General', value: 'Create a new list!' }
];

class Lists extends Component {

    state = {
        currentNote: null,
        notes: notesArray
    }

    changeCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }

    deletenote = (note) => {
        this.setState((state) => ({ notes: state.notes.filter(noteIterator => (noteIterator.id !== note.id)) }))
        this.setState({ currentNote: null })
    }

    saveNote = (note) => {
        this.setState((state) => { state.notes.concat([note]) })
        this.setState({ currentNote: note })

    }

    addNew = () => {
        const note = { id: this.state.notes.length + 1, heading: '', value: '' }
        this.setState((state) => ({ notes: state.notes.concat([note]) }))
        this.setState({ currentNote: note })
    }

    render() {
        this.state.notes.sort((a, b) => { return b.id - a.id })

        return (
            <div className="App">
                <button className='add-note btn' onClick={this.addNew}>New List</button>
                <div className='notes-wrapper row'>
                    <div className='list-notes-top col-md-4 col-sm-12'>
                        <Titles notes={this.state.notes} changeCurrentNote={this.changeCurrentNote} deletenote={this.deletenote} />
                    </div>
                    <div className='current-note col-md-8 col-sm-12'>
                        {(this.state.currentNote !== null) && (<Note note={this.state.currentNote} savenote={this.saveNote} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Lists;
