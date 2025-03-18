import React from "react";
// function Card({channel = "Chai aur code", myObj}) Another way of catching arguments and giving default value
function Card(props)
{
  console.log("Props:", props)
    return(
        <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt="Venetian Carnival Mask"
            src="https://images.pexels.com/photos/30355499/pexels-photo-30355499/free-photo-of-venetian-carnival-mask-in-festive-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div className="flex">
          <span className=''>{props.channel}</span>
          <span className="flex">
          {/* default value */}
            <span>{props.someObj.username || "Doremon"}</span>  
            <span>{props.someObj.age}</span>
            <span>{props.someObj.hobbies.join(", ")}</span>
          </span>
        </div>
      </div>
    )
}
export default Card;
