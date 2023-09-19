"use client";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Button from "@mui/material/Button";
import { Book } from "@/types/book";
import Spinner from "../spinner/Spinner";

const BOOKS_QUERY = gql`
  query {
    getBooks {
      id
      title
      author
    }
  }
`;

const DELETE_BOOK_MUTATION = gql`
  mutation deleteBook($id: String!) {
    deleteBook(id: $id)
  }
`;

const BookList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [books, setBooks] = useState([]);

  const [deleteBook] = useMutation(DELETE_BOOK_MUTATION);
  const { loading, error, data } = useQuery(BOOKS_QUERY);

  useEffect(() => {
    if (data && data.getBooks) {
      setBooks(data.getBooks);
    }
  }, [data]);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    row: Book
  ) => {
    e.stopPropagation();

    try {
      const res = await deleteBook({
        variables: { id: row.id },
      });

      if (res.data.deleteBook) {
        setBooks((prevBooks) =>
          prevBooks.filter((book: Book) => book.id !== row.id)
        );
      } else {
        console.log("Book was unsuccessfully deleted");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="bg-[#1976d2]">
            <TableCell className="!text-white">TITLE</TableCell>
            <TableCell className="!text-white">AUTHOR</TableCell>
            <TableCell className="!text-white" align="right">
              DELETE ACTION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? books.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : books
          ).map((row: Book) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={(e) => onButtonClick(e, row)}
                  variant="contained"
                  className="bg-[#1976d2]"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={books.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default BookList;
