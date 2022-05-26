import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { readdirSync } from 'fs';

@Injectable()
export class CursoService {
    constructor(private configService: ConfigService) { }

    /**Retorna las url de descarga de material
    * @param sigla que le corresponde a un curso en la tabla Cursos
    * @throws Error Si ocurre un error en la consulta a la base de datos
    * @return [] con los nombres de los archivos y las url de descarga
    */
    getMaterialByCourse(sigla: string) {
        // TODO: obtiene la autenticacion del Id de usuario por defecto
        // let res = path.parse(__dirname);
        let res: object;
        let files_url = [];
        const ruta_local = this.configService.get('RUTA_MATERIAL');
        const host = this.configService.get('HOST_MATERIAL');
        // console.log(process.cwd())
        // process.chdir(`C:\\Users\\Desarrollo\\Documents\\MaterialEntrenamiento\\${sigla}`)
        // res = path.parse(process.cwd())
        // console.log(process.cwd())

        
            process.chdir(`${ruta_local}\\${sigla}`);
            let path = process.cwd()
            let files = readdirSync(path)
            // console.log(files)
            const files_names = files;
            // console.log(files_names)
            for (let index = 0; index < files.length; index++) {
                let element = files[index];
                element = `${host}/${sigla}/${element}`;
                console.log(element)
                files_url[index] = element;
            }
            res = [{
                files_names,
                files_url
            }];
            // console.log(res)
        

        // retorna el objeto con los datos
        return res;
    }
}
