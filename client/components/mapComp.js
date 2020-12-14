import React from 'react'

class MapComp extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="center">
          <h1>Which state are you interested in?</h1>
        </div>
        <map>
          <img src="https://images7.alphacoders.com/687/thumb-1920-687665.jpg" />
        </map>
      </div>
    )
  }
}
export default MapComp
