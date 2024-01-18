import { useState } from "react";
import { data } from "./data";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaQuoteRight,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  let [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number < 0) {
      return data.length - 1;
    } else if (number > data.length - 1) {
      return 0;
    } else {
      return number;
    }
  };

  const previous = () => {
    setIndex(() => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const next = () => {
    setIndex(() => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  //setting up random pick
  const random = () => {
    setIndex(() => {
      let newIndex = Math.floor(Math.random() * data.length);

      //avoiding repeating the same random number
      if (newIndex === index) {
        newIndex = index + 1;
      }
      return checkNumber(newIndex);
    });
  };

  return (
    <div>
      <ReviewTemplate
        previous={previous}
        next={next}
        random={random}
        {...data[index]}
      ></ReviewTemplate>
    </div>
  );
};

const ReviewTemplate = ({
  image,
  name,
  role,
  review,
  previous,
  next,
  random,
}) => {
  const [showingMore, setShowingMore] = useState(false);

  return (
    <div className="container">
      <div className="image-section">
        <img src={image} alt={name}></img>
        <FaQuoteRight class="icon"></FaQuoteRight>
      </div>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>
        {showingMore ? review : `${review.substring(0, 190)} .....`}
        <button
          className="showBtn"
          type="button"
          onClick={() => {
            setShowingMore(!showingMore);
          }}
        >
          {showingMore ? "show less" : "show more"}
        </button>
      </p>
      <div className="btn">
        <button
          onClick={() => {
            setShowingMore(false);
            previous();
          }}
        >
          <FaAngleDoubleLeft></FaAngleDoubleLeft>
        </button>
        <button
          onClick={() => {
            setShowingMore(false);

            next();
          }}
        >
          <FaAngleDoubleRight></FaAngleDoubleRight>
        </button>
      </div>
      <button
        className="suprise"
        onClick={() => {
          setShowingMore(false);

          random();
        }}
      >
        suprise me
      </button>
    </div>
  );
};

export default Home;
