interface UploadRepository {
  save(file: File): Promise<string>;
}

class UploadFile {
  constructor(private readonly repository: UploadRepository) {}

  async execute(file: File): Promise<string> {
    const result = await this.repository.save(file);
    return result;
  }
}

class UploadAWS implements UploadRepository {
  save(file: File) {
    return Promise.resolve("File uploaded to AWS");
  }
}

class UploadAzure implements UploadRepository {
  save(file: File) {
    return Promise.resolve("File uploaded to Azure");
  }
}

class UploadGoogle implements UploadRepository {
  save(file: File) {
    return Promise.resolve("File uploaded to Google");
  }
}

(async () => {
  const upload: UploadRepository = new UploadAWS();
  const uploadFile = new UploadFile(upload);
  const result: Awaited<string> = await uploadFile.execute(
    new File(["data"], "prueba.txt", { type: "image/png" })
  );
  console.log(result);
})();
