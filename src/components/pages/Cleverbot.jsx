import React, { Component, Fragment } from 'react'
import './Cleverbot.css'
import {
  TextInput,
  FormField,
  Button,
  Table,
  Heading
} from 'evergreen-ui'
import localStorage from 'local-storage'
import { botService } from '../../services'

class Cleverbot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      botName: "",
      currencyCode: "",
      initialCapital: 0,
      bots: [],
      currencyCodes: [],
    }
  }

  componentDidMount() {
    const bots = localStorage.get('bots')

    botService().list({currency_codes: bots}).then((response) => {
      this.populateBots(response.data.bots)
    })
  }

  populateBots(bots) {
    this.setState({ bots })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let currencyCodes = this.state.currencyCodes
    currencyCodes = currencyCodes.push(148)
    this.setState({currency_codes: currencyCodes})

    localStorage.set('bots', this.state.currencyCodes)

    botService().list({currency_codes: localStorage.get('bots')}).then((response) => {
      this.populateBots(response.data.bots)
    })
  }

  renderBots() {
    const bots = this.state.bots

    return bots.map(bot =>
      (
        <Fragment>
          <div className="bot">
            <Heading size={100} marginTop="default">Robô {bot.bot.name} operando BTC_ETH</Heading>

            <div className="orders">
              { bot.orders.map(order => (
                <Table.Row key={bot.name} intent="success" margin={5} >
                  <Table.TextCell>Ordem de {order.type} realizada no valor de: R$ {order.price} </Table.TextCell>
                </Table.Row>
              )) }
            </div>
            <div className="totals">
              <Heading size={100} marginTop="default">Total Acumulado(R$) 100,00</Heading>
              <Heading size={100} marginTop="default">Lucro/Prejuizo(R$) 100,00</Heading>
            </div>
          </div>
        </Fragment>
      )
    )
  }

  render() {
    return (
      <div className="dashboardPage">
        <div className="botCreation">
          <form onSubmit={this.handleSubmit}>
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

            <Button intent="success" type="submit" className="createButton" appearance="primary">Criar robô</Button>
          </form>
        </div>
        <div className="line">
        </div>
        <div className="botVisualization">
          { this.renderBots() }
        </div>
      </div>
    )
  }
}

export default Cleverbot
