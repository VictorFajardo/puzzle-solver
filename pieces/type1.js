const pieces = [
  {
    id: 1,
    sides: [
      { size: 16.5, type: "M" },
      { size: 17, type: "F" },
      { size: 16.5, type: "M" },
      { size: 16.8, type: "F" },
    ],
  },
  {
    id: 2,
    sides: [
      { size: 15, type: "M" },
      { size: 16.5, type: "F" },
      { size: 14.7, type: "M" },
      { size: 16.5, type: "F" },
    ],
  },
  {
    id: 3,
    sides: [
      { size: 18.7, type: "M" },
      { size: 16.7, type: "F" },
      { size: 17.9, type: "M" },
      { size: 16.3, type: "F" },
    ],
  },
  {
    id: 4,
    sides: [
      { size: 16.5, type: "M" },
      { size: 18.3, type: "F" },
      { size: 16.5, type: "M" },
      { size: 17.5, type: "F" },
    ],
  },
  {
    id: 5,
    sides: [
      { size: 15.7, type: "M" },
      { size: 18.3, type: "F" },
      { size: 15.5, type: "M" },
      { size: 18.3, type: "F" },
    ],
  },
  {
    id: 6,
    sides: [
      { size: 19.1, type: "M" },
      { size: 18, type: "F" },
      { size: 18.8, type: "M" },
      { size: 17.5, type: "F" },
    ],
  },
  {
    id: 7,
    sides: [
      { size: 17.5, type: "M" },
      { size: 17.8, type: "F" },
      { size: 17, type: "M" },
      { size: 17.5, type: "F" },
    ],
  },
  {
    id: 8,
    sides: [
      { size: 16, type: "M" },
      { size: 17.8, type: "F" },
      { size: 16, type: "M" },
      { size: 18.3, type: "F" },
    ],
  },
  {
    id: 9,
    sides: [
      { size: 17, type: "M" },
      { size: 18, type: "F" },
      { size: 17, type: "M" },
      { size: 17.5, type: "F" },
    ],
  },
  {
    id: 10,
    sides: [
      { size: 17.3, type: "M" },
      { size: 20.1, type: "F" },
      { size: 17.3, type: "M" },
      { size: 20.1, type: "F" },
    ],
  },
  {
    id: 11,
    sides: [
      { size: 17.3, type: "M" },
      { size: 16.5, type: "F" },
      { size: 17.5, type: "M" },
      { size: 16.5, type: "F" },
    ],
  },
  {
    id: 12,
    sides: [
      { size: 18.8, type: "M" },
      { size: 16.3, type: "F" },
      { size: 18.3, type: "M" },
      { size: 16.3, type: "F" },
    ],
  },
  {
    id: 13,
    sides: [
      { size: 19.1, type: "M" },
      { size: 16.3, type: "F" },
      { size: 19.3, type: "M" },
      { size: 16.5, type: "F" },
    ],
  },
  {
    id: 14,
    sides: [
      { size: 19.6, type: "M" },
      { size: 16.3, type: "F" },
      { size: 19.3, type: "M" },
      { size: 16.5, type: "F" },
    ],
  },
  {
    id: 15,
    sides: [
      { size: 18.8, type: "M" },
      { size: 16.5, type: "F" },
      { size: 18.8, type: "M" },
      { size: 17.5, type: "F" },
    ],
  },
  {
    id: 16,
    sides: [
      { size: 18, type: "M" },
      { size: 14.7, type: "F" },
      { size: 18.5, type: "M" },
      { size: 15.2, type: "F" },
    ],
  },
  {
    id: 17,
    sides: [
      { size: 18.3, type: "M" },
      { size: 17.8, type: "F" },
      { size: 18.3, type: "M" },
      { size: 18, type: "F" },
    ],
  },
  {
    id: 18,
    sides: [
      { size: 18, type: "M" },
      { size: 15.2, type: "F" },
      { size: 18, type: "M" },
      { size: 16, type: "F" },
    ],
  },
  {
    id: 19,
    sides: [
      { size: 16.3, type: "M" },
      { size: 18.3, type: "F" },
      { size: 16.3, type: "M" },
      { size: 18.3, type: "F" },
    ],
  },
  {
    id: 20,
    sides: [
      { size: 18.3, type: "M" },
      { size: 17.5, type: "F" },
      { size: 18.3, type: "M" },
      { size: 18, type: "F" },
    ],
  },
  {
    id: 21,
    sides: [
      { size: 15.2, type: "M" },
      { size: 17.5, type: "F" },
      { size: 15.2, type: "M" },
      { size: 17.8, type: "F" },
    ],
  },
  {
    id: 22,
    sides: [
      { size: 16.3, type: "M" },
      { size: 18, type: "F" },
      { size: 17.3, type: "M" },
      { size: 18.5, type: "F" },
    ],
  },
  {
    id: 23,
    sides: [
      { size: 20.1, type: "M" },
      { size: 16.8, type: "F" },
      { size: 20.1, type: "M" },
      { size: 16.5, type: "F" },
    ],
  },
  {
    id: 24,
    sides: [
      { size: 20.6, type: "M" },
      { size: 15.2, type: "F" },
      { size: 20.1, type: "M" },
      { size: 15, type: "F" },
    ],
  },
  {
    id: 25,
    sides: [
      { size: 19.1, type: "M" },
      { size: 15.2, type: "F" },
      { size: 18.3, type: "M" },
      { size: 15.2, type: "F" },
    ],
  },
  {
    id: 26,
    sides: [
      { size: 15, type: "M" },
      { size: 19.6, type: "F" },
      { size: 15.5, type: "M" },
      { size: 19.6, type: "F" },
    ],
  },
];

export default pieces;
