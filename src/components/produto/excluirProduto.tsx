import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  codigo: string;
}

export default class ExcluirProduto extends Component<Props, State> {
  state: State = {
    step: 1,
    codigo: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ codigo: e.target.value });
  };

  next = () => {
    this.setState({ step: 2 });
  };

  back = () => {
    this.props.onHide();
    this.setState({ step: 1, codigo: "" });
  };

  handleConfirm = () => {
    alert("Produto excluído com sucesso!");
    this.props.onHide();
    this.setState({ step: 1, codigo: "" });
  };

  render() {
    const { show } = this.props;
    const { step, codigo } = this.state;

    return (
      <Modal show={show} onHide={this.back} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Excluir Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {step === 1 && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Digite o código do produto a ser excluído</Form.Label>
                <Form.Control
                  type="text"
                  name="codigo"
                  value={codigo}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          )}

          {step === 2 && (
            <p>
              Tem certeza que deseja excluir o produto?
              
              <br />
              Essa ação não poderá ser desfeita.
            </p>
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
          {step > 1 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={() => this.setState({ step: 1 })}
            >
              ⬅ Voltar
            </Button>
          )}
          {step === 1 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.next}
              disabled={!codigo}
            >
              Próximo ➡
            </Button>
          )}
          {step === 2 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.handleConfirm}
            >
              🗑️ Excluir
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}
