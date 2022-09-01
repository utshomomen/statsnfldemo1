import styled from 'styled-components';

export const Container = styled.div`

  display: grid;
  margin-top: 8px;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  justify-items: center;
  grid-gap: 16px;


  .icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 200px;
    border-radius: 15px;
    background: #F0F0F0;
    text-decoration: none;
    color: #111;
  }

  img {
    width: 100px;
  }

  h2 {
    font-weight: 600;
  }

  @media(min-width: 1200px) {
    h2{
      font-size: 38px;
    }

    img {
      width: 140px;
    }
  }



`;



export const liveBox = styled.div` 

.live-text {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  height: 100px;
  padding: 12px;
  background: #013369;
  color: #fff;
  text-decoration: none;
}
  

`;


export const WeekBox = styled.div` 

.week-text {
  display:flex;
  align-items: center;
  flex-direction: row;

  justify-content: space-between;
  flex-flow: row;
  height: 110px;
  padding: 12px;
  background: #013369;
  color: #fff;
  text-decoration: none;
}
  
.live-text {
  display: flex;
  flex-direction: row-reverse;
  align-self:center ;
  justify-content: space-around;
  align-items: center;
  height: 110px;
  padding: 12px;
  
margin-top:-108px ;

   
  background: #013369;
  color: #fff;
  text-decoration: none;
}
  




`;



