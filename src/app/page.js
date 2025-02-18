"use client"
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";


export default function Home() {
  let router = useRouter();
  const habdleClick = () => {
    router.push("/dashboard");
  }
  return (
      <div>
        {/* <Navbar/> */}
        <h1>Home</h1>
        <button onClick={habdleClick}>Go to dashboard</button>

      </div>
  );
}
