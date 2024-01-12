import React from 'react';
import './Introduce.scss';
import arrow from '../../assets/icons/arrow.svg';
import mask from '../../assets/images/mask.png';
export default function Introduce() {
    return (
        <div className='introduce'>
            <div className="main-wrapper">
            <div className="mask" data-aos="fade-right"   data-aos-anchor=".content-text"> 
                <img src={mask} alt="" />
            </div>
            <div className="introduce__wrapper">
                <div className="left" ></div>
                <div className="right">
                    <div className='content'>
                        <h2><span  data-aos="fade-left" data-aos-duration="1000">Trở về</span><span  data-aos="fade-right" data-aos-duration="1000">Cội Nguồn</span></h2>
                        <div className="text" data-aos="fade-down" data-aos-duration="1000">
                            <p className='content-text'>Cải lương: là một loại hình kịch hát có nguồn gốc từ miền Nam Việt Nam, hình thành trên cơ sở dòng nhạc Đờn ca tài tử và dân ca miền đồng bằng sông Cửu Long, nhạc xưa cổ...</p>
                        </div>
                        <div className="more" data-aos="fade-down" data-aos-duration="1000">
                            <div className="more__wrapper">
                                <p>Xem thêm</p>
                                <div className="img">
                                    <img src={arrow} alt="arrow" />
                                </div>
                            </div>
                            <div className="more__hover">
                                <p>Xem thêm</p>
                                <div className="img">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.99964 12C5.99964 11.8011 6.07865 11.6103 6.21931 11.4697C6.35996 11.329 6.55072 11.25 6.74964 11.25L15.4391 11.25L12.2186 8.03103C12.1489 7.9613 12.0936 7.87851 12.0559 7.7874C12.0181 7.69629 11.9987 7.59864 11.9987 7.50003C11.9987 7.40141 12.0181 7.30376 12.0559 7.21265C12.0936 7.12154 12.1489 7.03876 12.2186 6.96903C12.2884 6.8993 12.3712 6.84398 12.4623 6.80624C12.5534 6.7685 12.651 6.74908 12.7496 6.74908C12.8483 6.74908 12.9459 6.7685 13.037 6.80624C13.1281 6.84398 13.2109 6.8993 13.2806 6.96903L17.7806 11.469C17.8505 11.5387 17.9059 11.6215 17.9437 11.7126C17.9815 11.8037 18.001 11.9014 18.001 12C18.001 12.0987 17.9815 12.1964 17.9437 12.2875C17.9059 12.3786 17.8505 12.4614 17.7806 12.531L13.2806 17.031C13.1398 17.1719 12.9488 17.251 12.7496 17.251C12.5505 17.251 12.3595 17.1719 12.2186 17.031C12.0778 16.8902 11.9987 16.6992 11.9987 16.5C11.9987 16.3009 12.0778 16.1099 12.2186 15.969L15.4391 12.75L6.74964 12.75C6.55072 12.75 6.35996 12.671 6.21931 12.5304C6.07865 12.3897 5.99964 12.1989 5.99964 12Z" fill="#FFC533" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    );
}
