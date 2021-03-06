import React from "react";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhoToForm";
import "./styles.scss";

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" />
      <div className="photo-edit__form">
        <PhotoForm onSubmit={(values) => console.log("Form submit: ", values)}></PhotoForm>
      </div>
    </div>
  );
}
export default AddEditPage;
