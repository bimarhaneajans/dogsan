module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      subkategoriadi: String, 
      Resim:String,
      tanim: String, 
      kullanimamaci:String, 
      performansozellikleri:String,  
      fayda:String,   
      path:String,
      kategoriid:String,
      kategoriadi:String,
      videourl:String,
      published: Boolean
    },
    { timestamps: true }
  );

     schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  }); 

  const Kategori = mongoose.model("subkategori", schema);
  return Kategori;
};
