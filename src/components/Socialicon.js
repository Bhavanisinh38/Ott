import React from "react";
import {Link} from "react-router-dom";

export default function Socialicon(props) {

    const Socialicons = [
        {
          SocialItemLink: "/",
          SocialItemClass: "fb-item",
          SocialItemFaClass: "fa-facebook",
        },
        {
          SocialItemLink: "/",
          SocialItemClass: "insta-item",
          SocialItemFaClass: "fa-instagram",
        },
        {
          SocialItemLink: "/",
          SocialItemClass: "whatsapp-item",
          SocialItemFaClass: "fa-whatsapp",
        },
    ];

  return (
    <>
    <div className={props.className}>
        {Socialicons.map((item, index) => ( 
            <Link key={index} className={`si-item ${item.SocialItemClass}`} to={item.SocialItemLink}>
                <span className="si-icon">
                    <i className={`fa ${item.SocialItemFaClass}`} aria-hidden="true"></i>
                </span>
            </Link>
        ))}
    </div>
    </>
  );
};
