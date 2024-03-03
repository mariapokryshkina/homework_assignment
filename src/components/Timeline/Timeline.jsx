import React from 'react'
import styled from 'styled-components'

const TimelineWrapper = styled.div`
  color: #2E3438;
  font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;

  .timeline-event {
    padding: 10px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .container{
    display:flex;
    flex-direction: column;
  }

  .timeline-event-date {
    margin-top: 5px;
  }

  .timeline-event-label {
    margin-top: 5px;
  }

   .timeline-event-priority {
    margin-top: 5px;
  }

  .timeline-event-description {
    margin-top: 5px;
  }

   @media only screen and (max-width: 767px) { /* Mobile devices */
    .timeline-event {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) { /* Tablets */
    .timeline-event {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 992px) { /* Desktop devices */
    .timeline-event {
      font-size: 18px;
    }
`;


const Timeline = ({ items }) => {

  const sortedItems = items.sort((a, b) => new Date(a.date) - new Date(b.date));
  
  return <StyledPlaceholder>
    <TimelineWrapper>
    <div className="timeline">
      <h1 align="left"> Timeline Component  🗒️</h1>
      <div className='container'>
      {sortedItems.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-event-date"><b>Date: </b>{event.date} </div>
          <div className="timeline-event-label"><b>Type: </b>{event.label || event.type}</div>
          <div className="timeline-event-priority"><b>Priority: </b>{event.priority}</div>
          <div className="timeline-event-description"><b>Description: </b>{event.description}</div>
        </div>
      ))}
      <h1 align="left">Don't worry, we've got you covered 💆</h1>

      </div>
    </div>
    </TimelineWrapper>
    </StyledPlaceholder>
}

const StyledPlaceholder = styled.div`
  padding: 3rem 4rem;
  border-radius: 1rem;
  background: #1b98f511;
  border: 3px dotted #1b98f5;
  font-family: Nunito, sans-serif;
  color: #1b98f5;
  text-align: center;
`
export { Timeline };
