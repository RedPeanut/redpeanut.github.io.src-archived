import React from "react"
import PropTypes from 'prop-types'
import { PageProps } from "gatsby"
import { connect } from "react-redux"
import { CategoryListType, CategoryListItemType } from "../types"

interface Props {

  //active: boolean

  //
  searchVal: string
  category: string
  module: string

  //
  categoryProp: string
  items: CategoryListItemType[]

  onSetCategory: Function
  onSetModule: Function
}

class CategoryListItems extends React.Component<Props> {

  constructor(props) {
    super(props);
  }

  //componentWillMount() {}
  componentDidMount() {}

  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps', nextProps);
    // 컴포넌트가 prop 을 새로 받았을 때 실행됩니다.
    // prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용합니다.
    // 이 안에서 this.setState() 를 해도 추가적으로 렌더링하지 않습니다.
  }

  // Updating - render 전 - componentWillReceiveProps 후 (Props, State 변경시, true만 render 호출)
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate', nextProps, nextState);
    // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
    return true;
  }

  // Updating - render 후 (Props, State 변경시)
  componentDidUpdate(prevProps, prevState) {
    // console.log('shouldComponentUpdate', prevProps, prevState);
  }

  handleClick = (category, module) => {
    this.props.onSetCategory(category);
    this.props.onSetModule(module);
  };

  render() {

    //console.log("items = ", items);
    //const { searchVal, category, module } = this.props;
    const _category = this.props.category || "color";
    const _module = this.props.module || "converter";
    //console.log("_category = ", _category);
    //console.log("_module = ", _module);

    return (
      <ul>
        {
          this.props.items.map(({label, module}, i) => (
            <li key={label}
              className={this.props.categoryProp === _category && module === _module ? "active" : ""}
            >
              {/* <a href={`?category=${this.props.category}&module=${module}`}>{label}</a> */}
              <a href="#nolink" onClick={this.handleClick.bind(null, this.props.categoryProp, module)}>{label}</a>
            </li>
            ))
        }
      </ul>
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
    onSetCategory: (v) => dispatch({ type: "SET_CATEGORY", v }),
    onSetModule: (v) => dispatch({ type: "SET_MODULE", v }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListItems);
