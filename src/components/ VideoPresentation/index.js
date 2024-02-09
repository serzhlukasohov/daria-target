import React from 'react';
import styles from './VideoPresentation.module.css';

const VideoPresentation = () => { 
    return (
       
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              ВИДЕО ПРЕЗЕНТАЦИЯ
            </h1>
            <div className="text-purple-600 text-2xl mb-6">
              <i className="fas fa-heart"></i>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Соприкоснись с курсом ProTarget
            </p>
            <button className="bg-yellow-300 text-yellow-900 font-medium py-2 px-6 rounded-full mb-10">
              Программа курса
            </button>
            <div className="flex justify-center">
              <img
                src="https://placehold.co/100x100"
                alt="Placeholder image with a light purple background and a gallery icon in the center"
                className="border-2 border-purple-300 rounded-lg"
              />
            </div>
          </div>
        </div>
    )
};

export default VideoPresentation;