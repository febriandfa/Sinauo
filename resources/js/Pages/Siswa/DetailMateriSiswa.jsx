import BackButton from "@/Components/GeneralComponents/BackButton";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import MainLayout from "@/Layouts/MainLayout";
import MateriBanner from "@/Components/SiswaComponents/MateriBanner";
import { Head, Link, usePage } from "@inertiajs/react";
import CardSubmateri from "@/Components/SiswaComponents/CardSubmateri";
import ProgressBar from "@/Components/GeneralComponents/ProgressBar";
import { url } from "../../../assets/url";
import { useEffect } from "react";

export default function DetailMateriSiswa({ auth }) {
    const { submateri, submateriSeens, materi } = usePage().props;
    const statusSelesai = submateri.filter((item) => item.status === "Selesai");

    const submateriIsSeen = submateriSeens.filter(
        (item) =>
            item.submateri.materi.id == materi.id &&
            item.user_id == auth.user.id
    );

    return (
        <MainLayout>
            <Head title="Materi" />
            <div className="flex justify-between items-center mb-10">
                <BackButton />
                <ProfileInfo name={auth.user.name} />
            </div>
            <div className="mb-8">
                <MateriBanner
                    judul={materi.nama}
                    deskripsi={materi.deskripsi}
                />
            </div>
            <div className="w-1/3 flex items-center justify-between mb-9">
                <div className="size-10 bg-primary rounded-[0.625rem]"></div>
                <div className="w-[85%]">
                    <ProgressBar
                        progres={
                            (submateri.length != 0
                                ? submateriIsSeen.length / submateri.length
                                : 0) * 100
                        }
                    />
                    <p>
                        {submateriIsSeen.length}/{submateri.length} Materi
                    </p>
                </div>
            </div>
            <div className="w-4/5">
                {submateri.map((item, index) => {
                    return (
                        <div key={index} className="mb-6">
                            <CardSubmateri
                                cover={`${url}subMateri/cover/${item.cover}`}
                                judul={item.nama}
                                deskripsi={item.deskripsi}
                                link={route("lihat-materi", item.id)}
                                download={route("submateri.file", item.id)}
                            />
                        </div>
                    );
                })}
            </div>
        </MainLayout>
    );
}
