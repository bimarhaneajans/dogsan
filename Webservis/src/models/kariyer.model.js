module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      kariyeradi: String,
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

  const Kariyer = mongoose.model("kariyer", schema);
  return Kariyer;
};