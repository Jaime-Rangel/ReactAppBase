var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Outlet, Link } from "react-router-dom";
// const HelloWorld = () => {
//     return (
//         <h1>
//             Hello World
//         </h1>
//     );
// }
//ReactDOM.render(<HelloWorld />, document.getElementById("root"));
// function formatName(user:any) {
//   return user.firstName + ' ' + user.lastName;
// }
// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };
// const Element = () => {
//     return (
//         <h1>
//         Hello, {formatName(user)}!
//       </h1>
//     );
// }
// ReactDOM.render(<Element />, document.getElementById("root"));
export default function App() {
    return (_jsxs("div", { children: [_jsx("h1", { children: "Basic Example" }), _jsxs("p", { children: ["This example demonstrates some of the core features of React Router including nested ", _jsx("code", { children: "<Route>" }), "s,", " ", _jsx("code", { children: "<Outlet>" }), "s, ", _jsx("code", { children: "<Link>" }), "s, and using a \"*\" route (aka \"splat route\") to render a \"not found\" page when someone visits an unrecognized URL."] }), _jsx(Routes, { children: _jsxs(Route, __assign({ path: "/", element: _jsx(Layout, {}) }, { children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "about", element: _jsx(About, {}) }), _jsx(Route, { path: "dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "*", element: _jsx(NoMatch, {}) })] })) })] }));
}
function Layout() {
    return (_jsxs("div", { children: [_jsx("nav", { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, __assign({ to: "/" }, { children: "Home" })) }), _jsx("li", { children: _jsx(Link, __assign({ to: "/about" }, { children: "About" })) }), _jsx("li", { children: _jsx(Link, __assign({ to: "/dashboard" }, { children: "Dashboard" })) }), _jsx("li", { children: _jsx(Link, __assign({ to: "/nothing-here" }, { children: "Nothing Here" })) })] }) }), _jsx("hr", {}), _jsx(Outlet, {})] }));
}
function Home() {
    return (_jsx("div", { children: _jsx("h2", { children: "Home" }) }));
}
function About() {
    return (_jsx("div", { children: _jsx("h2", { children: "About" }) }));
}
function Dashboard() {
    return (_jsx("div", { children: _jsx("h2", { children: "Dashboard" }) }));
}
function NoMatch() {
    return (_jsxs("div", { children: [_jsx("h2", { children: "Nothing to see here!" }), _jsx("p", { children: _jsx(Link, __assign({ to: "/" }, { children: "Go to the home page" })) })] }));
}
