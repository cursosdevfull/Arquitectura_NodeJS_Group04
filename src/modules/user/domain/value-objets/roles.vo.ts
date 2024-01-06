export class RolesVO {
  private readonly value: any[];

  private constructor(value: any[]) {
    this.value = value;
  }

  static create(value: any[]): RolesVO {
    if (value.length === 0) throw new Error('Invalid roles');
    return new RolesVO(value);
  }
}
