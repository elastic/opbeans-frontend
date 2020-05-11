import React from 'react';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

import { TableLoader, TableFiller } from '../TableLoader';

const DashboardProductsList = ({productsTop}) => {

  return (
      <div className="ui basic segment table-wrapper">
          <h2 className="ui header">Top selling products</h2>

          <TableLoader data={productsTop} />

          <table className="ui celled selectable table">
              <thead>
                  <tr>
                      <th className="Photo-cell">
                          <i className="photo icon"></i>
                      </th>
                      <th>Name</th>
                      <th className="two wide">Sold</th>
                      <th className="three wide">Status</th>
                  </tr>
              </thead>
              <tbody>
                  
                  <TableFiller data={productsTop} />

                  {productsTop.items.map(product =>
                      <tr key={product.id}>
                          <td className="Photo-cell">
                              <img src={`/images/products/${product.sku}.jpg`} alt={`${product.name}`} title={`Photo of ${product.name}`} />
                          </td>
                          <td>
                              <Link to={`/products/${product.id}`}>{product.name}</Link>
                          </td>
                          <td>{product.sold}</td>

                          { product.stock > 0 ? (
                            <td className="positive"><i className="icon checkmark"></i> In stock</td>
                          ) : (
                            <td className="negative"><i className="icon close"></i> Sold out</td>
                          )}
                      </tr>
                  )}
              </tbody>
          </table>
      </div>
  );
};

DashboardProductsList.propTypes = {
  productsTop: PropTypes.object.isRequired
};

export default DashboardProductsList;
