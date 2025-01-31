import React, { useContext }  from "react";
import { MoveStatus } from "../../hooks/hooks.tsx";

function Start(){
    const move = useContext(MoveStatus);
    return(
        <div>
        {
            move === true 
              ? (<div>true</div>)
              : (<div>false</div>)
          }
        </div>
    )
}

export default Start;