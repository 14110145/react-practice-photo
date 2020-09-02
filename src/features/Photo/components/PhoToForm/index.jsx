import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Spinner, Form, Label, Input } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: Wow nature..."></Input>
      </FormGroup>

      <FormGroup>
        <Label for="categoryId">Category</Label>
        <Select
          name="categoryId"
          id="categoryId"
          placeholder="What's your photo category"
          options={PHOTO_CATEGORY_OPTIONS}
        ></Select>
      </FormGroup>

      {/* <FormGroup>
        <Label for="categoryId">Photo</Label>
        <Select
          name="categoryId"
          id="categoryId"
          placeholder="What's your photo category"
          options={PHOTO_CATEGORY_OPTIONS}
        ></Select>
      </FormGroup> */}
    </Form>
  );
}

export default PhotoForm;
