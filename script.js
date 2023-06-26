import { fetchNextShape } from "./randomizer.js";
let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");
ctx.rect(20, 20, 100, 10);
ctx.fill();
document.onkeydown = () => {
  console.log("Next shape is = ", fetchNextShape());
};
// document.onkeydown = (key) => {
//   console.log("key", key);
//   switch (key.key) {
//     case "ArrowLeft":
//       console.log("left key pressed");
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.beginPath();
//       ctx.rect(10, 20, 100, 10);
//       ctx.fill();
//       break;
//     case "ArrowRight":
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.beginPath();
//       ctx.rect(20, 20, 100, 10);
//       ctx.fill();
//       break;
//   }
// };
