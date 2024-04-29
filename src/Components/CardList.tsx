import React from "react";
import Card from "./CardComponent";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import "../Style/Cards.css";

interface CardData {
  icon: IconName;
  title: string;
  subtitle: string;
}

const CardList: React.FC = () => {
  const cards: CardData[] = [
    {
      icon: "apartment",
      title: "Projekt 1",
      subtitle: "Cool marknadsföring",
    },
    {
      icon: "unicorn",
      title: "Projekt 2",
      subtitle: "Ännu coolare marknadsföring",
    },
    {
      icon: "blender-phone",
      title: "Projekt 3",
      subtitle: "Världens coolaste marknadsföring",
    },
    { icon: "person-to-portal", title: "Projekt 4", subtitle: "See you..." },
    {
      icon: "person-from-portal",
      title: "Projekt 5",
      subtitle: "...over here.",
    },
    { icon: "otter", title: "Projekt 6", subtitle: "Supercoolt projekt" },
  ];

  return (
    <div id="cards">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
};

export default CardList;