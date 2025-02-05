import title from '../assets/start/title.png'
import startBtn from '../assets/start/start_btn.png'
import React  from "react";
import '../style/app.css';

function Start( ){

    return(
      <>
        <div>
          <img src={title} alt="" />
          <img src={startBtn} alt="" />
        </div>
      </>
    )
}


/*

const ImageWrap = styled.div`
  margin: 0 auto
`;

export const Banner = () => {
  return (
    <ImageWrap>
    </ImageWrap>
  )
};
*/




export default Start;