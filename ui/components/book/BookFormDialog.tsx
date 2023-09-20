import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { gql, useMutation } from "@apollo/client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Book } from "@/types/book";

interface BookFormDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setBooks: Dispatch<SetStateAction<Book[]>>;
  setAddSuccessMessage: Dispatch<SetStateAction<boolean | null>>;
}

const CREATE_BOOK_MUTATION = gql`
  mutation CreateBook($title: String!, $author: String!) {
    createBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

const BookFormDialog = ({
  open,
  setOpen,
  setBooks,
  setAddSuccessMessage,
}: BookFormDialogProps) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Added responsiveness to dialog
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [createBookMutation] = useMutation(CREATE_BOOK_MUTATION);

  const handleClose = () => {
    setOpen(false);
    setAddSuccessMessage(null);
  };

  const handleAddClick = async () => {
    try {
      const { data } = await createBookMutation({
        variables: {
          title,
          author,
        },
      });

      const newBook = data.createBook;

      if (newBook) {
        setBooks((prevBooks: Book[]) => [...prevBooks, newBook]);
        setAddSuccessMessage(true);
        setOpen(false);
      } else {
        setAddSuccessMessage(false);
        console.error("Failed to create the book.");
      }
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
        <DialogTitle>Add Book</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Title"
            fullWidth
            variant="standard"
            className="mt-6"
            data-testid="title-input"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Author"
            fullWidth
            variant="standard"
            className="mt-6"
            data-testid="author-input"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddClick} data-testid="add-book-button">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BookFormDialog;
