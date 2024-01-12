import React from "react";
import "./Category.scss";
import bg_category1 from "../../assets/images/bg-category1.png";
import bg_category2 from "../../assets/images/bg-category2.png";
import bg_category3 from "../../assets/images/bg-category3.png";
import bg_category4 from "../../assets/images/bg-category4.png";

import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";


import image1_1 from "../../assets/images/image1-1.png";
import image2_2 from "../../assets/images/image2-2.png";
import image3_3 from "../../assets/images/image3-3.png";
import image4_4 from "../../assets/images/image4-4.png";
import CategoryItem from "../../components/CategoryItem/CategoryItem";

export default function Category() {
  return (
    <>
      <div className="category">
        <div className="main-wrapper">

        <CategoryItem
          backgroundImage={bg_category1}
          image={image1_1}
          imageHover={image1}
          textStart={`VỌNG`}
          textEnd={`CỔ`}
          id="1"
        ></CategoryItem>
           <CategoryItem
          backgroundImage={bg_category2}
          image={image2_2}
          imageHover={image2}
          textStart={`CA`}
          textEnd={`BẮC`}
          id="2"

        ></CategoryItem>
           <CategoryItem
          backgroundImage={bg_category3}
          image={image3_3}
          imageHover={image3}
          textStart={`CA`}
          textEnd={`NAM`}
          id="3"

        ></CategoryItem>
           <CategoryItem
          backgroundImage={bg_category4}
          image={image4_4}
          imageHover={image4}
          textStart={`NÓI`}
          textEnd={`LỐI`}
          id="4"

        ></CategoryItem>
        </div>
     
      </div>
    </>
  );
}
