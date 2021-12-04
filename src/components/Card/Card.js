import React from 'react';
import "./card.css";
import CountUp from 'react-countup';

const Card = ({ data: {confirmed,recovered,deaths,lastUpdate} }) => {
    if(!confirmed){
           return 'Loading ...';
    }
    return (
        <div className="info-box"> 
            <div className="single-info blue"> 
            <span className="info-title">infected</span>
            <span className="info-number"><CountUp  start={0}  end={confirmed.value} separator=" ," duration={3.5} /></span>
            <span className="info-date">{new Date(lastUpdate).toDateString()}</span>
            <span className="info-text">number of active cases of COVID-19</span>
            </div>
            <div className="single-info green"> 
            <span className="info-title">recovered</span>
            <span className="info-number"><CountUp  start={0}  end={recovered.value} separator=" ," duration={3.5} /></span>
            <span className="info-date">{new Date(lastUpdate).toDateString()}</span>
            <span className="info-text">number of recoveries from COVID-19</span>
            </div>
            <div className="single-info red"> 
            <span className="info-title">deaths</span>
            <span className="info-number"><CountUp  start={0}  end={deaths.value} separator=" ," duration={3.5} /></span>
            <span className="info-date">{new Date(lastUpdate).toDateString()}</span>
            <span className="info-text">number of deaths caused of COVID-19</span>
            </div>
     </div> 
    );
};

export default Card;
