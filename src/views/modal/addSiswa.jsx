import React,{Component} from 'react'

import {Form,Button,Image}  from 'react-bootstrap'

import axios,{post} from 'axios'

import './modal.css'
export default class AddSiswa extends Component{
    constructor(props){
        super(props);
        this.handlechange = this.handlechange.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeAlamat = this.onChangeAlamat.bind(this)
        this.onChangeJurusan = this.onChangeJurusan.bind(this)
        this.onChangeTempatLahir = this.onChangeTempatLahir.bind(this)
        this.onChangeTanggalLahir = this.onChangeTanggalLahir.bind(this)
        this.onChangeAgama = this.onChangeAgama.bind(this)
        this.onChangeJenisKelamin = this.onChangeJenisKelamin.bind(this)
        this.onChangeKelas = this.onChangeKelas.bind(this)
        this.onChangeNoHp = this.onChangeNoHp.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state={
            fullname:'',
            alamat : '',
            jurusan : '',
            tempatlahir : '',
            tanggallahir:'',
            agama:'',
            jeniskelamin:'',
            kelas:'',
            nohp:'',
            email:'',
            img:null,
            file:'',
        }
    }
    onChangeName(e){
        this.setState({
            fullname : e.target.value
        })
    }
    onChangeAlamat(e){
        this.setState({
            alamat : e.target.value
        })
    }
    onChangeJurusan(e){
        this.setState({
            jurusan : e.target.value
        })
    }
    onChangeTempatLahir(e){
        this.setState({
            tempatlahir : e.target.value
        })
    }
    onChangeTanggalLahir(e){
        this.setState({
            tanggallahir : e.target.value
        })
    }
    onChangeAgama(e){
        this.setState({
            agama : e.target.value
        })
    }
    onChangeJenisKelamin(e){
        this.setState({
            jeniskelamin : e.target.value
        })
    }
    onChangeKelas(e){
        this.setState({
            kelas : e.target.value
        })    
    }
    onChangeNoHp(e){
        this.setState({
            nohp : e.target.value
        })
    }
    onChangeEmail(e){
        this.setState({
            email : e.target.value
        })
    }


    handlechange(e){
        this.setState({
            img : URL.createObjectURL(e.target.files[0]),
            file : e.target.files[0]
        })
    }
   

    onSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('full_name', this.state.fullname)
        formData.append('alamat', this.state.alamat)
        formData.append('jurusan', this.state.jurusan)
        formData.append('tempat_lahir', this.state.tempatlahir)
        formData.append('tanggal_lahir', this.state.tanggallahir)
        formData.append('Agama', this.state.agama)
        formData.append('jenis_kelamin', this.state.jeniskelamin)
        formData.append('kelas', this.state.kelas)
        formData.append('no_telpon', this.state.nohp)
        formData.append('email', this.state.email)
        formData.append('file', this.state.file)

       

        axios({
            method: 'post',
            url : 'http://localhost:8000/sekolah/siswa/',
            data : formData,
            headers :{
                'content-type' : 'multipart/form-data',
            }
        })

        
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Full Name" 
                        value={this.state.fullname}
                        onChange={this.onChangeName}
                        required/>
                </Form.Group>
                <Form.Group >
                <Form.Label>Alamat</Form.Label>
                    <br/>
                    <textarea 
                        name="alamat" 
                        id="textarea-add-siswa" 
                        cols="100" 
                        rows="2"
                        value={this.state.alamat}
                        onChange={this.onChangeAlamat}
                        required>  
                    </textarea>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Jurusan</Form.Label>
                    <Form.Control 
                        as="select"
                        value={this.state.jurusan}
                        onChange={this.onChangeJurusan}
                        >
                            <option value="TKJ">TKJ</option>
                            <option value="MM">MM</option>
                            <option value="AKL">AKL</option>
                            <option value="OTKP">OTKP</option>
                            <option value="PS">PS</option>
                            <option value="PM">PM</option>
                            <option value="PDR">PDR</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Tempat lahir</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Tempat Lahir" 
                        value={this.state.tempatlahir}
                        onChange={this.onChangeTempatLahir}
                        />
                </Form.Group>
                <Form.Group>
                <Form.Label>Tanggal lahir</Form.Label>
                <br/>
                <input 
                    type="date" 
                    name="Tanggal lahir"
                    value={this.state.tanggallahir}
                    onChange={this.onChangeTanggalLahir}
                    >
                </input>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Agama</Form.Label>
                    <Form.Control 
                        as="select"
                        value={this.state.agama}
                        onChange={this.onChangeAgama}
                        >
                            <option value="Islam">Islam</option>
                            <option value="Kristen">Kristen</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Budha">Budha</option>
                            <option value="Katolik">Katolik</option>
                            <option value="Konghucu">Konghucu</option>
                            <option value="Lainnya">Lainnya</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <Form.Control 
                        as="select"
                        value={this.state.jeniskelamin}
                        onChange={this.onChangeJenisKelamin}
                        >
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                            <option value="Lainnya">Lainnya</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Kelas</Form.Label>
                    <Form.Control 
                        as="select"
                        value={this.state.kelas}
                        onChange={this.onChangeKelas}
                        >
                            <option value="X">X</option>
                            <option value="XI">XI</option>
                            <option value="XII">XII</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>No Hp</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="No Hp" 
                        value={this.state.nohp}
                        onChange={this.onChangeNoHp}
                        />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="Email" 
                        placeholder="Enter Email" 
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                </Form.Group>
                <Form.Group>
                    <Image className='img-siswa-add' src={this.state.img}/>
                </Form.Group>
                <Form.Group>
                <div className="upload-btn-wrapper">
                    <button className="btn">Upload a file</button>
                    <input 
                        type="file" 
                        name="myfile" 
                        onChange={this.handlechange}/>
                </div>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}
