import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContextApi } from '../../context/ContextApi';

const TableUtilisateurGuest = () => {
  const { fetchUtilisateurs, utilisateurs } = useContextApi();

  useEffect(() => {
    fetchUtilisateurs();
  }, []);

  return (
    <>
      {utilisateurs ? (
        <table className="table container mt-5 table-dark table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nom</th>
              <th scope="col">Role</th>
              <th scope="col">Formations inscrites</th>
            </tr>
          </thead>
          <tbody>
            {utilisateurs.map((utilisateur) => (
              <tr key={utilisateur.id}>
                <td>{utilisateur.id}</td>
                <td>{utilisateur.nom}</td>
                <td>{utilisateur.role}</td>
                <td>
                  {utilisateur.formations_inscrites?.map((formation, index) => (
                    <Link key={index} to={`/formation/${formation}`} className="text-light">
                      {formation + ' '}
                    </Link>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-center mt-5 text-light">Loading...</h1>
      )}
    </>
  );
};

export default TableUtilisateurGuest;
