import React, { Component } from 'react';
import NavBar from '../components/Universal/NavBar';
import Container2 from '../components/Universal/Container2';
import TitleH2 from '../components/Universal/TitleH2';
import Col10 from '../components/Universal/Col10';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "./CalendarShare.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'

const DragAndDropCalendar = withDragAndDrop(Calendar)

const localizer = momentLocalizer(moment);

class CalendarShare extends Component {
    // set to event state; 
    state = {
        events: [
            {
                start: moment().toDate(),
                end: moment()
                    .add(1, "days")
                    .toDate(),
                title: "Some title"
            }
        ]
    }

    moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
        const { events } = this.state

        const idx = events.indexOf(event)
        let allDay = event.allDay

        if (!event.allDay && droppedOnAllDaySlot) {
            allDay = true
        } else if (event.allDay && !droppedOnAllDaySlot) {
            allDay = false
        }

        const updatedEvent = { ...event, start, end, allDay }

        //var newStart = new Date(updatedEvent.start.getTime() - updatedEvent.start.getTimezoneOffset() * 60000).toISOString();
        //var newEnd = new Date(updatedEvent.end.getTime() - updatedEvent.end.getTimezoneOffset() * 60000).toISOString();

        axios.put("/api/events/" + updatedEvent.id, {start: updatedEvent.start.toISOString(), end: updatedEvent.end.toISOString()}).then(
            (res) => {console.log(res);}, (err) => {console.log(err); }
        );

        const nextEvents = [...events]
        nextEvents.splice(idx, 1, updatedEvent)

        this.setState({
            events: nextEvents,
        })

        // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
    }

    resizeEvent = ({ event, start, end }) => {
        const { events } = this.state

        const nextEvents = events.map(existingEvent => {
            return existingEvent.id === event.id
                ? { ...existingEvent, start, end }
                : existingEvent
        })

        this.setState({
            events: nextEvents,
        })

        //alert(`${event.title} was resized to ${start}-${end}`)
    }

    fetchEvents() {
        axios.get("/api/events").then((returnCall) => {
            (returnCall.data || []).forEach(function (ele) { 
                ele.title = ele.name;
                ele.start = new Date(ele.start);
                ele.end = new Date(ele.end);
            });
            this.setState({ events: returnCall.data });
        }, () => { });
    }

    componentDidMount() {
        this.fetchEvents();
    }

    render() {
        return (
            <div>
                <NavBar />
                <Container2>
                    <Col10>
                        <TitleH2 title="Calendar" />
                        {
                            <div className="App">
                                <DragAndDropCalendar
                                    localizer={localizer}
                                    onEventDrop={this.moveEvent}
                                    onEventResize={this.resizeEvent}
                                    defaultDate={new Date()}
                                    defaultView="month"
                                    events={this.state.events}
                                    style={{ height: "100vh" }}
                                />
                            </div>
                        }
                    </Col10>
                </Container2>
            </div>
        );
    }
}

export default CalendarShare;