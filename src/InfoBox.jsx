import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop";

  // 🔹 Decide image based on weather priority
  let imageUrl;
  let weatherIcon;

  const weatherDesc = info.weather.toLowerCase();

  if (weatherDesc.includes("rain") || weatherDesc.includes("drizzle")) {
    imageUrl = RAIN_URL;
    weatherIcon = <ThunderstormIcon />;
  } else if (info.temp <= 15) {
    imageUrl = COLD_URL;
    weatherIcon = <AcUnitIcon />;
  } else {
    imageUrl = HOT_URL;
    weatherIcon = <WbSunnyIcon />;
  }

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="weather"
        />

        <CardContent>
          <Typography gutterBottom variant="h5">
            {info.city} {weatherIcon}
          </Typography>

          <Typography variant="body2" color="text.secondary" component="span">
            <p>Temperature = {info.temp}°C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}°C</p>
            <p>Max Temp = {info.tempMax}°C</p>
            <p>
              The weather is <i>{info.weather}</i> and feels like{" "}
              {info.feelsLike}°C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
