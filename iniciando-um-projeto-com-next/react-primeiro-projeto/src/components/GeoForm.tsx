
import { Circle } from "./circle";
import { Square } from "./square";
import { Person } from "./Person";

export const GeoForm = () => {
    return (
    <div>
        <h3 className="text-2xl font-bold">Formas Geométricas</h3>
        <div className="flex gap-2 border-2 p-3 w-max content-normal">
            <Square/>
            <Circle/>
        </div>
    </div>
    )
}