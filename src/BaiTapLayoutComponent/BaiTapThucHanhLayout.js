import React, { Component } from 'react'
import BodyComponent from './Body/BodyComponent'
import FooterComponent from './Footer/FooterComponent'
import HeaderComponent from './Header/HeaderComponent'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
          <HeaderComponent/>
          <BodyComponent/>
          <FooterComponent/>
      </div>
    )
  }
}
