            let exportedGlassesModel = JSON.parse(data)
    
            JEELIZVTOWIDGET.load_modelStandalone(exportedGlassesModel, function(){
              console.log('INFO: EXPORTED MODEL LOADED');
              });
             console.log(data)



        JEELIZVTOWIDGET.start({
            sku: 'rayban_aviator_or_vertFlash',
            searchImageMask: 'https://appstatic.jeeliz.com/jeewidget/images/target.png',
            searchImageColor: 0xeeeeee,
            callbackReady: function(){
              console.log('INFO: JEELIZVTOWIDGET is ready :)');
            },
            onError: function(errorLabel){ // this function catches errors, so you can display custom integrated messages
              alert('An error happened. errorLabel =' + errorLabel)
              switch(errorLabel) {
                case 'WEBCAM_UNAVAILABLE':
                  // the user has no camera, or does not want to share it.
                  break;
            
                case 'NOFILE':
                  // the user send an image, but it is not here
                  break;
  
                case 'WRONGFILEFORMAT':
                  // the user upload a file which is not an image or corrupted
                  break;
  
                case 'INVALID_SKU':
                  // the provided SKU does not match with a glasses model
                  break;
  
                case 'FALLBACK_UNAVAILABLE':
                  // we cannot switch to file upload mode. browser too old?
                  break;
  
                case 'PLACEHOLDER_NULL_WIDTH':
                case 'PLACEHOLDER_NULL_HEIGHT':
                  // Something is wrong with the placeholder
                  // (element whose id='JeelizVTOWidget')
                  break;
                  
                case 'FATAL':
                default:
                  // a bit error happens:(
                  break;
              } // end switch
            } // end onError()
          }) // end JEELIZVTOWIDGET.start call

          function load_StandAlone()
          {
                    // pure javascript
          let object;
          let httpRequest = new XMLHttpRequest(); // asynchronous request
          httpRequest.open("GET", "glasses3D/glasses1.json", true);
          httpRequest.send();
          httpRequest.addEventListener("readystatechange", function() {
              if (this.readyState === this.DONE) {
                  // when the request has completed
                  exportedGlassesModel = JSON.parse(this.response);
    
                  JEELIZVTOWIDGET.load_modelStandalone(exportedGlassesModel, function(){
                    console.log('INFO: EXPORTED MODEL LOADED');
                    });
              }
          });
          }