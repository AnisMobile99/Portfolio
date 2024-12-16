import React from "react";
import ProfileImage from "./ProfileImage";
import TitleAndInfo from "./TitleAndInfo";
import SocialIcons from "./SocialIcons";
import Description from "./Description";
import ProfileImageSrc from "../../assets/images/photoProfil.jpg";
import FunctionalSkills from "../Skill/FunctionalSkills";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex justify-center items-center py-12 px-4 
                 bg-gray-100 dark:bg-black transition-all pt-30"
    >
      <div
        className="relative bg-white dark:bg-[#121212] rounded-lg shadow-lg 
                   p-6 sm:p-8 md:p-12 w-full max-w-screen-lg"
      >
        {/* Photo de Profil */}
        <ProfileImage src={ProfileImageSrc} alt="Anis SALAH BEY" />

        {/* Contenu */}
        <div className="mt-16 flex flex-col space-y-6 text-gray-800 dark:text-gray-300">
          <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-gray-100">
            Anis SALAH BEY
          </h1>
          <TitleAndInfo />
          <Description />
        </div>

        {/* Compétences Fonctionnelles */}
        <div className="relative mt-8 md:mt-12">
          <FunctionalSkills />
        </div>
      </div>
    </section>
  );
};

export default About;
