// let tagStart = parent.innerHTML.match(/<(.+)>/);

// let tagName = tagStart[1];

// let tagEnd = html.match(new RegExp(`</${tagName}>`));
// // if (!tagEnd) throw new Error(`${tagName} end is not found`);

// let innerHTML = html
//   .slice((tagStart.index || 0) + tagStart[0].length, tagEnd.index)
//   .trim();

// let htmlElement: HTMLElement = {
//   tagName,
//   innerHTML,
//   children: [],
// };

// parent.children.push(htmlElement);
// parent = htmlElement;

// let tagName: string | undefined = parent.innerHTML.match(
//   /<([^\s>]+)(\s|>)+/
// )?.[1];
// if (!tagName) break;
// let innerHTML =
//   parent.innerHTML.match(new RegExp(`<\s*html[^>]*>(.*?)<\s*/\s*html>`))?.[1] ||
//   '';
// let newHTMLElement: HTMLElement = {
//   tagName,
//   innerHTML,
//   children: [],
// };
// parent.children.push(newHTMLElement);
// parent = newHTMLElement;
