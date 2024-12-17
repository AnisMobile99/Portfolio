import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import InterestCard from "./InterestCard";

const interests = [
  {
    id: 1,
    title: "Basketball",
    image: "https://source.unsplash.com/400x400/?basketball",
  },
  {
    id: 2,
    title: "Paddle",
    image: "https://source.unsplash.com/400x400/?paddle",
  },
  {
    id: 3,
    title: "Coding Game",
    image: "https://source.unsplash.com/400x400/?coding",
  },
  {
    id: 4,
    title: "Voyager",
    image: "https://source.unsplash.com/400x400/?travel",
  },
];

const InterestSwipe = () => {
  const [cards, setCards] = useState(interests);

  // Déplacer la carte swipée à la fin de la pile
  const moveCardToEnd = (id) => {
    setCards((prevCards) => {
      const cardToMove = prevCards.find((card) => card.id === id);
      const remainingCards = prevCards.filter((card) => card.id !== id);
      return [...remainingCards, cardToMove]; // Réinsérer à la fin
    });
  };

  return (
    <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
      {cards.map((card, index) => (
        <SwipeableCard
          key={card.id}
          card={card}
          index={cards.length - index} // Gestion de l'ordre avec zIndex
          moveCardToEnd={() => moveCardToEnd(card.id)}
        />
      ))}
    </div>
  );
};

const SwipeableCard = ({ card, index, moveCardToEnd }) => {
  const [props, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    opacity: 1,
    immediate: false,
  }));

  const bind = useDrag(({ down, movement: [mx], velocity }) => {
    const swipeThreshold = 200; // Distance pour considérer un swipe
    const dir = mx > 0 ? 1 : -1;

    if (!down && Math.abs(mx) > swipeThreshold) {
      // Animation pour swiper hors écran
      api.start({ x: dir * 500, rotate: dir * 20, opacity: 0 });

      // Retirer et replacer la carte après animation
      setTimeout(() => {
        moveCardToEnd();
        api.start({ x: 0, rotate: 0, opacity: 1 }); // Réinitialiser les valeurs d'animation
      }, 300);
    } else {
      // Animation pendant le drag
      api.start({
        x: down ? mx : 0,
        rotate: down ? mx / 10 : 0,
        scale: down ? 1.05 : 1,
      });
    }
  });

  return (
    <animated.div
      {...bind()}
      style={{
        ...props,
        zIndex: index,
        touchAction: "none", // Résout l'erreur touch-action
      }}
      className="absolute w-72 h-96 bg-white dark:bg-[#1F1F1F] shadow-2xl rounded-2xl overflow-hidden"
    >
      <InterestCard card={card} />
    </animated.div>
  );
};

export default InterestSwipe;
