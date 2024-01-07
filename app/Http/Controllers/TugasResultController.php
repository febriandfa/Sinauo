<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TugasResult;
use App\Models\User;
use App\Models\Tugas;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class TugasResultController extends Controller
{

    public function hasilTugas($id)
    {
        $tugas = TugasResult::where('tugas_id', $id)->with('tugas')->get();

        $namaTugas = $tugas->map(function ($tugas) {
            return $tugas->tugas->nama;
        });

        $namaUser = $tugas->map(function ($siswa) {
            return $siswa->user->name;
        });

        return Inertia::render('Guru/HasilTugasSiswaGuru', [
            'tugas' => $tugas,
            'namaTugas' => $namaTugas,
            'namaUser' => $namaUser,
        ]);
    }

    public function detailTugas()
    {
        $tugas = TugasResult::all();

        return Inertia::render('Guru/DetailHasilTugasSiswaGuru', [
            'tugas' =>  $tugas
        ]);
    }

    public function updateFeedback(Request $request)
    {
        $tugas = TugasResult::find($request->id)->get();

        $tugas->konfirmasi = $request->konfirmasi;
        $tugas->feedback = $request->feedback;

        $tugas->save();

        return redirect()->route('detail-tugas-siswa')->with('success', 'data berhasi dikirim');
    }


    // Untuk Siswa
    public function index_siswa()
    {
        $tugas = TugasResult::all();

        $namaTugas = $tugas->map(function ($tugas) {
            return $tugas->tugas->nama;
        });

        return Inertia::render('Siswa/TugasSiswa', [
            'tugas' => $tugas,
            'namaTugas' => $namaTugas,
        ]);
    }

    public function edit_answer($id)
    {
        $tugas = Tugas::where('id', $id)->first();

        return Inertia::render('Siswa/DetailTugasSiswa', [
            'tugas' => $tugas
        ]);
    }

    public function update_answer(Request $request)
    {
        $tugas = TugasResult::find($request->id);
        $tugas->user()->associate(Auth::user());
        $tugas->tugas = $request->tugas_id;
        $tugas->answer1 = $request->answer1;

        // Request column input type file
        if ($request->hasFile('answer2')) {
            $answer2 = $request->file('answer2');
            $extension = $answer2->getClientOriginalName();
            $answer2Name = date('YmdHis') . "." . $extension;
            $answer2->move(storage_path('app/public/tugas/answer2/'), $answer2Name);
            $tugas->answer2 = $answer2Name;
        }

        // Request column input type file
        if ($request->hasFile('answer3')) {
            $answer3 = $request->file('answer3');
            $extension = $answer3->getClientOriginalName();
            $answer3Name = date('YmdHis') . "." . $extension;
            $answer3->move(storage_path('app/public/tugas/answer3/'), $answer3Name);
            $tugas->answer3 = $answer3Name;
        }

        // Request column input type file
        if ($request->hasFile('answer4')) {
            $answer4 = $request->file('answer4');
            $extension = $answer4->getClientOriginalName();
            $answer4Name = date('YmdHis') . "." . $extension;
            $answer4->move(storage_path('app/public/tugas/answer4/'), $answer4Name);
            $tugas->answer4 = $answer4Name;
        }

        $tugas->konfirmasi = "Belum Diterima";

        $tugas->save();

        return redirect()->route('tugas')->with('success', 'Berhasil Mengirim Jawaban Tugas');
    }
}
