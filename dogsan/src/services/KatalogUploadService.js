import http from "../http-common";

class UploadFilesService { 
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/katalogpdf", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/katalogpdf/files");
  }
}

/*const create = data => {
  return http.post("/sehir", data);
}; */

export default new UploadFilesService();