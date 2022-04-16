module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        baslik: String,
        adres: String,
        telefon: String,
        enlem: String,
        boylam: String,

        published: Boolean
      },
      { timestamps: true }
    );
 
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Bayi = mongoose.model("bayi", schema);
    return Bayi;
  };