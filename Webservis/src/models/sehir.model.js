module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      sehirAdi: String,
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

  const Sehir = mongoose.model("sehir", schema);
  return Sehir;
};
