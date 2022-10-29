import React, { Component } from "react"
import { connect } from "react-redux";

import { MainLayout } from "../components/Layout"

class Tools extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainLayout index={3}>
        <div className="tools">
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);