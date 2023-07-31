import { usePathname, useSearchParams } from "next/navigation";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  companyName: string;
  image: string;
}

interface StudentsContextType {
  students: Student[];
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  totalPages: number;
  addStudent: (student: Student) => void;
  updateStudent: (student: Student) => void;
  deleteStudent: (studentId: number) => void;
  fetchStudents: () => void;
  searchParam: string;
  pathname: string;
}

export const StudentsContext = createContext<StudentsContextType | null>(
  null
);

interface StudentsProviderProps {
  children: ReactNode;
}

export const StudentsProvider: React.FC<StudentsProviderProps> = ({ children }) => {
    const [students, setStudents] = useState<Student[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalPages, setTotalPages] = useState(1);
    const [searchParam, setSearchParam] = useState('');
    const [pathname, setPathname] = useState('');
  
    const searchParams = useSearchParams();
    const currentPathname = usePathname();
  
    useEffect(() => {
      fetchStudents();
    }, [currentPage, pageSize]);
  
    useEffect(() => {
      const search = searchParams.get('search') || '';
      setSearchParam(search);
    }, [searchParams]);
  
    useEffect(() => {
      setPathname(currentPathname);
    }, [currentPathname]);
  
    const fetchStudents = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
        const data = await response.json();
        setStudents(data.users);
        setTotalPages(1);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

  const addStudent = (newStudent: Student) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const updateStudent = (updatedStudent: Student) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  const deleteStudent = (studentId: number) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentId)
    );
  };

  const contextValue: StudentsContextType = {
    students,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPages,
    addStudent,
    updateStudent,
    deleteStudent,
    searchParam,
    pathname,
    fetchStudents, // fetchStudents'i contextValue içine ekledik
  };

  return (
    <StudentsContext.Provider value={contextValue}>
      {children}
    </StudentsContext.Provider>
  );
};
