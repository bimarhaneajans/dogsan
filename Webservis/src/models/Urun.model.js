module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      Adi: String,
      Renk: String,
      icerik: String,
      img:
      {
        data: Buffer,
        contentType: String
      },
      published: Boolean
    },
    { timestamps: true }
  );

 /*   schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  }); */

  const Urun = mongoose.model("urun", schema);
  return Urun;
};
