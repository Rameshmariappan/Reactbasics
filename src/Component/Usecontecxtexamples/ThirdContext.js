import React from "react";

import { useContext } from "react";
import { UserContext, ChannelContext } from "../../App";

export const ThirdContext = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user}-{channel}
    </div>
  );
};
