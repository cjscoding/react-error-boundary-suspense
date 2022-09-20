import React, { Suspense } from "react";
import Posts from "./Posts";

function User({ resource }) {
  // if (resource) throw new Error("유저 데이터 에러!!"); // Error Boundary 테스트용

  const user = resource.user.read();

  return (
    <div>
      <p>
        {user.name}({user.email}) 님이 작성한 글
      </p>
      <Suspense fallback={<p>글목록 로딩중...</p>}>
        <Posts resource={resource} />
      </Suspense>
    </div>
  );
}

export default User;
