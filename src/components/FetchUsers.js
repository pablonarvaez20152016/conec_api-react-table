import axios from "axios";

/* export default async function FetchUsers(page) {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json = await response.json();
    return json;
  } */
export default async function FetchUsers(currentPage) {
  console.log(`http://localhost:8088/api/Migracion/inconsistencias-planos-paginados?identificador=700&inicioEjecucion=2022-09-13T23:19:57.295453&currentPage=${currentPage}&limit=10`)
    const response = await fetch(`http://localhost:8088/api/Migracion/inconsistencias-planos-paginados?identificador=700&inicioEjecucion=2022-09-13T23:19:57.295453&currentPage=${currentPage}&limit=10`);
    const json = await response.json();
    return json;
  }



  /**
 * @name getInconsistenciasPlanosPaginados
 * @description Petición http de tipo Get para traer 
 * para obtener el listado de inconsistencias de ejecución de planos cargue.
 * @param identificador Identificador del plano
 * @param inicioEjecucion Recibe como parametro la fecha de ejecución del id_plano
 * @param currentPage  Número de página.
 * @returns  
 */
 export const getInconsistenciasPlanosPaginados = async(identificador, inicioEjecucion,currentPage)=>{
  try {
    console.log('http://localhost:8088/api/Migracion/inconsistencias-planos-paginados  page',currentPage)



      const {data} = await axios({
          url:`http://localhost:8088/api/Migracion/inconsistencias-planos-paginados`,
          method:'GET',
          params:{
              identificador : identificador,
              inicioEjecucion : inicioEjecucion,
              currentPage:currentPage,
              limit: 10
          }
      });
      console.log(data)
      return data
  } catch (error) {
      console.log(error)
  }
}
