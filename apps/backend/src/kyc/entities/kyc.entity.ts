import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('kyc')
export class Kyc {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    name: 'full_name',
    type: 'varchar',
    length: 200,
  })
  fullName!: string;

  @Column({
    type: 'varchar',
    length: 10,
  })
  gender!: string;

  @Column({
    name: 'dob_bs',
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  dobBs!: string | null;

  @Column({
    name: 'dob_ad',
    type: 'date',
  })
  dobAd!: string;

  @Column({
    name: 'citizenship_number',
    type: 'varchar',
    length: 50,
    unique: true,
  })
  citizenshipNumber!: string;

  @Column({
    name: 'citizenship_issued_district',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  citizenshipIssuedDistrict!: string | null;

  @Column({
    name: 'citizenship_issued_date',
    type: 'date',
    nullable: true,
  })
  citizenshipIssuedDate!: string | null;

  @Column({
    name: 'phone_number',
    type: 'varchar',
    length: 20,
  })
  phoneNumber!: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  email!: string | null;

  @Column({
    name: 'permanent_province_id',
    type: 'integer',
  })
  permanentProvinceId!: number;

  @Column({
    name: 'permanent_district_id',
    type: 'integer',
  })
  permanentDistrictId!: number;

  @Column({
    name: 'permanent_municipality_id',
    type: 'integer',
  })
  permanentMunicipalityId!: number;

  @Column({
    name: 'permanent_ward_no',
    type: 'smallint',
  })
  permanentWardNo!: number;

  @Column({
    name: 'temporary_province_id',
    type: 'integer',
    nullable: true,
  })
  temporaryProvinceId!: number | null;

  @Column({
    name: 'temporary_district_id',
    type: 'integer',
    nullable: true,
  })
  temporaryDistrictId!: number | null;

  @Column({
    name: 'temporary_municipality_id',
    type: 'integer',
    nullable: true,
  })
  temporaryMunicipalityId!: number | null;

  @Column({
    name: 'temporary_ward_no',
    type: 'smallint',
    nullable: true,
  })
  temporaryWardNo!: number | null;

  @Column({
    name: 'father_name',
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  fatherName!: string | null;

  @Column({
    name: 'mother_name',
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  motherName!: string | null;

  @Column({
    name: 'grandfather_name',
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  grandfatherName!: string | null;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  occupation!: string | null;

  @Column({
    name: 'pan_number',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  panNumber!: string | null;

  @Column({
    name: 'created_by',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  createdBy!: string | null;

  @CreateDateColumn({
    name: 'created_date',
    type: 'timestamptz',
  })
  createdDate!: Date;

  @Column({
    name: 'last_updated_by',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  lastUpdatedBy!: string | null;

  @UpdateDateColumn({
    name: 'last_updated_date',
    type: 'timestamptz',
  })
  lastUpdatedDate!: Date;
}
