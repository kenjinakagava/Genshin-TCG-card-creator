// In this project I'm only going to have one page with a Hero header,

import { Link } from "react-router-dom";
import Nav from "../../components/layout/Nav";

const HeroHeader = () => {
  return (
    <header className="h-screen home-hero-header">
      <Nav />
      <div className="container pt-32 px-4 text-white mx-auto relative fold:pt-20">
        <h1 className="text-[2.75rem] leading-none text-gold md:text-6xl uppercase max-w-hero-title">
          Genshin Custom Cards
        </h1>
        <h2 className="text-2xl pt-4 text-gold">
          Create and share custom Genshin TCG Cards
        </h2>
        <p className="pt-4 lg:w-2/4">
          Are you a fan of trading card games and wish you could create your own
          cards to use in the game or share with friends? Look no further!
          Genshin Custom Cards is here to help!
        </p>
        <Link
          to="/create-a-card"
          className="inline-block p-4 mt-4 bg-gold rounded"
        >
          Create a card
        </Link>
      </div>
    </header>
  );
};

export default HeroHeader;
