"use client";

import React from "react";
import Link from "next/link";

// styles
import "./styles.css";

// components
import PageNumbers from "./PageNumbers";

export const ReactNextPagination = ({
    baseDir,
    subDir,
    totalPage,
    currentPage,
}) => {
    const pageNumbers = Array.from(
        { length: Number(totalPage) },
        (_, i) => i + 1
    );

    return (
        <div className={"rnp-container"}>
            {currentPage <= 1 ? (
                <button className={"rnp-prev-next disable-btn"} disabled>
                    Prev
                </button>
            ) : (
                <Link
                    className={"rnp-prev-next"}
                    href={
                        currentPage <= 2
                            ? `/${baseDir}`
                            : `/${baseDir}/${subDir}/${currentPage - 1}`
                    }
                >
                    Prev
                </Link>
            )}

            <PageNumbers
                pageNumbers={pageNumbers}
                currentPage={currentPage}
                baseDir={baseDir}
                subDir={subDir}
            />

            {currentPage >= Number(totalPage) ? (
                <button className={"rnp-prev-next disable-btn"} disabled>
                    Next
                </button>
            ) : (
                <Link
                    className={"rnp-prev-next"}
                    href={`/${baseDir}/${subDir}/${currentPage + 1}`}
                >
                    Next
                </Link>
            )}
        </div>
    );
};
