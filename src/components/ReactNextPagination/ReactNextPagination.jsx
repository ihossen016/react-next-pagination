"use client";

// styles
import "./styles.css";

// components
import PrevBtn from "./PrevBtn";
import PageNumbers from "./PageNumbers";
import NextBtn from "./NextBtn";

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
            <PrevBtn
                baseDir={baseDir}
                subDir={subDir}
                currentPage={currentPage}
                text={"Prev"}
            />

            <PageNumbers
                pageNumbers={pageNumbers}
                currentPage={currentPage}
                baseDir={baseDir}
                subDir={subDir}
            />

            <NextBtn
                baseDir={baseDir}
                subDir={subDir}
                totalPage={totalPage}
                currentPage={currentPage}
                text={"Next"}
            />
        </div>
    );
};
