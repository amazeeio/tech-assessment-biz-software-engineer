import React, { Suspense } from "react";
import BookList from "../../components/bookList/BookList";

const Books = () => {
  return (
    <div className="w-2/3 m-auto mt-14">
      <h1 className="text-center mb-6 font-bold text-3xl">Book List</h1>
      <BookList />
    </div>
  );
};

export default Books;
