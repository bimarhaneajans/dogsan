module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      baslik: String,
      icerik: String,
      konumlinki: String,
      konum: String,
      baslangicTarihi: Date,
      bitisTarihi: Date,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Blog = mongoose.model("etkinlik", schema);
  return Blog;
};
