"use client";

import NumberBtn from "./NumberBtn";

const PageNumbers = ({
    pageNumbers,
    currentPage,
    baseDir,
    subDir,
    maxVisiblePages = 3,
}) => {
    const renderPagination = () => {
        const totalPages = pageNumbers.length;

        if (totalPages <= maxVisiblePages) {
            return pageNumbers.map(pageNumber => (
                <NumberBtn
                    key={pageNumber}
                    baseDir={baseDir}
                    subDir={subDir}
                    pageNumber={pageNumber}
                    currentPage={Number(currentPage)}
                    totalPages={Number(totalPages)}
                />
            ));
        } else {
            let startPage = Math.max(
                1,
                currentPage - Math.floor(maxVisiblePages / 2)
            );
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            if (endPage - startPage < maxVisiblePages - 1) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }

            const buttons = [];

            if (startPage > 1) {
                buttons.push(
                    <NumberBtn
                        key={1}
                        baseDir={baseDir}
                        subDir={subDir}
                        pageNumber={1}
                        currentPage={Number(currentPage)}
                        totalPages={Number(totalPages)}
                    />
                );

                if (startPage > 2) {
                    buttons.push(<span key="start-ellipsis">...</span>);
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                buttons.push(
                    <NumberBtn
                        key={i}
                        baseDir={baseDir}
                        subDir={subDir}
                        pageNumber={i}
                        currentPage={Number(currentPage)}
                        totalPages={Number(totalPages)}
                    />
                );
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    buttons.push(<span key="end-ellipsis">...</span>);
                }

                buttons.push(
                    <NumberBtn
                        key={totalPages}
                        baseDir={baseDir}
                        subDir={subDir}
                        pageNumber={totalPages}
                        currentPage={Number(currentPage)}
                        totalPages={Number(totalPages)}
                    />
                );
            }

            return buttons;
        }
    };

    return <div className={"rnp-numbers-container"}>{renderPagination()}</div>;
};

export default PageNumbers;
