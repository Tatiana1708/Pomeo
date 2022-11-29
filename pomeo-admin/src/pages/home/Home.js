import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import '../../App.css';
import SideBar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import Dashboard from "./Dasbord";
import AddArtist from "../../components/AddArtist";
import EditArtist from "../../components/EditArtist";
import sidebar_menu from "../../constants/sidebar-menu";

function Home() {
  const navigate = useNavigate();
  const goTo = () => {
    // 👇️ navigate to /
    navigate('/add');
  };
  return (
     <div className='dashboard-container'>
      <DashboardHeader
                btnText="Créer une fiche artiste" 
                onClick={goTo}/>
       <SideBar menu={sidebar_menu} />
         <div className='dashboard-body'>
             <Routes>
                 <Route path="/" element={<Dashboard/>}  />
                 <Route exact path="/add" element={<AddArtist/>} />
                 <Route exact path="/edit" element={<EditArtist/>} />
                 <Route exact path="/profile" element={<div></div>} />
             </Routes>
         </div>
     </div>
  );
}

export default Home;

// import React, {useState, useEffect} from 'react';
// import {useNavigate } from "react-router-dom";
// import {calculateRange, sliceData} from '../../components/table-pagination';
// import ReactPaginate from 'react-paginate';
// import  {getArtists} from "../../utils/api/authRequest";

// import './Home.css';
// import DoneIcon from '../../assets/icons/done.svg';
// import CancelIcon from '../../assets/icons/cancel.svg';

// function Home() {
//     const [search, setSearch] = useState('');
//     const [artists, setArtists] = useState([]);
//     const [page, setPage] = useState(1);
//     const [pagination, setPagination] = useState([]);

//     const navigate = useNavigate();
    
//     useEffect(() => {
//         setPagination(calculateRange(artists, 5));
//         getArtists(artists, page, 5)
//           .then(response => {
//             setArtists(response.data);
//             setPage(response.length);
//           })
//           .catch(error => console.log(error));
//         getArtists();
//         setPagination();
//     }, [getArtists, setPagination]);

//     // Search
//     const __handleSearch = (event) => {
//         setSearch(event.target.value);
//         if (event.target.value !== '') {
//             let search_results = artists?.filter((item) =>
//                 item.artistName.toLowerCase().includes(search?.toLowerCase()|| '')
//                 // item.last_name.toLowerCase().includes(search?.toLowerCase()|| '') ||
//                 // item.artists.toLowerCase().includes(search?.toLowerCase()|| '')
//             );
//             setArtists(search_results);
//         }
//         else if(event.target.value === ''){ 
//             // __handleChangePage(page);
//             setArtists(artists);
//         }
//     };

//     const editArtist = (artistId) => {
//         const id = artists.current[artistId].id;
//         navigate('/edit');
//     };
    
//       const deleteArtist = (artistId) => {
//         const id = artists.current[artistId].id;
    
//         getArtists.remove(id)
//           .then((response) => {
//             navigate("/");
    
//             let newArtists = [...artists.current];
//             newArtists.splice(artistId, 1);
    
//             setArtists(newArtists);
//           })
//           .catch((e) => {
//             console.log(e);
//           });
//       };
    

//     // Change Page 
//     const __handleChangePage = (new_page) => {
//         setPage(new_page);
//         setArtists(sliceData(artists, new_page, 5));
//     }

//     return(
//         <div className='dashboard-content'>
//             <h5 className="page-title mb-lg"><a href='/'>Accueil</a> {'>'} <span className="fw-semi-bold"><a href='/'>Liste des artists</a></span></h5>
//             <div className='dashboard-content-container'>
//                 <div className='dashboard-content-header'>
//                     <div className='dashboard-content-search'>
//                         <input
//                             type='text'
//                             value={search}
//                             placeholder='Search..'
//                             className='dashboard-content-input'
//                             onChange={e => __handleSearch(e)} />
//                     </div>
//                 </div>

