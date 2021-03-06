module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      baslik: String,
      adres: String,
      telefon: String,
      haritaurl: String,
      siralama:String, 
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

  const Iletisim = mongoose.model("iletisim", schema);
  return Iletisim;
};
