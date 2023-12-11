export class FullnameVO {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): FullnameVO {
    if (value.length) throw new Error('Invalid fullname');
    return new FullnameVO(value);
  }
}
