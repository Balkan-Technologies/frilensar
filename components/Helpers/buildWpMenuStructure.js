export default items => {
    const menu = [];

    items.forEach(item => {
        if (item.node.connectedNode.node.title) {
            menu.push({
                ...item.node.connectedNode.node,
                children: item.node.childItems.edges.map(subItem => {
                    return {
                        id: subItem.node.connectedNode.node.id,
                        title: subItem.node.connectedNode.node.title,
                        slug: subItem.node.connectedNode.node.slug
                    }
                })
            });
        }
    });
    console.log(menu);
    return menu;
};
