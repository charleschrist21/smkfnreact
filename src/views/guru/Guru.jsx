
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";
import axios from 'axios'

import PanelHeader from "../../components/PanelHeader/PanelHeader.jsx";

import { thead, tbody } from "variables/general";

class Guru extends React.Component {
constructor(props){
    super(props);
    this.state = {
        persons : [],
    }
}

componentDidMount(){
    // url = 'http://localhost:8000/sekolah/siswa'
    axios.get('http://localhost:8000/sekolah/guru/')
        .then(res => {
            const persons = res.data;
            this.setState({persons:persons})
        })
}
  render() {
    const imgguru={
      width:32,
      height:32,
    }
    const tableguru={
      textAlign:'center',
    }
    const icon={
      position: 'relative',
      left: -6,
    }
    const btnDelete={
      backgroundColor:'#F24134',
      width:30
    }
    const btnedit={
      backgroundColor:'#2CA7FD',
      width:30
    }
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Data Guru</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table style={tableguru} responsive>
                    <thead className="text-primary">
                      <tr>
                        <td>NIP</td>
                        <td>Nama</td>
                        <td>Pangkat</td>
                        <td>Status</td>
                        <td>Pendidikan</td>
                        <td>Umur</td>
                        <td>Image</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.persons.map(persons =>
                         <tr key={persons.nip}>
                         <td>
                           {persons.nip}
                         </td>
                         <td>
                           {persons.full_name}
                         </td>
                         <td>
                            {persons.pangkat}
                         </td>
                         <td>
                           {persons.status}
                         </td>
                         <td>
                           {persons.pendidikan}
                         </td>
                         <td>
                           {persons.umur}
                         </td>
                         <td>
                           <img style={imgguru} src={persons.file} alt=""/>
                         </td>
                         <td>
                         <Button style={btnedit}><i style={icon} className="fas fa-pencil-alt"></i></Button>  <Button style={btnDelete}><i style={icon} className="fas fa-trash"></i></Button>
                         </td>
                         </tr>)}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Guru;
