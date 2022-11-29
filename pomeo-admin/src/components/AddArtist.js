import { Divider, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DataService from "../utils/api/service";
import file from "../assets/images/file.png";
import './AddArtist.css';

const AddArtist = () => {
  const initialArtistState = {
    id: null,
    artistName: "",
    phone: "",
    label: "",
    email: "",
    name: "",
    facebookAccount: "",
    twitterAccount: "",
    youtubeAccount: "",
    published: false
  };
  const [artist, setArtist] = useState(initialArtistState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setArtist({ ...artist, [name]: value });
  };

  const saveArtist = () => {
    var data = {
      artistName: artist.artistName,
      phone: artist.phone,
      label: artist.label,
      email: artist.email,
      name: artist.name,
      facebookAccount: artist.facebookAccount,
      twitterAccount: artist.twitterAccount,
      youtubeAccount: artist.youtubeAccount
    };

    DataService.create(data)
      .then(response => {
        setArtist({
          id: response.data.id,
          artistName: response.data.artistName,
          phone: response.data.phone,
          label: response.data.label,
          email: response.data.email,
          name: response.data.name,
          facebookAccount: response.data.facebookAccount,
          twitterAccount: response.data.twitterAccount,
          youtubeAccount: response.data.youtubeAccount,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const uploadFile(target) {
    document.getElementById("file-name").innerHTML = target.files[0].name;
  };

  const newArtist = () => {
    setArtist(initialArtistState);
    setSubmitted(false);
  };

  return (
    <div> 
      <h5 className="page-title mb-lg"><a href='/'>Accueil</a> {'>'} <span className="fw-semi-bold"><a href='/'>Création d'un artist</a></span></h5>

      <div className="submit-form">
        
        <Tabs>
          <TabList>
            <Tab>Identité</Tab>
            <Tab>Réseau Sociaux</Tab>
            <Tab>Paiements</Tab>
            <Tab>Documents</Tab>
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
                  value={artist.artistName}
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
                  value={artist.phone}
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
                  value={artist.label}
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
                  value={artist.email}
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
                  value={artist.name}
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
                  id="facebook"
                  placeholder="Nom officiel sur Facebook"
                  required
                  value={artist.facebookAccount}
                  onChange={handleInputChange}
                  name="phfacebookone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Twitter</label>
                <input
                  type="text"
                  className="form-control"
                  id="twitter"
                  placeholder="Nom officiel sur Twitter"
                  required
                  value={artist.twitterAccount}
                  onChange={handleInputChange}
                  name="twitter"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Youtube</label>
                <input
                  type="text"
                  className="form-control"
                  id="youtube"
                  placeholder="Nom officiel sur Youtube"
                  required
                  value={artist.youtubeAccount}
                  onChange={handleInputChange}
                  name="youtube"
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
                    value={artist.IBAN}
                    onChange={handleInputChange}
                    name="IBAN"
                  />
                  <input
                    type="text"
                    className="form-control bic"
                    id="BIC"
                    placeholder="BIC"
                    required
                    value={artist.BIC}
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
                    value={artist.mobileMoney}
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
                    type="file"
                    className="form-control"
                    id="identityDocument"
                    placeholder="Document"
                    required
                    value={artist.identityDocument}
                    onChange={handleInputChange}
                    name="identityDocument"
                  />
                  <img src={file} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">Document 2 (RIB) <span>*</span></label>
                <div className="doc">
                  <input
                    type="file"
                    className="form-control"
                    id="ribDoc"
                    placeholder="Indicatif + Téléphone"
                    required
                    value={artist.ribDoc}
                    onChange={handleInputChange}
                    name="ribDoc"
                  />
                  <img src={file} />
                </div>
              </div>
            </div>
            {submitted ? (
                <div>
                  <h4>You submitted successfully!</h4>
                  <button className="btns btn-success" onClick={newArtist}>
                    Ajouter
                  </button>
                </div>
              ) : (
                <div>
                  <button onClick={saveArtist} className="btns btn-success">
                  Ajouter
                  </button>
                </div>

              )}

          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AddArtist;
