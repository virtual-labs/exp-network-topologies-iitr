

  var output;  var ak;    var comon; var value;
  var i;   var j; var k; var l ;           
  var flag_pc=0; var flag_lp=0; var flag_hb=0; var flag_sw=0;var conn=0;var flag_cb=0; var flag_ter=0;var term=0;

    var sourceArray = [];
    var targetArray = [];
  

    function initialise(){
          comon =0;   value=0;
                       
        }

    function imgDraw(id){
       
        if(id=="com" || id=="lap" || id=="cable" || id=="terminator"){       
            comon=1;
            ak=id;
            if(comon==1)
            {
              
                  
            if(ak=="com")
            {
              document.getElementById('com').onclick = null;
              document.getElementById('com').style.opacity = 0.5;
      
              document.getElementById('lap').onclick = null;
              document.getElementById('lap').style.opacity = 0.5;
      
             var x=document.getElementById('PCB1');
             x.style.visibility='visible';
        
             var x=document.getElementById('PCB2');
             x.style.visibility='visible';
         
             var x=document.getElementById('PCB3');
             x.style.visibility='visible';
      
             var x=document.getElementById('PCB4');
             x.style.visibility='visible';
              
             flag_pc=1;
         
      
        }
      
                  if(ak=="lap"){
      
                    document.getElementById('com').onclick = null;
              document.getElementById('com').style.opacity = 0.5;
      
              document.getElementById('lap').onclick = null;
              document.getElementById('lap').style.opacity = 0.5;
      
             var x=document.getElementById('LPB1');
             x.style.visibility='visible';
        
             var x=document.getElementById('LPB2');
             x.style.visibility='visible';
         
             var x=document.getElementById('LPB3');
             x.style.visibility='visible';
      
             var x=document.getElementById('LPB4');
             x.style.visibility='visible';
          flag_lp=1;
     
      
              }
                   
              if( ak=="terminator")
              {
                term++;
      if(term==1)
      {
        var x=document.getElementById('TER1');
        x.style.visibility='visible';
      }
      else if(term==2)
      {
        document.getElementById('terminator').onclick = null;
        document.getElementById('terminator').style.opacity = 0.5;

        var x=document.getElementById('TER2');
        x.style.visibility='visible';
        flag_ter=1;
      }         
              }
      
              if( ak=="cable")
              {
      
                  var x=document.getElementById('CAB');
                  x.style.visibility='visible';
                
                  document.getElementById('cable').onclick = null;
                  document.getElementById('cable').style.opacity = 0.5;
      
                  flag_cb=1;
      
              }
                  comon =0;
                
                }    
                connection();
          }
       
        }
 
        
  
        function connection()
        {
         
          var c = document.getElementById("mid");
          instance = jsPlumb.getInstance({});
          instance.setContainer('c');

       
      //PC
      instance.bind("ready", function() {
        if(flag_pc==1)
        {
          var p1 = instance.addEndpoint("PCB1", {
            endpoint: ['Dot', { radius:8}],
            enabled: false, 
            anchor: [[ 0, 0, 0, 1,50,90]],
            isSource: true,
            isTarget: true,
            uuid:"p1",
            connector: 'Straight',
            connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 , },
            endpointStyle:{ fill:"black"},
            connectionsDetachable: false,
          } 
        ); 
          
  
  
      var p2 = instance.addEndpoint("PCB2", {
          endpoint: ['Dot', { radius:8}],
          enabled: false, 
          anchor: [[ 0, 0, 0, 1,50,90]],
          isSource: true,
          isTarget: true,
          uuid:"p2",
          connector: 'Straight',
          connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
          endpointStyle:{ fill:"black"},
          connectionsDetachable: false,
        });
      
       
  
      var p3 = instance.addEndpoint("PCB3", {
        endpoint: ['Dot', { radius:8}],
        enabled: false, 
        anchor: [[ 0, 0, 1, 0,50,10]],
        isSource: true,
        isTarget: true,
        uuid:"p3",
        connector: 'Straight',
        connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
        endpointStyle:{ fill:"black"},
        connectionsDetachable: false,
      });
    
  
    var p4 = instance.addEndpoint("PCB4", {
      endpoint: ['Dot', { radius:8}],
      enabled: false, 
      anchor: [[ 0, 0, 1, 0,50,10]],
      isSource: true,
      isTarget: true,
      uuid:"p4",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
      endpointStyle:{ fill:"black"},
      connectionsDetachable: false,
    });
  
    
        }
        
    
//LAPTOP 
if(flag_lp==1)
{
var l1 = instance.addEndpoint("LPB1", {
    endpoint: ['Dot', { radius:8}],
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,50,90]],
    isSource: true,
    isTarget: true,
    uuid:"l1",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black"},
    connectionsDetachable: false,
  }); 
  
    
  var l2 = instance.addEndpoint("LPB2", {
    endpoint: ['Dot', { radius:8}],
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,50,90]],
    isSource: true,
    isTarget: true,
    uuid:"l2",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black"},
    connectionsDetachable: false,
  });
  
  var l3 = instance.addEndpoint("LPB3", {
    endpoint: ['Dot', { radius:8}],
    enabled: false, 
    anchor: [[ 0, 0, 1, 0,50,-4]],
    isSource: true,
    isTarget: true,
    uuid:"l3",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black"},
    connectionsDetachable: false,
  });
  

  var l4 = instance.addEndpoint("LPB4", {
    endpoint: ['Dot', { radius:8}],
    enabled: false, 
    anchor: [[ 0, 0, 1, 0,50,-4]],
    isSource: true,
    isTarget: true,
    uuid:"l4",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black"},
    connectionsDetachable: false,
  });
  
 
}

 
//cable
if(flag_cb==1){
    var c11 = instance.addEndpoint("CAB", {
        endpoint: "Dot",
        enabled: false, 
        anchor: [[ 0, 0, 0, 1,120,12]],
        isSource: true,
        isTarget: true,
        uuid: "c11",
        connector: 'Straight',
        connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
        endpointStyle:{ fill:"red", radius:8 },
        connectionsDetachable: false,
      } 
    ); 
      


    var c12 = instance.addEndpoint("CAB", {
      endpoint: "Dot",
      enabled: false, 
      anchor: [[ 0, 0, 0, 1,270,12]],
      isSource: true,
      isTarget: true,
      uuid: "c12",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
      endpointStyle:{ fill:"red", radius:8 },
      connectionsDetachable: false,
    });
  
   

  var c13 = instance.addEndpoint("CAB", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,411,12]],
    isSource: true,
    isTarget: true,
    uuid: "c13",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:8 },
    connectionsDetachable: false,
  });


