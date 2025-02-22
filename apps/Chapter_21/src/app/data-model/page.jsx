'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import {useEffect, useRef, useState} from "react";
import { Button, Flex, Heading, Input, Label, SwitchField, Tabs} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from "aws-amplify/api";
import {getUserCreatedModel, listUserCreatedModels} from "@/graphql/queries";
import {createUserCreatedModel, updateUserCreatedModel} from "@/graphql/mutations";
import { uploadData } from 'aws-amplify/storage';
import { Amplify } from "aws-amplify";
import config from "@/aws-exports";
Amplify.configure(config);
const client = generateClient()

const Box = ({ position, size, color, isVisible }) => {
    if(!isVisible) return '';
      return (
        <mesh position={position}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

function DataModel() {
    const [boxes, setBoxes] = useState([]);
    const ref = useRef();

    const getRandomNumberInRange = (min, max) =>{
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }

    const setUpdates = (index, propertyName, value) => {
        const newState = boxes;
        newState[index][propertyName] = value;
        console.log(newState);
        setBoxes([...newState]);
    };

    const addModel = () => {
        setBoxes((state) => [...state, {
            position:[getRandomNumberInRange(-4.5,4.5), 0.5, getRandomNumberInRange(-4.5,4.5)],
            size:[1, 1, 1],
            color:"#8ECAE6",
            isVisible: true,
            id: Date.now(),
            name: 'New box' + Date.now()
        }])
    };

    const saveData = () => {
        console.log(ref.current.toDataURL('image/png'));

        boxes.forEach(async (box) => {
            console.log(box);

            const checkItem = await client.graphql(
                {
                    query: getUserCreatedModel,
                    variables: {
                        id: box.id,
                    }
                }
            );
            console.log('checkItem', checkItem);
            let model = updateUserCreatedModel;
            let input = {
                id: box.id,
                name: box.name,
                isVisible: box.isVisible,
                color: box.color,
                _version: box._version // this is important field
            };
            if (checkItem?.data?.getUserCreatedModel === null) {
                model = createUserCreatedModel;
                input = {
                    name: box.name,
                    isVisible: box.isVisible,
                    color: box.color,
                    position: box.position,
                    size: box.size
                };
            }
            await client.graphql({
                query: model,
                variables: {
                    input: input
                }
            });
        });

        const saveFile = async (file, version) => {
            const fileName = `R3F-screenshot-${Date.now()}-${version}.png`;
            const byteCharacters = atob(file.split(',')[1]);

            // Convert the binary string to an array of bytes
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            // Convert the array of bytes to a Blob object
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'image/png' });

            try {
                const result = await uploadData({
                    key: fileName,
                    data: blob
                }).result;
                console.log('Succeeded: ', result);
            } catch (error) {
                console.log('Error : ', error);
            }
        }
        saveFile(ref.current.toDataURL('image/png'), boxes[0]._version);
    };

    useEffect(() => {
        const fetchData = async () => {
            const allUserCreatedModels = await client.graphql({
                query: listUserCreatedModels
            });
            if (allUserCreatedModels.data.listUserCreatedModels.items.length > 0) {
                setBoxes(allUserCreatedModels.data.listUserCreatedModels.items);
            }
        }
        fetchData();

        // setBoxes([
        //     {
        //         position:[0, 0.5, 4],
        //         size:[1, 1, 1],
        //         color:"#8ECAE6",
        //         isVisible: true,
        //         id: 'first',
        //         name: 'First box'
        //     },
        //     {
        //         position:[4, 0.5, 0],
        //         size:[1, 1, 1],
        //         color:"#8ECAE6",
        //         isVisible: true,
        //         id: 'second',
        //         name: 'Second box'
        //     },
        //     {
        //         position:[-4, 0.5, 0],
        //         size:[1, 1, 1],
        //         color:"#8ECAE6",
        //         isVisible: true,
        //         id: 'third',
        //         name: 'Third box'
        //     }
        // ]);
    }, []);

    return (
        <main className="w-full h-svh m-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_600px] gap-8 p-4 md:p-8">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <div className="aspect-[4/3] relative">
                        <div className="w-full h-full">
                            <Canvas
                                gl={{ preserveDrawingBuffer: true }}
                                ref={ref}
                                style={{
                                    height: '100vh',
                                }}
                            >
                                <ambientLight intensity={1}/>
                                <pointLight position={[10, 10, 10]}/>
                                <directionalLight
                                    castShadow={true}
                                    position={[5, 5, 5]}
                                    intensity={1}
                                    shadow-mapSize-width={1024}
                                    shadow-mapSize-height={1024}
                                    shadow-camera-far={50}
                                    shadow-camera-left={-10}
                                    shadow-camera-right={10}
                                    shadow-camera-top={10}
                                    shadow-camera-bottom={-10}
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
                                {
                                    boxes.length > 0 && boxes.map((box) =>
                                        <Box
                                            key={box.id}
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
                <div className="bg-white rounded-lg p-6 shadow-lg">
                    <Tabs.Container defaultValue="1">
                        <Tabs.List spacing="equal">
                            <Tabs.Item value="1">Scene</Tabs.Item>
                            <Tabs.Item value="2">Versions</Tabs.Item>
                            <Tabs.Item value="3">Collaboration</Tabs.Item>
                        </Tabs.List>
                        <Tabs.Panel value="1">
                            <Heading level={1}>Scene Properties</Heading>
                            <div className="grid gap-6">

                                {
                                    boxes.length > 0 && boxes.map((box, index) =>(
                                        <div key={`${box.id}-props`} className="border-2 rounded-lg p-2">
                                            <Heading level={5}>
                                                {box.name}
                                            </Heading>
                                            <div className="mt-2">
                                                <Flex direction="column" gap="small">
                                                    <Label htmlFor="first_name">Object Name:</Label>
                                                    <Input onChange={(e) => setUpdates(index, 'name', e.target.value)} value={box.name} id={`${box.id}-name`} name={`${box.id}-name`}/>
                                                </Flex>
                                            </div>
                                            <div className="mt-2">
                                                <Flex direction="column" gap="small">
                                                    <SwitchField
                                                        isDisabled={false}
                                                        label="Object visibility"
                                                        labelPosition="start"
                                                        isChecked={box.isVisible}
                                                        onChange={(e) => setUpdates(index, 'isVisible', e.target.checked)}
                                                    />
                                                </Flex>
                                            </div>
                                            <div className="mt-2">
                                                <Flex direction="column" gap="small">
                                                    <Label htmlFor="first_name">Object color:</Label>
                                                    <Input onChange={(e) => setUpdates(index, 'color', e.target.value)} height={50} type='color' value={box.color} id={`${box.id}-color`} name={`${box.id}-color`}/>
                                                </Flex>
                                            </div>
                                        </div>
                                    ))
                                }

                                <Button
                                    isFullWidth={true}
                                    loadingText=""
                                    onClick={() => addModel()}
                                >
                                    +
                                </Button>

                                <Button
                                    isFullWidth={true}
                                    loadingText="Updating"
                                    onClick={() => saveData()}
                                >
                                    Save changes
                                </Button>
                            </div>

                        </Tabs.Panel>
                        <Tabs.Panel value="2">Content of the second tab</Tabs.Panel>
                        <Tabs.Panel value="3">Content of the third tab</Tabs.Panel>
                    </Tabs.Container>

                </div>
            </div>
        </main>
    );
}

export default DataModel;