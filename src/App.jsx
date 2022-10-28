import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header';

export const App = () => {
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
            />
          </div>
        </div>

        <div>
          <h5>Generador VRC:</h5>
          <div className='d-flex justify-content-between mb-3'>
            <div className='fs-1'>10010110</div>
            <button type="button" className="btn btn-danger">Siguiente</button>
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
              <tr>
                <th scope="row">1</th>
                <td>H</td>
                <td>0101101</td>
                <td className='fw-bold'>0</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className='mb-2'>
          <h5>Generador LRC</h5>
          <div className='fs-1 text-break alert alert-success'>1001011010010110100101101001011010010110100101101001011010010110</div>
        </div>
        <div>
          <h5>Datos recibidos</h5>
          <div className='fs-1 text-break alert alert-info'>HOLA</div>

        </div>
      </div>
    </>
  );
}
