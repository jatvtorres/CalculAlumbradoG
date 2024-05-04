
function calcularA() {
    var voltage = parseFloat(document.getElementById("voltage").value);
    var potencia = parseFloat(document.getElementById("potencia").value);
  
    var amperaje = potencia / voltage;
    
    // Calcular el calibre de cable
    var calibreCable = calcularCalibreCable(amperaje);
   /*  var resultA= amperaje; */
    /* document.getElementById("resultA").value=resultA; */
    var resultA= "La intensidad Eléctrica (I)= " + amperaje.toFixed(2) + " Amperios(A)."  +  calibreCable; 
    document.getElementById("resultA").value= resultA; 
  }
  
  function calcularCalibreCable(amperaje) {
   
    var calibre= "";
    //var amperaje= calcularIntensidad;

        if(amperaje<=20){
            calibre= "Se recomienda utilizar cable THHN/THW a 75°C, # 14 AWG ";
        }
        else if(amperaje>20 && amperaje<=25){
            calibre= "Se recomienda utilizar cable THHN/THW a 75°C, # 12 AWG "; 
        }
        else if(amperaje>25 && amperaje<=35){
            calibre = "Se recomienda utilizar cable THHN/THW a 75°C # 10 AWG ";
        }
        else if(amperaje>35 && amperaje<=50){
            calibre= "Se recomienda utilizar cable THHN/THW a 75°C, # 8 AWG ";
        }
        else if(amperaje>50 && amperaje<=65){
            calibre= "Se recomienda utilizar cable THHN/THW a 75°C, # 6 AWG ";
        }
        else if(amperaje>65 && amperaje<=85){
            calibre= "Se recomienda utilizar cable THHN/THW a 75°C, # 4 AWG ";
        }
        else if(amperaje>85 && amperaje<=90){
            calibre= "Se recomienda utilizar cable THHN/THW a 75°C, # 2 AWG ";
        }
        else if(amperaje>90 && amperaje<=120){
            calibre= "Se recomienda utilizar cable THHN/THW a 75°C, # 1/0 AWG ";
        }
        else if(amperaje>120 && amperaje<=135){
            calibre= "Se recomienda utilizar cable THHN/THW a 75°C, # 2/0 AWG "; 
        }
        else if(amperaje>135 && amperaje<=155){
            calibre= "Se recomienda utilizar cable THHN/THW a 75°C, # 3/0 AWG ";
        }
        else if(amperaje>155 && amperaje<=180){
            calibre= "Se recomienda utilizar cable THHN/THW a 75°C, # 4/0 AWG ";
        }
        else{
            calibre= "Cable THHN/THW a 75°C NO DEFINIDO-AMPERAJE MUY ALTO"
        }
        
    return calibre;

  }

  function BorrarA(){
    var voltage= document.getElementById("voltage");
    voltage.value= " ";
    var potencia= document.getElementById("potencia");
    potencia.value= " ";
    var resultA= document.getElementById("resultA");
    resultA.value= " ";
    document.getElementById("voltage").focus();
    
  }
   
    function cargaTA(){
        var cargaTA= parseFloat(document.getElementById("cargaTA").value);
        var totalnmcr= cargaTA/1500;
        totalnmcr=Math.round(totalnmcr);
        document.getElementById("totalnmcr").value= totalnmcr;
    }
    function reiniciarnmcr(){
        var cargaTA= document.getElementById("cargaTA");
        cargaTA.value= " ";
        var totalnmcr= document.getElementById("totalnmcr");
        totalnmcr.value= " ";
        document.getElementById("cargaTA").focus();
        
      }
    
        

    function alumbradoUV(){
        var metrosC= parseFloat(document.getElementById("metrosC").value);
        var respA_VA= metrosC*32;
        var totalCargA= respA_VA + " VA (Voltios Amperios)";
        
        document.getElementById("totalCargA").value= totalCargA;
           }


    function reiniciarTotalCargA(){
        var metrosC= document.getElementById("metrosC");
        metrosC.value= " ";
        var totalCargA= document.getElementById("totalCargA");
        totalCargA.value= " ";
        document.getElementById("metrosC").focus();
                
        }
       

        function alumbradoFDA(){
            var remanente= parseInt(document.getElementById("remanente").value);
            var remanente= remanente*(35/100);
            var totalFDA= remanente + 3000;
            document.getElementById("totalFDA").value=totalFDA;
        }
        
        
      
      function reiniciarFDA(){
        
        var remanente= document.getElementById("remanente");
        remanente.value="";
        var totalFDA= document.getElementById("totalFDA");
        totalFDA.value="";
        document.getElementById("remanente").focus();
      
      }
     
          
function pequeñosA_FD(){
    var cant=parseInt(document.getElementById("cant").value);
    var cant = cant*1500;
    var totalPA_FD= cant*(35/100);
    document.getElementById("totalPA_FD").value=totalPA_FD;
    
  }

  function reiniciaPA_FD(){
    
    var cant= document.getElementById("cant");
    cant.value="";
    var peqArtef= document.getElementById("totalPA_FD");
    peqArtef.value="";
    document.getElementById("cant").focus();
  
    }
    document.getElementById("cant").focus();
    document.getElementById("voltage").focus(); 
    document.getElementById("remanente").focus();
    document.getElementById("cargaTA").focus();
    document.getElementById("metrosC").focus();


   // Obtenemos el nombre de la página actual
const paginaActual = window.location.pathname.split('/').pop();

// Obtenemos todos los enlaces en el menú
const enlaces = document.querySelectorAll('.item-nav a');

// Recorremos los enlaces
enlaces.forEach(enlace => {
  // Obtenemos el nombre de la página a la que enlaza el enlace
  const paginaEnlace = enlace.getAttribute('href').split('/').pop();


  // Si la página actual coincide con la página a la que enlaza el enlace, agregamos la clase 'activo'
  if (paginaActual === paginaEnlace) {
    enlace.classList.add('activo');
  }
});
