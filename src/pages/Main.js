import React from "react";
import Link from "next/link";

const Main = () => {
  return (
    <div className=" w-full min-h-screen flex items-center justify-center">
      <div className=" w-[500px] ">
        <div className="text-center">
          <h1 className=" text-white text-4xl font-bold mb-4">
            {" "}
            <span className="  text-[#ad7a41] ">
              <Link href="https://cookiegames.vercel.app/">Cookie</Link>
            </span>{" "}
            x Kozmos
          </h1>
          <h2 className=" text-white text-3xl font-bold mb-4 ">
            <span className=" text-[#D9A65D] ">League Of Legends </span>
            Turnuvası
          </h2>
          <div className="flex justify-center pt-5 space-x-4">
            <a
              href="/ContactForm"
              className="bg-gray-800 hover:scale-110 duration-150 hover:bg-gray-700 shadow-md shadow-white/20 text-white font-bold py-2 px-4 rounded-full"
            >
              Kayıt Ol
            </a>
            <a
              href="/Kurallar"
              className="bg-transparent border border-transparent hover:border-gray-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Kuralları Oku
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
