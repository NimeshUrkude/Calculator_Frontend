import './App.css';
import reactnativelogo from "./Icons/reactnativelogo.png";
import flutterlogo from "./Icons/flutterlogo.png";
import app from "./Icons/app.png";
import calculator from "./Icons/calculator.jpeg";

function App() {
  return (
    <div className='app_div'>

    <p className='heading'>Calculator app comparison created with react native and flutter.</p>

      <div className='tablefull'>
      <table class="comparison-table">
        <thead>
          <th>&nbsp;</th>
          <th><img src={flutterlogo}/></th>
          <th><img src={reactnativelogo}/></th>
        </thead>
        <tbody>
          <tr>
            <td>Release Date</td>
            <td>May 2017</td>
            <td>March 2015</td>
          </tr>
          <tr>
            <td>Backed By</td>
            <td>Google</td>
            <td>Facebook</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>Dart</td>
            <td>Javascript</td>
          </tr>
          <tr>
            <td>Apk Size</td>
            <td>5.4 MB</td>
            <td>18.1 MB</td>
          </tr>
          <tr>
            <td>App Size</td>
            <td>16.8 MB</td>
            <td>38.0 MB</td>
          </tr>
          <tr>
            <td>App Open Time</td>
            <td>0.58 Sec</td>
            <td>0.73 Sec</td>
          </tr>
          <tr>
            <td>Difficulty</td>
            <td>⭐⭐⭐⭐</td>
            <td>⭐⭐⭐</td>
          </tr>
          <tr>
            <td>Time To Build</td>
            <td>⭐⭐⭐⭐</td>
            <td>⭐⭐</td>
          </tr>
          <tr>
            <td>Apk Link</td>
            <td><a href="https://drive.google.com/file/d/1nYDaNSzaAuz4NhoT6USWah_LIxbkIlVa/view?usp=share_link"><img src={app}/></a></td>
            <td><a href="https://drive.google.com/file/d/1RVNtHL2i99XlXtgyzaIcDY6fV2h9Elgh/view?usp=share_link"><img src={app}/></a></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    );
}

export default App;
