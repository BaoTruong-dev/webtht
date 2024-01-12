import React, { useEffect } from "react";
import "./CategoryItem.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function CategoryItem({
  backgroundImage,
  image,
  textStart,
  textEnd,
  imageHover,
  id,
}) {
  
  useEffect(()=>{
    AOS.init({
    
      
      mirror:true,
      once: false,
    });
    AOS.refresh();
    document.querySelectorAll('img').forEach((img)=>{
      img.addEventListener("load",()=>{
        AOS.refresh();
      })
    });
  },[])

  const mouseOver = (e) => {
    const imageMainRef = document.getElementById(`imageMain${id}`);
      imageMainRef.src = `${imageHover}`;
  };
  const mouseOut = (e) => {
    const imageMainRef = document.getElementById(`imageMain${id}`);
      imageMainRef.src = `${image}`;
  };



  return (
    <div
      className="category-item"
      onMouseOver={(e) => mouseOver(e)}
      onMouseOut={(e) => mouseOut(e)}
    >
      <img src={backgroundImage} alt="" className="category-item-background" />
      <div className="category-item-content" >
        {[...Array(9)].map((item, index) => {
          return (
            <div className={`text text-${id}-${index}`} key={index} item={item} data-aos="fade-down" data-aos-duration="500">
        
              <span>{textStart}</span>
              <span>{textEnd}</span>
            </div>
          );
        })}
      </div>
      <img src={image} alt="" id={`imageMain${id}`} className="imageMainCate" />
    </div>
  );
}
