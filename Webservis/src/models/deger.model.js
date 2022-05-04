module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        baslik: String,
        Content: String,
        kisaaciklama: String,
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
  
    const Deger = mongoose.model("deger", schema);
    return Deger;
  };
 