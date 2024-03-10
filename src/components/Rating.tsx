import { Icon } from "@iconify/react";
import "../scss/rating.scss";
import { Rating } from "react-simple-star-rating";

export default function StarRating({ rate }: { rate: number }) {
  return (
    <Rating
      initialValue={rate}
      iconsCount={10}
      readonly
      allowFraction
      size={20}
      fillColor="#F6995C"
    />
    // <div className="rating-container">
    //   {Array(10)
    //     .fill("")
    //     .map((_, i) => (
    //       <div key={i}>
    //         <Icon
    //           icon="fluent:star-half-12-regular"
    //           width={20}
    //           height={20}
    //           className={"icon-rating " + (rate > i + 1 ? "active" : "")}
    //         />
    //       </div>
    //     ))}
    // </div>
  );
}
