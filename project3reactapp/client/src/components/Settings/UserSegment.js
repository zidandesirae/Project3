import React from "react";
import Row from './Row';
import Col6 from './Col6';
import Description from './Description';
import Editable from "./Editable";

function UserSegment(props) {
    return (
        <div>
            <Row>
                <Col6>
                    <Description />
                </Col6>
                <Col6>
                    <Editable />
                </Col6>
            </Row>
            <hr className="my-2" />
        </div>
    );
}

export default UserSegment;