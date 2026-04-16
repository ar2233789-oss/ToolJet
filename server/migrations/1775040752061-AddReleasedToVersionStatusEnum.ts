import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddReleasedToVersionStatusEnum1775040752061 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TYPE version_status_enum ADD VALUE IF NOT EXISTS 'RELEASED'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // PostgreSQL does not support removing enum values
  }
}
