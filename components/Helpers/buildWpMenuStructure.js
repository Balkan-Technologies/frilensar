export default items => {
    const menu = [];

    items.forEach(item => {
        if (!item.node.parentId) {
            const menuItem = {
                ...item.node,
            }

            if(item.node.childItems) {
                menuItem.children = item.node.childItems.edges.map(subItem => {
                    return {
                        id: subItem.node.id,
                        label: subItem.node.label,
                        url: subItem.node.url
                    }
                });
            }
            menu.push(menuItem);
        }
    });
    return menu;
};
