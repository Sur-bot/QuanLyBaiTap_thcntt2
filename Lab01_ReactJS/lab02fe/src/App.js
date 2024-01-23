import './App.css';

function App() {
  return (
    <div className="App"> 
     <h1 className="tieude">Điều Khiển Đèn Led</h1>
     <p className="ledstatus">Led Status:</p>
     <div className="row">
      <div className="col-md6">
        <div>
            <button class="btn btn-primary nutne" type="button">On</button>
        </div>
          <div>
            <button class="btn btn-danger nutne" type="button">Off</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
