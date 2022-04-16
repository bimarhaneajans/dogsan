module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      igneadi: String,
      siralama: Number,
      
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Blog = mongoose.model("igne", schema);
  return Blog;
};
