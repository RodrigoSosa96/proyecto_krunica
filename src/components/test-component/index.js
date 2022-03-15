import styled from "styled-components";

// function bold(strings, ...values) {
//     const result = [];
//     for (let i = 0; i < strings.length; i++) {
//         result.push(strings[i]);
//         if (i < values.length) {
//             result.push(<b>{values[i]}</b>);
//         }
//     }
//     return result;
// }

function testString(strings, ...values) {
    console.log(strings);
}
testString`
    color: red;
    background-color: blue;

`;
function TestComponent() {
	// const Bold = "bold bold bold bold";
	// const text = bold`This is a test component. ${Bold} It is a test component. ${Bold} ${Bold} ${Bold} It is a test component.`;
	// console.log(text[1]);

	return (
		<>
			{/* <div>{text}</div> */}
		</>
	);
}
export default TestComponent;
