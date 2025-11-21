
   var pcount; var output;  var ak;  var lcount;  var comon; var value; 
    var i;   var j; var k; var l ; var m; var n;
    var isw;   var swon;      var swcount;  var bk;
    
    pcount=0;   pccount=0;       lcount=0;   comon =0;   value=0;
    isw=0;    swon=0;    swcount=0;   
    m=11;  n=21;
 
    var flag_pc=0; var flag_lp=0; var flag_hb=0; var flag_sw=0;var conn=0;

    var sourceArray = [];
    var targetArray = [];
  

    function initialise(){
          pccount=0;      lcount=0;   comon =0;   value=0;
        isw=0;    swon=0;    swcount=0;   
        m=11;  n=21;
        
        }

    function imgDraw(id){
      
        if(id=="com" || id=="lap"){       
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
      
             var x=document.getElementById('PC1');
             x.style.visibility='visible';
        
             var x=document.getElementById('PC2');
             x.style.visibility='visible';
         
             var x=document.getElementById('PC3');
             x.style.visibility='visible';
      
             var x=document.getElementById('PC4');
             x.style.visibility='visible';
              
             flag_pc=1;  
             
      
        }
      
                  if(ak=="lap"){
      
                    document.getElementById('com').onclick = null;
              document.getElementById('com').style.opacity = 0.5;
      
              document.getElementById('lap').onclick = null;
              document.getElementById('lap').style.opacity = 0.5;
      
             var x=document.getElementById('LP1');
             x.style.visibility='visible';
        
             var x=document.getElementById('LP2');
             x.style.visibility='visible';
         
             var x=document.getElementById('LP3');
             x.style.visibility='visible';
      
             var x=document.getElementById('LP4');
             x.style.visibility='visible';
          flag_lp=1;
      
      
              }
                   
                  comon =0;
                
          }}
        if(id=="iswitch" || id=="iswitch1"){
            swon=1;   bk=id;   
            if(swon==1){
         
              if(bk=="iswitch")
              {
                document.getElementById('iswitch').onclick = null;
                document.getElementById('iswitch').style.opacity = 0.5;
  
                document.getElementById('iswitch1').onclick = null;
                document.getElementById('iswitch1').style.opacity = 0.5;
              
  
                var x=document.getElementById('HUB1');
                x.style.visibility='visible';
  
                flag_hb=1;
             
   
            }
  
              if(bk=="iswitch1")
              {
                document.getElementById('iswitch1').onclick = null;
                document.getElementById('iswitch1').style.opacity = 0.5;
  
                document.getElementById('iswitch').onclick = null;
                document.getElementById('iswitch').style.opacity = 0.5;
  
                var x=document.getElementById('SWITCH1');
                x.style.visibility='visible';
                flag_sw=1;
              //  alert("You can`t connect end devices directly with each other. For this you will need a central device like hub or switch.");
                        
          }
              
              swon =0;
             
          } 
            }
            connection();
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
          var p1 = instance.addEndpoint("PC1", {
            endpoint: ['Dot', { radius:8}],
            enabled: false, //dragging disabled
            anchor: [[ 0, 0, 0, 1,50,90]], //position
            isSource: true,
            isTarget: true,
            connectionsDetachable: false,
            uuid:"p1",
            connector: 'Straight',
            connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
            endpointStyle:{ fill:"black"},
       
          } 
        ); 

  
        var p2=instance.addEndpoint("PC2", {
          endpoint: 'Dot',
          enabled: false, 
          anchor: [[ 0, 0, 0, 1,50,90]],
          connectionsDetachable: false,
          isSource: true,
          isTarget: true,
          uuid:"p2",
          connector: 'Straight',
          connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
          endpointStyle:{ fill:"black",radius:8},
        });
      
  
      var p3 = instance.addEndpoint("PC3", {
        endpoint: ['Dot', { radius:8}],
        enabled: false, 
        anchor: [[ 0, 0, 1, 0,50,10]],
        isSource: true,
        isTarget: true,
        uuid:"p3",
        connector: 'Straight',
        connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
        endpointStyle:{ fill:"black"},
        connectionsDetachable: false
      });
  
   var p4 = instance.addEndpoint("PC4", {
      endpoint: ['Dot', { radius:8}],
      enabled: false, 
        anchor: [[ 0, 0, 1, 0,50,10]],
      isSource: true,
      isTarget: true,
      uuid:"p4",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
      endpointStyle:{ fill:"black"},
      connectionsDetachable: false
    });

  
        }
        

      //LAPTOP 
     if(flag_lp==1)
{
  var l1 = instance.addEndpoint("LP1", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,100,70]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"l1",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 },
    connectionsDetachable: false
  } 
  ); 
  

  var l2  = instance.addEndpoint("LP2", {
  endpoint: "Dot",
  anchor: [[ 0, 0, 0, 1,1,70]],
  enabled: false, 
  isSource: true,
  isTarget: true,
  uuid:"l2",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"black",  radius:6 },
  connectionsDetachable: false
  });
  
  var l3 = instance.addEndpoint("LP3", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,100,70]],
  isSource: true,
  isTarget: true,
  uuid:"l3",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"black",  radius:6 },
  connectionsDetachable: false
  });

  
 var l4 = instance.addEndpoint("LP4", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,1,70]],
  isSource: true,
  isTarget: true,
  uuid:"l4",
  connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 },
    connectionsDetachable: false
  });
       }
  
      //HUB
      if(flag_hb==1)
{
  var h11 = instance.addEndpoint("HUB1", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,26,54]],
    isSource: true,
    isTarget: true,
    uuid:"h11",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:4 },
    connectionsDetachable: false
  } );

 var h12= instance.addEndpoint("HUB1", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,46,54]],
  isSource: true,
  isTarget: true,
  uuid:"h12",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:4 },
  connectionsDetachable: false
  });

  var h13 = instance.addEndpoint("HUB1", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,64,54]],
  isSource: true,
  isTarget: true,
  uuid:"h13",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:4 },
  connectionsDetachable: false
  } );

 var h14 = instance.addEndpoint("HUB1", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,84,54]],
  isSource: true,
  isTarget: true,
  uuid:"h14",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:4 },
  connectionsDetachable: false
  });
      }


     //SWITCH
     if(flag_sw==1)
{
  var s11 = instance.addEndpoint("SWITCH1", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,16,46]],
    isSource: true,
    isTarget: true,
    uuid:"s11",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:7 },
    connectionsDetachable: false
  } );

  var s12 = instance.addEndpoint("SWITCH1", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,38,46]],
  isSource: true,
  isTarget: true,
  connector: 'Straight',
  uuid:"s12",
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:7 },
  connectionsDetachable: false
  } );

 var s13 = instance.addEndpoint("SWITCH1", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,60,46]],
  isSource: true,
  isTarget: true,
  uuid:"s13",
  connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:7 },
    connectionsDetachable: false
  });

  var s14 = instance.addEndpoint("SWITCH1", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,84,46]],
  isSource: true,
  isTarget: true,
  uuid:"s14",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:7 },
  connectionsDetachable: false
  });
  
   
     }

     if(flag_pc==1 && flag_hb==1) 
      { 
        //for enabling dragging
        p1.setEnabled(true);p2.setEnabled(true);p3.setEnabled(true);p4.setEnabled(true);
        h11.setEnabled(true);h12.setEnabled(true);h13.setEnabled(true);h14.setEnabled(true);
      }
      else if(flag_pc==1 && flag_sw==1) 
      { 
        //for enabling dragging
        p1.setEnabled(true);p2.setEnabled(true);p3.setEnabled(true);p4.setEnabled(true);     
        s11.setEnabled(true); s12.setEnabled(true); s13.setEnabled(true); s14.setEnabled(true);
      }
      else if(flag_lp ==1 && flag_hb==1) 
      { 
        //for enabling dragging
        l1.setEnabled(true);l2.setEnabled(true);l3.setEnabled(true);l4.setEnabled(true);
        h11.setEnabled(true);h12.setEnabled(true);h13.setEnabled(true);h14.setEnabled(true);
      }
      else if(flag_lp ==1 && flag_sw==1) 
      { 
        //for enabling dragging
        l1.setEnabled(true);l2.setEnabled(true);l3.setEnabled(true);l4.setEnabled(true);
        s11.setEnabled(true); s12.setEnabled(true); s13.setEnabled(true); s14.setEnabled(true);
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
      reset();
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
            
        window.location.reload();
     
            }    

         
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
           else if(flag_hb==0 && flag_sw==0)
           {
            Swal.fire({
              backdrop:false,
              target:'#mid',
              customClass: {
                container: 'position-absolute'
              }, 
              title:"Central device missing",
              text:"First add central device by clicking on hub or switch.",
       
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
              text:"Make proper connection.",
              icon:"error",
              });
           }
           else if(output=="star")
                    {
                   
                     var n=0;
                     for(var i=0;i<4;i++)
                     {
                      console.log(sourceArray[i]);
                      console.log(targetArray[i]);
                     
                      if(
                      (((sourceArray[i] == "PC1" || sourceArray[i] == "LP1") && (targetArray[i] == "HUB1" || targetArray[i] == "SWITCH1")) || ((targetArray[i] == "PC1" || targetArray[i] == "LP1") && (sourceArray[i] == "HUB1" || sourceArray[i] == "SWITCH1"))) || 
                      (((sourceArray[i] == "PC2" || sourceArray[i] == "LP2") && (targetArray[i] == "HUB1" || targetArray[i] == "SWITCH1")) || ((targetArray[i] == "PC2" || targetArray[i] == "LP2") && (sourceArray[i] == "HUB1" || sourceArray[i] == "SWITCH1"))) ||  
                      (((sourceArray[i] == "PC3" || sourceArray[i] == "LP3") && (targetArray[i] == "HUB1" || targetArray[i] == "SWITCH1")) || ((targetArray[i] == "PC3" || targetArray[i] == "LP3") && (sourceArray[i] == "HUB1" || sourceArray[i] == "SWITCH1"))) || 
                      (((sourceArray[i] == "PC4" || sourceArray[i] == "LP4") && (targetArray[i] == "HUB1" || targetArray[i] == "SWITCH1")) || ((targetArray[i] == "PC4" || targetArray[i] == "LP4") && (sourceArray[i] == "HUB1" || sourceArray[i] == "SWITCH1"))))
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
                            text:"The devices are connected in Star Topology.",
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
                            html: `<label>How many cables and ports are used during the simulation process of a star topology?</label>
                            <input type="text" id="q1" placeholder="for eg. 2,4">`,
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
                            if(result.value.q1 != "4,8")
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
                            if(result.value.q1 == "4,8")
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
                  }//for close
                     }
                    
                       
                                   
                    }


                   