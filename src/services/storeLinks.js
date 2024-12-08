export async function getLinkSave(key) {
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

export async function saveLink(key, newLink) {
    // Corrigir adicionando 'await' na chamada para 'getLinkSave'
    let linksStored = await getLinkSave(key);

    const hasLink = linksStored.some(link => link.id === newLink.id);

    if (hasLink) {
        console.log('Esse link já existe');
        return;
    }

    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link salvo com sucesso');
}

export function deleteLink(Links, id) {
    let myLinks = Links.filter( item => {
        return (item.id !== id)
    })
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    return myLinks;
}