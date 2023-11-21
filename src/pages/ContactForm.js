import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [activePage, setActivePage] = useState(1);
  const [state, handleSubmit] = useForm("mjvqddzv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  // Function to toggle between pages
  const togglePages = () => {
    setActivePage((prevPage) => (prevPage === 1 ? 2 : prevPage === 2 ? 3 : 1));
  };

  // Function to go back to the previous page
  const goBack = () => {
    setActivePage((prevPage) => (prevPage === 1 ? 3 : prevPage - 1));
  };

  return (
    <div className=" w-full absolute h-full mx-auto p-6 bg-transparent rounded-md shadow-md">
      <div className=" max-w-[1400px] pt-28 w-full h-full mx-auto py-10 flex  justify-center items-center ">
        <div className=" w-[400px] ">
          <div className=" ">
            <h2 className=" text-white text-2xl font-semibold mb-2">
              <span className=" text-[#ad7a41] ">Cookie</span> E-spor'a Hoş
              Geldin
            </h2>
            <h2 className=" text-gray-300 text-left font-inter text-base font-medium  mb-6 ">
              Cookie'lerle dolu ligimize hoş geldin, oyunun kralı sen olmaya
              hazır mısın?
            </h2>
          </div>
          {activePage === 1 && (
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Takım Adını Girin:
                </label>
                <input
                  className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600 "
                  type="text"
                  placeholder="Takım Adı Giriniz"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  htmlFor="message"
                ></label>
                <input
                  className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600 "
                  type="text"
                  placeholder="Takım Kısaltması Giriniz"
                  name="ad"
                  required
                />
              </div>
              <div className=" w-full  ">
                <button
                  className=" w-full bg-[#212529] text-white p-3 rounded-full shadow-lg shadow-gray-800 hover:bg-gray-900 duration-200 focus:outline-none focus:shadow-outline-blue"
                  onClick={togglePages}
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {activePage === 2 && (
            <form>
              <div className="mb-5">
                <label
                  className="block text-gray-200 text-md font-bold mb-4"
                  htmlFor="massage"
                >
                  1. Oyuncu Bilgileri (Kaptan - Zorunlu)
                </label>
                <input
                  className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-lg shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600 "
                  type="text"
                  placeholder="isim"
                  name="isim"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600 "
                  type="text"
                  placeholder="Soyadınız"
                  name="soyad"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600 "
                  type="text"
                  placeholder="League Of Legends Nickiniz"
                  name="lolnic"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600 "
                  type="text"
                  placeholder="Discord Nickiniz"
                  name="Discord"
                  required
                />
              </div>

              <div className=" w-full  ">
                <button
                  className=" w-full bg-[#212529] text-white p-3 rounded-full shadow-md shadow-gray-800 hover:bg-gray-900 duration-200 focus:outline-none focus:shadow-outline-blue"
                  onClick={togglePages}
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {activePage === 3 && (
            <form>
              <div className="mb-5">
                <label
                  className="block text-gray-200 text-md font-bold mb-4"
                  htmlFor="name"
                >
                  2. Oyuncu Bilgileri (Zorunlu)
                </label>
                <input
                  className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-lg shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600 "
                  type="text"
                  placeholder="Adınız"
                  name="ad2"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600 "
                  type="text"
                  placeholder="Soyadınız"
                  name="soyad2"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600 "
                  type="text"
                  placeholder="League Of Legends Nickiniz"
                  name="lolnic2"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600 "
                  type="text"
                  placeholder="Discord Nickiniz"
                  name="discord2"
                  required
                />
              </div>

              <div className=" w-full  ">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className=" w-full bg-[#212529] text-white p-3 rounded-full shadow-md shadow-gray-800 hover:bg-gray-900 duration-200 focus:outline-none focus:shadow-outline-blue"
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          <div className=" w-full pl-[150px] pt-24">
            <button
              className=" w-[40%] bg-[#212529] text-white p-3 rounded-full shadow-lg shadow-gray-800 hover:bg-gray-900 duration-200 focus:outline-none focus:shadow-outline-blue "
              onClick={goBack}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
