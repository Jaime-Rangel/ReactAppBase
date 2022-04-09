import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
// const HelloWorld = () => {
//     return (
//         <h1>
//             Hello World
//         </h1>
//     );
// }
//ReactDOM.render(<HelloWorld />, document.getElementById("root"));
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
var user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
var Element = function () {
    return (_jsxs("h1", { children: ["Hello, ", formatName(user), "!"] }));
};
ReactDOM.render(_jsx(Element, {}), document.getElementById("root"));
