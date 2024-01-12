import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import './Header.scss';
export default function Header() {
  
    return (
        <header className={`header`} >
            <div className="main-wrapper container">
            <div className="header__text">
                <ul>
                    <li className="active"><Link to="/" title="Trang chủ">Trang chủ</Link></li>
                    <li><Link to="/" title="Giới thiệu">Giới thiệu</Link></li>
                    <li><Link to="/" title="Liên hệ">Liên hệ</Link></li>
                </ul>
            </div>
            <div className="header__logo">
                <div className="img">
                    <img src={logo} alt="logo" />
                </div>
                <div className="text">
                    <p>NHÀ HÁT CẢI LƯƠNG</p>
                    <p>TRẦN HỮU TRANG</p>
                </div>
            </div>
            <div className="header__booked">
                <div className='button'>Đặt vé</div>
            </div>
            </div>
           
        </header>
    );
}
