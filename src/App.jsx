import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Header } from './components/header';
import { useDeteccion } from './hooks/useDeteccion';

export const App = () => {

  const [cadena, setCadena] = useState('')
  const [vrc, setVrc] = useState('')
  const [parity, setParity] = useState([])

  const { obtenerValores, getVRC } = useDeteccion()

  const handleConvert = () => {
    if(cadena === '') return

    const data = obtenerValores(cadena);
    // console.table(data)
    setParity(data);
    const bits = data.map(c => c.bit.split(''));
    const parities = data.map(c => c.parity);
    const wordvrc = getVRC(bits)
    const parity = getVRC(parities)
    const vrc = (wordvrc + parity).slice(0,8)
    setVrc(vrc)


  }


 
  return (
    <>
      <Header />
      <div className="container">
        <div className='captura_datos mt-5'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Ingresar un mensaje'
              onChange={(e) => setCadena(e.target.value)}
              value={cadena}
            />
          </div>
        </div>

        <div>
          {/* <h5>Generador VRC:</h5> */}
          <div className='d-flex justify-content-between mb-3'>
            {/* <div className='fs-1'>10010110</div> */}
            <button type="button" className="btn btn-danger" onClick={handleConvert}>Convertir</button>
          </div>
          <hr/>
        </div>

        <div>
          <h5>Bits de paridad</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Character</th>
                <th scope="col">7 bits</th>
                <th scope="col">LRC</th>
              </tr>
            </thead>
            <tbody>
              {
                parity.length > 0 &&
                parity.map( (c, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{c.val}</td>
                        <td className='bist'> {c.bit} </td>
                        <td className='fw-bold'> {c.parity} </td>
                      </tr>
                ))
              }
            </tbody>
          </table>
        <div className='mb-2'>
          <h5>VRC:</h5>
          <div className='fs-3 text-break alert alert-info'>{vrc}</div>
        </div>
        <hr/>
        </div>
        <div className='mb-2'>
          <h5>Generador LRC</h5>
          <div className='fs-3 text-break alert alert-success'>1001011010010110100101101001011010010110100101101001011010010110</div>
        </div>
        <div>
          <h5>Datos recibidos</h5>
          <div className='fs-1 text-break alert alert-info'>HOLA</div>

        </div>
      </div>
    </>
  );
}
