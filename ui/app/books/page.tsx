import React, { Suspense } from "react";
import BookList from "../../components/bookList/BookList";

const Books = () => {
  return (
    <div className="w-2/3 m-auto mt-14">
      <BookList />
    </div>
  );
};

export default Books;
