import React from "react";
import Row from './Row';
import Col6 from './Col6';
import CheckBox from './CheckBox';
import Description from "./Description";

function Notifications(props) {
    return (
        <div>
            <Row>
                <Col6>
                    <Description />
                </Col6>
                <Col6>
                    <CheckBox />
                </Col6>
            </Row>
            <hr className="my-2" />
        </div>
    );
}

export default Notifications;