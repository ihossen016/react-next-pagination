import Link from "next/link";

function PrevBtn({ baseDir, subDir, currentPage, text }) {
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
}

export default PrevBtn;
