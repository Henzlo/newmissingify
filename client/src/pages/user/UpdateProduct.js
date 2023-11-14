import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import toast from "react-hot-toast";
import axios from "axios"; 
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [Address, setAddress] = useState("");
  const [location, setlocation] = useState("");
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [Addharcard, setAddharcard] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

   //get single product
   const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPhone(data.product.phone);
      setPhone(data.product.phone);
      setAddharcard(data.product.Addharcard);
      setAddress(data.product.Address);
      setlocation(data.product.location);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("Address", Address);
      productData.append("location", location);
      productData.append("phone", phone);
      photo && productData.append("photo", photo);
      productData.append("Addharcard", Addharcard);
      productData.append("category", category);
      const { data } = axios.put(
        `/api/v1/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/user/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //delete a product
  const handleDelete = async () => {
    try {
      // accidental delete boton click
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `/api/v1/product/delete-product/${id}`
      );
      toast.success("Product DEleted Succfully");
      navigate("/dashboard/user/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>Update List</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
                value={category}
              >
                {/* form categories show recommander */}
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              {/* photo selection */}
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              {/* image preview */}
              <div className="mb-3">
              {photo ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src={`/api/v1/product/product-photo/${id}`}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              {/* name */}
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Write the name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* discription */}
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="Write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              {/* Address */}
              <div className="mb-3">
                <textarea
                  type="text"
                  value={Address}
                  placeholder=" Permanent address"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              {/* location */}
              <div className="mb-3">
                <textarea
                  type="text"
                  value={location}
                  placeholder=" location "
                  className="form-control"
                  onChange={(e) => setlocation(e.target.value)}
                />
              </div>
                {/* phone */}
              <div className="mb-3">
                <input
                  type="number"
                  value={phone}
                  placeholder="Give active Phone number"
                  className="form-control"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* Addharcard */}
              <div className="mb-3">
                <input
                  type="number"
                  value={Addharcard}
                  placeholder="Addharcard(important)"
                  className="form-control"
                  onChange={(e) => setAddharcard(e.target.value)}
                />
              </div>
              {/* <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div> */}
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>
                  UPDATE LIST
                </button> 
              </div>
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  DELETE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;

