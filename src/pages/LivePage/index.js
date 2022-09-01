import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api_espn } from '../../services/api'
import Return from '../../components/Return';
import { Container , ScheduleLine } from '../Schedule/styles';


import styled from 'styled-components';


function Live() {
  const [liveMat, setLive] = useState({})
  useEffect(() => {
    api_espn.get('site/v2/sports/football/nfl/events')
      .then(response => setLive(response.data))
  }, [])

  return (
    <Container>
      <div className='week-title'>
        <h1>day {liveMat.day ? liveMat.day.number : '0'}</h1>
        <h1>Schedule</h1>
      </div>

      <div id='schedule-div'>

        {liveMat.events ? liveMat.events.map(({ competitions, status }) =>
          <ScheduleLine>
            <div className='home-team'>
              <h2>{competitions[0].competitors[0].team.abbreviation}</h2>
              <Link to={'/team/' + competitions[0].competitors[0].team.abbreviation}>
                <img src={competitions[0].competitors[0].team.logo} alt='team logo' />
              </Link>
              <h2>{competitions[0].competitors[0].score}</h2>
            </div>

            <div className='clock-div'>
              <h4>{status.period}Q</h4>
              <h4>{status.displayClock}</h4>
            </div>

            <div className='away-team'>
              <h2>{competitions[0].competitors[1].score}</h2>
              <Link to={'/team/' + competitions[0].competitors[1].team.abbreviation}>
                <img src={competitions[0].competitors[1].team.logo} alt='team logo' />
              </Link>
              <h2>{competitions[0].competitors[1].team.abbreviation}</h2>
            </div>
          </ScheduleLine>
        ) : ''}

      </div>
      <Return />
    </Container>
  );
}






// export const MainContainer = styled(Container)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   max-width: 1200px;
//   margin: 0 auto;


//   .week-title {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 98%;
//     padding: 0 8px 8px 8px;
//     border-bottom: 5px solid #4A4A4A;
//     color: #4A4A4A;
//   }

//   #schedule-div {
//     width: 98%;
//     min-height: 200px;
//     margin-top: 12px;
//     border-radius: 12px;
//     background: #E4E4E4;
//   }

// `;

// export const LiveScheduleLine = styled.div`

//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   width: 100%;

//   .home-team, .away-team {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;
//     padding: 8px;
//   }

//   .home-team img, .away-team img {
//     width: 60px;
//   }

//  .home-team h2, .away-team h2 {
//     font-size: 20px;
//   }

//   .clock-div{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//   }

//   @media(min-width: 1200px) {

//     .home-team, .away-team {
//         padding: 18px;
//       }

//     .home-team img, .away-team img {
//       width: 88px;
//     }

//    .home-team h2, .away-team h2 {
//       font-size: 28px;
//     }
//   }


//  `;


export default Live;