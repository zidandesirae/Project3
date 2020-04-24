import React, { Component } from 'react';
import Container2 from '../components/Universal/Container2';
import TitleH2 from '../components/Universal/TitleH2';
import Col10 from '../components/Universal/Col10';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

// import NavBar from '../components/Universal/NavBar';
// import Footer from '../components/Universal/Footer';

const localizer = momentLocalizer(moment);

class CalendarShare extends Component {
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
                {/* <NavBar /> */}
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
                {/* <Footer /> */}
            </div>
        );
    }
}

export default CalendarShare;