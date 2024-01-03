import { v4 as uuidv4, validate } from 'uuid';

export class Appointment {
  private readonly id: string;
  private patientId: string;
  private doctorId: string;
  private date: Date;
  private specialtyId: string;
  private centerId: number;
  private countryIso: 'CO' | 'PE' | 'MX';

  constructor(
    patientId: string,
    doctorId: string,
    specialtyId: string,
    centerId: number,
    date: Date,
    countryIso: 'CO' | 'PE' | 'MX',
  ) {
    if (!validate(patientId)) {
      throw new Error('Invalid patientId');
    }

    if (!validate(doctorId)) {
      throw new Error('Invalid doctorId');
    }

    if (!validate(specialtyId)) {
      throw new Error('Invalid specialtyId');
    }

    if (!Number.isInteger(centerId)) {
      throw new Error('Invalid centerId');
    }

    if (Number(centerId) <= 0) {
      throw new Error('Invalid centerId');
    }

    if (!date) {
      throw new Error('Invalid date');
    }

    Object.assign(this, {
      patientId,
      doctorId,
      specialtyId,
      centerId,
      date,
      countryIso,
    });

    this.id = uuidv4();
  }

  get properties() {
    return {
      id: this.id,
      patientId: this.patientId,
      doctorId: this.doctorId,
      specialtyId: this.specialtyId,
      centerId: this.centerId,
      date: this.date,
      countryIso: this.countryIso,
    };
  }
}
