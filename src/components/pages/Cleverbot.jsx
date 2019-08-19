import React, { Component } from 'react'
import './Cleverbot.css'
import {
  TextInput,
  FormField,
  Button
} from 'evergreen-ui'

class Cleverbot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      botName: "",
      currencyCode: "",
      initialCapital: 0,
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="dashboardPage">
        <div className="botCreation">
          <form>
            <FormField label="Nome do Robô" labelFor="botName">
              <TextInput
                name="botName"
                onChange={e => this.setState({ botName: e.target.value })}
                value={this.state.value}
              />
            </FormField>
            <FormField label="Capital inicial" labelFor="initialCapital">
              <TextInput
                name="initialCapital"
                onChange={e => this.setState({ initialCapital: e.target.value })}
                value={this.state.value}
              />
            </FormField>
            <FormField label="Simbolo do criptoativo" labelFor="currencyCode">
              <TextInput
                name="currencyCode"
                onChange={e => this.setState({ currencyCode: e.target.value })}
                value={this.state.value}
              />
            </FormField>

            <Button intent="success" className="createButton" appearance="primary">Criar robô</Button>
          </form>
        </div>
        <div className="line">
        </div>
        <div className="botVisualization">
        </div>
        <div className="bots">
          <div cassName="bot">
          </div>
          <div cassName="bot">
          </div>
        </div>
      </div>
    )
  }
}

export default Cleverbot
