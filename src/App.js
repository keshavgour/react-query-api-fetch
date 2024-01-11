import { useQuery } from "react-query";
import "./App.css";
import axios from "axios";

function App() {
  const fetchData = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data);
  };

  const { isLoading, isError, data, error } = useQuery("user", fetchData);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  console.log(data);
  return (
    <ul>
      <h1>Users</h1>
      {data.map((users) => (
        <li key={users.id}>{users.name}</li>
      ))}
    </ul>
  );
}

export default App;
