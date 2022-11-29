// import * as React from "react";
// import {Link} from 'react-router-dom';
// import './Error404.css';

// import logo from "../../assets/images/logo-notext.png";
// import logoR from "../../assets/images/logo-r.png";

// function Error404() {
//     return (
//       <>
//         <main className="main-content">
//           <img src={logo}  alt="Logo Pomeo" />
//           <h1>Erreur : 404</h1>
//           <h2>Cette page n’existe pas sur Pomeo</h2>
//           <p>Fan : Demandez des voeux personnalisés à vos artistes préférés sur Pomeo <br />
//             Artistes : Réalisez des voeux vidéos personnalisés pour vos Fans sur Pomeo</p>
//           <Link to="/"><button>Aller à l’accueil</button></Link>
//           <img src={logoR} alt="Pomeo" />
//         </main>        
//       </>
//     );
//   }

// export default Error404;

// export default class ListArtists extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangeSearchArtist = this.onChangeSearchArtist.bind(this);
//     this.retrieveArtists = this.retrieveArtists.bind(this);
//     this.refreshList = this.refreshList.bind(this);
//     this.setActiveArtist = this.setActiveArtist.bind(this);
//     this.removeAllArtists = this.removeAllArtists.bind(this);
//     this.searchArtist = this.searchArtist.bind(this);
//     this.handlePageChange = this.handlePageChange.bind(this);
//     this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

//     this.state = {
//       artists: [],
//       currentArtist: null,
//       currentIndex: -1,
//       searchArtist: "",

//       page: 1,
//       count: 10,
//       pageSize: 10,
//     };

//     this.pageSizes = [25, 35, 45, 55];
//   }

//   componentDidMount() {
//     this.retrieveArtists();
//   }

//   onChangeSearchArtist(e) {
//     const searchArtist = e.target.value;

//     this.setState({
//       searchArtist: searchArtist,
//     });
//   }

//   getRequestParams(searchArtist, page, pageSize) {
//     let params = {};

//     if (searchArtist) {
//       params["title"] = searchArtist;
//     }

//     if (page) {
//       params["page"] = page - 1;
//     }

//     if (pageSize) {
//       params["size"] = pageSize;
//     }

//     return params;
//   }

//   retrieveArtists() {
//     const { searchArtist, page, pageSize } = this.state;
//     const params = this.getRequestParams(searchArtist, page, pageSize);

//     DataService.getAll(params)
//       .then((response) => {
//         const { artists, totalPages } = response.data;

//         this.setState({
//           artists: artists,
//           count: totalPages,
//         });
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   handlePageChange(event, value) {
//     this.setState(
//       {
//         page: value,

//       },
//       () => {
//         this.retrieveArtists();
//       }
//     );
//   }

//   handlePageSizeChange(event) {
//     this.setState(
//       {
//         pageSize: event.target.value,
//         page: 1
//       },
//       () => {
//         this.retrieveArtists();
//       }
//     );
//   }
//   refreshList() {
//     this.retrieveArtists();
//     this.setState({
//       currentArtist: null,
//       currentIndex: -1
//     });
//   }

//   setActiveArtist(artist, index) {
//     this.setState({
//       currentArtist: artist,
//       currentIndex: index
//     });
//   }

//   removeAllArtists() {
//     DataService.deleteAll()
//       .then(response => {
//         console.log(response.data);
//         this.refreshList();
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

//   searchArtist() {
//     DataService.findByArtistName(this.state.searchArtist)
//       .then(response => {
//         this.setState({
//           artists: response.data
//         });
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

//   render() {
//     const {
//       searchArtist,
//       artists,
//       currentArtist,
//       currentIndex,
//       page,
//       count,
//       pageSize,
//     } = this.state;

//     return (
//       <div className="list row">
//         <div className="col-md-6">
//           <div className="input-group mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search by title"
//               value={searchArtist}
//               onChange={this.onChangeSearchArtist}
//             />
//             <div className="input-group-append">
//               <button
//                 className="btn btn-outline-secondary"
//                 type="button"
//                 onClick={this.searchArtist}
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-12">
//           <h4>Artists List</h4>

//           <div className="mt-3">
//             {"Items per Page: "}
//             <select onChange={this.handlePageSizeChange} value={pageSize}>
//               {this.pageSizes.map((size) => (
//                 <option key={size} value={size}>
//                   {size}
//                 </option>
//               ))}
//             </select>

//             <Pagination
//               className="my-3"
//               count={count}
//               page={page}
//               variant="outlined"
//               shape="rounded"
//               onChange={this.handlePageChange}
//             />
//           </div>
//           <div className="table-responsive">
//             <table class="table table-striped table-hover">
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Nom </th>
//                   <th>Téléphone</th>
//                   <th>Id </th>
//                   <th>Etat </th>
//                   <th>Voeux créés </th>
//                   <th>Voeux en attentes </th>
//                   <th>Solde à verser </th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {artists ? (
//                   artists.map((artist, index) => (
//                     <tr className={(index === currentIndex ? "active" : "")} 
//                     onClick={() => this.setActiveArtist(artist, index)}
//                     key={index}>
//                       <td>{artist.idartist}</td>
//                       <td>{artist.artistName}</td>
//                       <td>{artist.phone}</td>
//                       <td>{artist.IDArtiste}</td>
//                       <td>{artist.validation}Validé</td>
//                       <td>{artist.vowCreate}13</td>
//                       <td>{artist.vowPending}09</td>
//                       <td>{artist.price}1235 Є</td>
//                       <td>
//                         <a href="#" class="edit" title="Edit" data-toggle="tooltip" style={{ color: "black" }}><i class="material-icons">&#xE254;</i></a>
//                         <a href="#" onClick={this.removeAllArtists} class="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i class="material-icons">&#xE872;</i></a>

//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={5} class="text-center">
//                       No artists
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//           <ul className="list-group">
//             {artists &&
//               artists.map((artist, index) => (
//                 <li
//                   className={"list-group-item " + (index === currentIndex ? "active" : "")}
//                   onClick={() => this.setActiveArtist(artist, index)}
//                   key={index}
//                 >
//                   {artist.artistName}
//                 </li>
//               ))}
//           </ul>

//           <button
//             className="m-3 btn btn-sm btn-danger"
//             onClick={this.removeAllArtists}
//           >
//             Remove All
//           </button>
//         </div>
//         <div className="col-md-6">
//           {currentArtist ? (
//             <div>
//               <h4>Artist</h4>
//               <div>
//                 <label>
//                   <strong>Nom:</strong>
//                 </label>{" "}
//                 {currentArtist.artistName}
//               </div>
//               <div>
//                 <label>
//                   <strong>Téléphone:</strong>
//                 </label>{" "}
//                 {currentArtist.phone}
//               </div>
//               <div>
//                 <label>
//                   <strong>Etat:</strong>
//                 </label>{" "}
//                 {currentArtist.validation ? "Validé" : "Non validé"}
//               </div>

//               <Link
//                 to={"/artists/" + currentArtist.id}
//                 className="badge badge-warning"
//               >
//                 Edit
//               </Link>
//             </div>
//           ) : (
//             <div>
//               <br />
//               <p>Please click on a Artist...</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }