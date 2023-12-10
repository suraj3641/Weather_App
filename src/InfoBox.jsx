import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
const IMG_URL="https://img.freepik.com/free-photo/namibian-sand-storm_181624-8404.jpg?w=1060&t=st=1701611773~exp=1701612373~hmac=ca39669f4d4f272009d16ed6bf5dff7d66f5caea12818fb3da067587496e59bd";
   
let COLD_URL="https://img.freepik.com/free-photo/wide-shot-road-fully-covered-by-snow-with-pine-trees-both-sides-car-traces_181624-3616.jpg?t=st=1701627815~exp=1701628415~hmac=122dbc112fdd23763f97a8167c2bff10fc689c4813485cceba01a1f723df0318";
let HOT_URL="https://img.freepik.com/free-photo/empty-chair-beach_74190-1630.jpg?w=1060&t=st=1701627756~exp=1701628356~hmac=6eea59ae431a39b56e361b514bee8c87300d2f22dee36d090756fc953e4dadf5";
let RAIN_URL="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?w=1060&t=st=1701627884~exp=1701628484~hmac=ba0a03afde9c53c4a6dbaf9ca693feb91cbe14fd605654dc91004c02f0f36cfe";



    return(
        <div className="InfoBox">
<div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}

        image={
          info.humidity>80? ThunderstormIcon
          : info.temp>15?HOT_URL
          :COLD_URL
        }

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
       {  info.city}{
          info.humidity>80? <ThunderstormIcon/>
          : info.temp>15? <WbSunnyIcon/>
          :<AcUnitIcon/>
        }

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>

     <p>Temerature={info.temp}&deg;C</p>
     <p>min temp={info.tempMin}&deg;C</p>
     <p>max temp={info.tempmax}&deg;C</p>
     <p>humidity={info.humidity}</p>
     <p>The weather can be described as<i> {info.weather}</i> and feels like={info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>

    </Card>
    </div>
        </div>
  
    );
}