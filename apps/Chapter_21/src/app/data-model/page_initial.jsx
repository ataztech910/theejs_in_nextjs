'use client'; // Required for Next.js to indicate that this is a client-side component
// Importing Canvas for rendering 3D scenes
import { Canvas } from '@react-three/fiber'; 
// Importing OrbitControls for interactive control over the camera
import { OrbitControls } from "@react-three/drei"; 
// Importing React hooks for managing state and lifecycle
import { useEffect, useState } from "react"; 
// Importing UI components from AWS Amplify
import { Button, Flex, Heading, Input, Label, SwitchField, Tabs} from "@aws-amplify/ui-react"; 
 // Importing styles for AWS Amplify UI components
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import config from "@/aws-exports";
Amplify.configure(config);

// Box component to render a 3D box in the scene
const Box = ({ position, size, color, isVisible }) => {
    if (!isVisible) return ''; // If the box is not visible, return an empty string
    return (
    <mesh position={position}> // Mesh representing the box
     <boxGeometry args={size} /> // Geometry of the box with specified size
     <meshStandardMaterial color={color} /> // Material of the box with specified color
    </mesh>
    );
};

function DataModel() {
    const [boxes, setBoxes] = useState([]); // State to hold the array of boxes

    // Function to generate a random number within a specified range
    const getRandomNumberInRange = (min, max) => {
      // Inclusive of both min and max
      return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    // Function to update the properties of a specific box
    const setUpdates = (index, propertyName, value) => {
        const newState = boxes; // Copy of the current state
        newState[index][propertyName] = value; // Update the specified property
        console.log(newState); // Log the updated state
        setBoxes([...newState]); // Update the state with the new values
    };

    // Function to add a new box with a random position
    const addModel = () => {
        setBoxes((state) => [...state, {
            position: [
                  getRandomNumberInRange(-4.5, 4.5), 
                  0.5, 
                  getRandomNumberInRange(-4.5, 4.5)], // Random position
            size: [1, 1, 1], // Default size
            color: "#8ECAE6", // Default color
            isVisible: true, // Default visibility
            id: Date.now(), // Unique ID
            name: 'New box' + Date.now() // Default name
        }])
    };

    // useEffect hook to initialize the box state with default values when the component mounts
    useEffect(() => {
        setBoxes([
            {
                position: [0, 0.5, 4],
                size: [1, 1, 1],
                color: "#8ECAE6",
                isVisible: true,
                id: 'first',
                name: 'First box'
            },
            {
                position: [4, 0.5, 0],
                size: [1, 1, 1],
                color: "#8ECAE6",
                isVisible: true,
                id: 'second',
                name: 'Second box'
            },
            {
                position: [-4, 0.5, 0],
                size: [1, 1, 1],
                color: "#8ECAE6",
                isVisible: true,
                id: 'third',
                name: 'Third box'
            }
        ]);
    }, []);

    return (
        <main className="w-full h-svh m-auto">
           <div className="grid grid-cols-1 md:grid-cols-[1fr_600px] gap-8 p-4 md:p-8">
                {/* 3D canvas area */}
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <div className="aspect-[4/3] relative">
                        <div className="w-full h-full">
                            <Canvas
                                style={{
                                    height: '100vh',
                                }}
                            >
                                // Ambient light for general illumination
                                <ambientLight intensity={1}/> 
                         // Point light source
                         <pointLight position={[10, 10, 10]}/> 
                          <directionalLight
                                    castShadow={true} // Enable casting shadows
                                    position={[5, 5, 5]} // Position of the light
                                    intensity={1} // Intensity of the light
                        shadow-mapSize-width={1024} // Shadow map width
                        shadow-mapSize-height={1024} // Shadow map height
                        shadow-camera-far={50} // Shadow camera far plane
                        shadow-camera-left={-10} // Shadow camera left plane
                        shadow-camera-right={10} // Shadow camera right plane
                        shadow-camera-top={10} // Shadow camera top plane
                        shadow-camera-bottom={-10} // Shadow camera bottom plane
                                />
                     {/* Floor */}
                     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                                    <planeGeometry args={[10, 10]}/>
                                    <meshStandardMaterial color="#FFDDD2"/>
                     </mesh>
                     {/* Wall 1 */}
                                <mesh position={[0, 2, -5]}>
                                    <boxGeometry args={[10, 4, 0.2]}/>
                                    <meshStandardMaterial color="#83C5BE"/>
                                </mesh>
                    {/* Wall 2 */}
                     <mesh position={[5, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
                            <boxGeometry args={[10, 4, 0.2]}/>
                            <meshStandardMaterial color="#83C5BE"/>
                     </mesh>
                                {/* Render boxes from state */}
                                {
                                    boxes.length > 0 && boxes.map((box) =>
                                      <Box
                                         key={box.id} // Unique key for each box
                                            position={box.position}
                                            size={box.size}
                                            color={box.color}
                                            isVisible={box.isVisible} />
                                    )
                                }
                             <OrbitControls/>
                            </Canvas>
                        </div>
                    </div>
                </div>

                {/* Control panel */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                    <Tabs.Container defaultValue="1">
                        <Tabs.List spacing="equal">
                            <Tabs.Item value="1">Scene</Tabs.Item>
                            <Tabs.Item value="2">Versions</Tabs.Item>
                            <Tabs.Item value="3">Collaboration</Tabs.Item>
                        </Tabs.List>

                        {/* Scene Properties Panel */}
                        <Tabs.Panel value="1">
                            <Heading level={1}>Scene Properties</Heading>
                            <div className="grid gap-6">

                                {/* Form to edit properties of each box */}
                                {
                                  boxes.length > 0 && boxes.map((box, index) =>(
               <div key={`${box.id}-props`} className="border-2 rounded-lg p-2">
                                            <Heading level={5}>
                                                {box.name}
                                            </Heading>
                                            <div className="mt-2">
                                           <Flex direction="column" gap="small">
                                <Label htmlFor="first_name">Object Name:</Label>
                                <Input onChange={(e) => 
                                     setUpdates(index, 'name', e.target.value)} 
                                     value={box.name} 
                                     id={`${box.id}-name`} 
                                     name={`${box.id}-name`} />
                                            </Flex>
                                            </div>
                                          <div className="mt-2">
                                           <Flex direction="column" gap="small">
                                                    <SwitchField
                                                       isDisabled={false}
                                                       label="Object visibility"
                                                       labelPosition="start"
                                                       isChecked={box.isVisible}
                                             onChange={(e) => setUpdates(index, 
                                                 'isVisible', 
                                                  e.target.checked)}
                                             />
                                                </Flex>
                                            </div>
                                          <div className="mt-2">
                                           <Flex direction="column" gap="small">
                                                 <Label htmlFor="first_name">
                                                    Object color:
                                                 </Label>
                             <Input onChange={(e) => setUpdates(index, 'color',                                                                                 e.target.value)} 
                                    height={50} 
                                    type='color' 
                                    value={box.color} 
                                    id={`${box.id}-color`} 
                                    name={`${box.id}-color`} />
                                                </Flex>
                                            </div>
                                        </div>
                                    ))
                                }

                                {/* Button to add a new box */}
                                <Button
                                    isFullWidth={true}
                                    loadingText=""
                                    onClick={() => addModel()}
                                >
                                    +
                                </Button>

                                {/* Button to save changes */}
                                <Button
                                    isFullWidth={true}
                                    loadingText=""
                                    onClick={() => alert('hello')}
                                >
                                    Save changes
                                </Button>
                            </div>
                        </Tabs.Panel>

                        {/* Placeholder content for other tabs */}
                        <Tabs.Panel value="2">Content of the second tab</Tabs.Panel>
                        <Tabs.Panel value="3">Content of the third tab</Tabs.Panel>
                    </Tabs.Container>
                </div>
            </div>
        </main>
    );
}

export default DataModel; 
