import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchCard from "./components/SearchCard/SearchCard";
import { UserData } from "./userData";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import { useTheme } from "./ThemeContext";
import { themeSwitch } from "./sharedStyles";

const App = () => {
  const { state } = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<String | null>(null);
  const [data, setData] = useState<UserData | null>(null);

  const fetchApiData = async (userName: string) => {
    const validUsernameRegex = /^[a-zA-Z0-9_-]+$/;

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (response.status === 200) {
        const data: UserData = await response.json();
        setData(data);
        setError(null);
      } else if (response.status === 404) {
        if (!validUsernameRegex.test(userName)) {
          setError("Invalid username");
          return;
        } else {
          setError("User Not found");
        }
      }
    } catch (error) {
      setError("An error ocurred while fetching data");
      if (error instanceof Error) {
        console.error("An error occurred:", error.message);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchApiData(inputValue);
  };

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(
      state.theme === "light" ? "light-theme" : "dark-theme"
    );
  }, [state.theme]);

  useEffect(() => {
    fetchApiData("richarddadzie");
  }, []);

  const formatDateString = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <Header />
      <SearchCard
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      {error && <p className="error">{error}</p>}
      {data && (
        <ProfileDetails
          name={data.name}
          login={data.login}
          created_at={formatDateString(data.created_at)}
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
      )}
    </>
  );
};

export default App;
