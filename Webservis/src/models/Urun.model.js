module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      Adi: String,
      Renk: String,
      icerik: String,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Blog = mongoose.model("urun", schema);
  return Blog;
};