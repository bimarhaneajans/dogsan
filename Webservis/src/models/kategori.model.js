module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      adi: String, 
      uzunisim: String, 
      bolumrenkkodu:String, 
      siralama:String,  
      seourl:String,   
      Resimbaslik:String,
      path:String,
      kategoriid:Number,
      subkategori:String,
      title:String,
      image:String,
      videourl:String,
      icerik:String,
      kategoriadi:String,
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

  const Kategori = mongoose.model("kategori", schema);
  return Kategori;
};
