import { useState, useEffect } from "react";
import Posts from "./Posts";

function User({ userId }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => {
        setTimeout(() => {
          setUser(user);
          setLoading(false);
        }, 3000);
      });
  });

  if (loading) return <p>유저 데이터 로딩중...</p>;
  return (
    <div>
      <p>
        {user.name}({user.email}) 님이 작성한 글
      </p>
      <Posts userId={userId} />
    </div>
  );
}

export default User;
