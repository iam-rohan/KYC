import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Kyc } from './entities/kyc.entity';

@Injectable()
export class KycService {
  constructor(
    @InjectRepository(Kyc)
    private readonly kycRepository: Repository<Kyc>,
  ) {}

  findAll(): Promise<Kyc[]> {
    return this.kycRepository.find({
      order: {
        createdDate: 'DESC',
      },
    });
  }

  async findOne(id: string): Promise<Kyc> {
    const kyc = await this.kycRepository.findOne({
      where: { id },
    });

    if (!kyc) {
      throw new NotFoundException('KYC record not found');
    }

    return kyc;
  }

  count(): Promise<number> {
    return this.kycRepository.count();
  }
}
