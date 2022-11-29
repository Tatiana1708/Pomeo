import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

import './Dasbord.css';
import SideBar from "../../components/Sidebar";
import sidebar_menu from "../../constants/sidebar-menu";
import DashboardHeader from "../../components/DashboardHeader";
import  {getArtists} from "../../utils/api/authRequest";
import {useNavigate } from "react-router-dom";
import EditArtist from '../../components/EditArtist';


function Dashboard() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [artists, setArtists] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const columns = [
    {
      name: '#',
      selector: row => row._id,
      width: '50px'
    },
    {
      name: 'Nom',
      selector: row => row.artistName,
      width: '120px'
    },
    {
      name: 'Téléphone',
      selector: row => row.phone,
      width: '150px'
    },
    {
      name: 'Id',
      selector: row => row.identifiant ,
      width: '160px'
    },
    {
      name: 'Etat',
      selector: row => row.accountValidated,
      width: '100px'
    },
    {
      name: 'Voeux créés',
      selector: row => row.accountValidated,
      width: '110px'
    },
    {
      name: 'Voeux en attentes',
      selector: row => row.accountValidated,
      width: '150px'
    },
    {
      name: 'Solde à verser',
      selector: row => row.price,
      width: '120px'
    },
    {
      name: 'Actions',
      selector: () => <div>
        <span onClick={editArtist}>
          <i className="far fa-edit action mr-2"></i>
        </span>
  
        <span onClick={deleteArtist}>
          <i className="fas fa-trash action"></i>
        </span>
  
      </div>,
      width: '80px'
    },
  ];
  

  useEffect(() => {
    fetchData(2, perPage);
  }, [perPage])

  const fetchData = async (page, per_page) => {
    getArtists()      
      // .then(res => res.json())
      .then((result) => {
          setIsLoaded(true);
          setArtists(result.data);
          setTotalRows(result.total);
        }, (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== '') {
        let search_results = artists?.filter((item) =>
            item.artistName.toLowerCase().includes(search?.toLowerCase()|| '')
            // item.last_name.toLowerCase().includes(search?.toLowerCase()|| '') ||
            // item.artists.toLowerCase().includes(search?.toLowerCase()|| '')
        );
        setArtists(search_results);
    }
    else if(event.target.value === ''){ 
        // __handleChangePage(page);
        setArtists(artists);
    }
  };

  const editArtist = (artistId) => {
    const id = artists.current[artistId].id;
    navigate('/edit');
  };

  const deleteArtist = (artistId) => {
    const id = artists.current[artistId].id;

    getArtists.remove(id)
      .then((response) => {
        navigate("/");

        let newArtists = [...artists.current];
        newArtists.splice(artistId, 1);

        setArtists(newArtists);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const goTo = () => {
    // 👇️ navigate to /
    navigate('/add');
  };


  const handlePageChange = page => {
    fetchData(page, perPage);
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="dashboard-content">
        {/* <DashboardHeader
                btnText="Créer une fiche artiste" 
                onClick={goTo}/>
       <SideBar menu={sidebar_menu} /> */}
        <h5 className="page-title mb-lg"><a href='/'>Accueil</a> {'>'} <span className="fw-semi-bold"><a href='/'>Liste des artists</a></span></h5>
            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>
                <DataTable
                  columns={columns}
                  data={artists}
                  pagination
                  paginationServer
                  paginationTotalRows={totalRows}
                  onChangePage={handlePageChange}
                  onChangeRowsCountPage={handlePerRowsChange}
                />
            </div>
      </div>
    );
  }
}

export default Dashboard;

