import React from "react";
import pi from './ProfileInformation.module.css';


const ProfileInformation=()=> {
    return (
        <div className={pi.profAva}>
            <img src="https://i.pinimg.com/736x/8d/a5/48/8da5485220f54aff3bc0c15dbbd7a739.jpg" alt="your_photo"/>
            <div className={pi.person_information}>
                <h2>Tuz Dmitry <br/></h2>
                Date of Birth: 27 July <br/>
                Education: BNTU'11 <br/>
                Web Site: https://it-kamasutra.com
            </div>
        </div>
    )
};

export default ProfileInformation;