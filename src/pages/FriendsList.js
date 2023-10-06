import { useContext, useEffect, useState } from "react";
import Friend from "../components/Friend";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const { authUser } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: { authorization: authUser.token },
      })
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err.response.data.error));
  }, []);
  return (
    <>
      <h1>FRIENDS LIST</h1>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </>
  );
};

export default FriendsList;
