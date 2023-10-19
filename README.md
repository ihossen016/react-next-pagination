# react-next-pagination

### A pagination component for your **NextJS Application**.

By installing this component it'll not only handle pagination of your application but also handle route change of your application.

## Use Case

if your application have similar routes like these `https://xyz.com/products/page/2` **,** `https://xyz.com/products/page/3` to show products or other data and want to nevigate these pages with a pagination than **react-next-pagination** is the perfect component for you.

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
// ** Base File Location: app/products/page.jsx **

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
