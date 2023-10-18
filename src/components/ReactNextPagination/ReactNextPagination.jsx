"use client";

// styles
import "./styles.css";

// components
import PageNumbers from "./Numbers/PageNumbers";
import PrevNextBtn from "./PrevNextBtn";

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
            <PrevNextBtn
                baseDir={baseDir}
                subDir={subDir}
                totalPage={totalPage}
                currentPage={currentPage}
                text={"Prev"}
            />

            <PageNumbers
                pageNumbers={pageNumbers}
                currentPage={currentPage}
                baseDir={baseDir}
                subDir={subDir}
            />

            <PrevNextBtn
                baseDir={baseDir}
                subDir={subDir}
                totalPage={totalPage}
                currentPage={currentPage}
                text={"Next"}
                isNextBtn={true}
            />
        </div>
    );
};
