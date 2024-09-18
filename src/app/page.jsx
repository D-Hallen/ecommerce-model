import Image from "next/image";
import Icon from "@mdi/react";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}
