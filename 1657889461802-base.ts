import { MigrationInterface, QueryRunner } from 'typeorm';

export class base1657889461802 implements MigrationInterface {
  name = 'base1657889461802';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "instructor" ("pk_instructor" int NOT NULL IDENTITY(1,1), "doc_identidad" nvarchar(20) NOT NULL, "nombre" nvarchar(50) NOT NULL, "apellido" nvarchar(50) NOT NULL, "correo" nvarchar(100) NOT NULL, "usuario" nvarchar(60) NOT NULL, "num_contacto" nvarchar(50), "estado" nvarchar(50) NOT NULL, "titulo" nvarchar(50), CONSTRAINT "PK_2b1a60207727b8019eb902b2a37" PRIMARY KEY ("pk_instructor"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "estudiante" ("pk_estudiante" int NOT NULL IDENTITY(1,1), "doc_identidad" nvarchar(20) NOT NULL, "nombre" nvarchar(50) NOT NULL, "apellido" nvarchar(50) NOT NULL, "correo" nvarchar(100) NOT NULL, "usuario" nvarchar(60) NOT NULL, "num_contacto" nvarchar(50), "registrado" bit NOT NULL CONSTRAINT "DF_f0bd2bad7d45c964d0d9d9b7637" DEFAULT 1, CONSTRAINT "PK_586d7de6a7cbea2ca9ac21a9423" PRIMARY KEY ("pk_estudiante"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "sector" ("pk_sector" int NOT NULL IDENTITY(1,1), "nombre" nvarchar(100), CONSTRAINT "PK_8933a5c96cda9ca139b74be3188" PRIMARY KEY ("pk_sector"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "empresa" ("pk_empresa" int NOT NULL IDENTITY(1,1), "nombre" nvarchar(100) NOT NULL, "nit" nvarchar(20), "pais" nvarchar(50), "customer_number" int NOT NULL, "fk_sector" int, CONSTRAINT "PK_e9367f8f255468dcf4daa4ee1fb" PRIMARY KEY ("pk_empresa"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "clase" ("pfk_estudiante" int NOT NULL, "pfk_grupo" int NOT NULL IDENTITY(1,1), "estado_encuesta" nvarchar(50) NOT NULL, "estado_material" nvarchar(50) NOT NULL, "estado_certificado" nvarchar(50) NOT NULL, "orden_venta" nvarchar(50), "pais_orden_venta" nvarchar(50), "calificacion" numeric(5,2), "fecha" date, "estudiantePkEstudiante" int, "grupoPkGrupo" int, "fk_empresa" int, CONSTRAINT "pk_clase" PRIMARY KEY ("pfk_estudiante", "pfk_grupo"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "horario" ("pk_horario" int NOT NULL IDENTITY(1,1), "fecha" date NOT NULL, "hora_inicio" time NOT NULL, "hora_fin" time NOT NULL, "fk_grupo" int, CONSTRAINT "PK_733515f51ed89bb896cb32b9ea9" PRIMARY KEY ("pk_horario"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "ubicacion" ("pk_ubicacion" int NOT NULL IDENTITY(1,1), "nombre" nvarchar(50), "fk_pais" int, "ubicacionesPkSalon" int, CONSTRAINT "PK_56064dfa6442817b6cc45427eb1" PRIMARY KEY ("pk_ubicacion"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "REL_84b2fe48bc5186f0d2e390fa1d" ON "ubicacion" ("fk_pais") WHERE "fk_pais" IS NOT NULL`,
    );
    await queryRunner.query(
      `CREATE TABLE "salon" ("pk_salon" int NOT NULL IDENTITY(1,1), "nombre" nvarchar(100) NOT NULL, "lugar" nvarchar(80) NOT NULL, "direccion" nvarchar(100), "estado" nvarchar(50) NOT NULL, "capacidad" int NOT NULL, CONSTRAINT "ck_estado_salon" CHECK ("estado"='Deshabilitado' OR "estado"="Habilitado"), CONSTRAINT "PK_e51985052196dc31cfd8d80e0ff" PRIMARY KEY ("pk_salon"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "grupo" ("pk_grupo" int NOT NULL IDENTITY(1,1), "fecha_inicio" date NOT NULL, "fecha_fin" date NOT NULL, "tipo" nvarchar(50), "alcance" nvarchar(50), "entrega_modificada" bit, "informe" nvarchar(max), "fk_curso" int, "fk_salon" int, "fk_instructor" int, CONSTRAINT "PK_e2fc1ca609e236f45eddd0d1e9a" PRIMARY KEY ("pk_grupo"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "curso" ("pk_curso" int NOT NULL IDENTITY(1,1), "sigla" nvarchar(50) NOT NULL, "nombre" nvarchar(100) NOT NULL, "intensidad" int NOT NULL, "estado" nvarchar(50) NOT NULL, "estado_material" nvarchar(50) NOT NULL, "fecha_lanzamiento" date, "tipo" nvarchar(50) NOT NULL, "idioma" nvarchar(50), "organizacion" nvarchar(50), "acronimo" nvarchar(50), "ver_plataforma" nvarchar(50), "ver_material" nvarchar(50), "categoria" nvarchar(100), CONSTRAINT "PK_a352d8ef28e915673520e1ee7ce" PRIMARY KEY ("pk_curso"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "pregunta" ("pk_pregunta" int NOT NULL IDENTITY(1,1), "pregunta" nvarchar(500) NOT NULL, "categoria" nvarchar(50) NOT NULL, "tipo" nvarchar(50) NOT NULL, "estado" nvarchar(50) NOT NULL, "orden" int, CONSTRAINT "PK_e55dc3817a9212048ad01b41f87" PRIMARY KEY ("pk_pregunta"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "encuesta" ("pk_encuesta" int NOT NULL IDENTITY(1,1), "respuesta" nvarchar(max) NOT NULL, "fecha" date NOT NULL, "fk_pregunta" int, "fk_grupo" int, "fk_estudiante" int, CONSTRAINT "PK_689a2a9d30eb54b851295c617f0" PRIMARY KEY ("pk_encuesta"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "administrador" ("pk_administrador" int NOT NULL IDENTITY(1,1), "nombre" nvarchar(50) NOT NULL, "apellido" nvarchar(50) NOT NULL, "correo" nvarchar(100) NOT NULL, "usuario" nvarchar(50) NOT NULL, "estado" nvarchar(50) NOT NULL CONSTRAINT "DF_e3d37bf26640b81f7e8ef763271" DEFAULT 'Deshabilitado', CONSTRAINT "PK_78cf0366d2bc4801b5110bd7668" PRIMARY KEY ("pk_administrador"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "certificado" ("pk_certificado" int NOT NULL IDENTITY(1,1), "fecha" date NOT NULL, "fk_grupo" int, "fk_estudiante" int, CONSTRAINT "PK_30cac3ab02165bdf280bcb10101" PRIMARY KEY ("pk_certificado"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "empresa" ADD CONSTRAINT "FK_0c2c4cc4823f69b664a09919bc8" FOREIGN KEY ("fk_sector") REFERENCES "sector"("pk_sector") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clase" ADD CONSTRAINT "FK_fc15067925d51acd1c99bc222f4" FOREIGN KEY ("estudiantePkEstudiante") REFERENCES "estudiante"("pk_estudiante") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clase" ADD CONSTRAINT "FK_578c3ed4b71d16c56f2f430a437" FOREIGN KEY ("grupoPkGrupo") REFERENCES "grupo"("pk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clase" ADD CONSTRAINT "FK_1b3f04fefb7342565f922116215" FOREIGN KEY ("fk_empresa") REFERENCES "empresa"("pk_empresa") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "horario" ADD CONSTRAINT "FK_4dbde90d56c77b5710adbfd58a2" FOREIGN KEY ("fk_grupo") REFERENCES "grupo"("pk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ubicacion" ADD CONSTRAINT "FK_84b2fe48bc5186f0d2e390fa1d2" FOREIGN KEY ("fk_pais") REFERENCES "ubicacion"("pk_ubicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ubicacion" ADD CONSTRAINT "FK_8207b750a2d525b24dde42e19d9" FOREIGN KEY ("ubicacionesPkSalon") REFERENCES "salon"("pk_salon") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "grupo" ADD CONSTRAINT "FK_182976f8e7f17128410e300112d" FOREIGN KEY ("fk_curso") REFERENCES "curso"("pk_curso") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "grupo" ADD CONSTRAINT "FK_7d27a48da2e512edccf4609224e" FOREIGN KEY ("fk_salon") REFERENCES "salon"("pk_salon") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "grupo" ADD CONSTRAINT "FK_ed70bd6d1bda5fbf87f2c33d5db" FOREIGN KEY ("fk_instructor") REFERENCES "instructor"("pk_instructor") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "encuesta" ADD CONSTRAINT "FK_d49dc3ade98b16c476da81fdd8c" FOREIGN KEY ("fk_pregunta") REFERENCES "pregunta"("pk_pregunta") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "encuesta" ADD CONSTRAINT "FK_b4459a69422a5b82774341242ac" FOREIGN KEY ("fk_grupo", "fk_grupo") REFERENCES "clase"("pfk_estudiante","pfk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "encuesta" ADD CONSTRAINT "FK_6046218132c5848b99eb485e514" FOREIGN KEY ("fk_estudiante", "fk_estudiante") REFERENCES "clase"("pfk_estudiante","pfk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "certificado" ADD CONSTRAINT "FK_fb33759ca42a2c3a4d1f27a25fd" FOREIGN KEY ("fk_grupo", "fk_grupo") REFERENCES "clase"("pfk_estudiante","pfk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "certificado" ADD CONSTRAINT "FK_82f865e96344b759c92b19b4152" FOREIGN KEY ("fk_estudiante", "fk_estudiante") REFERENCES "clase"("pfk_estudiante","pfk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "certificado" DROP CONSTRAINT "FK_82f865e96344b759c92b19b4152"`,
    );
    await queryRunner.query(
      `ALTER TABLE "certificado" DROP CONSTRAINT "FK_fb33759ca42a2c3a4d1f27a25fd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "encuesta" DROP CONSTRAINT "FK_6046218132c5848b99eb485e514"`,
    );
    await queryRunner.query(
      `ALTER TABLE "encuesta" DROP CONSTRAINT "FK_b4459a69422a5b82774341242ac"`,
    );
    await queryRunner.query(
      `ALTER TABLE "encuesta" DROP CONSTRAINT "FK_d49dc3ade98b16c476da81fdd8c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "grupo" DROP CONSTRAINT "FK_ed70bd6d1bda5fbf87f2c33d5db"`,
    );
    await queryRunner.query(
      `ALTER TABLE "grupo" DROP CONSTRAINT "FK_7d27a48da2e512edccf4609224e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "grupo" DROP CONSTRAINT "FK_182976f8e7f17128410e300112d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ubicacion" DROP CONSTRAINT "FK_8207b750a2d525b24dde42e19d9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ubicacion" DROP CONSTRAINT "FK_84b2fe48bc5186f0d2e390fa1d2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "horario" DROP CONSTRAINT "FK_4dbde90d56c77b5710adbfd58a2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clase" DROP CONSTRAINT "FK_1b3f04fefb7342565f922116215"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clase" DROP CONSTRAINT "FK_578c3ed4b71d16c56f2f430a437"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clase" DROP CONSTRAINT "FK_fc15067925d51acd1c99bc222f4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "empresa" DROP CONSTRAINT "FK_0c2c4cc4823f69b664a09919bc8"`,
    );
    await queryRunner.query(`DROP TABLE "certificado"`);
    await queryRunner.query(`DROP TABLE "administrador"`);
    await queryRunner.query(`DROP TABLE "encuesta"`);
    await queryRunner.query(`DROP TABLE "pregunta"`);
    await queryRunner.query(`DROP TABLE "curso"`);
    await queryRunner.query(`DROP TABLE "grupo"`);
    await queryRunner.query(`DROP TABLE "salon"`);
    await queryRunner.query(
      `DROP INDEX "REL_84b2fe48bc5186f0d2e390fa1d" ON "ubicacion"`,
    );
    await queryRunner.query(`DROP TABLE "ubicacion"`);
    await queryRunner.query(`DROP TABLE "horario"`);
    await queryRunner.query(`DROP TABLE "clase"`);
    await queryRunner.query(`DROP TABLE "empresa"`);
    await queryRunner.query(`DROP TABLE "sector"`);
    await queryRunner.query(`DROP TABLE "estudiante"`);
    await queryRunner.query(`DROP TABLE "instructor"`);
  }
}
