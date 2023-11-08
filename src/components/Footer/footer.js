import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

/* 일기 쓰러가기 버튼 */
function Footer(props) {

    return (
        <div className='copyright'>
            <Link to={"/aboutDiary"}>
                © 2023 EmJeolMi
            </Link>
        </div>
        
    );
}

export default Footer;