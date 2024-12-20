import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import InterestCard from "./InterestCard";
import { interests } from "./InterestData";

const InterestSwipe = () => {
  const [cards, setCards] = useState(interests);

  // Déplacer la carte swipée à la fin de la pile
  const moveCardToEnd = (id) => {
    setCards((prevCards) => {
      const cardToMove = prevCards.find((card) => card.id === id);
      const remainingCards = prevCards.filter((card) => card.id !== id);
      return [...remainingCards, cardToMove];
    });
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Titre */}
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Mes centres d'interets
      </h2>
      <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden px-4 md:px-8 lg:px-16">
        {cards.map((card, index) => (
          <SwipeableCard
            key={card.id}
            card={card}
            index={index}
            totalCards={cards.length}
            moveCardToEnd={() => moveCardToEnd(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

const SwipeableCard = ({ card, index, totalCards, moveCardToEnd }) => {
  const [props, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    opacity: 1,
    immediate: false,
  }));
  const [isHovered, setIsHovered] = useState(false);

  const bind = useDrag(({ down, movement: [mx] }) => {
    const swipeThreshold = 200;
    const dir = mx > 0 ? 1 : -1;

    if (!down && Math.abs(mx) > swipeThreshold) {
      // Replier la carte avant le swipe
      setIsHovered(false);

      // Animation pour swiper la carte
      api.start({ x: dir * 500, rotate: dir * 20, opacity: 0 });

      // Réinitialiser et déplacer la carte
      setTimeout(() => {
        moveCardToEnd();
        api.start({ x: 0, rotate: 0, opacity: 1 });
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
        zIndex: totalCards - index,
        touchAction: "none",
        cursor: "grab",
        transform: `translateY(${index * 10}px) translateX(${
          index * 15
        }px) scale(${1 - index * 0.02})`,
      }}
      className={`absolute bg-white dark:bg-[#1F1F1F] shadow-2xl rounded-2xl overflow-hidden transition-transform duration-700 ${
        isHovered ? "scale-110" : "scale-100"
      } w-[80vw] max-w-[400px] h-auto`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <InterestCard card={card} isHovered={isHovered} />
    </animated.div>
  );
};

export default InterestSwipe;
