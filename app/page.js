import Banner from "@/component/banner/page";
import RevealEffect from "@/component/RevealEffect/page";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f8f8fa] to-[#f3eafd] text-[#222] font-sans overflow-x-hidden">
      <RevealEffect />
      {/* Side Social Icons */}
      <div className="fixed left-8 top-1/3 flex flex-col items-center space-y-6 z-10">
        <Link
          href="#"
          className="text-gray-500 hover:text-[#bfa2e6] text-xl"
          passHref
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://github.com/01subhashree?tab=repositories"
          className="text-gray-500 hover:text-[#bfa2e6] text-xl"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <FaGithub />
        </Link>

        <span className="mt-8 text-xs tracking-widest text-gray-400 rotate-90">
          FOLLOW ME
        </span>
      </div>

      {/* Main Banner */}
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="relative">
          <div className="rounded-full overflow-hidden border-8 border-[#f3eafd] shadow-xl w-[420px] h-[420px] flex items-center justify-center bg-gradient-to-br from-[#f8d6f8] to-[#e6f6fa]">
            {/* Place your illustration or image here */}
            <img
              src="/your-illustration.png"
              alt="Emma Lesley"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border-4 border-[#cfe2f3] opacity-60"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full border-2 border-[#f8d6f8] opacity-40"></div>
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">
            Emma Lesley
          </h1>
          <p className="text-lg text-gray-500 font-mono">
            Illustrator & Digital Artist
          </p>
        </div>
        <div className="mt-8 max-w-xl text-center text-gray-500 font-mono text-base">
          <span className="text-3xl text-[#bfa2e6] mr-2">“</span>
          Illustrations can be a big window: a looking glass into the author's
          imagination.
          <span className="block mt-2 text-right text-xs text-gray-400">
            — EMMA LESLEY
          </span>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full border-4 border-[#e6f6fa] opacity-30"></div>
      <div className="absolute bottom-8 right-16 w-32 h-32 rounded-full border-2 border-[#f8d6f8] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#f8d6f8] to-transparent rounded-full opacity-10"></div>
    </div>
  );
}
