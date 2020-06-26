import React, { Component } from "react";
import SvgIcon from '@material-ui/core/SvgIcon';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const scrollToTopStyle = {
  position: "fixed",
  bottom: "10px",
  right: "15px",
  cursor: "pointer",
  background: "rgba(0, 0, 0, 0.3)",
  padding: "10px",
  borderRadius: "8px"
};

export default class ScrollToTop extends Component {


  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div style={scrollToTopStyle} onClick={() => this.scrollToTop()}>
            <SvgIcon component={ExpandLessIcon}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
          </div>
        )}
      </div>
    );
  }
}