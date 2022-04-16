module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      Subject: String,
      email: String,
      Content: String,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Blog = mongoose.model("mesaj", schema);
  return Blog;
};