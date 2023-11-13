// import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./style.css";
function PaginationComponent({ page, handleChange }) {

    return (
        <div className="pagination_component">
            <Pagination
                count={10}
                page={page}
                onChange={(event, value) => handleChange(event, value)}
                sx={{
                    color: "var(--white)",
                    "& .Mui-selected ": {
                        backgroundColor: "var(--blue) !important",
                        color: "#fff !important",
                        borderColor: "var(--blue) !important",
                    },
                    "& .MuiPaginationItem-ellipsis": {
                        border: "0px solid var(--grey) !important",
                    },
                    "& .MuiPaginationItem-text": {
                        color: "var(--white)",
                        border: "1px solid var(--grey)",
                    },
                }}
            />
        </div>
    );
}

export default PaginationComponent;