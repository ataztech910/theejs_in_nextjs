import BoxModel from './components/BoxModel';
import Actions from './components/Actions';
import { AppDataProvider } from './data–context';

export default function DataShare() {
    return (
        <main className="max-w-[1000px] m-auto">
            <AppDataProvider>
                <div className="flex">
                    <div><BoxModel /></div>
                    <div><Actions /></div>
                </div>
            </AppDataProvider>
        </main>
    )
}
