import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const FriendDetails = () => {
  const { id } = useParams();
  const { authUser } = useContext(AuthContext);
  const [friend, setFriend] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends/" + id, {
        headers: { authorization: authUser.token },
      })
      .then((res) => {
        setFriend(res.data);
      })
      .catch((err) => console.log(err.response.data.error));
  }, []);
  return (
    <>
      <p>Name: {friend.name};</p>
      <p>Name: {friend.age};</p>
      <p>Name: {friend.email};</p>
    </>
  );
};

export default FriendDetails;
