import React from "react";
import style from "./home.module.css";
import { Button } from "@mui/material";
import Blue_banner from "../../components/blue_banner/Blue_banner";
import FeatureCard from "../../components/features_Card/FeatureCard";
import CEOCard from "../../components/CeoCard/CEOCard";
import FAQSection from "../../components/FAQSection/FAQSection";
import Lavesh from "../../public/assets/Lavesh.jpeg";
import Varshhil from "../../public/assets/Varshil.jpeg";
import Darshan from "../../public/assets/Darshan.jpeg";
import sahal from "../../public/assets/Shaikh Sahal Shahid.jpg";
import ContactForm from "../../components/ContactUs/ContactForm";
import StickyButton from "../../components/stickyButton/StickyButton";
import Footer from "../../components/footer/Footer";
import { QRCode } from "react-qrcode-logo";

function Home() {
  return (
    <>
      <div className="main-header">
        <div className={`${style.bgImg}`}>
          {/* Your background image */}
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "#0DA33BA1 !important",
                padding: "20px 30px !important",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                boxShadow: "2px 2px 12px black",
              }}
            >
              <span className={`${style.btnText}`}>Create Your Menu</span>
            </Button>
          </div>
        </div>
        <div className="main-heading mt-8">
          <h1 className={`${style.mainHeading} text-xl`}>
            Transforming Menus into QR Codes
          </h1>
          <h3 className={`${style.subHeading} text-center my-5 text-base`}>
            Effortless Dining Experiences for the Digital Age
          </h3>
          <div className={`${style.para}`}>
            Discover a seamless way to enhance your dining experience with our
            innovative QR menu solutions. We transform traditional menus into
            user-friendly QR codes, allowing your customers to explore your
            offerings effortlessly. Say goodbye to paper menus and hello to the
            digital age of dining!
          </div>
          <div className="btn my-12">
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "#A83232 !important",
                padding: "8px 10px !important",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                boxShadow: "2px 2px 12px black",
              }}
            >
              <span className={`${style.btnTwo}`}>Create Your Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="Feature" id="feature">
        <Blue_banner title="Our Key Features" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Easy Menu Digitization"
            content="Our platform simplifies the process of transforming physical restaurant menus into digital QR codes. With just a few simple steps, you can effortlessly convert your paper menus into a convenient and accessible digital format."
            logoSrc="https://images.unsplash.com/photo-1644329770639-1a20809b82a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1890&q=80"
          />
          <FeatureCard
            title="Customizable QR Codes"
            content="Our innovative platform streamlines the entire process of converting traditional paper menus into modern digital QR codes, making it effortlessly easy for restaurants to embrace the digital age. Say goodbye to the hassle of manual updates and say hello to the convenience of instant menu changes. Our mission is to empower your restaurant with cutting-edge technology, providing your customers with a seamless dining experience."
            logoSrc="https://images.unsplash.com/photo-1629128625414-374a9e16d56a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          />
          <FeatureCard
            title="Contactless Dining"
            content="Discover a new era of dining with our contactless technology. Embrace the future as you enjoy a seamless and safe dining experience. Our innovative platform ensures that you can browse menus, place orders, and make payments with minimal physical contact. Say goodbye to printed menus and queues, and say hello to a smart, convenient, and safe way to dine. Elevate your dining experience with contactless dining today!"
            logoSrc="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          />
          <FeatureCard
            title="User-Friendly Interface"
            content="Our platform boasts an intuitive and user-friendly interface designed to make your experience smooth and hassle-free. Whether you're a restaurant owner or a diner, our interface is designed with you in mind. Easily navigate through menus, explore dining options, and place orders with just a few clicks or taps. We prioritize simplicity without sacrificing functionality, ensuring that every user, from tech-savvy individuals to those less familiar with technology, can enjoy the benefits of our platform. Discover the ease and convenience of a user-friendly interface that enhances your dining experience."
            logoSrc="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1802&q=80"
          />
          <FeatureCard
            title="Seamless Updates"
            content="Our platform simplifies the process of transforming physical restaurant menus into digital QR codes. With just a few simple steps, you can effortlessly convert your paper menus into a convenient and accessible digital format."
            logoSrc="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          />
        </div>
      </div>
      <div className="About-us" id="aboutUs">
        <Blue_banner title="About Our Company" />
        <div className="about-contant">
          <div className="max-w-sm rounded-md overflow-hidden shadow-md mx-auto my-4">
            <div className="p-4 w-[90%] m-auto bg-[#cdcbcb47] rounded">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                At MenuCrafter, we are passionate about crafting digital
                solutions that simplify menu management and enhance the dining
                experience. Founded in 2023, we have been dedicated to
                revolutionizing the way restaurants and businesses handle their
                menus. Our commitment to innovation, user-friendliness, and
                efficiency drives everything we do.
              </p>
            </div>
          </div>
          <div className="top-people m-auto">
            <h1 className={`${style.topPeopleHeading} my-8`}>
              {" "}
              Meet the people behind MenuCrafter
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <CEOCard Name="Lavesh Manglani" Pic={Lavesh} />
              <CEOCard Name="Sahal Shaikh" Pic={sahal} />
              <CEOCard Name="Darshan Hingu" Pic={Darshan} />
              <CEOCard Name="Varshil Patel" Pic={Varshhil} />
            </div>
          </div>
        </div>
      </div>
      <div className="FAQs my-8" id="faq">
        <Blue_banner title="Frequently Asked Questions" />
        <FAQSection />
      </div>
      <div className="contactUs" id="contact">
        <Blue_banner title="Get In Touch" />
        <ContactForm />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <StickyButton />
    </>
  );
}

export default Home;
