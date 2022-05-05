module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      Yil: String,
      icerik: String,
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

  const Tarihce = mongoose.model("tarihce", schema);
  return Tarihce;
};
