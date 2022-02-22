import React, { Component } from 'react'

export default class ItemComponent extends Component {
  render() {
    return (
      <div className='item'>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="card m-auto" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card m-auto" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card m-auto" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
