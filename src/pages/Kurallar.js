import React from "react";

const Kurallar = () => {
  return (
    <div className=" w-full absolute h-screen pt-24 mx-auto p-6 bg-transparent rounded-md shadow-md ">
      <div className=" max-w-[1400px] w-full h-full mx-auto py-10 flex justify-center items-start ">
        <div className=" w-[500px] py-5 px-6 h-[500px] border border-gray-300 rounded-2xl bg-gray-600/20 ">
          <p className=" text-white text-left text-bold text-lg ">
            1. Küfür, Hakaret, Argo Tamamen yasaktır ve turnuvadan takımınızın
            diskalifiye olma sebepidir.
          </p>
          <p className=" pt-6 text-white text-left text-bold text-lg ">
            2. E-Spor Odasındaki eşyalara zarar vermek (masaya vurmak,kulaklığı
            atmak) gibi şeyler yasaktır 3 uyarı sonucu takımınız diskalifiye
            edilir. Herhangi bir malzemenin ücreti sizlerden çıkar.
          </p>
          <p className=" pt-6 text-white text-left text-bold text-lg ">
            3. Oyunlar 5V5 Olarak Yapılmaktadır +1 Yedek Alma Hakkınız
            Bulunuyor.
          </p>
          <p className=" pt-6 text-white text-left text-bold text-lg ">
            4. Turnuva içerisinde kulaklığı çıkarmak tarzı şeyler yasaktır 3
            uyarı sonucu takımınız diskalifiye olur.
          </p>
          <p className=" pt-6 text-white text-left text-bold text-lg ">
            5. Turnuva içerisinde küfür, argo kullanmadan bile karşı takımı
            triggerlamak , toxiclemek yasaktır 3 uyarı sonucu takımınız
            diskalifiye olur.
          </p>
          <div className="w-full pt-14 ">
            <button className="w-full bg-[#212529] text-white p-3 rounded-full shadow-md shadow-gray-800 hover:bg-gray-900 duration-200 focus:outline-none focus:shadow-outline-blue">
              <a href="/">Ana Sayfa</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kurallar;
