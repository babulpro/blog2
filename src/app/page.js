"use client"
import { useRouter } from "next/navigation";


export default function Home() {
  let router = useRouter();
  const handleClick = () => {
    router.push("/dashboard");
  }
  return (
      <div>
        {/* <Navbar/> */}
        <h1>Home</h1>
        <button onClick={handleClick}>Go to dashboard</button>

      </div>
  );
}
