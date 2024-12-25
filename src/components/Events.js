import React from 'react';
import welcome from './images/welcome.jpeg';
import quiz from './images/quiz.png'


const EventCard = ({ title, date, description, image }) => {
  
  return (
    <div className="card" style={{width: '400px',marginLeft:'10px',height:'300px'}}>
      <br />
      <h4 className="card-title" style={{ textAlign: 'center', color: 'rgb(14, 43, 61)' }}>
        {title} - {date}
      </h4>
      <br />
      <img className="card-img-top" src={image} alt="Card image" style={{ width: '100%' }} />
      <div className="card-body">
        <h4 className="card-title"></h4>
        <p className="card-text" id="text">
          {description}
        </p>
      </div>
    </div>
  );
};

export function Events() {
  const eventsData = [
    {
      title: 'Youth Meeting',
      date: '18/02/2024',
      description: 'Next Youth Meeting will be held on 5/1/2025 from 2 pm to 3 pm. We welcome you to attend the meeting.',
      image: welcome,
    },
    // {
    //   title: 'Quiz Competition',
    //   date: '18/02/2024',
    //   description: 'Portion for Quiz Competion is Mathew : 21 to 28 . Price amount Rs. 250 ',
    //   image: quiz,
    // },
    // Add more events as needed
  ];

  return (
    <div className="default-container">
      <h2 id="heads">Upcoming Events</h2>
      <br />
      <div id="events" className="container mt-3">
        {eventsData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
