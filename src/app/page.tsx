import NumbersSection from "@/components/Sections/NumbersSection";
import WidthManager from "@/components/WidthManager";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div
        style={{
          backgroundImage: `url('/herobg.jpg')`,
        }}
        className="w-full h-full max-h-[calc(100vh-95px)] bg-cover bg-center flex items-center"
      >
        <div className="w-full min-h-screen h-full flex flex-col justify-center">
          <div className="z-10">
            <WidthManager>
              <div className="mx-auto max-w-4xl text-white -mt-20 z-20">
                <p className="text-center text-base lg:text-xl ">
                  My Sprzątamy, Ty odpoczywasz!
                </p>
                <h1 className="text-center text-3xl lg:text-5xl py-3">
                  Dzięki naszemu doświadczeniu i zaangażowaniu, zapewnimy Ci
                  czystość i świeżość, jakiej potrzebujesz.
                </h1>
                <h2 className="text-center text-base lg:text-xl ">
                  Oferujemy szeroki zakres usług sprzątania, obejmujący
                  czyszczenie domów, mieszkań, biur, a także usługi
                  specjalistyczne, takie jak pranie dywanów i mycie okien.
                  Sprawdź, co możemy zrobić dla Ciebie!
                </h2>
              </div>
            </WidthManager>
          </div>
          <div className="opacity-70 bg-black w-full absolute h-full max-h-[calc(100vh-95px)] " />
        </div>
      </div>
      <NumbersSection />
    </main>
  );
}
