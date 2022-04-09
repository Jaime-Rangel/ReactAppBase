import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
var HelloWorld = function () {
    return (_jsx("h1", { children: "Hello World" }));
};
ReactDOM.render(_jsx(HelloWorld, {}), document.getElementById("root"));
