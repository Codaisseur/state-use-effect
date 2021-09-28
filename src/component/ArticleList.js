import { useEffect, useState } from "react";
import axios from "axios";

const ArticleList = () => {
  const [list, setList] = useState([]); // [{}, {}, {}, {}]
  const [counter, setCounter] = useState(0);

  // This seems to run after the other log.
  // useEffect with an EMPTY dependency array
  // runs ONCE after the component mounts.
  useEffect(() => {
    console.log("component mounted time to trigger useEffect");
    const fetchSomeData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        // console.log(response.data);

        const articles = response.data; // [{}, {}, {}, {}]
        setList(articles);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchSomeData();
  }, []);

  // when we add something to the dependency array useEffect will be watching
  // that variable and if it changes it will trigger again
  // useEffect(() => {
  //   console.log("counter has changed!");
  // }, [counter]);

  console.log("Hello im in the component body this is the state", list);

  if (!list.length) {
    return <div>Loading....</div>;
  }
  // doesn't happen
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Run use Effect</button>
      <h1>Article list!</h1>
      {list.map(oneArticle => (
        <div
          key={oneArticle.id}
          style={{ border: "2px solid white", margin: 20 }}
        >
          <h3>{oneArticle.title}</h3>
          <p>{oneArticle.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
