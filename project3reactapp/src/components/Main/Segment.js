import React from 'react';
import Col6 from "./Col6";
import SegLink from "./SegLink";
import Card from "./Card";
import Image from "./Image";

function Segment() {
    return (
        <Col6>
            <SegLink>
                <Card>
                    <Image />
                </Card>
            </SegLink>
        </Col6>
    );
}

export default Segment;
