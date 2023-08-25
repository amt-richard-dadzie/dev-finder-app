import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchCard from "./components/SearchCard/SearchCard";
import { UserData } from "./userData";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import { useTheme } from "./ThemeContext";
// import { themeSwitch } from "./sharedStyles";

const App = () => {
  const { state } = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<UserData | null>(null);

  // console.log(inputValue);

  const fetchApiData = async (userName: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) {
        throw new Error("Request failed with status" + response.status);
      }
      const data: UserData = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchApiData(inputValue);
  };

  useEffect(() => {
    fetchApiData("octocat");
  }, []);

  console.log(data);

  return (
    <>
      <Header />
      <SearchCard
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      {data ? (
        <ProfileDetails
          name={data.name}
          login={data.login}
          created_at={data.created_at}
          avatar_url={data.avatar_url}
          bio={data.bio}
          public_repos={data.public_repos}
          following={data.following}
          followers={data.followers}
          location={data.location}
          twitter_username={data.twitter_username}
          blog={data.blog}
          company={data.company}
        />
      ) : (
        "Nothing searched"
      )}
    </>
  );
};

export default App;
