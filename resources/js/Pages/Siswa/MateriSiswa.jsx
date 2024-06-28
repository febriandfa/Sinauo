import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import ProgressBar from "@/Components/GeneralComponents/ProgressBar";
import { url } from "../../../assets/url";
import { useEffect } from "react";

export default function MateriSiswa({ auth }) {
    const { materi, submaterial, submateriSeens } = usePage().props;

    useEffect(() => {
        console.log(materi);
        console.log("seen", submateriSeens);
    }, []);

    return (
        <MainLayout>
            <Head title="Materi" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-10">
                Materi Pembelajaran
            </h1>
            <div className="grid grid-cols-3 justify-items-center gap-y-10">
                {materi.map((item, index) => {
                    const submateriIsSeen = submateriSeens.filter(
                        (seen) =>
                            seen.submateri.materi.id == item.id &&
                            seen.user_id == auth.user.id
                    );

                    return (
                        <div
                            key={index}
                            className="w-[19rem] h-full shadow-custom rounded-[1.25rem]"
                        >
                            <div className="h-full flex flex-col justify-between">
                                <img
                                    className="h-36 w-full object-cover object-center rounded-t-[1.25rem]"
                                    src={`${url}materi/cover/${item.cover}`}
                                    alt="image materi"
                                />
                                <div className="p-5">
                                    <div className="flex gap-1 items-center mb-4">
                                        <div className="bg-green-500 size-5 rounded-full"></div>
                                        <p className="font-medium">
                                            {item.jumlah}x Materi
                                        </p>
                                    </div>
                                    <h4 className="text-lg font-semibold line-clamp-2">
                                        {item.nama}
                                    </h4>
                                </div>
                                <div className="px-5 pb-5">
                                    <div className="mb-7">
                                        <ProgressBar
                                            progres={
                                                // item.submateri.filter(
                                                //     (statusItem) =>
                                                //         statusItem.status ===
                                                //         "Selesai"
                                                // )
                                                (item.submateri.length != 0
                                                    ? submateriIsSeen.length /
                                                      item.submateri.length
                                                    : 0) * 100
                                            }
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <Link
                                            href={route(
                                                "detail-materi",
                                                item.id
                                            )}
                                        >
                                            <button className="py-1 px-5 rounded-full bg-primary hover:bg-primary-dark text-sm text-white font-medium">
                                                Detail
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                {/* {materi.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="w-[19rem] h-full shadow-custom rounded-[1.25rem]"
                        >
                            <div className="h-full flex flex-col justify-between">
                                <img
                                    className="h-36 w-full object-cover object-center rounded-t-[1.25rem]"
                                    src={`${url}materi/cover/${item.cover}`}
                                    alt="image materi"
                                />
                                <div className="p-5">
                                    <div className="flex gap-1 items-center mb-4">
                                        <div className="bg-green-500 size-5 rounded-full"></div>
                                        <p className="font-medium">
                                            {item.jumlah}x Materi
                                        </p>
                                    </div>
                                    <h4 className="text-lg font-semibold line-clamp-2">
                                        {item.nama}
                                    </h4>
                                </div>
                                <div className="px-5 pb-5">
                                    <div className="mb-7">
                                        <ProgressBar
                                            progres={item.presentase}
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <Link
                                            href={route(
                                                "detail-materi",
                                                item.id
                                            )}
                                        >
                                            <button className="py-1 px-5 rounded-full bg-primary hover:bg-primary-dark text-sm text-white font-medium">
                                                Detail
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })} */}
            </div>
        </MainLayout>
    );
}
