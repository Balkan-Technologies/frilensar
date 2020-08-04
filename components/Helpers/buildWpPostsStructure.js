export default items => {
    const posts = [];

    items.forEach(item => {
        if (item.featuredImage) {
            posts.push(
                {
                    id: item.id,
                    title: item.title,
                    date: item.date,
                    author: item.author.node.name,
                    excerpt: item.excerpt,
                    image: item.featuredImage.node.sourceUrl,
                }
            );
        }
    })
    console.log(posts);
    return posts;
};
