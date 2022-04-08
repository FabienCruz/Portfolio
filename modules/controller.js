import { getData } from "./api.js";
import { setting } from "./setting.js"
import { templates } from "./template.js"
import { getDirection } from "./getDirection.js";

const data = await getData(setting.dataPath);

const render = (page)=>{
    const articleTag = document.querySelector(page.where);
    articleTag.innerHTML = page.what;
    return;
}

const contact = (pathname)=>{
    let params = data.filter((value) => value.directory === ''); // create a contact folder
    let page = templates.contact(params);
    return render(page, "article")
};

const landing = (pathname)=>{
    let params = data.filter((value) => value.directory === ''); // create a contact folder
    let page = templates.landing(params);
    return render(page, "article")
};

const index = (pathname)=>{
    let params = data.filter((value) => value.directory === pathname.directory);
    let page = templates.index(params);
    render(page, "article");
    getDirection("article");
    return;
};

const page = (pathname) =>{
    let params = data.filter((value) => value.name === pathname.slug.slice(1));
    let page = templates.page(params);
    return render(page, "article");
};

export { contact, index, page, landing }