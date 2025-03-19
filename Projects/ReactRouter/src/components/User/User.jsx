import React from "react";
import { useParams } from "react-router-dom";
function User()
{
    const { userid } = useParams();
    return(
        <div className="bg-gray-600 text-white text-2xl rounded mt-4 p-2">User: {userid}</div>
    )
}

export default User