module.exports = mongoose => {
  var schema = mongoose.Schema(
   {
    gorsel:{
      Baslik: String, 
      ResimBaslik: String, 
      src:String,
      Resimicerik:String,
      VideoBaslik:String,
      url:String,
      Veritipi:String,
      slidetipi:Boolean,
      published: Boolean
    }
   },
 
    { timestamps: true }
  );
    /*  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });    */

  const Slide = mongoose.model("slide", schema);
  return Slide;
};