//                 <table>
//                     <thead>
//                         <th>#</th>
//                         <th>Nom </th>
//                         <th>Téléphone</th>
//                         <th>Id </th>
//                         <th>Etat </th>
//                         <th>Voeux créés </th>
//                         <th>Voeux en attentes </th>
//                         <th>Solde à verser </th>
//                         <th>Actions</th>
//                     </thead>
//                     {artists ?
//                         <tbody>
//                             {artists?.map((artist, index) => (
//                                 <tr key={index}>
//                                     <td><span>{artist.index}</span></td>
//                                     <td>
//                                         <div>
//                                             <img 
//                                                 src={artist.avatar}
//                                                 className='dashboard-content-avatar'
//                                                 alt='' />
//                                             <span>{artist.artistName} {artist.last_name}</span>
//                                         </div>
//                                     </td>
//                                     <td><span>{artist.phone}</span></td>
//                                     <td><span>{artist.IDArtiste}</span></td>
//                                     <td>
//                                         <div>
//                                             {artist.accountValidated === 'Paid' ?
//                                                 <img
//                                                     src={DoneIcon}
//                                                     alt='paid-icon'
//                                                     className='dashboard-content-icon' />
//                                             : artist.accountValidated === 'Canceled' ?
//                                                 <img
//                                                     src={CancelIcon}
//                                                     alt='canceled-icon'
//                                                     className='dashboard-content-icon' />
//                                             : null}
//                                             <span>{artist.accountValidated}</span>
//                                         </div>
//                                     </td>           
//                                     <td><span>${artist.price}</span></td>
//                                     <td><span>${artist.price}</span></td>
//                                     <td><span>${artist.price}</span></td>
//                                     <td>
//                                         <div>
//                                             <span onClick={() => editArtist()}>
//                                                 <i className="far fa-edit action mr-2"></i>
//                                             </span>

//                                             <span onClick={() => deleteArtist()}>
//                                                 <i className="fas fa-trash action"></i>
//                                             </span>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     : artists}
//                 </table>
//                 {artists ? (
//                     <ReactPaginate
//                         pageCount={page}
//                         pageRange={2}
//                         marginPagesDisplayed={2}
//                         onPageChange={__handleChangePage}
//                         containerClassName={'container'}
//                         previousLinkClassName={'page'}
//                         breakClassName={'page'}
//                         nextLinkClassName={'page'}
//                         pageClassName={'page'}
//                         disabledClassNae={'disabled'}
//                         activeClassName={'active'}
//                     />
//                 ) : (
//                     <div>Nothing to display</div>
//                 )} 
//                 {/* {artists ?
//                     <div className='dashboard-content-footer'>
//                         <div style={{marginRight:"900px"}}>
//                             <span>
//                                 <strong>
//                                     {page} - {page}
//                                 </strong>{" "}
//                             </span>
//                             <span>
//                                 /{" "}
//                                 <input
//                                     type="number"
//                                     defaultValue={page}
//                                     onChange={(e) => {
//                                         const pageNumber = e.target.value
//                                             ? Number(e.target.value) - 1
//                                             : 0;
//                                         __handleChangePage(pageNumber)
//                                     }}
//                                     style={{ width: "50px" }}
//                                 />
//                             </span>{" "}
                            
//                         </div>
//                         <select
//                                 value={page}
//                                 onChange={(e) => setPage(Number(e.target.value))}
//                             >
//                                 {[10, 25, 50]?.map((page) => (
//                                     <option key={page} value={page}>
//                                         {page}
//                                     </option>
//                                 ))}
//                             </select>
//                         <button>
//                             {"<"}
//                         </button>{" "}

//                         {pagination?.map((item, index) => (
//                             <span
//                                 key={index}
//                                 className={item === page ? 'active-pagination' : 'pagination'}
//                                 onClick={() => __handleChangePage(item)}>
//                                 {item}
//                             </span>
//                         ))}
//                         <button >
//                             {">"}
//                         </button>{" "}

//                     </div>
//                     :
//                     <div className='dashboard-content-footer'>
//                         <span className='empty-table'>No data</span>
//                     </div>
//                 } */}
//             </div>
//         </div>
//     )
// }

// export default Home;