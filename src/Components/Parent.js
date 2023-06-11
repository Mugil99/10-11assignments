import React, { useState } from 'react';
import Child from './Child';

const Parent=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    return(
        <div>
            {
                isLoggedIn?(<Child/>):(<>
                <h1>Parent Component</h1>
            <label>User Name : </label>
            <input type="text"></input><br></br>
            <label>Password : </label>
            <input type="password"></input><br></br>
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
                </>)
            }
        </div>
    )
}
export default Parent