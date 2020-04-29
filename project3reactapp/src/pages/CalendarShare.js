import React, { Component } from 'react';
import NavBar from '../components/NavBar/Navbar';
import Container2 from '../components/Calendar/Container2';
import TitleH2 from '../components/Calendar/TitleH2';
import Col10 from '../components/Calendar/Col10';
import Footer from '../components/Footer';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./App.css";
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
                <NavBar />
                <Container2>
                    <TitleH2 title="Calendar" />
                    <Col10>

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
                <Footer />
            </div>
        );
    }
}

export default CalendarShare;