import React from 'react';
import PageContainer from '../components/General/PageContainer';
import Note from '../components/Lists/Note';
import Titles from '../components/Lists/Titles'
import '../components/Lists/Lists.css';

const notesArray = [
    // { id: 1, heading: 'List 3', value: 'Create a new list!' },
    { id: 1, heading: "Groceries", value: 'Eggs, Milk, Bread' },
    { id: 2, heading: "Rachel's Birthday Wish List", value: 'Here is a list of things I would like for my birthday!' }
];

class Lists extends React.Component {
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
            <PageContainer title="Lists">
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
            </PageContainer>
        );
    }
}

export default Lists;

