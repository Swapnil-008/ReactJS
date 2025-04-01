import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUtensils } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CanteenMenuView = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/canteen-menu');
        setMenu(res.data);
      } catch (err) {
        alert(err.response?.data?.error || 'Failed to fetch canteen menu');
      }
    };
    fetchMenu();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <div className="flex items-center justify-center mb-6">
            <FaUtensils className="text-blue-600 text-3xl mr-2" />
            <h2 className="text-2xl font-bold text-blue-800">Canteen Menu</h2>
          </div>
          {menu.length > 0 ? (
            <div className="space-y-4">
              {menu.map((item) => (
                <div key={item.id} className="border-b pb-4">
                  <h3 className="text-lg font-medium text-gray-800">{item.day}</h3>
                  <p className="text-gray-600">{item.menu}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center">No menu items found.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CanteenMenuView;