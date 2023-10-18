import Link from "next/link";

function PrevNextBtn({
    baseDir,
    subDir,
    totalPage,
    currentPage,
    text,
    isNextBtn = false,
}) {
    if (!isNextBtn) {
        return (
            <>
                {currentPage <= 1 ? (
                    <button className={"rnp-prev-next disable-btn"} disabled>
                        {text}
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
                        {text}
                    </Link>
                )}
            </>
        );
    } else {
        return (
            <>
                {currentPage >= Number(totalPage) ? (
                    <button className={"rnp-prev-next disable-btn"} disabled>
                        {text}
                    </button>
                ) : (
                    <Link
                        className={"rnp-prev-next"}
                        href={`/${baseDir}/${subDir}/${currentPage + 1}`}
                    >
                        {text}
                    </Link>
                )}
            </>
        );
    }
}

export default PrevNextBtn;
