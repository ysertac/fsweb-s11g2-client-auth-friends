import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Friend = (props) => {
  const { friend } = props;
  return (
    <div className="mx-auto">
      <Link
        className="bg-black text-white inline-block py-5 w-96 my-3 rounded-2xl"
        to={`/friends/${friend.id}`}
      >
        - {friend.name} - {friend.email}
      </Link>
    </div>
  );
};

export default Friend;
