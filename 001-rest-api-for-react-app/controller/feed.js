exports.getPosts = (request, response, next) => {
    response.status(200).json({
        posts: [{
            _id: '1',
            title: 'first post',
            message: 'message from first post',
            imageUrl: '../data/duck.png',
            creator: {
                name: 'love'
            },
            createdAt: new Date().toISOString()
        }
        ]
    })
};


exports.createPost = (request, response, next) => {
    const title = request.body.title;
    const content = request.body.content;

    response.status(200).json({
        message: 'Post Created Successfully!',
        post: { _id: new Date().toISOString, title: title, message: content, creator: { name: 'love' }, createdAt: new Date().toISOString() }
    })

}