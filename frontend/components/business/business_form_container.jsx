import { connect } from "react-redux";
import React from "react";
import BusinessForm from "./business_form";
import { createBusiness } from "../../util/businesses_api_util";

const mSTP = state => ({
  business: {
    name: '',
    about: '',
    rating: '',
    address: '',
    hours: '',
    photos: []
  },
  formType: 'Create Business'
})

const mDTP = dispatch => ({
  action: business => dispatch(createBusiness(business))
})

export default connect(mSTP, mDTP)(BusinessForm)