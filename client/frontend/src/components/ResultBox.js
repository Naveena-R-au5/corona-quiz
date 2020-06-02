import React from "react";
import celeb from '../celeb.jpg'
import low from '../low.jpg'
import conng from '../cong.jpg'

const Result = ({score,playAgain}) => (
  <div >
    {score ===5 ? <div><img src={conng} alt="pic" className="img2"/><br/><mark className="com1">You scored {score} / 5 correct answers</mark></div>
    :<p><img src= {low} alt="pic" className="img "/><br/><mark className="com">noo!! You scored {score} / 5 correct</mark></p>}
    <button className="playBtn btn btn-outline-warning" onClick={playAgain}>Wanna Play again!</button>
  </div>

);

export default Result;
