import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4">
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p className="text-gray-700">{event.description}</p>
            <p className="text-gray-500">Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-500">Location: {event.location}</p>
            <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
            </div>
        </div>
    );
};

export default EventCard;