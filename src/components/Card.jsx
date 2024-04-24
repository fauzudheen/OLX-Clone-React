import React from "react";
import { useContext } from "react";
import {PostContext} from "../context/PostContext";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";

const Card = ({ data }) => {
  const { setPostDetails } = useContext(PostContext);
  const navigate = useNavigate();

  const handlePost = () => {
    setPostDetails(data);
    navigate("/productDetails")
  };

  const { productName, category, price, location, imageUrl, id, createdAt } = data;

  console.log("data", data)

  return (

    <div className="border border-gray-300 cursor-pointer p-3 shadow-lg container  rounded-md">
      <div onClick={handlePost} className="m-2">
        <div className="relative">
          <img className="h-60 object-cover mx-auto" src={imageUrl} alt="" />
          <div className="rounded-full  absolute right-1 top-2 h-10 w-6 ">
            <FaRegHeart className="mt-[11px] ml-[11px]  " size={20} />
          </div>
        </div>
        <div className="my-3 mx-2 space-y-2 flex flex-col">
          <h1 className="font-bold text-2xl">₹ {price}</h1>
          <p className="text-gray-500 mb-2">{productName} sale</p>
          <p className="text-xs text-gray-500">( {category} )</p>
          <p className="text-xs text-gray-500">{location.toUpperCase()}</p>
          <p className="text-small self-end  text-gray-500">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;