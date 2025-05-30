import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

export default function SpecialityMenu() {
  return (
    <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p>
        Simply browse through our extensive list of trusted doctors, schedule{" "}
        <br /> you appointment hssle-free.
      </p>
      <div>
        {specialityData.map((item, index) => (
          <Link key={index} to={`/doctors/${item.speciality}`}>
            <img src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
