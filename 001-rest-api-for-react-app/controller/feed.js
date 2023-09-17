const { validationResult } = require('express-validator')
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
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({
            message: 'validation failed! Entered data is incorrred',
            errors: errors.array()
        })
    }
    console.log('ERRORS ARE ', errors);
    response.status(200).json({
        message: 'Post Created Successfully!',
        post: { _id: new Date().toISOString, title: title, message: content, creator: { name: 'love' }, createdAt: new Date().toISOString() }
    })

}