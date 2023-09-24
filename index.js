import pieces from "./pieces/type1.js";

const search = function (sizeA, typeA, sizeB, typeB, delta = 0.2) {
  const response = [];

  for (let i = 0; i < pieces.length; i++) {
    const { id, sides } = pieces[i];
    for (let j = 0; j < sides.length; j++) {
      const curr = sides[j];
      const next = sides[j === 3 ? 0 : j + 1];
      if (
        curr.size >= sizeA - delta &&
        curr.size <= sizeA + delta &&
        typeA === curr.type &&
        next.size >= sizeB - delta &&
        next.size <= sizeB + delta &&
        typeB === next.type
      ) {
        response.push(id);
        break;
      }
    }
  }

  if (response.length) {
    console.log("Match id's :", response);
  } else {
    console.log("No Match pieces founded!");
  }
};

search(15.1, "M", 19.5, "F");
