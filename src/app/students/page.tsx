"use client";
import React, { useContext, useEffect, useState } from "react";
import { SlTrash } from "react-icons/sl";
import { GoPencil } from "react-icons/go";
import StudentsTop from "../components/studentsPage/StudentsTop";
import ListTop from "../components/studentsPage/ListTop";
import ListBottom from "../components/studentsPage/ListBottom";
import AddUpdateStudent from "../components/studentsPage/AddUpdateStudent";
import { StudentsContext } from "../contexts/studentsContext";
import { useRouter } from 'next/navigation';

const StudentList = () => {
  const context = useContext(StudentsContext);

  if (!context) {
    // Context henüz yüklenmediyse veya hatalıysa burada hata kontrolü yapabilirsiniz
    return null;
  }

  const { students, currentPage, setCurrentPage } = context;
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const [search, setSearch] = useState('');


  const indexOfLastStudent = currentPage * rowsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - rowsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleEditStudent = (student: any) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleAddStudent = () => {
    setSelectedStudent(null);
    setIsModalOpen(true);
  };

  const handleSaveStudent = (data: any) => {
    // Save logic here
    console.log(data);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="p-7">
      <StudentsTop onAddStudent={handleOpenModal} />
      <div className="mb-4 border-t border-neutral-200"></div>

      <div className="overflow-hidden rounded-lg">
        <ListTop />
        {currentStudents.map((student: any) => (
          <div
            key={student.id}
            className="mb-4 flex items-center rounded-lg bg-white px-6 py-4 shadow"
          >
            <div className="w-1/6">
              <img
                className="h-12 w-12 rounded-full"
                src={student.image}
                alt={student.name}
              />
            </div>
            <div className="w-1/6">{student.firstName}</div>
            <div className="w-1/6">{student.email}</div>
            <div className="w-1/6">{student.phone}</div>
            <div className="w-1/6">{student.domain}</div>
            <div className="w-1/6">{student.company.name}</div>
            <div className="flex w-1/6 justify-end">
              <button
                className="mr-5 text-gray-600 hover:text-gray-900"
                onClick={() => handleEditStudent(student)}
              >
                <GoPencil color="#FEAF00" size={18} />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <SlTrash color="#FEAF00" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <ListBottom
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        totalPages={Math.ceil(students.length / rowsPerPage)}
        onPageChange={paginate}
      />
      {isModalOpen && (
        <AddUpdateStudent
          onClose={handleCloseModal}
          onSave={handleSaveStudent}
          defaultValues={selectedStudent}
        />
      )}
    </div>
  );
};

export default StudentList;