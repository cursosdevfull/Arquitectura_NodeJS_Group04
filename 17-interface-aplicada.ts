interface UploadRepository {
  save(file: File): void;
}

class UploadFile {
  constructor(private readonly repository: UploadRepository) {}

  execute(file: File): void {
    this.repository.save(file);
  }
}

class UploadAWS implements UploadRepository {
  save(file: File) {
    console.log("File uploaded to AWS");
  }
}

class UploadAzure implements UploadRepository {
  save(file: File) {
    console.log("File uploaded to Azure");
  }
}

class UploadGoogle implements UploadRepository {
  save(file: File) {
    console.log("File uploaded to Google");
  }
}

//const upload: UploadRepository = new UploadAWS()
//const upload: UploadRepository = new UploadAzure()
const upload: UploadRepository = new UploadGoogle();
const uploadFile = new UploadFile(upload);
uploadFile.execute(new File(["data"], "prueba.txt", { type: "image/png" }));
console.log(upload);
