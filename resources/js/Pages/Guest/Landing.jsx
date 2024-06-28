import React from "react";
import { Link, Head } from "@inertiajs/react";
import {
    imageHero,
    imageKeunggulan,
    imageKonten1,
    imageKonten2,
    imageKonten3,
    logoSinauo,
} from "../../../assets";

export default function Landing({ auth }) {
    return (
        <>
            <Head title="Home" />
            {/* Header Start */}
            <header className="fixed top-0 left-0 right-0 z-[999999]">
                <nav className="flex justify-between items-center py-7 px-20 bg-white">
                    <Link href="/">
                        <img
                            className="w-52"
                            src={logoSinauo}
                            alt="Logo Sinauo"
                        />
                    </Link>
                    <div className="flex items-center gap-4 *:text-base *:font-semibold">
                        <ul className="flex justify-around w-72">
                            <li className="hover:text-primary">
                                <Link href="#beranda">Beranda</Link>
                            </li>
                            <li className="hover:text-primary">
                                <Link href="#fitur">Fitur</Link>
                            </li>
                            <li className="hover:text-primary">
                                <Link href="#tentang">Tentang</Link>
                            </li>
                        </ul>
                        {auth.user ? (
                            <Link href={route("login")}>
                                <button className="flex items-center gap-2 py-4 px-7 rounded-lg bg-primary hover:bg-primary-dark text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.26753 14.8364C5.96056 13.8795 7.9165 13.3333 10 13.3333C12.0835 13.3333 14.0394 13.8795 15.7325 14.8364M12.5 8.33333C12.5 9.71405 11.3807 10.8333 10 10.8333C8.61929 10.8333 7.5 9.71405 7.5 8.33333C7.5 6.95262 8.61929 5.83333 10 5.83333C11.3807 5.83333 12.5 6.95262 12.5 8.33333ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                            stroke="#F1F5F9"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <p className="w-36 break-words text-ellipsis whitespace-nowrap overflow-hidden">
                                        {auth.user.name}
                                    </p>
                                </button>
                            </Link>
                        ) : (
                            <Link href={route("login")}>
                                <button className="py-4 px-9 rounded-lg bg-primary hover:bg-primary-dark text-white">
                                    Masuk
                                </button>
                            </Link>
                        )}
                    </div>
                </nav>
            </header>
            {/* Header End */}

            {/* Main Start */}
            <main className="px-20">
                {/* Beranda Start */}
                <div
                    id="beranda"
                    className="grid grid-cols-5 gap-x-16 h-screen items-center pt-20"
                >
                    <div className="col-span-3">
                        <h1 className="text-[4.3rem] font-bold leading-tight mb-6">
                            Platform{" "}
                            <span className="text-primary">Belajar</span> Masa
                            Kini!
                        </h1>
                        <p className="text-xl font-light mb-6">
                            SinauO! adalah inovasi pembelajaran berplatform
                            website yang siap memberikan konten pembelajaran
                            desain website dan memimpin pendidikan.
                        </p>
                        <Link href={auth.user ? "/dashboard" : "/login"}>
                            <button className="py-4 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg">
                                Belajar Sekarang
                            </button>
                        </Link>
                    </div>
                    <div className="col-span-2">
                        <img src={imageHero} alt="" />
                    </div>
                </div>
                {/* Beranda End */}
                {/* Fitur Start */}
                <div id="fitur" className="h-screen">
                    <div className="absolute left-0 right-0 h-[65%] bg-primary"></div>
                    <div className="relative pt-20 grid grid-cols-2 gap-x-24">
                        <div className="grid grid-cols-2 gap-x-5 gap-y-10 pt-10">
                            <div className="p-10 h-48 rounded-[1.25rem] bg-[#6ED7F5] flex flex-col justify-between">
                                <div className="size-16 flex items-center justify-center rounded-full bg-white mx-auto">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="43"
                                        height="43"
                                        viewBox="0 0 43 43"
                                        fill="none"
                                    >
                                        <path
                                            d="M32.3385 11.314C31.2675 11.314 30.2843 10.6995 29.7927 9.75141L28.5285 7.20557C27.7209 5.60783 25.614 4.29102 23.8231 4.29102H19.8024C17.994 4.29102 15.8871 5.60783 15.0795 7.20557L13.8153 9.75141C13.3237 10.6995 12.3405 11.314 11.2695 11.314C7.45949 11.314 4.43959 14.5271 4.6854 18.3195L5.59839 32.822C5.80908 36.4389 7.75797 39.4061 12.6038 39.4061H31.0041C35.85 39.4061 37.7814 36.4389 38.0096 32.822L38.9226 18.3195C39.1684 14.5271 36.1485 11.314 32.3385 11.314ZM19.1704 13.5087H24.4376C25.1575 13.5087 25.7544 14.1057 25.7544 14.8255C25.7544 15.5454 25.1575 16.1424 24.4376 16.1424H19.1704C18.4505 16.1424 17.8535 15.5454 17.8535 14.8255C17.8535 14.1057 18.4505 13.5087 19.1704 13.5087ZM21.804 32.5938C18.5383 32.5938 15.8695 29.9426 15.8695 26.6593C15.8695 23.3761 18.5207 20.7249 21.804 20.7249C25.0873 20.7249 27.7384 23.3761 27.7384 26.6593C27.7384 29.9426 25.0697 32.5938 21.804 32.5938Z"
                                            fill="#61D2F0"
                                        />
                                    </svg>
                                </div>
                                <p className="font-bold text-xl text-white text-center">
                                    Contoh Proyek
                                </p>
                            </div>
                            <div className="p-10 h-48 rounded-[1.25rem] bg-[#AB99FB] flex flex-col justify-between">
                                <div className="size-16 flex items-center justify-center rounded-full bg-white mx-auto">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="43"
                                        height="43"
                                        viewBox="0 0 43 43"
                                        fill="none"
                                    >
                                        <path
                                            d="M28.8804 4.23834H14.8343C7.81131 4.23834 4.2998 7.74985 4.2998 14.7729V23.5516C4.2998 32.3304 7.81131 34.0862 14.8343 34.0862H15.7122C16.2038 34.0862 16.8359 34.4022 17.1168 34.7885L19.7504 38.3C20.9092 39.845 22.8054 39.845 23.9642 38.3L26.5979 34.7885C26.9315 34.3495 27.4582 34.0862 28.0025 34.0862H28.8804C35.9034 34.0862 39.4149 30.5746 39.4149 23.5516V14.7729C39.4149 7.74985 35.9034 4.23834 28.8804 4.23834ZM15.7649 22.147C16.274 22.6562 16.274 23.499 15.7649 24.0081C15.5015 24.2715 15.1679 24.3944 14.8343 24.3944C14.5007 24.3944 14.1671 24.2715 13.9038 24.0081L10.3923 20.4966C9.8831 19.9874 9.8831 19.1447 10.3923 18.6355L13.9038 15.124C14.4129 14.6148 15.2557 14.6148 15.7649 15.124C16.274 15.6332 16.274 16.4759 15.7649 16.9851L13.1839 19.5661L15.7649 22.147ZM24.8246 15.9843L21.3131 24.1837C21.1024 24.6753 20.6108 24.9738 20.1016 24.9738C19.926 24.9738 19.7504 24.9387 19.5749 24.8684C18.9077 24.5875 18.5916 23.815 18.8901 23.1302L22.4016 14.9309C22.6825 14.2637 23.4551 13.9477 24.1398 14.2461C24.807 14.5446 25.1055 15.3171 24.8246 15.9843ZM33.3224 20.4966L29.8109 24.0081C29.5475 24.2715 29.2139 24.3944 28.8804 24.3944C28.5468 24.3944 28.2132 24.2715 27.9498 24.0081C27.4406 23.499 27.4406 22.6562 27.9498 22.147L30.5308 19.5661L27.9498 16.9851C27.4406 16.4759 27.4406 15.6332 27.9498 15.124C28.459 14.6148 29.3017 14.6148 29.8109 15.124L33.3224 18.6355C33.8316 19.1447 33.8316 19.9874 33.3224 20.4966Z"
                                            fill="#AB99FB"
                                        />
                                    </svg>
                                </div>
                                <p className="font-bold text-xl text-white text-center">
                                    Konten Belajar
                                </p>
                            </div>
                            <div className="p-10 h-48 rounded-[1.25rem] bg-[#FFA43A] flex flex-col justify-between">
                                <div className="size-16 flex items-center justify-center rounded-full bg-white mx-auto">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="43"
                                        height="44"
                                        viewBox="0 0 43 44"
                                        fill="none"
                                    >
                                        <path
                                            d="M38.7822 13.0778C37.6585 9.26777 34.4806 6.08986 30.6706 4.96617C27.7736 4.12341 25.7721 4.19364 24.385 5.22954C22.7171 6.47612 22.5239 8.72349 22.5239 10.3212V14.693C22.5239 19.0122 24.4904 21.2069 28.353 21.2069H33.392C34.9722 21.2069 37.2371 21.0138 38.4837 19.3458C39.5547 17.9763 39.6425 15.9747 38.7822 13.0778Z"
                                            fill="#FFA43A"
                                        />
                                        <path
                                            d="M33.9363 24.3321C33.4798 23.8054 32.8126 23.5069 32.1279 23.5069H25.8423C22.7522 23.5069 20.2414 20.9962 20.2414 17.9061V11.6205C20.2414 10.9357 19.9429 10.2685 19.4162 9.81205C18.9071 9.35556 18.2048 9.14487 17.5376 9.23266C13.4115 9.75938 9.61912 12.0243 7.14351 15.4305C4.65034 18.8542 3.73734 23.0329 4.52743 27.2116C5.66867 33.2514 10.497 38.0797 16.5543 39.2209C17.52 39.4141 18.4857 39.5018 19.4513 39.5018C22.6292 39.5018 25.7018 38.5186 28.3179 36.6049C31.7241 34.1292 33.989 30.3368 34.5157 26.2108C34.6035 25.526 34.3928 24.8413 33.9363 24.3321Z"
                                            fill="#FFA43A"
                                        />
                                    </svg>
                                </div>
                                <p className="font-bold text-xl text-white text-center">
                                    Quiz & Tugas
                                </p>
                            </div>
                            <div className="p-10 h-48 rounded-[1.25rem] bg-[#3949AB] flex flex-col justify-between">
                                <div className="size-16 flex items-center justify-center rounded-full bg-white mx-auto">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="43"
                                        height="44"
                                        viewBox="0 0 43 44"
                                        fill="none"
                                    >
                                        <path
                                            d="M17.2519 35.1125V32.4788H8.47318C7.50751 32.4788 6.62964 32.0926 5.99756 31.4429C5.34794 30.8109 4.96167 29.933 4.96167 28.9673C4.96167 27.1589 6.36627 25.649 8.13958 25.4734C8.24493 25.4558 8.35027 25.4558 8.47318 25.4558H34.8095C34.9324 25.4558 35.0377 25.4558 35.1431 25.4734C35.9858 25.5436 36.7233 25.9123 37.2851 26.4917C38.005 27.194 38.3912 28.1948 38.3034 29.2834C38.1454 31.1269 36.4774 32.4788 34.6163 32.4788H26.0307V35.1125C26.0307 37.5354 24.0643 39.5019 21.6413 39.5019C19.2184 39.5019 17.2519 37.5354 17.2519 35.1125Z"
                                            fill="#3949AB"
                                        />
                                        <path
                                            d="M30.7537 4.38678H23.8361C23.3444 4.38678 22.9582 4.77305 22.9582 5.26466V7.89829C22.9582 8.61815 22.3612 9.2151 21.6414 9.2151C21.4834 9.2151 21.3429 9.17999 21.2024 9.12731C20.6933 8.95174 20.3246 8.46013 20.3246 7.89829V5.26466C20.3246 4.77305 19.9383 4.38678 19.4467 4.38678H16.7955C16.3039 4.38678 15.9176 4.77305 15.9176 5.26466V13.1655C15.9176 13.8854 15.3207 14.4824 14.6008 14.4824C13.8809 14.4824 13.284 13.8854 13.284 13.1655V9.2151V5.26466C13.284 4.7906 12.9328 4.42189 12.4588 4.38678H12.4061C9.35109 4.45701 6.98083 7.1082 7.29686 10.1808L7.94649 22.0321C7.99916 22.9627 8.77169 23.7001 9.70224 23.7001H33.5805C34.511 23.7001 35.2836 22.9627 35.3362 22.0321L35.9859 10.1808C36.3019 7.07308 33.8614 4.38678 30.7537 4.38678Z"
                                            fill="#3949AB"
                                        />
                                    </svg>
                                </div>
                                <p className="font-bold text-xl text-white text-center">
                                    Hasil Belajar
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-5xl text-right mb-4">
                                Fitur{" "}
                                <span className="text-white">Populer</span>
                            </h1>
                            <p className="text-xl font-normal text-white text-justify">
                                SinauO! merupakan platform pembelajaran terbaik
                                ,dengan menghadirkan pengalaman belajar yang
                                baik bagi Anda, SinauO! juga menyediakan banyak
                                konten belajar yang terstruktur untuk mendukung
                                desain website anda.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Fitur End */}
                {/* Tentang Start */}
                <div id="tentang" className="h-screen">
                    <h1 className="font-bold text-5xl text-center mb-4">
                        Temukan{" "}
                        <span className="text-primary">Konten Belajar</span>{" "}
                        Terbaik
                    </h1>
                    <p className="text-xl font-light w-[70%] text-center mx-auto">
                        Menjelajahi ilmu tanpa batas: temukan konten belajar
                        terbaik untuk mengasah kemampuanmu di bidang desain
                        website.
                    </p>
                    <div className="flex justify-between mt-20 gap-20">
                        <div className="w-96 shadow-custom rounded-[1.25rem]">
                            <img
                                className="h-48 w-full object-cover object-center rounded-t-[1.25rem]"
                                src={imageKonten1}
                                alt=""
                            />
                            <div className="p-5">
                                <h4 className="text-center text-xl font-bold mb-3">
                                    Modul dan Materi Ajar
                                </h4>
                                <p className="text-justify">
                                    Rangkaian materi yang dirancang secara
                                    sistematis untuk memandu proses belajar
                                </p>
                            </div>
                        </div>
                        <div className="w-96 shadow-custom rounded-[1.25rem]">
                            <img
                                className="h-48 w-full object-cover object-center rounded-t-[1.25rem]"
                                src={imageKonten2}
                                alt=""
                            />
                            <div className="p-5">
                                <h4 className="text-center text-xl font-bold mb-3">
                                    Video dan Tutorial Praktik
                                </h4>
                                <p className="text-justify">
                                    Memberikan panduan dan langkah-langkah
                                    pembelajaran melalui media visual
                                </p>
                            </div>
                        </div>
                        <div className="w-96 shadow-custom rounded-[1.25rem]">
                            <img
                                className="h-48 w-full object-cover object-center rounded-t-[1.25rem]"
                                src={imageKonten3}
                                alt=""
                            />
                            <div className="p-5">
                                <h4 className="text-center text-xl font-bold mb-3">
                                    Referensi Proyek
                                </h4>
                                <p className="text-justify">
                                    Dasar informasi, mengembangkan, atau
                                    melaksanakan suatu proyek. amet consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tentang End */}
                {/* Keunggulan Start */}
                <div className="grid grid-cols-7 gap-x-20 mt-10 mb-20">
                    <img className="col-span-3" src={imageKeunggulan} alt="" />
                    <div className="col-span-4">
                        <h1 className="font-bold text-5xl text-left mb-4 leading-normal">
                            Capai Tujuan Belajar Dengan{" "}
                            <span className="text-primary">SinauO!</span>
                        </h1>
                        <p className="text-lg font-normal">
                            SinauO! merupakan platform pembelajaran terbaik ,
                            dengan menghadirkan pengalaman belajar yang baik
                            bagi Anda, SinauO! juga menyediakan banyak konten
                            belajar dengan berbagai keunggulan.
                        </p>
                        <ul>
                            <li className="flex items-center gap-3 mt-8">
                                <div>
                                    <div className="size-10 rounded-full flex items-center justify-center bg-[#AB99FB]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M10.4303 21H4.62021C4.36339 21 4.11708 20.8946 3.93548 20.7071C3.75388 20.5196 3.65186 20.2652 3.65186 20V7L7.52527 3H16.2405C16.4973 3 16.7436 3.10536 16.9252 3.29289C17.1068 3.48043 17.2088 3.73478 17.2088 4V10"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7.52539 9H13.3355M17.2089 14L16.0082 16.3L13.3355 16.67L15.2722 18.47L14.8171 21L17.2089 19.8L19.6008 21L19.1456 18.47L21.0824 16.67L18.4097 16.3L17.2089 14ZM7.52539 13H13.3355H7.52539Z"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p>
                                    Menyediakan konten pembelajaran yang
                                    berkualitas tinggi, termasuk tutorial, studi
                                    kasus, dan sumber daya pendukung lainnya.
                                </p>
                            </li>
                            <li className="flex items-center gap-3 mt-3">
                                <div>
                                    <div className="size-10 rounded-full flex items-center justify-center bg-[#EC407A]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.8999 13C16.7191 13.8849 16.3019 14.7043 15.6927 15.3711C15.0835 16.0379 14.305 16.5273 13.44 16.7872C12.575 17.0471 11.6558 17.0679 10.7799 16.8472C9.90408 16.6266 9.10435 16.1729 8.46569 15.5342C7.82702 14.8956 7.37328 14.0958 7.15267 13.22C6.93205 12.3441 6.9528 11.4249 7.21271 10.5599C7.47262 9.69488 7.96198 8.91644 8.62881 8.30724C9.29564 7.69804 10.115 7.28085 10.9999 7.09998"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.33 3H12C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 11.89 21 11.78 21 11.67M15 9L12.5 11.5L15 9ZM15 6V9H18L21 6H18V3L15 6Z"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p>Mendorong pemahaman yang lebih mendalam</p>
                            </li>
                            <li className="flex items-center gap-3 mt-3">
                                <div>
                                    <div className="size-10 rounded-full flex items-center justify-center bg-[#303F9F]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M17 8C17 8.98891 16.7068 9.95561 16.1573 10.7779C15.6079 11.6001 14.827 12.241 13.9134 12.6194C12.9998 12.9978 11.9945 13.0969 11.0245 12.9039C10.0546 12.711 9.16373 12.2348 8.46447 11.5355C7.7652 10.8363 7.289 9.94536 7.09607 8.97545C6.90315 8.00555 7.00216 7.00021 7.3806 6.08658C7.75904 5.17295 8.3999 4.39206 9.22215 3.84265C10.0444 3.29324 11.0111 3 12 3C13.3261 3 14.5979 3.52678 15.5355 4.46447C16.4732 5.40215 17 6.67392 17 8ZM13 13H11C9.14348 13 7.36301 13.7375 6.05025 15.0503C4.7375 16.363 4 18.1435 4 20V20C4 20.2652 4.10536 20.5196 4.29289 20.7071C4.48043 20.8946 4.73478 21 5 21H19C19.2652 21 19.5196 20.8946 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20C20 18.1435 19.2625 16.363 17.9497 15.0503C16.637 13.7375 14.8565 13 13 13V13Z"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p>
                                    Memberikan akses fleksibel sehingga pengguna
                                    dapat belajar kapan saja dan di mana saja
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Keunggulan End */}
            </main>
            {/* Main End */}
            {/* Footer Start */}
            <footer className="w-full h-20 bg-primary flex items-center justify-center">
                <p className="text-white font-medium">
                    Copyright @2023, Rara Kirana, All Rights Reserved
                </p>
            </footer>
            {/* Footer End */}
        </>
    );
}
