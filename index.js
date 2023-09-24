const pieces = [
  {
    id: 0,
    sides: [
      { size: 0.59, type: "M" },
      { size: 0.77, type: "F" },
      { size: 0.61, type: "M" },
      { size: 0.77, type: "F" },
    ],
  },
  {
    id: 1,
    sides: [
      { size: 0.65, type: "M" },
      { size: 0.67, type: "F" },
      { size: 0.65, type: "M" },
      { size: 0.66, type: "F" },
    ],
  },
  {
    id: 2,
    sides: [
      { size: 0.59, type: "M" },
      { size: 0.65, type: "F" },
      { size: 0.58, type: "M" },
      { size: 0.65, type: "F" },
    ],
  },
  {
    id: 3,
    sides: [
      { size: 0.73, type: "M" },
      { size: 0.65, type: "F" },
      { size: 0.7, type: "M" },
      { size: 0.64, type: "F" },
    ],
  },
  {
    id: 4,
    sides: [
      { size: 0.65, type: "M" },
      { size: 0.72, type: "F" },
      { size: 0.65, type: "M" },
      { size: 0.69, type: "F" },
    ],
  },
  {
    id: 5,
    sides: [
      { size: 0.62, type: "M" },
      { size: 0.72, type: "F" },
      { size: 0.61, type: "M" },
      { size: 0.72, type: "F" },
    ],
  },
];

search = function (sizeA, typeA, sizeB, typeB, delta = 0) {
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

search(0.59, "M", 0.77, "F");
