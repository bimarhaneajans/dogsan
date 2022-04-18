module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      AnaIcerik: String,
      BelgeselIcerigi: String, 
      BelgeselVideoUrl:String, 
      img:
      {
        data: Buffer,
        contentType: String
      },
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
