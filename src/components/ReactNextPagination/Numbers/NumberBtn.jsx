import Link from "next/link";

function NumberBtn({ baseDir, subDir, pageNumber, currentPage, totalPages }) {
    return (
        <Link
            href={
                pageNumber > 1
                    ? `/${baseDir}/${subDir}/${pageNumber}`
                    : `/${baseDir}`
            }
            className={
                pageNumber === currentPage ||
                (pageNumber === 1 && currentPage < 1) ||
                (pageNumber === totalPages && currentPage > totalPages)
                    ? "rnp-page-number active"
                    : "rnp-page-number"
            }
        >
            {pageNumber}
        </Link>
    );
}

export default NumberBtn;
