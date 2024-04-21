import Faq from "@/components/faq";

export default async function Home() {
  const data = await fetch(process.env.API_URL, {
    method: "GET",
    headers: {
      "CF-Access-Client-Secret": process.env.CF_SECRET,
      "CF-Access-Client-Id": process.env.CF_ID,
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-white">
      <div className="flex flex-col bg-green-100 rounded-xl min-h-[80vh] max-h-screen overflow-auto w-[50%]">
        <h1 className="font-bold text-6xl h-[20%] text-center">FAQ</h1>
        <Faq data={data} />
      </div>
    </div>
  );
}
