import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white dark:bg-[#1F1F1F] p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Envoyez-moi un message
      </h3>
      <form className="space-y-6">
        {/* Nom complet */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Nom complet
          </label>
          <input
            type="text"
            placeholder="Votre nom complet"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Votre email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Objet
          </label>
          <input
            type="objet"
            placeholder="Votre objet"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Votre message..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>

        {/* Bouton Envoyer */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg opacity-50 cursor-not-allowed"
          disabled={true}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
