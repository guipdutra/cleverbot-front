import React, { Component } from 'react'
import './Cleverbot.css'
import {
  TextInput,
  FormField,
  Button,
  Table,
  Heading
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
          <div className="bot">
            <Heading size={100} marginTop="default">Robô Teste2 operando BTC_ETH</Heading>
            <div className="orders">
              <Table.Row intent="success" margin={5} >
                <Table.TextCell>Ordem de COMPRA realizada no valor de: R$ 2,45</Table.TextCell>
              </Table.Row>
              <Table.Row intent="success" margin={5}>
                <Table.TextCell>Ordem de COMPRA realizada no valor de: R$ 2,45</Table.TextCell>
              </Table.Row>
              <Table.Row intent="danger" margin={5}>
                <Table.TextCell>Ordem de VENDA realizada no valor de: R$ 2,45</Table.TextCell>
              </Table.Row>
              <div className="totals">
                <Heading size={100} marginTop="default">Total Acumulado(R$) 100,00</Heading>
                <Heading size={100} marginTop="default">Lucro/Prejuizo(R$) 100,00</Heading>
              </div>
            </div>
          </div>
          <div className="bot">
            <Heading size={100} marginTop="default">Robô Teste2 operando BTC_ETH</Heading>
            <div className="orders">
              <Table.Row intent="success" margin={5} >
                <Table.TextCell>Ordem de COMPRA feito pel preço de: R$ 2,45</Table.TextCell>
              </Table.Row>
              <Table.Row intent="success" margin={5}>
                <Table.TextCell>Ordem de COMPRA feito pel preço de: R$ 2,45</Table.TextCell>
              </Table.Row>
              <Table.Row intent="danger" margin={5}>
                <Table.TextCell>Ordem de VENDA feito pel preço de: R$ 2,45</Table.TextCell>
              </Table.Row>
              <div className="totals">
                <Heading size={100} marginTop="default">Total Acumulado(R$) 100,00</Heading>
                <Heading size={100} marginTop="default">Lucro/Prejuizo(R$) 100,00</Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cleverbot
