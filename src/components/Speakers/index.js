import React from "react";
import styled from "./Speakers.module.css";

function Speaker({ name, image }) {
    return (
      <div className="flex flex-col items-center">
        <div className="dotted-border p-2">
          <img
            className="rounded-full w-24 h-24"
            src={`https://placehold.co/96x96?text=${image}`}
            alt={`Blurred image of a ${name}`}
          />
        </div>
        <span className="mt-2">{name}</span>
      </div>
    );
  }

const Speakers = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-white to-gray-100 h-screen">
      <h1 className="text-4xl font-semibold mb-10">СПИКЕРЫ — СОВСЕМ СКОРО</h1>
      <div className="flex space-x-4">
        <Speaker name="Дизайнер" image="designer-blurred.jpg" />
        <Speaker name="Бухгалтер" image="accountant-blurred.jpg" />
        <Speaker name="Психолог" image="psychologist-blurred.jpg" />
        <Speaker name="Таргетолог" image="targetologist-blurred.jpg" />
        <Speaker name="Айтишник" image="it-specialist-blurred.jpg" />
      </div>
    </div>
  );
};

export default Speakers;
