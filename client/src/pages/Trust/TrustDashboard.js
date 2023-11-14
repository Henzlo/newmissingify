import React from "react";
import TrustMenu from "../../components/Layout/TrustMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const TrustDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <TrustMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Trust Name : {auth?.user?.name}</h3>
              <h3> Trust Email : {auth?.user?.email}</h3>
              <h3> Trust Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrustDashboard;
