import { compose, pipe } from "lodash/fp";

// let input = "   javascript   ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = (str) => str.trim();
// const wrap = (type, str) => `<${type}>${str}<${type}>`;
// const toLowerCase = (str) => str.toLowerCase();

// const transform = pipe(trim, toLowerCase, wrapInDiv);
// transform(input);

import { Map } from "immutable";
let book = Map({ title: "Harry Potter" });

console.log(book.get("title"));
