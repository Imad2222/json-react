import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContextApi } from '../../context/ContextApi';
import { Select } from '@chakra-ui/react';

const TableFormationParticip = () => {
  const { fetchFormations, formations, searchByDomaine, searchByNiveau, user, inscriFormation } = useContextApi();
  const [searchByValue, setSearchByValue] = useState(null);

  useEffect(() => {
    fetchFormations();
  }, [user]);

  return (
    <>
      <div className='d-flex flex-column align-items-start w-100'>
        <div className='mt-3 d-flex gap-2'>
          <div className='d-flex gap-3 align-items-center justify-content-center'>
            <Select
              onChange={(e) => !e.target.value ? setSearchByValue(null) : setSearchByValue(searchByDomaine(e.target.value))}
              variant='filled'
              placeholder='Domaine'
              style={{ backgroundColor: 'black', color: 'green' }}
            >
              <option value="Management">Management</option>
              <option value="Informatique">Informatique</option>
              <option value="Design">Design</option>
              
            </Select>
            <Select
              onChange={(e) => !e.target.value ? setSearchByValue(null) : setSearchByValue(searchByNiveau(e.target.value))}
              variant='filled'
              placeholder='Niveau'
              style={{ backgroundColor: 'black', color: 'green'}}
            >
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Avance">Avance</option>
              <option value="Expert">Expert</option>
              
            </Select>
          </div>
        </div>

        {searchByValue && (
          <table className="table container mt-5 table-striped table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Domaine</th>
                <th scope="col">Niveau</th>
                <th scope="col">Descreption</th>
                <th scope="col">Disponible</th>
                <th scope="col">Inscrit</th>
              </tr>
            </thead>
            <tbody>
              {searchByValue.map((formation) => (
                <tr key={formation.id}>
                  <td>{formation.id}</td>
                  <td>{formation.titre}</td>
                  <td>{formation.domaine}</td>
                  <td>{formation.niveau}</td>
                  <td>{formation.description}</td>
                  <td>
                    {formation.disponible ? (
                      <div>
                        <span className="badge custom-badge-success">Disponible</span>

                      </div>
                    ) : (
                      <div>
                        <span className="badge bg-danger">Indisponible</span>
                      </div>
                    )}
                  </td>
                  <td className='text-center'>
                    {formation.disponible && !user.formations_inscrites.includes(formation.id) ? (
                      <div>
                        <button className="btn btn-primary" onClick={() => inscriFormation(formation.id)}>
                          Inscrire
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button className="btn btn-primary disabled">
                          <small>{user.formations_inscrites.includes(formation.id) ? 'Déjà inscrit' : 'Non disponible'}</small>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {formations && searchByValue === null && (
          <table className="table container mt-5 table-striped table-bordered table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Domaine</th>
                <th>Niveau</th>
                <th>Descreption</th>
                <th>Disponible</th>
                <th className='px-5'>Action</th>
              </tr>
            </thead>
            <tbody>
              {formations.map((formation) => (
                <tr key={formation.id}>
                  <td>{formation.id}</td>
                  <td>{formation.titre}</td>
                  <td>{formation.domaine}</td>
                  <td>{formation.niveau}</td>
                  <td>{formation.description}</td>
                  <td>
                    {formation.disponible ? (
                      <div>
                        <span className="badge bg-success">Disponible</span>
                      </div>
                    ) : (
                      <div>
                        <span className="badge bg-danger">Indisponible</span>
                      </div>
                    )}
                  </td>
                  <td className='text-center'>
                    {formation.disponible && !user.formations_inscrites.includes(formation.id) ? (
                      <div>
                        <button className="btn btn-dark" onClick={() => inscriFormation(formation.id)}>
                          Inscrire
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button className="btn btn-dark disabled">
                          <small>{user.formations_inscrites.includes(formation.id) ? 'Déjà inscrit' : 'Non disponible'}</small>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default TableFormationParticip;
