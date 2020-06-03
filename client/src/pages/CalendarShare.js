import React, { useContext } from 'react';
import PageContainer from '../components/General/PageContainer';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "./CalendarShare.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
import API from '../utils/API';
import { GroupContext } from '../utils/GroupContext';

const DragAndDropCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);

class CalendarShare extends React.Component {

    static contextType = GroupContext;
    
    state = {
        events: [
            {
                start: moment().toDate(),
                end: moment()
                    .add(1, "days")
                    .toDate(),
                title: "Some title",
            }
        ]
    }

    handleSelect = ({ start, end }) => {
        let group = this.context.groupContext.id;
        // console.log(group);
        const title = window.prompt('New Event Name')
        const description = window.prompt('New Event Description')
        if (title) {
            //TODO: when group is figured out, add groupId to post info (and make sure it shouws in db)
            axios.post("/api/events", { start: start, end: end, name: title, description: description, groupId: group}).then(
                (res) => {
                    var id = res.data.id;
                    this.setState({
                        events: [
                            ...this.state.events,
                            {
                                id: id,
                                start,
                                end,
                                title,
                            },
                        ],
                    })
                },
                (err) => console.log(err)
            )
        }
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

        axios.put("/api/events/" + updatedEvent.id, { start: updatedEvent.start.toISOString(), end: updatedEvent.end.toISOString() }).then(
            (res) => { console.log(res); }, (err) => { console.log(err); }
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

        axios.put("/api/events/" + event.id, { start: start.toISOString(), end: end.toISOString() }).then(
            (res) => {
                console.log(res);
                const nextEvents = events.map(existingEvent => {
                    return existingEvent.id === event.id
                        ? { ...existingEvent, start, end }
                        : existingEvent
                })

                this.setState({
                    events: nextEvents,
                })
            }, (err) => { console.log(err); }
        );
        //alert(`${event.title} was resized to ${start}-${end}`)
    }

    onSelectEvent(pEvent) {
        const r = window.confirm("Would you like to remove this event?")
        if (r === true) {
            API.removeEvent({ id: pEvent.id }).then(res => {
                this.setState((prevState, props) => {
                    const events = [...prevState.events]
                    const idx = events.indexOf(pEvent)
                    events.splice(idx, 1);
                    return { events };
                });
            });
        }
    }

    fetchEvents() {
        axios.get("/api/events").then((returnCall) => {
            // let group = this.context.groupContext.id;
            // API.findByGroupId({groupId: group}).then((returnCall) => {
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
            <PageContainer title="Calendar">
                {
                    <div className="App">
                        <DragAndDropCalendar
                            selectable
                            localizer={localizer}
                            onEventDrop={this.moveEvent}
                            onEventResize={this.resizeEvent}
                            defaultDate={new Date()}
                            defaultView="month"
                            events={this.state.events}
                            onSelectEvent={event => {
                                alert(event.title)
                                this.onSelectEvent(event)
                            }}
                            onSelectSlot={this.handleSelect}
                            style={{ height: "100vh" }}
                        />
                    </div>
                }
            </PageContainer>
        );
    }
}

export default CalendarShare;