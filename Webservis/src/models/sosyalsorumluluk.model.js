module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      baslik: String,
      icerik: String,
      kisaaciklama: String,
      YoutubeVideoURL: String,
      Tarih: Date, 
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Sosyalsorumluluk = mongoose.model("sosyalsorumluluk", schema);
  return Sosyalsorumluluk;
};
