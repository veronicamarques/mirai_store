import React from "react";
import { ReactComponent as StarFull } from "../../../../assets/img/starfull.svg";
import { ReactComponent as StarHalf } from "../../../../assets/img/starhalf.svg";
import { ReactComponent as StarEmpty } from "../../../../assets/img/starempty.svg";

function getFills(score) {
  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Star({ fill }) {
  if (fill === 0) {
    return <StarEmpty />;
  } else if (fill === 1) {
    return <StarFull />;
  } else {
    return <StarHalf />;
  }
}

function ProductStar(props) {
  const fills = getFills(props.score);

  return (
    <div id="card-stars">
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
    </div>
  );
}

export default ProductStar;
