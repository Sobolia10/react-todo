import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import User from "./components/User";
import {Counter} from "./components/Counter";

import { User1 } from "./components/User";
import "./App.css";

const postArray = [
  { id: 1, title: "React", body: "React is cool" },
  { id: 2, title: "Css", body: "Css is cool" },
  { id: 3, title: "HTML", body: "HTML ids a language of hypertext" },
];

const App = () => {
  const [posts, setPosts] = useState(postArray);
  
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <Header />
      <Main posts={posts} addPost={addPost} />
      {/* <User/>*/}
       {/*<User1/>*/}
       {/*<Counter/>*/}
       {/*<Footer />*/}
    </div>
  );
};

export default App;
