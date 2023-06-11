import { Route, Routes } from "react-router-dom";
import Add from "./magazine/Add";
import './App.scss';
import Dashboard from "./Dashboard";
import Footer from './Footer';
import Login from "./user/Login";
import News from "./News";
import NewsDetail from "./NewsDetail";
import NewsPresentation from "./NewsPresentation";
import Update from "./magazine/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<News />}></Route>
        <Route path='/news_detail/:id' element={<NewsDetail />}></Route>
        <Route path='/news_presentation' element={<NewsPresentation />}></Route>
        <Route path='/news_add' element={<Add />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
