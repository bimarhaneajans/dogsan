module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      baslik: String,
      icerik: String,
      kisaaciklama: String,
      YoutubeVideoURL: String,
      Tarih: String, 
      Resimbaslik:String,
      Resim:String,
      published: Boolean
    },
    { timestamps: true }
  );

   schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  }); 

  const Duyuru = mongoose.model("duyuru", schema);
  return Duyuru;
};
