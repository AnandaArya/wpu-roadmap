<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $students = Student::all();
        // return view('students/index', ['students' => $student]);
        return view('students/index', compact('students'));
    }

    /**
     * Show the form for creating a new resource. menampilkan form tambah data
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('students.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 419 adalah cara laravel mengamankan kita dari cross side resource forgery (atau pemalsuan pengirim resource dari situs lain ini teknik hacking)
        // $student = new Student;
        // // $student->yangAdaDidalamTabel = $request->dapat dari form;
        // $student->nama= $request->nama;
        // $student->nrp= $request->nrp;
        // $student->email= $request->email;
        // $student->jurusan= $request->jurusan;

        // $student->save();
        
        // cara ke 2 pakai method create kita harus menambahkan $fillable (Mass Assignment) di Model
        // Student::create([
        //     'nama' => $request->nama,
        //     'nrp' => $request->nrp,
        //     'email' => $request->email,
        //     'jurusan' => $request->jurusan
        // ]);

        $request->validate([
            'nama' => 'required',
            'nrp' => 'required|size:9'
        ]);

        // atau cara ke 3 all disini adalah yang hanya ada di $fillable di Model
        Student::create($request->all());
        return redirect('/students')->with('status', 'Data Mahasiswa Berhasil Ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        // sebelumnya kalau di CI parameternya ($id) baru kita SELECT * FROM WHERE ini tapi ini langsung
        return view('students/show', compact('student'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        return view('students/edit', compact('student'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        $request->validate([
            'nama' => 'required',
            'nrp' => 'required|size:9'
        ]);
        
        Student::where('id', $student->id)
                ->update([
                        'nama' => $request->nama,
                        'nrp' => $request->nrp,
                        'email' => $request->email,
                        'jurusan' => $request->jurusan
                    ]);
        return redirect('/students')->with('status', 'Data Mahasiswa Berhasil Diubah');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        // dilaravel ada caranya menghapus data tanpa menghilangkan data di Database (soft delete)
        Student::destroy($student->id);

        return redirect('/students')->with('status', 'Data Mahasiswa Berhasil Dihapus');

    }
}
