import Banner from "@/component/banner/page";
import RevealEffect from "@/component/RevealEffect/page";


export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <RevealEffect />
      <Banner />
    </div>
  );
}
