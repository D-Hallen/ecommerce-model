import Image from "next/image";
import Icon from "@mdi/react";
import Header from "@/components/Header";
import Body from "@/components/Body";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header/>
      <Body/>
      <footer className="bg-slate-300 w-full h-5 p-3">
        
      </footer>
    </div>
  );
}
