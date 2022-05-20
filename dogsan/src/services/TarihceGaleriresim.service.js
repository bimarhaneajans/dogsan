import http from "../http-common";

class UploadFilesService { 
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/TarihceGaleri/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/TarihceGaleri/files");
  }
}

/*const create = data => {
  return http.post("/sehir", data);
}; */

export default new UploadFilesService();