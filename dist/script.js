const {
  BrowserRouter,
  Route,
  Link } =
ReactRouterDOM;

const App = () => /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("h1", null, "React Router Example"), /*#__PURE__*/
React.createElement("ul", { role: "nav" }, /*#__PURE__*/
React.createElement("li", null, /*#__PURE__*/React.createElement(Link, { to: "/dist/dashboard" }, "Dashboard")), /*#__PURE__*/
React.createElement("li", null, /*#__PURE__*/React.createElement(Link, { to: "/dist/profile" }, "Profile"))), /*#__PURE__*/


React.createElement("div", null, /*#__PURE__*/
React.createElement(Route, { path: "/dist/dashboard", component: Dashboard }), /*#__PURE__*/
React.createElement(Route, { path: "/dist/profile", component: Profile })));




const Dashboard = () => /*#__PURE__*/React.createElement("h2", null, "You are in the Dashboard");
const Profile = () => /*#__PURE__*/React.createElement("h2", null, "You are in the Profile");


ReactDOM.render( /*#__PURE__*/
React.createElement(BrowserRouter, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById('root'));
