
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import axios from 'axios'

import PanelHeader from "../../components/PanelHeader/PanelHeader.jsx";

import { thead, tbody } from "variables/general";

class Admin extends React.Component {
constructor(props){
    super(props);
    this.state = {
        persons : [],
    }
}

componentDidMount(){
    // url = 'http://localhost:8000/sekolah/siswa'
    axios.get('http://localhost:8000/sekolah/siswa/')
        .then(res => {
            const persons = res.data;
            this.setState({persons:persons})
        })
}
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Data Siswa</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <td>NIS</td>
                        <td>Nama</td>
                        <td>Kelas</td>
                        <td>Agama</td>
                        <td>Image</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.persons.map(persons =>
                         <tr key={persons.nis}>
                         <td>
                           {persons.nis}
                         </td>
                         <td>
                           {persons.full_name}
                         </td>
                         <td>
                            {persons.kelas} {persons.jurusan}
                         </td>
                         <td>
                           {persons.Agama}
                         </td>
                         <td>
                           a
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

export default Admin;
