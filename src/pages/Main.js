import React from "react";

const Main = () => {
  return (
    <div className=" w-full min-h-screen flex items-center justify-center">
      <div className=" pl-[485px] w-full ">
        <div className=" w-[500px] ">
          <div className="text-center">
            <h1 className=" text-white text-4xl font-bold mb-4">
              {" "}
              <span className=" text-[#ad7a41] ">Cookie</span> x Kozmos
            </h1>
            <h2 className=" text-white text-3xl font-bold mb-4 ">
              <span className=" text-[#D9A65D] ">League Of Legends </span>
              Turnuvası
            </h2>
            <div className="flex justify-center pt-5 space-x-4">
              <a
                href="/ContactForm"
                className="bg-black hover:scale-110 duration-150 hover:bg-gray-800 shadow-md shadow-gray-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Kayit Ol
              </a>
              <button className="bg-transparent border border-transparent hover:border-gray-500 text-white font-bold py-2 px-4 rounded-full">
                Kurallari Oku
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
