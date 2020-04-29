import React, { Component } from 'react';
import Container2 from '../components/Universal/Container2';
import TitleH2 from '../components/Universal/TitleH2';
import Col10 from '../components/Universal/Col10';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./CalendarShare.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

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

    render() {
        return (
            <div>
                <Container2>
                    <Col10>
                    <TitleH2 title="Calendar" />
                        {
                            <div className="App">
                                <Calendar
                                    localizer={localizer}
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