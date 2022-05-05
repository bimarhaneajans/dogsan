module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      AnaIcerik: String,
      BelgeselIcerigi: String, 
      BelgeselVideoUrl:String, 
      Resimbaslik:String,
      Resim:String,
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

  const Hakkimizda = mongoose.model("hakkimizda", schema);
  return Hakkimizda;
};
