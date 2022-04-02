import React from "react";
import Image from "next/image";
import cardStyles from "../styles/NewsCard.module.scss";

function NewsCard({ news }) {
  return (
    <div className={cardStyles.container}>
      <div className={cardStyles.imageContainer}>
        <Image
          src={
            news.urlToImage != "null"
              ? news.urlToImage
              : "/placeholder.jpg"
          }
          alt={news.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <h2>{news.title}</h2>
      <h3>{news.author}</h3>
      <p>{news.content}</p>
    </div>
  );
}

export default NewsCard;
