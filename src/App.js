import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import './App.css'
import {Button, Table, InputGroup, Input} from 'reactstrap';

function id() {
    return nanoid(10)
}

function getInitObj() {
    return {
        id: id(),
        numNar: '',
        produce: '',
        lead: '',
        numArm :'',
        dataStart : '',
        dataEnd : ''

    }
}


function App() {

    const initArr = [
        {numNar: ''},
        {produce: ''},
        {lead: ''},
        {numArm : ''},
        {dataStart : ''},
        {dataEnd : ''}
    ]

    const [notes, setNotes] = useState(initArr)
    const [obj, setObj] = useState(getInitObj())
    const res = notes.map(note => {
        return <tr
             key={id()}>
            <td> <span>{note.numNar}</span></td>
            <td> <span>{note.produce}</span></td>
            <td> <span>{note.lead}</span></td>
            <td> <span>{note.numArm}</span></td>
            <td> <span>{note.dataStart}</span></td>
            <td> <span>{note.dataEnd}</span></td>
        </tr>
    })

    function changeProp(prop, event) {
        setObj({...obj, [prop]:event.target.value})

    }

    function addItem() {
        setNotes([...notes, obj])
        setObj(getInitObj())

    }

    return (
        <>
            <InputGroup>
                <p className='p'>Номер наряда </p>
                <Input type="text" value={notes.numNar} onChange={event => changeProp('numNar',event)}/>
                <p className='p'>Производитель</p>
                <Input type="text" value={notes.produce} onChange={event => changeProp('produce',event)}/>
                <p className='p'>Руководитель</p>
                <Input type="text" value={notes.lead} onChange={event => changeProp('lead',event)}/>
                <p className='p' >Номер Арматуры</p>
                <Input type="text" value={notes.numArm} onChange={event => changeProp('numArm',event)}/>
                <p className='p'>Дата начала</p>
                <Input type="text" value={notes.dataStart} onChange={event => changeProp('dataStart',event)}/>
                <p className='p'>Дата окончания</p>
                <Input type="text" value={notes.dataEnd} onChange={event => changeProp('dataEnd',event)}/>
                <Button color='info' onClick={addItem}>save</Button>
                <br/>
            </InputGroup>


         <br/>
            <Table>
                <thead>
                <tr>
                    <th scope='row'>Номер наряда</th>
                    <th scope='row'>Производитель</th>
                    <th scope='row'>Руководитель</th>
                    <th scope='row'>Номер Арматуры</th>
                    <th scope='row'>Дата начал</th>
                    <th scope='row'>Дата окончания</th>
                </tr>
                </thead>
                <tbody>
                {res}
                </tbody>
            </Table>

</>
);
}


export default App;
