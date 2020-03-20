exports.getPosts = (req, res, next) => {
  console.log("We're posting a first post");
  res.status(200).json({
    posts: [{ title: "First post", content: "This is the first post, yay!" }]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in DB
  res.status(201).json({
    message: "Post created successfully!",
    post: { id: Date.now(), title: title, content: content }
  });
};
