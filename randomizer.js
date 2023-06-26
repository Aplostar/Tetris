let shapes = ["i", "j", "l", "o", "s", "t", "z"];

let bag = [0, 1, 2, 3, 4, 5, 6];

let nextShape = "";

export function fetchNextShape() {
  if (bag.length === 0) {
    bag = [0, 1, 2, 3, 4, 5, 6];
  }
  let index = Math.floor(Math.random() * bag.length);
  let nextShape = shapes[bag[index]];
  bag.splice(index, 1);
  console.log("bag = ", bag);
  return nextShape;
}
