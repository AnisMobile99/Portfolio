import React, { useState } from "react";
import { FaCoffee, FaTimes, FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(1);
  const [message, setMessage] = useState(""); // État pour le message
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // État pour l'emoji picker

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setIsSubmitted(false);
    setShowEmojiPicker(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={togglePopup}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition-all"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <FaCoffee className="w-6 h-6 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Modal */}
      <div
        className={`fixed bottom-20 right-0 w-full max-w-[400px] md:max-w-[450px] z-50 bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: "70%" }}
      >
        {/* Bouton de fermeture */}
        <button
          onClick={togglePopup}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        <div className="p-6 overflow-y-auto max-h-[90%]">
          {!isSubmitted ? (
            <>
              {/* Titre */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">
                Achetez un café à <span className="font-bold">Anis</span>
              </h2>

              {/* Section Choix Café */}
              <div className="bg-blue-100 dark:bg-blue-800 rounded-lg p-6 mb-4 shadow-md">
                <div className="flex flex-wrap items-center justify-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <FaCoffee className="text-blue-600 dark:text-white w-12 h-12" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg font-bold">
                      x
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {[1, 3, 5, 10].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSelectedCoffee(num)}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                          selectedCoffee === num
                            ? "bg-blue-500 text-white shadow-lg"
                            : "border border-gray-300 text-gray-600 dark:text-gray-900 bg-white"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom ou @votresocial"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <div className="relative">
                  <textarea
                    rows="3"
                    placeholder="Dites quelque chose de gentil..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white pr-10"
                  ></textarea>
                  {/* Icône emoji */}
                  <button
                    type="button"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="absolute bottom-3 right-4 text-gray-400 hover:text-gray-600"
                  >
                    <FaSmile />
                  </button>
                </div>
                {/* Emoji Picker */}
                {showEmojiPicker && (
                  <div className="absolute bottom-16 right-4 z-50">
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded-full hover:bg-blue-600 transition-all"
                >
                  Soutenir {selectedCoffee} $
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <img
                src="https://i.imgur.com/0y8Ftya.png"
                alt="Merci"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                🎉 Merci pour votre soutien !
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Votre café a bien été offert.
              </p>
              <button
                onClick={togglePopup}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
              >
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FloatingButton;
