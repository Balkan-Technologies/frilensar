export default items => {
    const menu = [];

    items.forEach(item => {
        if (!item.node.parentId) {
            menu.push({
                ...item.node,
                children: item.node.childItems.edges.map(subItem => {
                    return {
                        id: subItem.node.id,
                        label: subItem.node.label,
                        url: subItem.node.url
                    }
                })
            });
        }
    });
    console.log(menu);
    return menu;
};
