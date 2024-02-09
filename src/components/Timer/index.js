import React from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  return (
    <div className="bg-white p-8">
      <div className="bg-purple-200 p-4 rounded-t-lg text-center">
        <span className="text-purple-700 font-semibold">ИДЕТ ПРЕДЗАПИСЬ!</span>
        <span className="block text-gray-600">Окончание через:</span>
        <div className="flex justify-center items-center space-x-2 mt-2">
          <div className="bg-white rounded p-2">
            <span className="text-2xl font-bold text-purple-700">00</span>
            <span className="block text-xs text-gray-600">ДНЕЙ</span>
          </div>
          <div className="bg-white rounded p-2">
            <span className="text-2xl font-bold text-purple-700">02</span>
            <span className="block text-xs text-gray-600">ЧАСА</span>
          </div>
          <div className="bg-white rounded p-2">
            <span className="text-2xl font-bold text-purple-700">25</span>
            <span className="block text-xs text-gray-600">МИН</span>
          </div>
          <div className="bg-white rounded p-2">
            <span className="text-2xl font-bold text-purple-700">35</span>
            <span className="block text-xs text-gray-600">СЕК</span>
          </div>
        </div>
        <button className="bg-yellow-400 text-white font-semibold rounded px-6 py-2 mt-4 hover:bg-yellow-500 transition duration-300">
          Заполнить анкету
        </button>
      </div>
    </div>
  );
};

export default Timer;