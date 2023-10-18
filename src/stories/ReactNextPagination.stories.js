import { ReactNextPagination } from "../components/ReactNextPagination";

//👇 This default export determines where your story goes in the story list
export default {
    component: ReactNextPagination,
    title: "Pagination",
    props: {
        baseDir: "products",
        subDir: "page",
        totalPage: 20,
        currentPage: 1,
    },
};

export const Primary = {
    args: {
        //👇 The args you need here will depend on your component
        baseDir: "products",
        subDir: "page",
        totalPage: 20,
        currentPage: 1,
    },
};
