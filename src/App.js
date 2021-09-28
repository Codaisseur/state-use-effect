import logo from "./logo.svg";
import "./App.css";
import ProductList from "./component/ProductList";
import ArticleList from "./component/ArticleList";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>Hey hey</div>
        {/* <ProductList /> */}
        <ArticleList />
      </header>
    </div>
  );
}

export default App;
