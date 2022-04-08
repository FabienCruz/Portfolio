let templates = {}

let template = (name, templateFunction) => {
    return templates[name] = templateFunction;
  };

template("contact", (params) => {
  params = params[0];
  let page = {};
  page.what = `
    <article id="${params.name}">
        <h1>Contact</h1>
    </article>
    `;
  page.where = "section";
  return page;
});
template("landing", (params) => {
  let page = {};
  page.what = `
    <article id="${params.name}">
    </article>
    `;
  page.where = "section";
  return page;
});

template("index", (params) => {
  let page = {};
  let matter = "";
  for (let p of params) {
    matter += `
    <article id="${p.directory}/${p.name}">
        <div class="excerpt">
            <h1>${p.title}</h1>
            <p class="description">${p.description}</p>
            <p class="more">En savoir plus ...</p>
        </div>
    </article>
     `;
  }
  page.what = matter;
  page.where = "section";
  return page;
});

template("page", (params) => {
  params = params[0];
  let page = {};
  let matter = `
    <article id="${params.name}">
        <div class="excerpt">
            <h1>${params.title}</h1>
            <p class="description">${params.description}</p>
        </div>
        <div class="content">${marked.parse(params.content)}<hr></div>
    </article>
     `;
  page.what = matter;
  page.where = "section";
  return page;
});


export { templates };
