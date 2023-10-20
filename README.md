# react-next-pagination

### A pagination package for your NextJS Application.

Installing this package and importing it will not only handle the pagination of your application but also automatically handle the route changes of your application related to the pagination.

## Use Case

```bash
# Example Routes

https://xyz.com/products
https://xyz.com/products/page/2
...
https://xyz.com/products/page/20

# /products         -- Base Directory
# /page             -- Sub Directory
# /2 or /20         -- Current Page Number
```

if your application have similar routes like these to show products or other data and want to nevigate these pages with a pagination than **react-next-pagination** is the perfect package for you.

## Installation

You can install **react-next-pagination** using npm or yarn:

```bash
npm install react-next-pagination
```

or

```bash
yarn add react-next-pagination
```

## Usage

Here's how you can use **react-next-pagination** in your NextJS applications:

```javascript
// ** File Location: app/products/page.jsx **

import { ReactNextPagination } from "react-next-pagination";

function Products() {
    return (
        <div className="flex justify-center items-center flex-col">
            <p>products</p>

            <ReactNextPagination
                baseDir={"products"} // name of the base directory from where pagination starts
                subDir={"page"} // name of the sub directory where the pagination will lead to
                totalPage={20} // total number of pages
                currentPage={1} // current page number
            />
        </div>
    );
}

export default Products;
```

```javascript
// ** File Location: app/products/page/[pageNum]/page.jsx **

import { ReactNextPagination } from "react-next-pagination";
import { useParams } from "next/navigation";

function NumberPage() {
    const params = useParams();
    const { pageNum } = params;

    return (
        <div className="flex justify-center items-center flex-col">
            <p>products</p>

            <ReactNextPagination
                baseDir={"products"} // name of the base directory from where pagination starts
                subDir={"page"} // name of the sub directory where the pagination will lead to
                totalPage={20} // total number of pages
                currentPage={pageNum} // current page number
            />
        </div>
    );
}

export default NumberPage;
```

## Output

######

![Output Demo](https://awesomescreenshot.s3.amazonaws.com/image/4345048/43702053-0465b8c5d808e21d6efffebc3cd809bf.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20231020%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231020T060844Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=77839fe1f64b2cae6cb9504e7ac5cfc51c89b6eba52c90594522439dcf0a0ed4)

## Demo

[Live Demo](https://server-side-pagination-one.vercel.app/products)

## Issues

If you encounter any issues or have questions about this package, please feel free to [open an issue](https://github.com/ihossen016/react-next-pagination/issues) on GitHub.

## Author

[react-next-pagination](https://github.com/ihossen016/react-next-pagination) package is created and maintained by [Ismail Hossen](https://github.com/ihossen016).
