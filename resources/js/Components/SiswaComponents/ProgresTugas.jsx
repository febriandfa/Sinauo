import { Link } from "@inertiajs/react";
import ProgressBar from "../GeneralComponents/ProgressBar";

export default function ProgresTugas() {
    return (
        <div className="p-4 rounded-md h-36 w-full bg-white">
            <h4 className="text-lg font-medium mb-2">Progres Tugas</h4>
            <div className="border-y-2 py-3 px-2 flex items-center">
                <div className="w-10 h-8 bg-green-500 rounded mr-8"></div>
                <div className="w-3/12">
                    <h4 className="font-semibold break-words text-ellipsis whitespace-nowrap overflow-hidden">
                        Tugas Proyek 1
                    </h4>
                    <p className="text-[#9E9E9E] text-xs">Tenggat 27/11/2024</p>
                </div>
                <div className="w-48 mx-auto">
                    <ProgressBar progres="75" />
                </div>
                <Link href="">
                    <button className="font-bold text-white bg-primary rounded-xl px-6 py-1.5">
                        Detail
                    </button>
                </Link>
            </div>
        </div>
    );
}
