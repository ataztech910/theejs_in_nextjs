'use client';

import { AppDataContext } from '@/app/data-share/data–context';
import { useContext } from 'react';

export default function Actions() {
    const { state, actions } = useContext(AppDataContext);
    const changeColor = () => {
        if (state.appData.color === 'orange') {
            actions.setAppData({color: 'blue'});
        } else  {
            actions.setAppData({color: 'orange'});
        }
    };

    return (
        <section>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
             onClick={changeColor}>change color</button>
        </section>
    )
}
