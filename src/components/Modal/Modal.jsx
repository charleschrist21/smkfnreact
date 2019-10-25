import React,{Component} from 'react'
import {Modal,Button} from 'react-bootstrap'

import AddSiswa from '../../views/modal/addSiswa.jsx'

export default class ModalKu extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <Modal
        {...this.props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        >
          <Modal.Header show={this.props.show} >
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.titlemodal}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddSiswa/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>close</Button>
          </Modal.Footer>

        </Modal>

      )
    }
}