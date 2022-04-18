module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      ismi: String,
      slidetipi: String,
      siralama: Number,
      img:
      {
        data: Buffer,
        contentType: String
      },
      published: Boolean
    },
    { timestamps: true }
  );

  /*   schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  }); */

  const Slide = mongoose.model("slide", schema);
  return Slide;
};
