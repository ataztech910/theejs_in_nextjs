const cameraAngles = [
    [0, 2, 0],
    [0, 1, 0],
    [0, -0.5, 0],
  ];
  
const cameraPositions = [
    [0, 0, 0],
    [0, -3, 0],
    [0, -6, 0]
];
  
const smileProps = [
    {
      position: [-0.3, 2, -0.2],
      rotation: [Math.PI, 2, 0],
    },
    {
      position: [0.5, 6.5, 0],
      rotation: [Math.PI, 3, 0],
    },
    {
      position: [1, 11.5, -0.1],
      rotation: [Math.PI, 2, 0],
    }
];
  
const arrowProps = {
    left: [
      {
        position: [-5, 2, 3],
        rotation: [Math.PI / 2, Math.PI / 2, Math.PI / 2]
      },
      {
        position: [3, 6.5, 3],
        rotation: [0, 0 , 0]
      },
      {
        position: [5, 12, -2],
        rotation: [-Math.PI / 2, Math.PI / 2, Math.PI / 2]
      }
    ],
    right: [
      {
        position: [-5, 2, -2],
        rotation: [-Math.PI / 2, Math.PI / 2, Math.PI / 2]
      },
      {
        position: [-1.5, 6.5, 3],
        rotation: [0, -Math.PI , 0]
      },
      {
        position: [5, 11, 2.5],
        rotation: [Math.PI / 2, Math.PI / 2, Math.PI / 2]
      }
    ]
};

export {arrowProps, smileProps, cameraPositions, cameraAngles};