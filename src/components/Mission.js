import React, { useEffect, useRef, useState } from 'react';

export const Mission = () => {
  const progressContainersRef = useRef([]);

  const [progressPercent, setProgressPercent] = useState({});

  const updateProgress = (progressContainer) => {
    const percentLabel = progressContainer.querySelector('.progress-label');
    const circle = progressContainer.querySelector('.progress-bar');

    const val = parseInt(percentLabel.textContent);

    if (isNaN(val)) {
      setProgressPercent((prevProgressPercent) => ({ ...prevProgressPercent, [progressContainer.id]: 100 }));
    } else {
      const r = circle.getAttribute('r');
      const c = Math.PI * (r * 2);

      const clampedVal = Math.min(100, Math.max(0, val));
      const pct = ((100 - clampedVal) / 100) * c;

      circle.style.strokeDashoffset = pct;
      circle.style.strokeDasharray = c;

      setProgressPercent((prevProgressPercent) => ({ ...prevProgressPercent, [progressContainer.id]: clampedVal }));
    }
  };

  useEffect(() => {
    progressContainersRef.current.forEach((container) => {
      updateProgress(container);
    });
  }, [progressPercent]);

    return (
        <div className="default-container">
                <div className="container mt-3 pt-2 " id="mission1" ref={(ref) => (progressContainersRef.current[0] = ref)}>
    
    <div className="card custom ">

      <div className="card-header">
        <h2>
        Mission-1
        <b> Telling about Jesus </b><span>[Score : 2/100 ]</span>
      </h2>
    </div>
      <div className="card-body">
        <div className="progress-container" data-pct="0">
          <svg className="progress-svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="progress-background" r="90" cx="100" cy="100" fill="transparent"></circle>
            <circle className="progress-bar"  r="90" cx="100" cy="100" fill="transparent" style={{stroke:"#ff0000"}}></circle>
          </svg>
          <label hidden="true" className="progress-label" for="percent">2%</label>
        </div>
        
        <h3>
          இந்த மிஷனில் 2024 ஆம் ஆண்டில் குறைந்தது 100 பேருக்கு இயேசு கிறிஸ்துவின் அன்பை  பற்றி சொல்ல வேண்டும்.
        </h3>
    </div>
    </div>
</div>

<div className="container mt-3 pt-2 " id="mission2" ref={(ref) => (progressContainersRef.current[1] = ref)}>
    
  <div className="card custom ">

    <div className="card-header">
      <h2>
      Mission-2
      <b> Presenting Bibles </b><span>[Score : 0/50 ] </span>
    </h2>
  </div>
    <div className="card-body">
      <div className="progress-container" data-pct="0">
        <svg className="progress-svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle className="progress-background" r="90" cx="100" cy="100" fill="transparent" ></circle>
          <circle className="progress-bar" r="90" cx="100" cy="100" fill="transparent" style={{stroke:"#ff0000"}}></circle>
        </svg>
        <label hidden="true" className="progress-label" for="percent">0%</label>
      </div>
      
      <h4>
       இந்த மிஷனில் 2024 ஆம் ஆண்டில் குறைந்தது 50 பைபிள்களை நண்பர்களுக்கு வழங்க வேண்டும்  
      </h4>
  </div>
  </div>
</div>


<div className="container mt-3 pt-2 " id="mission3" ref={(ref) => (progressContainersRef.current[2] = ref)}>
    
  <div className="card custom ">

    <div className="card-header">
      <h2>
      Mission-3
      <b> "Who is Jesus" </b><span>[Score : 0/13 ]</span>
    </h2>
  </div>
    <div className="card-body">
      <div className="progress-container" data-pct="0">
        <svg className="progress-svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle className="progress-background" r="90" cx="100" cy="100" fill="transparent"></circle>
          <circle className="progress-bar" r="90" cx="100" cy="100" fill="transparent"></circle>
        </svg>
        <label hidden="true" className="progress-label" for="percent">0%</label>
      </div>
      
      <h4>
       இந்த மிஷனில் 2024 ஆம் ஆண்டில் இயேசு யார் என்ற காணொளியை பார்க்க வேண்டும்.  

      </h4>
  </div>
  </div>
</div>


        </div>
    )
}



