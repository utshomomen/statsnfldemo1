import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api_espn } from '../../services/api'
import Return from '../../components/Return';
import { Container } from '../Schedule/styles';


import styled from 'styled-components';


function Live() {
  const [ matches, setMatches] = useState([])
 
  // // const [liveMat, setLive] = useState({})
  useEffect(() => {
    // api_espn.get('site/v2/sports/football/nfl/summary?event=401437975')
  //     // .then((data) => {
  //     //   setMatches(data.matches);
       
      //   .then((response) => {
      //     setMatches(response.data);
      // })
      // .catch((err) => console.log(err))
    
    
    
    
   
        api_espn.get('site/v2/sports/football/nfl/scoreboard')
          .then(response => setMatches(response.data))
     
    
    
    
    
  }, [])

  // const API = 'site/v2/sports/football/nfl/scoreboard';
 

  

  return (
    <MainContainer>
      <div className='week-title'>
        <h1>Week {matches.recent ? matches.week.number : '0'}</h1>
        <h1>Live Game Result</h1>
      </div>

      <div id='schedule-div'>

        {matches.events ? matches.events.map(({ competitions, status , leaders }) =>
          <LiveScheduleLine >
            <div className='home-team'>
              <h2>{competitions[0].competitors[0].team.displayName}</h2>
            
              <h4>{competitions[0].competitors[0].records.summery}</h4>
           
              <Link to={'/team/' + competitions[0].competitors[0].team.abbreviation}>
                <img src={competitions[0].competitors[0].team.logo} alt='team logo' />
              </Link>
              <h2>{competitions[0].competitors[0].score}</h2>
             
             
<br />
              <h6>{competitions[0].competitors[0].records[1].type}</h6>
              <h6>{competitions[0].competitors[0].records[1].summary}</h6>
             
              

            </div>


          

            <div className='clock-div'>
         
           
            
            
              <h4>{status.period}Quater</h4>
             
              {/* <h4>{status.type.state}</h4> */}
              <h4>{status.displayClock}</h4> 
               <h4>{status.type.description}</h4>
              <h6>{status.type.detail}</h6>
          
              

            </div>

{/* need to fix the leaders and passing yards and display name and    3. receivingYards 2.rushingYards 1.passingYards from this api https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard   */}
             
            {/* from line number 708 */}
            
            
            
            {/* <div className="playbyplay">
              <h2>{leaders.leaders.displayName}</h2>
          
           
            <h5>{leaders[4].leaders[0].displayName}</h5>
           <h2>{leaders[4].leaders[2].athlete[0].fullName[0]}</h2>
              <h2>{leaders[4].leaders[2].athlete[0].displayName[0]}</h2>
              <h2>{leaders[4].leaders[2].athlete[6].jersey[0]}</h2>
              <h2>{leaders[4].athlete[2].jersey[0].position[1]}</h2>
              </div> */}
             
             


            <div className='away-team'>
            <h6>{competitions[0].competitors[1].records[2].type}</h6>
              <h6>{competitions[0].competitors[1].records[2].summary}</h6>
              <h2>{competitions[0].competitors[1].score}</h2>
              <h2>{competitions[0].competitors[1].statistics}</h2>
              <Link to={'/team/' + competitions[0].competitors[1].team.abbreviation}>
                <img src={competitions[0].competitors[1].team.logo} alt='team logo' />
              </Link>
              <h2>{competitions[0].competitors[1].team.displayName}</h2>
            </div>
          </LiveScheduleLine>
        ) : ''}

      </div>
      <Return />
    </MainContainer>
  );
}



export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;


  .week-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    padding: 0 8px 8px 8px;
    border-bottom: 5px solid #4A4A4A;
    color: #4A4A4A;
  }

  #schedule-div {
    width: 98%;
    min-height: 200px;
    margin-top: 12px;
    border-radius: 12px;
    background: #E4E4E4;
  }

`;

export const LiveScheduleLine = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  .home-team, .away-team {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px;
  }

  .home-team img, .away-team img {
    width: 60px;
  }

 .home-team h2, .away-team h2 {
    font-size: 20px;
  }



  .playbyplay{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

  }
  .clock-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 1200px) {

    .home-team, .away-team {
        padding: 18px;
      }

    .home-team img, .away-team img {
      width: 88px;
    }

   .home-team h2, .away-team h2 {
      font-size: 28px;
    }
  }


 `;


export default Live;