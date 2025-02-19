import Image from "next/image";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export default async function Home() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    );
    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
  } catch (error) {
    console.log(error);
  }
  return <div className="text-red-600">Home</div>;
}
