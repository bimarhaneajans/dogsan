 
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      yoneticiadi: String,
      yoneticisoyadi: String,
      kariyer: String,
      pozizyon: String,
      twitter: String,
      facebook:String,
      linkedin:String,
      googleplus:String,
      kisaozgecmis:String,
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

  const Bayi = mongoose.model("yoneticiler", schema);
  return Bayi;
};