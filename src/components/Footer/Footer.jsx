import React from 'react';
import logo from '../../assets/icons/logo.svg';
import address from '../../assets/icons/address.svg';
import phone from '../../assets/icons/phone.svg';
import gmail from '../../assets/icons/gmail.svg';
import youtube from '../../assets/icons/youtube.svg';
import facebook from '../../assets/icons/facebook.svg';
import './Footer.scss';
export default function Footer() {
    return (
        <footer>
      <div className="main-wrapper">

            <div className="container">

                <div className="left">
                    <div className="img">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="text">
                        <p>NHÀ HÁT CẢI LƯƠNG</p>
                        <p>TRẦN HỮU TRANG TP HỒ CHÍ MINH</p>
                    </div>
                </div>
                <div className="center">
                    <div className="group">
                        <div className="img">
                            <img src={address} alt="address_icon" />
                        </div>
                        <p>136 Trần Hưng Đạo, Phường Phạm Ngũ Lão,
                            Quận 1, Thành Phố Hồ Chí Minh</p>
                    </div>
                    <div className="group">
                        <div className="img">
                            <img src={phone} alt="phone_icon" />
                        </div>
                        <p>0799409929</p>
                    </div>
                </div>
                <div className="right">
                    <div className="group">
                        <div className="img">
                            <img src={gmail} alt="gmail_icon" />
                        </div>
                        <p>Gmail</p>
                    </div>
                    <div className="group">
                        <div className="img">
                            <img src={youtube} alt="youtube_icon" />
                        </div>
                        <p>Youtube</p>
                    </div>
                    <div className="group">
                        <div className="img">
                            <img src={facebook} alt="facebook_icon" />
                        </div>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
}
