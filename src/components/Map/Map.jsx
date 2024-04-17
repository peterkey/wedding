import "./Map.css";

const Map = () => {
  return (
    <div>
      <div className='map__card'>
        <h3 className='map__card__heading'>Here we are</h3>
        <h2>25 Heol Y Gyfinir, Llanilid, Pontyclun, CF72 4AX</h2>
        <a href='https://maps.app.goo.gl/jhykkQLzEdeGXiD8A' target='_blank' rel='noreferrer'>
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default Map;
