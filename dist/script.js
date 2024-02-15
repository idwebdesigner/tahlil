const {
  BrowserRouter,
  Route,
  Link } =
ReactRouterDOM;

const App = () => /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("h1", null, "React Router Example"), /*#__PURE__*/
React.createElement("ul", { role: "nav" }, /*#__PURE__*/
React.createElement("li", null, /*#__PURE__*/React.createElement(Link, { to: "/dashboard" }, "Dashboard")), /*#__PURE__*/
React.createElement("li", null, /*#__PURE__*/React.createElement(Link, { to: "/profile" }, "Profile"))), /*#__PURE__*/


React.createElement("div", null, /*#__PURE__*/
React.createElement(Route, { path: "/dashboard", component: Dashboard }), /*#__PURE__*/
React.createElement(Route, { path: "/profile", component: Profile })));




const Dashboard = () => /*#__PURE__*/React.createElement("h2", null, "You are in the Dashboard");
const Profile = () => /*#__PURE__*/React.createElement("h2", null, "You are in the Profile");


ReactDOM.render( /*#__PURE__*/
React.createElement(BrowserRouter, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById('root'));