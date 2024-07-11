import logo from './logo.svg';
import './App.css';
import Records from "./records.json";
import educations from './education.json';

function App() {
  return (
    <div className='App'>
      <div className='basicInfo'>
        <span className='name'> Shayan Saeed </span>
        <div className='contactInfo'>
          <span className='infoCred'> Riyadh, Saudi Arabia</span>
          <br></br>
          <span className='infoCred'> +966 (0) 566 536 727 </span>
        </div>
      </div>
      <br></br>
      <span className='header-box'> SKILLS </span>
      <span className='container-header'><p> Experience in Auditing. Web Development and Computer programming.
      Talented in many sports such as cricket, hockey, and rugby. </p></span>
      <span className='header-box'> EXPERIENCE </span>
      {
      Records.map( record => {
        return(
          
          <div className='border' key={ record.id }>
              <span className='firmIdent'> <strong> { record.firm } </strong> </span>
            
            <div className='duration'>
              { record.start } -
              { record.end }
            </div>

            <div className='work'>
              { record.work }
            </div>
          </div>
        )
      })
    }
    <div className='educationBox'>
      <span className='header-box'> EDUCATION </span>
      {
        educations.map( education => {
          return(

            <div className='border' key={ education.id }>
              <span className='firmIdent'> <strong> { education.school } </strong></span>

              <div className='duration'>
                {education.start_date} - { education.end_date }
              </div>
            </div>


          )
        })
      }
    </div>

    <div className='awardBox'>
      <span className='header-box'> AWARDS </span>

      <div className='border push'>
        <p> Shaukat Khanum Cancer Hospital & Research Center Student Ambassador </p>
        <p> Hum Mashal-e-Rah Student Ambassador </p>
      </div>
    </div>
    </div>
  );
}

export default App;
