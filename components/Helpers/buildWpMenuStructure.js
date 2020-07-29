export default items => {
    const menu = [];

    items.forEach(item => {
        if (!item.node.parentId) {
            menu.push(item.node)
            };
        });
    return menu;
};
