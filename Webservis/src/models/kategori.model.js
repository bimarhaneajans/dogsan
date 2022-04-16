module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      adi: String, 
      uzunisim: String, 
      bolumrenkkodu:String, 
      siralama:Number, 
      seourl:String,   
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Blog = mongoose.model("katalog", schema);
  return Blog;
};
