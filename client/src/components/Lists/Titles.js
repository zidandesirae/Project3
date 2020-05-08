import React, { Component } from 'react'


class Titles extends Component {
    render() {
        const { notes, changeCurrentNote, deletenote } = this.props

        return (
            <ul className='pl-2'>
                {notes.map((note) => (
                    <div className='list-item-top my-3' key={note.id}>
                        <li className='list-item h5 pb-3' onClick={() => changeCurrentNote(note)} >
                            {note.heading}
                        </li>
                        <button className='delete-note btn' onClick={() => deletenote(note)}>X</button>
                    </div>
                ))}
            </ul>
        )
    }
}

export default Titles;

