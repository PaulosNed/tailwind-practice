import React from "react";
import { Link } from "react-router-dom";

function Card({id, name, by, time, img}) {
  return (
    <Link to={`/food/${id}`} className="card hover:shadow-lg">
      <img
        src={img}
        alt="stew"
        className="h-32 sm:h-48 w-full object-cover"
      />
      <div className="m-4">
        <span className="font-bold">{name}</span>
        <span className="block text-gray-500 text-sm">Recipe by {by}</span>
      </div>
      <div className="badge">
        {/* <svg className="inline-block w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
        <span>{time} mins</span>
      </div>
    </Link>
  );
}

export default Card;
