module.exports = {
  title: '海外の旅〔上〕', // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: '村上真完・ヤエ', // default to `author` in `package.json` or undefined.
  language: 'ja',
  // size: 'A5',
  theme: 'theme/theme.css', // .css or local dir or npm package. default to undefined.
  // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  entry: [
    "text/index.md",
    "text/chap01.md",
    "text/chap02.md",
    "text/chap03.md",
    "text/chap04.md",
    "text/chap05.md",
    "text/backmatter.md",
    // 'manuscript.md', // `title` is automatically guessed from the file (frontmatter > first heading).
    // {
    //   path: 'epigraph.md',
    //   title: 'Epigraph', // title can be overwritten (entry > file),
    //   theme: '@vivliostyle/theme-whatever', // theme can be set indivisually. default to the root `theme`.
    // },
    // 'glossary.html', // html can be passed.
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  // toc: true, // whether generate and include toc.html or not (does not affect manifest.json), default to `true`. if `string` given, use it as a custom toc.html.
  // cover: './cover.png', // cover image. default to undefined.
  // workspaceDir: '.vivliostyle',
  // http: true,
  timeout: 1000000,
}
