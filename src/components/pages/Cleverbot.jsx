import React, { Component, Fragment } from 'react'
import './Cleverbot.css'
import {
  TextInput,
  FormField,
  Button,
  Table,
  Heading,
  Select
} from 'evergreen-ui'
import localStorage from 'local-storage'
import { botService, currencyDiscovery } from '../../services'

class Cleverbot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      botName: "",
      currencyCode: "",
      initialCapital: "",
      shortPeriod: "",
      longPeriod: "",
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
    currencyCodes.push(this.state.currencyCode)
    this.setState({currency_codes: currencyCodes})
    localStorage.set("bots", this.state.currencyCodes)

    botService().create({
      name: this.state.botName,
      currency_code: this.state.currencyCode,
      money: parseFloat(this.state.initialCapital).toFixed(2),
      short_period: this.state.shortPeriod,
      long_period: this.state.longPeriod
    }).then((response) => {
      botService().list({currency_codes: localStorage.get("bots")}).then((response) => {
        this.populateBots(response.data.bots)
      })
    })

    this.setState({
      botName: "",
      currencyCode: "",
      initialCapital: "",
      shortPeriod: "",
      longPeriod: ""
    })
  }

  getIntentBasedOnOrderType(orderType) {
    return orderType === "buy" ? "success" : "danger"
  }

  getOrderNameBasedOnType(orderType) {
    return orderType === "buy" ? "COMPRA" : "VENDA"
  }

  renderBots() {
    const bots = this.state.bots

    if (this.state.currencyCodes.length > 0) {
      setTimeout(
        () => (
          botService().list({currency_codes: this.state.currencyCodes}).then((response) => {
            this.populateBots(response.data.bots)
          })),
        10000
      );

    }

    return bots.map(bot =>
      (
        <Fragment>
          <div className="bot">
            <Heading size={100} marginTop="default">Robô {bot.bot.name} operando {currencyDiscovery.getCurrency(bot.bot.currency_code)}</Heading>

            <div className="orders">
              { bot.orders.map(order => (
                <Table.Row key={bot.name} intent={this.getIntentBasedOnOrderType(order.type)}  margin={5} >
                  <Table.TextCell>Ordem de {this.getOrderNameBasedOnType(order.type)} realizada valor de: R$ {order.price} </Table.TextCell>
                </Table.Row>
              )) }
            </div>
            <div className="totals">
              <Heading size={100} marginTop="default">Total Acumulado(R$): {bot.bot.money + (bot.orders_total)}</Heading>
              <Heading size={100} marginTop="default">Lucro/Prejuizo(R$): {bot.orders_total}</Heading>
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
                value={this.state.botName}
              />
            </FormField>
            <FormField label="Capital inicial" labelFor="initialCapital">
              <TextInput
                name="initialCapital"
                onChange={e => this.setState({ initialCapital: e.target.value })}
                value={this.state.initialCapital}
              />
            </FormField>
            <FormField label="Simbolo do criptoativo" labelFor="currencyCode">
                <Select value={this.state.currencyCode} onChange={event => this.setState({ currencyCode: event.target.value })}>
                  { currencyDiscovery.getAllCurrenciesKeys().map(key =>
                    <option value={key}>{currencyDiscovery.getCurrency(key)}</option>
                  )}
                </Select>
            </FormField>
            <FormField label="Periodo curto da média movel" labelFor="shortPeriod">
              <TextInput
                name="shortPeriod"
                onChange={e => this.setState({ shortPeriod: e.target.value })}
                value={this.state.shortPeriod}
              />
            </FormField>
            <FormField label="Periodo long da média movel" labelFor="longPeriod">
              <TextInput
                name="longPeriod"
                onChange={e => this.setState({ longPeriod: e.target.value })}
                value={this.state.longPeriod}
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
