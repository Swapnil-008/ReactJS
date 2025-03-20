import React from "react";
import useTheme from "../contexts/Theme";

function Card() {
    const { theme } = useTheme(); // Get current theme

    return (
        <div className={`w-full border rounded-lg shadow p-5 
            ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-900"}`}>
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    {/* Star rating icons remain unchanged */}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">${theme === "dark" ? "🌙 599" : "☀️ 599"}</span>
                    <a
                        href="/"
                        className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                        ${theme === "dark" ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"}`}
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
