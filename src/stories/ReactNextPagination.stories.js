import { ReactNextPagination } from "../components/ReactNextPagination";

export default {
    component: ReactNextPagination,
    title: "React Next Pagination",
    props: {
        baseDir: "products",
        subDir: "page",
        totalPage: 20,
        currentPage: 1,
    },
};

export const Primary = {
    args: {
        baseDir: "products",
        subDir: "page",
        totalPage: 20,
        currentPage: 1,
    },
};
