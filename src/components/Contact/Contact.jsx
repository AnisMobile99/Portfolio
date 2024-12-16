import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100 dark:bg-black">
      {/* Conteneur principal centré et responsive */}
      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Me contacter
        </h2>

        {/* Grille divisée en deux colonnes sur écrans larges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulaire */}
          <ContactForm />

          {/* Informations */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
