"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/Home");
var Teachers_1 = require("./pages/Teachers");
var TeacherProfile_1 = require("./pages/TeacherProfile");
var Swap_1 = require("./pages/Swap");
var Auth_1 = require("./pages/Auth");
var Profile_1 = require("./pages/Profile");
var Leaderboard_1 = require("./pages/Leaderboard");
var Blog_1 = require("./pages/Blog");
var Navbar_1 = require("./components/Navbar");
var Footer_1 = require("./components/Footer");
require("./App.css");
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Navbar_1["default"] />
        <main className="flex-grow">
          <react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/" element={<Home_1["default"] />}/>
            <react_router_dom_1.Route path="/teachers" element={<Teachers_1["default"] />}/>
            <react_router_dom_1.Route path="/teachers/:id" element={<TeacherProfile_1["default"] />}/>
            <react_router_dom_1.Route path="/swap" element={<Swap_1["default"] />}/>
            <react_router_dom_1.Route path="/auth" element={<Auth_1["default"] />}/>
            <react_router_dom_1.Route path="/profile" element={<Profile_1["default"] />}/>
            <react_router_dom_1.Route path="/leaderboard" element={<Leaderboard_1["default"] />}/>
            <react_router_dom_1.Route path="/blog" element={<Blog_1["default"] />}/>
          </react_router_dom_1.Routes>
        </main>
        <Footer_1["default"] />
      </div>
    </react_router_dom_1.BrowserRouter>);
}
exports["default"] = App;
