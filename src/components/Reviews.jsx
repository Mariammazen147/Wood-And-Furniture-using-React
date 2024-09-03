import React from "react";
import guyImage from "../assets/images/guy.png";
import girlImage from "../assets/images/girl.png";
import { ThemeContext } from "../App";
import { useContext } from "react";

const reviews = [
  {
    quote: "Excellent service and quality. Highly recommend!",
    name: "John Doe",
    title: "CEO, Company",
    image: guyImage,
    stars: 5,
  },
  {
    quote: "Excellent service and quality. Highly recommend!",
    name: "Jane Smith",
    title: "Designer",
    image: girlImage,
    stars: 3,
  },
  {
    quote: "Excellent service and quality. Highly recommend!",
    name: "Emily Johnson",
    title: "Freelancer",
    image: girlImage,
    stars: 3,
  },
  {
    quote: "Excellent service and quality. Highly recommend!",
    name: "Michael Brown",
    title: "Entrepreneur",
    image: guyImage,
    stars: 4,
  },
];

const Reviews = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ? "bg-dark-green" : "bg-light-green"}`}>
      <p
        className={`display-4 text-center ${
          theme === "dark" ? "font-color-footer" : "font-color"
        }`}
      >
        Trusted By
      </p>
      <div className=" reviews-section">
        <div className="container">
          <div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"
            id="reviews-container"
          >
            {reviews.map((review) => (
              <div className="col">
                <div
                  className={` d-flex align-items-center ${
                    theme === "dark" ? "review-card-dark" : "review-card-light"
                  }`}
                  style={{ height: "100%" }}
                >
                  <div className={`${theme==="dark"?"font-color-footer review-content":"review-content" }`}>
                    <p>"{review.quote}"</p>
                    <div className={`${
                    theme === "dark" ? "review-stars-dark" : "review-stars-light"
                  }`}>
                      {Array.from({ length: 5 }, (_, idx) =>
                        idx < review.stars ? (
                          <i className="bi bi-star-fill" key={idx}></i>
                        ) : (
                          <i className="bi bi-star" key={idx}></i>
                        )
                      )}
                    </div>
                    <div className="review-author-info">
                      <p className="review-author-name">{review.name}</p>
                      <p className="review-author-title">{review.title}</p>
                    </div>
                  </div>
                  <img
                    src={review.image}
                    alt={review.name}
                    className="review-author-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
