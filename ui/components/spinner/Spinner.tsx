import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

interface SpinnerProps {
  className?: string;
}

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
