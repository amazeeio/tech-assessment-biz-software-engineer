"use client";

import React, { useEffect, useState } from "react";
import BookList from "../../components/book/BookList";
import Button from "@mui/material/Button";
import BookFormDialog from "@/components/book/BookFormDialog";
import { gql, useQuery } from "@apollo/client";
import Spinner from "@/components/spinner/Spinner";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Book } from "@/types/book";
import ErrorPage from "@/components/error/ErrorPage";

const BOOKS_QUERY = gql`
  query {
    getBooks {
      id
      title
      author
    }
  }
`;

const Books = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [addSuccessMessage, setAddSuccessMessage] = useState<boolean | null>(
    null
  );
  const [deleteSuccessMessage, setDeleteSuccessMessage] = useState<
    boolean | null
  >(null);

  const { loading, error, data } = useQuery(BOOKS_QUERY);

  useEffect(() => {
    if (data && data.getBooks) {
      setBooks(data.getBooks);
    }
  }, [data]);

  if (loading) return <Spinner className="h-screen" />;
  if (error) return <ErrorPage />;

  const handleNewBookClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setAddSuccessMessage(null);
  };

  const handleDeleteClose = () => {
    setDeleteSuccessMessage(null);
  };

  return (
    <div className="w-2/3 m-auto mt-14">
      <h1 className="text-center mb-6 font-bold text-3xl">Book List</h1>
      <div className="w-100 mb-6 text-right">
        <Button
          data-testid="open-dialog"
          onClick={handleNewBookClick}
          variant="outlined"
        >
          ADD NEW BOOK
        </Button>
      </div>
      <BookFormDialog
        open={open}
        setOpen={setOpen}
        setBooks={setBooks}
        setAddSuccessMessage={setAddSuccessMessage}
      />
      <BookList
        books={books}
        setBooks={setBooks}
        setDeleteSuccessMessage={setDeleteSuccessMessage}
      />
      {addSuccessMessage ? (
        <Snackbar open={true} onClose={handleClose} autoHideDuration={6000}>
          <Alert
            onClose={handleClose}
            severity={`${addSuccessMessage ? "success" : "error"}`}
            sx={{ width: "100%" }}
            data-testid="add-success-message"
          >
            {addSuccessMessage
              ? "Book Successfully Added"
              : "Oops! Book Couldn't Be Added"}
          </Alert>
        </Snackbar>
      ) : null}

      {deleteSuccessMessage ? (
        <Snackbar
          open={true}
          onClose={handleDeleteClose}
          autoHideDuration={6000}
        >
          <Alert
            onClose={handleDeleteClose}
            severity={`${deleteSuccessMessage ? "success" : "error"}`}
            sx={{ width: "100%" }}
            data-testid="delete-success-message"
          >
            {deleteSuccessMessage
              ? "Book Successfully Deleted"
              : "Oops! Book Couldn't Be Deleted"}
          </Alert>
        </Snackbar>
      ) : null}
    </div>
  );
};

export default Books;
