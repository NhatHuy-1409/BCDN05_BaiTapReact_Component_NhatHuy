import React, { Component } from 'react'
import BannerComponent from './Banner/BannerComponent'
import ItemComponent from './Item/ItemComponent'

export default class BodyComponent extends Component {
  render() {
    return (
      <div>
          <BannerComponent/>
          <ItemComponent/>
      </div>
    )
  }
}
