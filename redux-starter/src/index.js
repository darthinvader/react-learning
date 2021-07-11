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

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());
