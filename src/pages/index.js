import Image from "next/image";
import { Inter } from "next/font/google";

import ContactForm from "./ContactForm";
import Main from "./Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" flex items-center justify-center">
      <Main />
    </div>
  );
}
