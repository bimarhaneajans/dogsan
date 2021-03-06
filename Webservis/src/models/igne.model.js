module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      igneadi: String,
      siralama: String,
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

  const Igne = mongoose.model("igne", schema);
  return Igne;
};
