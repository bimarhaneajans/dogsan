module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      Galeribaslik: String,
      img:
      {
        data: Buffer,
        contentType: String
      },
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const TarihceGarleri = mongoose.model("TarihceGarleri", schema);
  return TarihceGarleri;
};
