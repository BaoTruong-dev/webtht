import React from "react";
import "./Ticket.scss";

import imageInfo1 from "../../assets/images/info1.png";
import imageInfo2 from "../../assets/images/info2.png";
import imageInfo3 from "../../assets/images/info3.png";


export default function Ticket() {
  return (
    <div className="ticket-container">
      <div className="main-wrapper">

      <div className="ticket">
        <div className="ticket-title">
          <div className="ticket-title-left" data-aos="fade-right" data-aos-duration="1000">
            <span>Đặt vé</span>
          </div>
          <div className="ticket-title-right" data-aos="fade-left" data-aos-duration="1000">
            <div className="infoTitle">
              <div className="infoTitle-desc">
                <span className="infoTitle-desc-name">Tiếng Trống Mê Linh </span>
                <span className="infoTitle-desc-content">sẽ được chiếu vào lúc</span>
              </div>
              <span>10:30 - 19:30 Ngày 28/07/2022</span>
              <div className="infoTitle-desc">
                <span className="infoTitle-desc-name">Thuỷ Chiến </span>
                <span className="infoTitle-desc-content">sẽ được chiếu vào lúc</span>
              </div>
              <span>10:30 - 19:30 Ngày 28/07/2022</span>
            </div>
          </div>
        </div>

        <div className="ticketList">
          <hr data-aos="fade-right" data-aos-duration="500"/>
          <div className="ticketList-item"  data-aos="fade-down" data-aos-duration="1000">
            <div className="ticketList-item-left">
              <span className="type">Vé Sinh Viên</span>
              <span className="desc">
                Sinh viên các trường trên địa bàn TPHCM
              </span>
            </div>
            <div className="ticketList-item-right">
              <span>200.000 VNĐ</span>
            </div>
          </div>
          <hr data-aos="fade-right" data-aos-duration="500"/>
          <div className="ticketList-item" data-aos="fade-down" data-aos-duration="1000">
            <div className="ticketList-item-left">
              <span className="type">Vé Thường</span>
              <span className="desc">
              Sẽ có được chỗ ngồi khu A,B,C trên khán đài
              </span>
            </div>
            <div className="ticketList-item-right">
              <span>500.000 VNĐ</span>
            </div>
          </div>
          <hr data-aos="fade-right" data-aos-duration="500"/>
          <div className="ticketList-item" data-aos="fade-down" data-aos-duration="1000">
            <div className="ticketList-item-left">
              <span className="type">Vé VIP</span>
              <span className="desc">
              Sẽ được phục vụ đặc biệt ở hàng đầu VIP
              </span>
            </div>
            <div className="ticketList-item-right">
              <span>1.000.000 VNĐ</span>
            </div>
          </div>
          <hr data-aos="fade-right" data-aos-duration="500"/>
      


        </div>
      </div>
      <div className="info">
            <hr data-aos="fade-in" data-aos-duration="500"/>
            <span className="info-title" data-aos="fade-down" data-aos-duration="1000">Gương mặt nghệ sĩ</span>
            <div className="info-list">
                <div className="info-list-item" data-aos="fade-up" data-aos-duration="1000">
                    <img src={imageInfo1} alt="" />
                    <span>Nghệ sĩ: Thy Phương</span>
                </div>
                <div className="info-list-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <img src={imageInfo2} alt="" />
                    <span>Nghệ sĩ: Vũ Luân</span>
                </div>
                <div className="info-list-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                    <img src={imageInfo3} alt="" />
                    <span>Nghệ sĩ: Nguyễn Điền Trung</span>
                </div>
            </div>
            <button data-aos="fade-in" data-aos-duration="1000">Xem thêm</button>
        </div>
      </div>

    </div>
  );
}
