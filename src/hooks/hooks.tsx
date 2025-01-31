import React, { createContext } from "react";
// import { UserContext } from './context'; // 컨텍스트 객체 가져오기
import Start from "../pages/start/start.tsx"
const MoveStatus = createContext<boolean>(false);

const GbPage = () => {
    const move: boolean = false
    return(
        <>
        <MoveStatus.Provider value={move}>
            
        </MoveStatus.Provider>
        </>
    )
};

export {MoveStatus, GbPage};