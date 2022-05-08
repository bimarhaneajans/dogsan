module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      baslik: String,
      icerik: String,
      konumlinki: String,
      konum: String,
      baslangicTarihi:String,
      bitisTarihi:String,
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

  const Etkinlik = mongoose.model("etkinlik", schema);
  return Etkinlik;
};
