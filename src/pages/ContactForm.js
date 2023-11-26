import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

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

  return (
    <div className="w-full absolute h-[4200px] md:h-[5000px] md:pt-56 mx-auto p-6 bg-transparent rounded-md shadow-md">
      <div className="max-w-[1400px] w-full h-full mx-auto py-10 flex justify-center items-start ">
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
            <form>
              <div className="  ">
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
                    name="takimadi"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-200 text-sm font-bold mb-2"
                    htmlFor="kisaltma"
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

              <div className=" pt-[200px] md:pt-[410px] ">
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
                      placeholder="Adınız"
                      name="ad"
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
              </div>

              <div className=" pt-[200px] md:pt-[410px] ">
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
              </div>

              <div className=" pt-[200px] md:pt-[410px] ">
                <div>
                  <div className="mb-5">
                    <label
                      className="block text-gray-200 text-md font-bold mb-4"
                      htmlFor="ad3"
                    >
                      3. Oyuncu Bilgileri (Zorunlu)
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
              </div>

              <div className=" pt-[200px] pt-[410px] ">
                <div>
                  <div className="mb-5">
                    <label
                      className="block text-gray-200 text-md font-bold mb-4"
                      htmlFor="ad4"
                    >
                      4. Oyuncu Bilgileri (Zorunlu)
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
              </div>

              <div className=" pt-[200px] pt-[410px] ">
                <div>
                  <div className="mb-5">
                    <label
                      className="block text-gray-200 text-md font-bold mb-4"
                      htmlFor="ad5"
                    >
                      5. Oyuncu Bilgileri (Zorunlu)
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
              </div>

              <div className=" pt-[200px] pt-[410px] ">
                <div>
                  <div className="mb-5">
                    <label
                      className="block text-gray-200 text-md font-bold mb-4"
                      htmlFor="ad6"
                    >
                      6. Oyuncu Bilgileri (yedek)
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
              </div>

              <div className="w-full ">
                <button className="w-full bg-[#212529] text-white p-3 rounded-full shadow-md shadow-gray-800 hover:bg-gray-900 duration-200 focus:outline-none focus:shadow-outline-blue">
                  <a href="/Finished" className=" w-full h-full ">
                    Submit
                  </a>
                </button>
              </div>
            </form>
          )}
          {activePage !== 1 && activePage !== 10 && (
            <div className="w-full pl-[130px] md:pl-[150px] pt-24">
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
