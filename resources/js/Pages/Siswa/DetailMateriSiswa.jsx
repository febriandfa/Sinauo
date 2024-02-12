import BackButton from "@/Components/GeneralComponents/BackButton";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import MainLayout from "@/Layouts/MainLayout";
import MateriBanner from "@/Components/SiswaComponents/MateriBanner";
import { Head, Link, usePage } from "@inertiajs/react";
import CardSubmateri from "@/Components/SiswaComponents/CardSubmateri";
import ProgressBar from "@/Components/GeneralComponents/ProgressBar";
import { url } from "../../../assets/url";

export default function DetailMateriSiswa({ auth }) {
    const { submateri, materi } = usePage().props;
    const statusSelesai = submateri.filter((item) => item.status === "Selesai");

    return (
        <MainLayout>
            <Head title="Materi" />
            <div className="flex justify-between items-center mb-10">
                <BackButton />
                <ProfileInfo name={auth.user.name} />
            </div>
            <div className="mb-8">
                <MateriBanner
                    judul={materi[0].nama}
                    deskripsi={materi[0].deskripsi}
                />
            </div>
            <div className="w-1/3 flex items-center justify-between mb-9">
                <div className="size-10 bg-primary rounded-[0.625rem]"></div>
                <div className="w-[85%]">
                    <ProgressBar
                        progres={
                            (statusSelesai.length / submateri.length) * 100
                        }
                    />
                    <p>
                        {statusSelesai.length}/{submateri.length} Materi
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