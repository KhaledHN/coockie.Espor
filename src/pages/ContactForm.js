import React, { useState } from "react";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [activePage, setActivePage] = useState(1);
  const [state, handleSubmit] = useForm("mjvqddzv");

  // Your form data
  const formData = {
    name: "",
    ad: "",
    isim: "",
    soyad: "",
    lolnic: "",
    discord: "",
    ad2: "",
    soyad2: "",
    lolnic2: "",
    discord2: "",
    ad3: "",
    soyad3: "",
    lolnic3: "",
    discord3: "",
    ad4: "",
    soyad4: "",
    lolnic4: "",
    discord4: "",
    ad5: "",
    soyad5: "",
    lolnic5: "",
    discord3: "",
    ad6: "",
    soyad6: "",
    lolnic6: "",
    discord6: "",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formData[name] = value;
  };

  // Function to toggle between pages
  const togglePages = () => {
    setActivePage((prevPage) => (prevPage < 7 ? prevPage + 1 : 1));
  };

  // Function to go back to the previous page
  const goBack = () => {
    setActivePage((prevPage) => (prevPage === 1 ? 7 : prevPage - 1));
  };

  // Submit handler
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await handleSubmit(e);

      // Form submission was successful
      if (activePage === 7) {
        // If on the last page, display "Thanks for joining!" message
        setActivePage(10);
      } else {
        // If not on the last page, move to the next page
        togglePages();
      }
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div className="w-full absolute h-full mx-auto p-6 bg-transparent rounded-md shadow-md">
      <div className="max-w-[1400px] w-full h-full mx-auto py-10 flex justify-center items-center ">
        <div className="w-[400px] ">
          <div className=" ">
            <h2 className="text-white text-2xl font-semibold mb-2">
              <span className="text-[#ad7a41]">Cookie</span> E-spor'a Hoş Geldin
            </h2>
            <h2 className="text-gray-300 text-left font-inter text-base font-medium  mb-6 ">
              Cookie'lerle dolu ligimize hoş geldin, oyunun kralı sen olmaya
              hazır mısın?
            </h2>
          </div>
          {activePage === 10 ? (
            <p className="text-white">Thanks for joining!</p>
          ) : (
            <form onSubmit={submitForm}>
              {activePage === 1 && (
                <div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-200 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Takım Adını Girin:
                    </label>
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Takım Adı Giriniz"
                      name="name"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-200 text-sm font-bold mb-2"
                      htmlFor="ad"
                    >
                      Takım Kısaltması Giriniz:
                    </label>
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Takım Kısaltması Giriniz"
                      name="ad"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
              {activePage === 2 && (
                <div>
                  <div className="mb-5">
                    <label
                      className="block text-gray-200 text-md font-bold mb-4"
                      htmlFor="isim"
                    >
                      1. Oyuncu Bilgileri (Kaptan - Zorunlu)
                    </label>
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-lg shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="isim"
                      name="isim"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Soyadınız"
                      name="soyad"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="League Of Legends Nickiniz"
                      name="lolnic"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Discord Nickiniz"
                      name="discord"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
              {activePage === 3 && (
                <div>
                  <div className="mb-5">
                    <label
                      className="block text-gray-200 text-md font-bold mb-4"
                      htmlFor="ad2"
                    >
                      2. Oyuncu Bilgileri (Zorunlu)
                    </label>
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-lg shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Adınız"
                      name="ad2"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Soyadınız"
                      name="soyad2"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="League Of Legends Nickiniz"
                      name="lolnic2"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Discord Nickiniz"
                      name="discord2"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
              {activePage === 4 && (
                <div>
                  <div className="mb-5">
                    <label
                      className="block text-gray-200 text-md font-bold mb-4"
                      htmlFor="ad3"
                    >
                      2. Oyuncu )
                    </label>
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-lg shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Adınız"
                      name="ad3"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Soyadınız"
                      name="soyad3"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="League Of Legends Nickiniz"
                      name="lolnic3"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Discord Nickiniz"
                      name="discord3"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
              {activePage === 5 && (
                <div>
                  <div className="mb-5">
                    <label
                      className="block text-gray-200 text-md font-bold mb-4"
                      htmlFor="ad4"
                    >
                      2. Oyuncu )hahahah
                    </label>
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-lg shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Adınız"
                      name="ad34"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Soyadınız"
                      name="soyad4"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="League Of Legends Nickiniz"
                      name="lolnic4"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Discord Nickiniz"
                      name="discord4"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
              {activePage === 6 && (
                <div>
                  <div className="mb-5">
                    <label
                      className="block text-gray-200 text-md font-bold mb-4"
                      htmlFor="ad5"
                    >
                      2. Oyuncu )
                    </label>
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-lg shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Adınız"
                      name="ad5"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Soyadınız"
                      name="soyad5"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="League Of Legends Nickiniz"
                      name="lolnic5"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Discord Nickiniz"
                      name="discord5"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
              {activePage === 7 && (
                <div>
                  <div className="mb-5">
                    <label
                      className="block text-gray-200 text-md font-bold mb-4"
                      htmlFor="ad6"
                    >
                      2. Oyuncu )
                    </label>
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-lg shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Adınız"
                      name="ad6"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Soyadınız"
                      name="soyad6"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="League Of Legends Nickiniz"
                      name="lolnic6"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 pl-5 border border-gray-300 rounded-full shadow-md shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-600"
                      type="text"
                      placeholder="Discord Nickiniz"
                      name="discord6"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
              <div className="w-full ">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#212529] text-white p-3 rounded-full shadow-md shadow-gray-800 hover:bg-gray-900 duration-200 focus:outline-none focus:shadow-outline-blue"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
          {activePage !== 1 && activePage !== 10 && (
            <div className="w-full pl-[150px] pt-24">
              <button
                className="w-[40%] bg-[#212529] text-white p-3 rounded-full shadow-lg shadow-gray-800 hover:bg-gray-900 duration-200 focus:outline-none focus:shadow-outline-blue "
                onClick={goBack}
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
