import Image from "next/image";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";
import Card4 from "./components/card4";


export default function Team() {
  return (
      <div>
          <h1 className="font-bold text-3xl text-center m-[3rem] text-[rgb(232,156,56)]">Meet Our Team</h1>
          <div className="main m-auto flex items-center flex-wrap max-h-{640} max-w-{1280} justify-evenly">
              <Card1></Card1>
              <Card2></Card2>
              <Card3></Card3>
              <Card4></Card4>
          </div>
      </div>
    
  );
}
