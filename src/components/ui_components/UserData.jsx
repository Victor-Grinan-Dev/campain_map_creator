import React from "react";
import { useSelector } from "react-redux";
import { capitalStart } from "../../functions/capitalStart";
import { avatars } from "../../images/avatars";

const UserData = () => {
  const user = useSelector((state) => state.portal.currentUser);
  const avatar = avatars[user.avatar];

  return (
    <div className="userData">
      <img className="avatar" src={avatar} alt="avatar" />
      <p>
        {capitalStart(user.type)} {capitalStart(user.username)} Lvl{user.level}
      </p>
    </div>
  );
};

export default UserData;
