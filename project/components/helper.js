const getValue = (id) => {
    return document.getElementById(id).value
}

export default getValue


const createTag = (tagName, value) => {
    let tag = document.createElement(tagName)
    tagName == "img" ? tag.src = value : tag.innerHTML = value
    return tag
}


export { createTag }
