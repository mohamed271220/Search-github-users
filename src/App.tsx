import { useState } from "react";
import SearchForm from "./components/form/SearchForm";
import UserProfile from "./components/user/UserProfile";

const App = () => {
  const [username, setUsername] = useState("mohamed271220");

  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <SearchForm username={username} setUsername={setUsername} />
      <UserProfile username={username} />
    </main>
  );
};
export default App;
