import InternalBox from './InternalBox';

export default {
  title: '3D/Box',
  component: InternalBox,
  parameters: {
    docs: {
      description: {
        component: "This is an internal Box component for the page "
      }
    }
  },
  tags: ['!autodocs'],
};

export const DefaultBox = {
  args: {},
};

export const RedLargeBox = {
  args: {
    color: "red",
  }
};

export const FastRotatingBox = {
  args: {
    rotationSpeed: { x: 0.1, y:0.1, z: 0.1 }
  }
};

export const ConfigurableBox = {
  args: {
    color: "green",
    position: [0, 0, 0],
    size: [2, 2, 2],
    rotationSpeed: { x: 0, y:0, z: 0 }
  }
};