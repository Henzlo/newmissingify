import React from "react";
import TrustMenu from "../../components/Layout/TrustMenu";
import Layout from "../../components/Layout/Layout";

const TrustProfile = () => {
  return (
    <Layout title={"Trust Profile"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <TrustMenu />
          </div>
          <div className="col-md-9">
            <h1>Your Profile</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrustProfile;
