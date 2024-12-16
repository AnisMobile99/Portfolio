import React, { useState } from "react";
import ProfileImageSrc from "../../assets/images/photoProfil.jpg";
import AvatarImageSrc from "../../assets/images/photoProfil.jpg"; // Une autre image pour l'avatar

const ProfileImage = () => {
  const [showAvatar, setShowAvatar] = useState(false); // État pour basculer sur l'avatar

  return (
    <div
      className={`absolute -top-16 left-1/2 transform -translate-x-1/2 cursor-pointer`}
    >
      <img
        src={showAvatar ? AvatarImageSrc : ProfileImageSrc} // Change l'image
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 object-cover"
      />
    </div>
  );
};

export default ProfileImage;
