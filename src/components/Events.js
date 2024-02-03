import React from 'react';
import welcome from './images/welcome.jpeg'

export function Events() {
  const width = { width: '400px' };

  return (
    <div className="default-container">
     <h2 id="heads">Upcoming Events</h2>
    <br/>
      <div id="events" className="container mt-3 ">
        <div className="card" style={width}>
          <br />
          <h4 className="card-title" style={{ textAlign: 'center', color: 'rgb(14, 43, 61)' }}>
            Youth Meeting - 04/02/2024
          </h4>
          <br />
          <img className="card-img-top" src={welcome} alt="Card image" style={{ width: '100%' }} />
          <div className="card-body">
            <h4 className="card-title"></h4>
            <p className="card-text" id="text">
              Next Youth Meeting will be held on 21/1/2024 from 2 pm to 3 pm. We welcome you to attend the meeting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
