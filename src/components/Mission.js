export const Mission=()=>{

    function updateProgress(progressContainer) {
        var percentLabel = progressContainer.querySelector('.progress-label');
        var circle = progressContainer.querySelector('.progress-bar');
  
        var val = parseInt(percentLabel.textContent);
  
        if (isNaN(val)) {
            val = 100;
        } else {
        var r = circle.getAttribute('r');
        var c = Math.PI * (r * 2);
  
        if (val < 0) {
            val = 0;
        }
        if (val > 100) {
            val = 100;
        }
  
        var pct = ((100 - val) / 100) * c;
  
        circle.style.strokeDashoffset = pct;
        circle.style.strokeDasharray = c;
        progressContainer.setAttribute('data-pct', val);
        }
    }
  
  // Example usage
    var progressContainers = document.querySelectorAll('.progress-container');
    progressContainers.forEach(function (container) {
        updateProgress(container);
    });
  

    return (
        <div className="default-container">
                <div className="container mt-3 pt-2 " id="center">
    
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

<div className="container mt-3 pt-2 " id="center">
    
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
          <circle className="progress-bar" r="90" cx="100" cy="100" fill="transparent" style={{stroke:"#ff0000;"}}></circle>
        </svg>
        <label hidden="true" className="progress-label" for="percent">0%</label>
      </div>
      
      <h4>
       இந்த மிஷனில் 2024 ஆம் ஆண்டில் குறைந்தது 50 பைபிள்களை நண்பர்களுக்கு வழங்க வேண்டும்  
      </h4>
  </div>
  </div>
</div>


<div className="container mt-3 pt-2 " id="center">
    
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



