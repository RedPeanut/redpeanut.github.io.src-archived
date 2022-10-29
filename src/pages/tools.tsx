import { PageProps } from "gatsby"
import React, { Component } from "react"
import { connect } from "react-redux";

import { MainLayout } from "../components/Layout"
import CategoryListItems from "../components/CategoryListItems"
import ColorConverter from "../tools/color/converter"
import DateCalculator from "../tools/calculator/date"
import JsonBeautifier from "../tools/beautifier/json"
import { CategoryListType, CategoryListItemType } from "../types"

interface Props extends PageProps {
  searchVal: string
  category: string
  module: string
  onSetSearchVal: Function
}

class Tools extends React.Component<Props> {

  tools: CategoryListType[] = [
    {
      category: "color",
      items: [
        {
          label: "Color Converter",
          module: "converter",
        },
      ]
    },
    {
      category: "calculator",
      items: [
        {
          label: "Date Calculator",
          module: "date",
        },
      ]
    },
    {
      category: "beautifier",
      items: [
        {
          label: "Json Beautifier",
          module: "json",
        },
      ]
    },
    {
      category: "category",
      items: [
        { 
          label: "Tool1 Category", 
          module: "tool1",
        },
        {
          label: "Tool2 Category", 
          module: "tool2",
        },
        {
          label: "Tool3 Category", 
          module: "tool3",
        },
      ]
    },
  ];

  constructor(props) {
    super(props);
  }

  render() {

    const _category = this.props.category || "color";
    const _module = this.props.module || "converter";

    return (
      <MainLayout index={3}>
        <div className="tools">
          <div className="left aside">
            <div className="search">
              <input className="searchInput" type="text" name="search" placeholder="Search..."
                onKeyPress={(e) => {
                  if(e.key == "Enter") { 
                    //requestSearch('.util.use-top .searchInput');
                  }
                }}
                onChange={(e) => {
                  //const inputValue = e.target.value;
                  //this.setState({searchVal: e.target.value});
                  this.props.onSetSearchVal(e.target.value);
                }}
              />
            </div>
            {
              this.tools.map(({category, items}, i) => (
                <div key={category} className="">
                  <span className="label">{category.substring(0,1).toUpperCase()+category.substring(1)}</span>
                  <CategoryListItems categoryProp={category} items={items}/>
                </div>
              ))
            }
          </div>
          <div className="right content">
            {
              _category === "color" ? (
                _module === "converter" ? <ColorConverter/> : null
              )
              : _category === "calculator" ? (
                _module === "date" ? <DateCalculator/> : null
              )
              : _category === "beautifier" ? (
                _module === "json" ? <JsonBeautifier/> : null
              )
              : null
            }
          </div>
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchVal: state.tools.searchVal,
    category: state.tools.category,
    module: state.tools.module,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSearchVal: (v) => dispatch({ type: "SET_SEARCH_VAL", v }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);