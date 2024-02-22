

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
import Gifts from "@/components/Gifts";
import Speakers from "@/components/Speakers";
import ForYou from "@/components/ForYou";
import Testimonial from "@/components/Testimonial";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
        <Gifts />
        <Speakers />
        <Testimonial />
        <FAQSection />
        <Footer />
        <div
          className="backToTopButton fixed bottom-4 right-4 bg-purple-400 p-3 rounded-full shadow-lg"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-arrow-up text-white"></i>
        </div>
      </div>
    </div>
  );
}
