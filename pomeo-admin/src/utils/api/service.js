import http  from "./adminRequest";


    const getAll = (data) => {
      return http.get("/auth/artists", data);
    };
    
    const get = (id) => {
      return http.get(`/auth/artists/${id}`);
    };
    
    const create = (data) => {
      return http.post("/auth/artists", data);
    };
    
    const update = (id, data) => {
      return http.put(`/auth/artists/${id}`, data);
    };
    
    const remove = (id) => {
      return http.delete(`/auth/artists/${id}`);
    };
    
    const removeAll = () => {
      return http.delete(`/auth/artists`);
    };
    
    const findByArtistName = (name) => {
      return http.get(`/auth/artists?name=${name}`);
    };
    
    const DataService = {
      getAll,
      get,
      create,
      update,
      remove,
      removeAll,
      findByArtistName,
    };
    
    export default DataService;