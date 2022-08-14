import React from 'react';
import { Image , Stack} from "react-bootstrap";

const Home = () => {
  
  return (
    <div className='home' >
      <Stack gap={2} className="col-lg-9 mx-auto py-5">
      <h3 style={{textAlign:'center'}}>Welcome to Tuner </h3>
      <h5 style={{textAlign:'center'}}> Make your own music playlist app!</h5>
      <Image
        src="https://camo.githubusercontent.com/bac372992c395f13bbe611b2ef3cf30c196f13bf67be9d462d038368bacc7570/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f3454377a427a64654e45746a54685944576e2f67697068792e6769663f6369643d373930623736313134656530336566376638363034393261393038336437376638363139316137626633343030303263267269643d67697068792e6769662663743d67"
        responsive="true"
      />
       </Stack>
    </div>
  );
};

export default Home;
