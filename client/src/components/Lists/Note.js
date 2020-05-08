import React, { Component } from 'react'

class Note extends Component {
    componentWillReceiveProps(nextProps) {
        const newProps = nextProps
        this.textInput.value = newProps.note.heading
        this.textAreaInput.value = newProps.note.value
    }

    save = (note) => {
        note.heading = this.textInput.value
        note.value = this.textAreaInput.value
        this.props.savenote(note)
    }
    render() {
        const { note } = this.props

        return (
            <div className='note-wrapper-single'>
                <input defaultValue={note.heading} type='text' placeholder='Untitled' ref={(input) => { this.textInput = input }} onChange={(event) => this.save(note)} />
                <textarea defaultValue={note.value} ref={(input) => { this.textAreaInput = input }} onChange={() => this.save(note)} />
            </div>
        )
    }
}

export default Note;
