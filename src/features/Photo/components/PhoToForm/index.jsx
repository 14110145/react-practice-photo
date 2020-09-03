import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import InputField from "../../../../custom-fields/InputField";
import RandomPhotoField from "../../../../custom-fields/RandomPhotoField";
import SelectField from "../../../../custom-fields/SelectField";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log("Values-Submit:", values)}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Titile"
              placeholder="Eg: Wow nature ..."
            ></FastField>

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category"
              options={PHOTO_CATEGORY_OPTIONS}
            ></FastField>

            <FastField name="photo" component={RandomPhotoField} label="Photo"></FastField>

            <FormGroup>
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