var c14 = instance.addEndpoint("CAB", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,540,12]],
  isSource: true,
  isTarget: true,
  uuid: "c14",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:8 },
  connectionsDetachable: false,
});
}

if(flag_pc==1 && flag_cb==1) 
      { 
        //for enabling dragging
        p1.setEnabled(true);p2.setEnabled(true);p3.setEnabled(true);p4.setEnabled(true);
        c11.setEnabled(true);c12.setEnabled(true);c13.setEnabled(true);c14.setEnabled(true);
      }
    
      else if(flag_lp ==1 && flag_cb==1) 
      { 
        //for enabling dragging
        l1.setEnabled(true);l2.setEnabled(true);l3.setEnabled(true);l4.setEnabled(true);
        c11.setEnabled(true);c12.setEnabled(true);c13.setEnabled(true);c14.setEnabled(true);
      }
     

      }); 
     
      instance.bind('connection', function(info, ev) { //whenever connection is made an event is ocurred;
        var con = info.connection; //this is the new connection
        var sid = con.sourceId;
        var tid = con.targetId;
        sourceArray.push(sid);
        targetArray.push(tid);
        console.log(con);
        conn=conn+1;
      });

        }

    function redirect() { 
           
            if(document.getElementById("dropdown").value=="hybrid"){
            window.location.replace("hybrid.html");}
    else if (document.getElementById("dropdown").value=="star"){ 
      document.getElementById("con-head").innerHTML = "Network Toplogies : Star ";
      window.location.replace("index.html");
    }
    else if (document.getElementById("dropdown").value=="bus"){  
      window.location.replace("bus.html");
    }
    else if (document.getElementById("dropdown").value=="ring"){
      window.location.replace("ring.html");
          
    }
    else if (document.getElementById("dropdown").value=="mesh"){     
      window.location.replace("mesh.html");
    }
        }
    
    function reset(){       
        window.location.reload(); }    

        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
       }
       
      async  function evaltop(){
            selectElement =  
                    document.querySelector('#dropdown');             
                    output = selectElement.value; 
                    console.log(conn);
                    if(flag_lp==0 && flag_pc==0)
                    {
                      Swal.fire({
                        backdrop:false,
                        target:'#mid',
                        customClass: {
                          container: 'position-absolute'
                        }, 
                       title:"End devices missing",
                       text:"First add end device by clicking on PC or Laptop.",
                       position:'center',
                    
                       });  
                     
                    }
                    else if(flag_cb==0)
                    {
                      Swal.fire({
                        backdrop:false,
                        target:'#mid',
                        customClass: {
                          container: 'position-absolute'
                        }, 
                        title:"Cable missing",
                        text:"Add by clicking on cable.",
                        position:'center',
                        icon:"warning",
                       });  
                    
                    }
                    else if(term==1)
                    {
                      Swal.fire({
                        backdrop:false,
                        target:'#mid',
                        customClass: {
                          container: 'position-absolute'
                        }, 
                       title:"One terminator missing",
                       text:"Add by clicking on terminator.",
                       position:'center',
                       icon:"warning",
                       });  
                      
                    }
                    else if(flag_ter==0)
                    {
                      Swal.fire({
                        backdrop:false,
                        target:'#mid',
                        customClass: {
                          container: 'position-absolute'
                        }, 
                       title:"Both terminator missing",
                       text:"Add terminator by clicking on the terminator twice.",
                       position:'center',
                       icon:"warning",
                       });  
                      
                    }
                    else if(conn==0){
                      Swal.fire({
                        backdrop:false,
                        target:'#mid',
                        customClass: {
                          container: 'position-absolute'
                        },
                        title:"No connection",
                        text:"Follow the instructions to connect the devices.",
                        icon:"info",
                        });
                    
                    }
                     else if(conn<4)
                     {
                      Swal.fire({
                        backdrop:false,
                        target:'#mid',
                        customClass: {
                          container: 'position-absolute'
                        },
                        title:"Oops...",
                        text:"Connect all devices.",
                        icon:"error",
                        });
                     }
                    else if(output=="bus" && conn==4)
                    {
                 
                     var n=0;
                     for(var i=0;i<4;i++)
                     {
                      console.log(sourceArray[i]);
                      console.log(targetArray[i]);
                      if(
                      (((sourceArray[i] == "PCB1" || sourceArray[i] == "LPB1") && (targetArray[i] == "CAB" )) || ((targetArray[i] == "PCB1" || targetArray[i] == "LPB1") && (sourceArray[i] == "CAB" ))) ||
                      (((sourceArray[i] == "PCB2" || sourceArray[i] == "LPB2") && (targetArray[i] == "CAB" )) || ((targetArray[i] == "PCB2" || targetArray[i] == "LPB2") && (sourceArray[i] == "CAB" ))) ||
                      (((sourceArray[i] == "PCB3" || sourceArray[i] == "LPB3") && (targetArray[i] == "CAB" )) || ((targetArray[i] == "PCB3" || targetArray[i] == "LPB3") && (sourceArray[i] == "CAB" ))) ||
                      (((sourceArray[i] == "PCB4" || sourceArray[i] == "LPB4") && (targetArray[i] == "CAB" )) || ((targetArray[i] == "PCB4" || targetArray[i] == "LPB4") && (sourceArray[i] == "CAB" ))))
                      {
                        n = n + 1;
                        if (n == 4) 
                        {
                          Swal.fire({
                            backdrop:false,
                            target:'#mid',
                            customClass: {
                           container: 'position-absolute'
                             },
                            title:"Connection Established!",
                            text:"The devices are connected in Bus Topology.",
                            icon:"success",
                            timer: 2000,
                            });                    

                          
                          await sleep(2000);

                          Swal.fire({
                            backdrop:false,
                            target:'#mid',
                            customClass: {
                              container: 'position-absolute',
                              
                            },  
                            position: 'center',
                            icon:"question",
                            html: `<label>How many droplines are used during the simulation process of a bus topology?</label>
                            <input type="text" id="q1" placeholder="for eg. 1">`,
                            confirmButtonText: 'Submit',
                            focusConfirm: false,
                     
                            preConfirm: () => {
                              const x = Swal.getPopup().querySelector('#q1').value
                              if (!x) {
                                Swal.showValidationMessage(`You need to write something!`)
                              }
                              return { q1: x}
                            }
                          }).then((result) => {
                            if(result.value.q1 != "4")
                            {
                              Swal.fire({
                                backdrop:false,
                                target:'#mid',
                                customClass: {
                                container: 'position-absolute'
                                 },
                                title:"Oops...",
                                text:"Wrong answer, Click on Reset and Try Again.",
                                icon:"error",
                                });
                            }
                            if(result.value.q1 == "4")
                            {
                              Swal.fire({
                                backdrop:false,
                                target:'#mid',
                                  customClass: {
                                 container: 'position-absolute'
                                   },
                                title:"Correct answer",
                                icon:"success",
                                });
                            }                         
                          }) 
                     
                          break;
                        }
                      }
                      else{ 
                        Swal.fire({
                          backdrop:false,
                          target:'#mid',
                          customClass: {
                          container: 'position-absolute'
                          },
                            title:"Oops...",
                            text:"Wrong connection, Click on Reset and Try Again.",
                            icon:"error",
                            });
                      break;
                    }
                                          
                      }
                  }
                 
                                
                     }
                    
                    