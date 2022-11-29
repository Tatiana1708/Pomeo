import React, { useState, useEffect } from "react";
import { Divider, IconButton } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import DataService from "../utils/api/service";
import file from "../assets/images/file.png";

const EditArtist = props => {
  const initialArtistState = {
    id: null,
    artistName: "",
    phone: "",
    label: "",
    email: "",
    name: "",
    published: false
  };
  const [currentArtist, setCurrentArtist] = useState(initialArtistState);
  const [message, setMessage] = useState("");
  const params = useParams();


  const getArtist = id => {
    DataService.get(id)
      .then(response => {
        setCurrentArtist(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getArtist(params.id);
  }, [params.id]);

  const handleInputChange = event => {
    const { artistName, value } = event.target;
    setCurrentArtist({ ...currentArtist, [artistName]: value });
  };

  const updateArtist = status => {
    var data = {
      id: currentArtist.id,
      artistName: currentArtist.artistName,
      phone: currentArtist.phone,
      label: currentArtist.label,
      email: currentArtist.email,
      name: currentArtist.name,
      published: status
    };

    DataService.update(currentArtist.id, data)
      .then(response => {
        setCurrentArtist({ ...currentArtist, published: status });
        console.log(response.data);
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  // const updateArtist = () => {
  //   DataService.update(currentArtist.id, currentArtist)
  //     .then(response => {
  //       console.log(response.data);
  //       setMessage("The Artist was updated successfully!");
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  return (
    <div>
    <h5 className="page-title mb-lg"><a href='/'>Accueil</a> {'>'} <span className="fw-semi-bold"><a href='/'>Modification d'un artist</a></span></h5>

    <div className="submit-form">
      
      <Tabs>
        <TabList>
          <Tab>Identité</Tab>
          <Tab>Réseau Sociaux</Tab>
          <Tab>Paiements</Tab>
          <Tab>Documents</Tab>
          <Tab>Versements</Tab>
        </TabList>

        <TabPanel>
          {/* <div> */}
            <div className="form-group">
              <label htmlFor="title">Nom d'artist <span>*</span></label>
              <input
                type="text"
                className="form-control"
                id="artistName"
                placeholder="Nom officiel sur les Réseau Sociaux"
                required
                value={currentArtist.artistName}
                onChange={handleInputChange}
                name="artistName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Numéro de téléphone <span>*</span></label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Indicatif + Numéro de téléphone"
                required
                value={currentArtist.phone}
                onChange={handleInputChange}
                name="phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">LABEL</label>
              <input
                type="text"
                className="form-control"
                id="label"
                placeholder="« Indépendant » si artist indépendant"
                required
                value={currentArtist.label}
                onChange={handleInputChange}
                name="label"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Email <span>*</span></label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="nio@jamrecord.com"
                required
                value={currentArtist.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Nom et prénom <span>*</span></label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Renseigner à partir d'un document d'identité"
                required
                value={currentArtist.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
          {/* </div> */}
        </TabPanel>
        <TabPanel>
          <div>
            <h2></h2>
            <div className="form-group">
              <label htmlFor="description">Facebook <span>*</span></label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Nom officiel sur Facebook"
                required
                value={currentArtist.phone}
                onChange={handleInputChange}
                name="phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Twitter</label>
              <input
                type="text"
                className="form-control"
                id="label"
                placeholder="Nom officiel sur Twitter"
                required
                value={currentArtist.label}
                onChange={handleInputChange}
                name="label"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Youtube</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nom officiel sur Youtube"
                required
                value={currentArtist.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
          </div>

        </TabPanel>
        <TabPanel>
          <div>
            <h2></h2>
            <div className="form-group">
              <label htmlFor="description">Bancaire</label>
              <div className="bancaire">
                <input
                  type="text"
                  className="form-control"
                  id="IBAN"
                  placeholder="IBAN"
                  required
                  value={currentArtist.IBAN}
                  onChange={handleInputChange}
                  name="IBAN"
                />
                <input
                  type="text"
                  className="form-control bic"
                  id="BIC"
                  placeholder="BIC"
                  required
                  value={currentArtist.BIC}
                  onChange={handleInputChange}
                  name="BIC"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Mobile</label>
              <div className="mobile">
                <select className="form-control">
                  <option value="iphone">Orange Money</option>
                  <option value="samsung">Mtn Money</option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  placeholder="Indicatif + Téléphone"
                  required
                  value={currentArtist.label}
                  onChange={handleInputChange}
                  name="mobile"
                />
              </div>
            </div>
          </div>

        </TabPanel>
        <TabPanel>
          <div>
            <div className="form-group">
              <label htmlFor="description">Document 1 (CNI/Passport) <span>*</span></label>
              <div className="doc">
                <input
                  type="text"
                  className="form-control"
                  id="doc"
                  placeholder="Document"
                  required
                  value={currentArtist.IBAN}
                  onChange={handleInputChange}
                  name="doc"
                />
                <img src={file} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Document 2 (RIB) <span>*</span></label>
              <div className="doc">
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  placeholder="Indicatif + Téléphone"
                  required
                  value={currentArtist.label}
                  onChange={handleInputChange}
                  name="mobile"
                />
                <img src={file} />
              </div>
            </div>
          </div>

        </TabPanel>
        <TabPanel>
          <p>1235 $</p>
          <div>
            <div className="form-group">
              <label htmlFor="description">Document 1 (CNI/Passport) <span>*</span></label>
              <div className="doc">
                <input
                  type="text"
                  className="form-control"
                  id="doc"
                  placeholder="Document"
                  required
                  value={currentArtist.IBAN}
                  onChange={handleInputChange}
                  name="doc"
                />
                <img src={file} />
              </div>
            </div>
            {/* {submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className="btns btn-success" onClick={newArtist}>
                  Add
                </button>
              </div>
            ) : ( */}
              <div>
                <button onClick={updateArtist} className="btns btn-success">
                  Verser
                </button>
              </div>

            {/* )} */}
            <div>
            <p>Historique des Versements</p>
            <Divider />
            <Divider className=""/>
            <p>1235 02/04/2022</p>
            <p>1235 02/04/2022</p>
            <p>1235 02/04/2022</p>
            <p>1235 02/04/2022</p>
            </div>
            <div>
              
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </div>

    // <div>
    //   {currentArtist ? (
    //     <div className="edit-form">
    //       <h4>Artist</h4>
    //       <form>
    //       <div className="form-group">
    //         <label htmlFor="title">Nom d'artist</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="artistName"
    //           required
    //           value={currentArtist.artistName}
    //           onChange={handleInputChange}
    //           name="artistName"
    //         />
    //       </div>

    //         <div className="form-group">
    //           <label>
    //             <strong>Validation</strong>
    //           </label>
    //           {currentArtist.published ? "Validé" : "Non validé"}
    //         </div>
    //       </form>

    //       {currentArtist.published ? (
    //         <button
    //           className="badge badge-primary mr-2"
    //           onClick={() => updatePublished(false)}
    //         >
    //           Non validé
    //         </button>
    //       ) : (
    //         <button
    //           className="badge badge-primary mr-2"
    //           onClick={() => updatePublished(true)}
    //         >
    //           Validé
    //         </button>
    //       )}

    //       <button className="badge badge-danger mr-2" onClick={deleteArtist}>
    //         Delete
    //       </button>

    //       <button
    //         type="submit"
    //         className="badge badge-success"
    //         onClick={updateArtist}
    //       >
    //         Update
    //       </button>
    //       <p>{message}</p>
    //     </div>
    //   ) : (
    //     <div>
    //       <br />
    //       <p>Please click on a Artist...</p>
    //     </div>
    //   )}
    // </div>
  );
};

export default EditArtist;
