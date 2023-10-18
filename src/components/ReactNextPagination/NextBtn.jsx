import Link from "next/link";

function NextBtn({ baseDir, subDir, totalPage, currentPage, text }) {
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

export default NextBtn;
