
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
  Pagination,
} from "reactstrap";
import axios from 'axios'

import PanelHeader from "../../components/PanelHeader/PanelHeader.jsx";
import ModalKu from "../../components/Modal/Modal.jsx"

import { thead, tbody } from "variables/general";

class Siswa extends React.Component {
  interval =null;
constructor(props){
    super(props);
    this.onClickAdd = this.onClickAdd.bind(this)
    this.onClickClose = this.onClickClose.bind(this)
    this.state = {
        persons : [],
        show : false,
        setShow : false,
        title : 'siswaupdate',
    }
}
onClickAdd(){
  this.setState({show: true})
}
onClickClose(){
  this.setState({show: false})
}

componentDidMount(){
    this.getData();
    this.interval = setInterval(this.getData, 5000);  
}
componentWillMount(){
  clearInterval(this.interval)
}

getData=()=>{
  axios.get('http://localhost:8000/sekolah/siswa/')
        .then(res => {
            const persons = res.data;
            this.setState({persons:persons})
        })
}
onDelete = (e) => {

  axios.delete(`http://192.168.5.224:5000/api/warung/food/${e}`)

  }
  render() {

    const imga={
      width:32,
      height:32,
    }
    const tablesiswa={
      textAlign:'center',
    }
    const btnadd={
      fontSize:12,
      height:35,
      backgroundColor: '#6BCF15'
    }
    const btnedit={
      backgroundColor:'#2CA7FD',
      width:30
    }
    const icon={
      position: 'relative',
      left: -6,
    }
    const btnDelete={
      backgroundColor:'#F24134',
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
                  <CardTitle tag="h4" >Data Siswa <Button onClick={this.onClickAdd} style={btnadd} >Add <i className="fas fa-plus"></i></Button></CardTitle>
                </CardHeader>

                <CardBody>
                  <Pagination>
                  <Table style={tablesiswa} responsive>
                    <thead className="text-primary">
                      <tr>
                        <td>NIS</td>
                        <td>Nama</td>
                        <td>Kelas</td>
                        <td>Agama</td>
                        <td>Image</td>
                        <td>Action</td>
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
                           <img style={imga} src={persons.file} alt=""/>
                         </td>
                         <td>
                           <Button style={btnedit}><i style={icon} className="fas fa-pencil-alt"></i></Button>  <Button style={btnDelete} > <i style={icon} className="fas fa-trash"></i> </Button>
                         </td>
                         </tr>)}
                    </tbody>
                  </Table>
                  </Pagination>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <ModalKu show={this.state.show} close={this.onClickClose} titlemodal={this.state.title}/>
        </div>
        
      </>
    );
  }
}


export default Siswa;
