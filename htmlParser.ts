type HTMLElement = {
  tagName: string;
  children: HTMLElement[];
  innerHTML: string;
};

function getChildrenHTML(html: string) {
  let searchIndex = 0;
  let children: string[] = [];
  while (searchIndex < html.length) {
    let searchingHTML = html.substring(searchIndex, html.length);
    let tagName: string | undefined = searchingHTML.match(
      /<([^\s>]+)(\s|>)+/
    )?.[1];
    if (!tagName) {
      return [];
    }
    let outerHTML =
      searchingHTML.match(
        new RegExp(`<\s*${tagName}[^>]*>(.*?)<\s*/\s*${tagName}>`)
      )?.[0] || '';
    children.push(outerHTML);
    searchIndex = searchIndex + (outerHTML.length || 0);
  }
  return children;
}

function parseHTML(html: string): HTMLElement {
  let tagName: string = html.match(/<([^\s>]+)(\s|>)+/)?.[1] || '';
  let innerHTML = html;
  let children: any = [];
  if (tagName) {
    innerHTML =
      html.match(
        new RegExp(`<\s*${tagName}[^>]*>(.*?)<\s*/\s*${tagName}>`)
      )?.[1] || '';
    let childrenHTML: string[] = getChildrenHTML(innerHTML);
    children = childrenHTML.map(parseHTML);
  }
  return {
    tagName,
    innerHTML,
    children,
  };
}

export default function htmlParser(
  strings: TemplateStringsArray,
  ...values: any
) {
  // connect all strings and values
  let html = '';
  for (let i = 0; i < strings.length; i++) {
    html += strings[i] + (values[i] || '');
  }
  // normalize html
  html = html.replace(/[\n\s]/g, '');
  // Init DOM
  const dom: any = parseHTML(html);
  console.log(dom);
}
