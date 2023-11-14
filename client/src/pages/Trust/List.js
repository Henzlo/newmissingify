import React from "react";
import Layout from "../../components/Layout/Layout";
import TrustMenu from "../../components/Layout/TrustMenu";

const List = () => {
  return (
    <Layout title={"Dashboard  List"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <TrustMenu />
          </div>
          <div className="col-md-9">
            <h1> List</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default List;
