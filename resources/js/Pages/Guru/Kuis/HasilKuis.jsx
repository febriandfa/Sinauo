import ActionButton from "@/Components/GeneralComponents/ActionButton";
import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function HasilKuis({ auth }) {
    const { soal } = usePage().props;

    const head_title = ["No", "Siswa", "Kuis", "Poin", "Aksi"];

    return (
        <MainGuruLayout>
            <Head title="Kuis" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-10">
                Hasil Kuis Pembelajaran
            </h1>
            <Table>
                <TableHead head={head_title} />
                <TableBody>
                    {soal.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableItem item={index + 1} />
                                <TableItem item={item.user.name} />
                                <TableItem item={item.soal[0].kategori.kuis} />
                                <TableItem item={item.total_points} />
                                <TableItem
                                    item={
                                        <div className="flex items-center gap-4">
                                            <Link
                                                href={route(
                                                    "show.hasil",
                                                    item.id
                                                )}
                                            >
                                                <button
                                                    className="flex items-center"
                                                    type="button"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                        />
                                                    </svg>
                                                </button>
                                            </Link>
                                            <ActionButton
                                                handleDelete={route(
                                                    "destroy.hasil",
                                                    item.id
                                                )}
                                                noEdit
                                            />
                                        </div>
                                    }
                                />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </MainGuruLayout>
    );
}