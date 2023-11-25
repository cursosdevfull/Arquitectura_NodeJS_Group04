abstract class Upload {
  abstract newFilename: string;
  abstract saveFile(file: File): void;

  toString() {
    console.log("Subiendo archivo");
  }
}

class UploadAWS extends Upload {
  newFilename: string;

  saveFile(file: File) {
    console.log(`File uploaded to AWS`, this.newFilename);
  }
}

const upload = new UploadAWS();
upload.toString();
