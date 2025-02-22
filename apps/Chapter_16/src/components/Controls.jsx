import { useContext, useState, useEffect } from 'react';
import { AppDataContext } from '../app/boxes/data-provider';
export default function Controls() {
  const { state, actions } = useContext(AppDataContext);
  const [rangeValue, setRangeValue] = useState(0.5);

  const setFloor = (floor) => {
    actions.setAppData({...state.appData, ...{floor}});
  }
  const setRange = (value) => {
    setRangeValue(value);
  }

  useEffect(() => {
    actions.setAppData({...state.appData, ...{smileScale: rangeValue}});
  }, [rangeValue]);

  return (
    <div>
    Current floor: {state.appData.floor}
    <ul>
        <li className="mb-2">
          <button onClick={() => setFloor(1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Floor 1
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => setFloor(2)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Floor 2
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => setFloor(3)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Floor 3
          </button>
        </li>
    </ul>
    <div className="mt-4">
      Smile object manipulation:
      <ul className="mt-4">
        <li>
          <label htmlFor="scale" className="block mb-2 text-sm font-medium text-gray-900">Smile scale</label>
          <input id="scale"
                value={rangeValue} 
                onChange={(event) => setRange(event.target.value)}
                step="0.1" 
                min="0.5" 
                max="2" 
                type="range" 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer "
          />
        </li>
      </ul>
    </div>
    </div>
  )
}


