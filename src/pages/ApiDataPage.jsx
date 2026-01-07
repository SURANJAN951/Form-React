import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/api/apiSlice";

const ApiDataPage = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <h2>API Data</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default ApiDataPage;
