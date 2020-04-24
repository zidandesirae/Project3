import React from 'react';

const eachSeg = [
    {
        id: 1,
        img: "INSERT",
        alt: "calendar",
        route: '/calendar'
    },
    {
        id: 2,
        img: "INSERT",
        alt: "dashboard",
        route: '/dashboard'
    },
    {
        id: 3,
        img: "INSERT",
        alt: "lists",
        route: '/lists'
    },
    {
        id: 4,
        img: "INSERT",
        alt: "photos",
        route: '/photos'
    }
];

function Segment(props) {
    return (
        eachSeg.map(item => (
            <div class="col-6 p-4">
            <a href={item.route}>
                <div className="card">
                    <div className="card-body">
                        <img src={item.img} alt={item.alt} key={item.id} className="img-fluid" />
                    </div>
                </div>
            </a>
        </div>
        ))
    );
}

export default Segment;
