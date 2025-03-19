import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github()
{
    const data = useLoaderData()
    //Basic way of fetching API
    // const[data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Swapnil-008')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // })
    return(
        <div className="bg-gray-600 text-white text-2xl rounded m-4 p-2">Github Followers: {data.followers} <img src={data.avatar_url} alt = "Git picture" width = {50} height = {50}/></div>
    )
}

export default Github

//It helps to fetch the data from API very early and fast without any delay
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Swapnil-008');
    return response.json();
}