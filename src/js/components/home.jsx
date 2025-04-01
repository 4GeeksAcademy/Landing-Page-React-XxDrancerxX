//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import FooterCode from "./footer";
import React, { useState } from "react";

//create your first component
const cardsArray = [
  {
    title: "Card 1",
    description: "This is the first card description.",
    buttonLabel: "Learn More",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/65be17cb80f5c798a03e7762/UEFA-Champions-League-2023-24-Group-Stage-Teams-Jerseys-Shoot/960x0.jpg?format=jpg&width=1440",
  },
  {
    title: "Card 2",
    description: "This is the second card description.",
    buttonLabel: "Learn More",
    image:
      "https://imagenes.elpais.com/resizer/v2/VRFYHQTZF3OOBUC45ENBFV5KPY.jpg?auth=e37472ce254385fe857e173964ccbb90dd4c3eb46d7502237dd5ac694269652b&width=1200",
  },
  {
    title: "Card 3",
    description: "This is the third card description.",
    buttonLabel: "Learn More",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/01/infinity-entry-image.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5",
  },
  {
    title: "Card 4",
    description: "This is the forth card description.",
    buttonLabel: "Learn More",
    image:
      "https://i0.wp.com/thinkingwest.com/wp-content/uploads/2022/03/50117621663_2b17d3b477_h.jpg?fit=1438%2C898&ssl=1",
  },
];

const shuffleCards = (array) => {
  let shuffled = [...array]
  shuffled.sort(() => Math.random() - 0.5);
  return shuffled
};

const Home = () => {
  const [cards, setCards] = useState(cardsArray);
  console.log(cards,"the cards!!!1")


  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container flex-grow-1 d-flex flex-column">
        <Jumbotron />
        <button onClick={()=>{
          setCards(shuffleCards(cards))
        }}className="btn btn-primary">Shuffle cards</button>
        <div className="row flex-grow-1 h-100 mb-5 mt-4">
          {cards.map((eachCard, index) => (
            <div key={index} className="col-md-3">
              <Cards
                title={eachCard.title}
                description={eachCard.description}
                buttonLabel={eachCard.buttonLabel}
                image={eachCard.image}
              />
            </div>
          ))}
        </div>
      </div>
      <FooterCode />
    </div>
  );
};

export default Home;
