 
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      baslik: String,
      adres: String,
      telefon: String,
      enlem: Number,
      boylam: Number,
      Resimbaslik:String,
      sehir:String,
      Resim:String,
   /*     /*    img:
      {
        data: Buffer,
        contentType: String
      }, */  
      published: Boolean
    },
    { timestamps: true }
  );

   schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  }); 

  const Bayi = mongoose.model("bayi", schema);
  return Bayi;
};