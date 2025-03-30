import React from "react";
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

//'$id' is the variable name
function PostCard({$id, title, feacturedImage})
{
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={appwriteService.getFilePreview(feacturedImage)} alt={title} className="rounded-xl"/>  
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}

// we directly get the url from our defined method getFilePreview in appwrite-config and featuredImage is an id of image as we have stored images with their id's in our database

export default PostCard