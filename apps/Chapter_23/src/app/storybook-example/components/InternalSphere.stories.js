import InternalSphere from './InternalSphere';

export default {
    title: '3D/InternalSphere',
    component: InternalSphere,
    parameters: {
        docs: {
            description: {
                component: "This is an internal Sphere component for the page "
            }
        }
    }
};

export const DefaultSphere = {
    args: {
        position: [0, 1, 0],
        color: 'blue',
        radius: 1.2,
        segments: { x: 10, y: 10 }
    },
};

export const RedLargeSphere = {
    args: {
        position: [0, 1, 0],
        color: 'red',
        radius: 3,
        segments: { x: 32, y: 32 }
    },
};
