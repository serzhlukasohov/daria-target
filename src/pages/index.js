import Head from "next/head";
import Navbar from "../components/Navbar";
import Promo from "../components/Promo";
import FeaturesSection from "../components/FeaturesSection";
import Timer from "@/components/Timer";
import AboutMe from "@/components/AboutMe";
import VideoPresentation from "@/components/ VideoPresentation";
import Footer from "@/components/Footer";
import CoursePath from "@/components/CoursePath";
import CareerPath from "@/components/CareerPath";
import FAQSection from "@/components/FAQSection";
import CourseProgram from "@/components/CourseProgram";
import Rates from "@/components/ Rates";
import Present from "@/components/Present";
import Reviews from "@/components/Reviews";
import Speakers from "@/components/Speakers";
import ForYou from "@/components/ForYou";

function TestimonialCard({ name, description, imageSrc, imageAlt }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center p-6 m-4">
      <div className="w-24 h-24 mx-auto mb-4">
        <img
          className="rounded-full border-solid border-white border-2 -mt-12"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mt-4">
        Смотреть видео
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gradient-to-br">
      <Head>
        <title>PROTARGET — СОТРИ ГРАНИЦЫ В ПРОДВИЖЕНИИ</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="container mx-auto px-4">
        <Navbar />
        <Promo />
        <FeaturesSection />
        <Timer />
        <AboutMe />
        <VideoPresentation />
        <CoursePath />
        <CareerPath />
        <CourseProgram />
        <ForYou />
        <Rates />
        <Present />
        <Speakers />
        <Reviews />
        <FAQSection />
        <Footer />
        <div className="fixed bottom-4 right-4 bg-purple-400 p-3 rounded-full shadow-lg">
          <i className="fas fa-arrow-up text-white"></i>
        </div>
      </div>
    </div>
  );
}
