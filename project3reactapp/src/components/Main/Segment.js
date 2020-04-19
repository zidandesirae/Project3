
import React from 'react';
import Col6 from "./Col6";
import Link from "./Link";
import Card from "./../Card";
import Image from "./Image";

function Segment() {
    return (
        <Col6>
            <Link>
                <Card>
                    <Image />
                </Card>
            </Link>
        </Col6>
    );
}

export default Segment;
