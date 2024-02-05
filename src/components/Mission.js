import React, { useEffect, useRef, useState } from 'react';

const MissionCard = ({ missionNumber, missionTopic, missionPercentage, missionDetails, score }) => {
  const progressContainersRef = useRef([]);
  const [progressPercent, setProgressPercent] = useState(missionPercentage);

  const updateProgress = () => {
    progressContainersRef.current.forEach((container, index) => {
      const circle = container.querySelector('.progress-bar');
      const r = circle.getAttribute('r');
      const c = Math.PI * (r * 2);
      const clampedVal = Math.min(100, Math.max(0, progressPercent));
      const pct = ((100 - clampedVal) / 100) * c;

      circle.style.strokeDashoffset = pct;
      circle.style.strokeDasharray = c;
    });
  };

  useEffect(() => {
    updateProgress();
  }, [progressPercent]);

  return (
    <div className="default-container">
      <div className="container mt-3 pt-2 " ref={(ref) => (progressContainersRef.current[0] = ref)}>
        <div className="card custom ">
          <div className="card-header">
            <h2>
              Mission-{missionNumber}
              <b> {missionTopic} </b><span>[Score: {score}/100]</span>
            </h2>
          </div>
          <div className="card-body">
            <div className="progress-container" data-pct={progressPercent}>
              <svg className="progress-svg" width="200" height="200" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="progress-background" r="90" cx="100" cy="100" fill="transparent"></circle>
                <circle className="progress-bar" r="90" cx="100" cy="100" fill="transparent" style={{ stroke: "#ff0000" }}></circle>
              </svg>
              <label hidden className="progress-label" htmlFor="percent">
                {progressPercent}%
              </label>
            </div>
            <h3>{missionDetails}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Mission = () => {
  return (<div>
    <MissionCard
      missionNumber={1}
      missionTopic='"Telling about Jesus"'
      missionPercentage={2}
      missionDetails="இந்த மிஷனில் 2024 ஆம் ஆண்டில் குறைந்தது 100 பேருக்கு இயேசு கிறிஸ்துவின் அன்பை பற்றி சொல்ல வேண்டும்."
      score={2}
    />

    <MissionCard
    missionNumber={2}
    missionTopic='"Presenting Bibles"'
    missionPercentage={8}
    missionDetails="இந்த மிஷனில் 2024 ஆம் ஆண்டில் குறைந்தது 50 பைபிள்களை நண்பர்களுக்கு வழங்க வேண்டும்"
    score={8}
  />

  <MissionCard
  missionNumber={3}
  missionTopic='"Who is Jesus"'
  missionPercentage={0}
  missionDetails="இந்த மிஷனில் 2024 ஆம் ஆண்டில் இயேசு யார் என்ற காணொளியை பார்க்க வேண்டும்."
  score={0}
/>
</div>
  );
};
