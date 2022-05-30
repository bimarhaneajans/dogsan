module.exports = mongoose => {
  var schema = mongoose.Schema(
   {
    gorsel:[{
      ResimBaslik: String, 
      Resimpath:String,
      Resimicerik:String,
      VideoBaslik:String,
      Videopath:String,
      Veritipi:String,
      published: Boolean
    }]
   },
 
    { timestamps: true }
  );

   /*   schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });  */

  const Slide = mongoose.model("slide", schema);
  return Slide;
};
