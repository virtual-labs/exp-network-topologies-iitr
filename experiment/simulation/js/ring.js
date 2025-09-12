

    var ipc;  var output; var ak;  var lcount; var comon; var value; 
    var i;   var j; var k; var l ; 
  var swon;  var bk;
  
    ipc = 0 ;       lcount=0;   comon =0;   value=0;

 
    var flag_pc=0; var flag_lp=0; var flag_hb=0; var flag_sw=0;var conn=0; var note=0;

    var sourceArray = [];
    var targetArray = [];
  

    function initialise(){
        ipc = 0 ;lcount=0;   comon =0;   value=0;
        swon=0;     
        }

    function imgDraw(id){

        if(id=="com" || id=="lap"){       
         comon=1;ak=id;
         if(comon==1)
         {

         if(ak=="com")
         {
           document.getElementById('com').onclick = null;
           document.getElementById('com').style.opacity = 0.5;
   
           document.getElementById('lap').onclick = null;
           document.getElementById('lap').style.opacity = 0.5;
   
          var x=document.getElementById('PCR1');
          x.style.visibility='visible';
     
          var x=document.getElementById('PCR2');
          x.style.visibility='visible';
      
          var x=document.getElementById('PCR3');
          x.style.visibility='visible';
   
          var x=document.getElementById('PCR4');
          x.style.visibility='visible';
      
           
          flag_pc=1;

          Swal.fire({
            backdrop:false,
            target:'#mid',
            customClass: {
              container: 'position-absolute'
            }, 
           title:"End devices",
           text:"You can create a topology using any number of end devices, but here we will use a total of four.",
           position:'center',
        
           });  
                         
     }
   
               if(ak=="lap"){
   
                 document.getElementById('com').onclick = null;
           document.getElementById('com').style.opacity = 0.5;
   
           document.getElementById('lap').onclick = null;
           document.getElementById('lap').style.opacity = 0.5;
   
          var x=document.getElementById('LPR1');
          x.style.visibility='visible';
     
          var x=document.getElementById('LPR2');
          x.style.visibility='visible';
      
          var x=document.getElementById('LPR3');
          x.style.visibility='visible';
   
          var x=document.getElementById('LPR4');
          x.style.visibility='visible';
    
       flag_lp=1;

       Swal.fire({
        backdrop:false,
        target:'#mid',
        customClass: {
          container: 'position-absolute'
        }, 
       title:"End devices",
       text:"You can create a topology using any number of end devices, but here we will use a total of four.",
       position:'center',
    
       });  
         
           }
                
               comon =0;
           } 
          }
        if(id=="iswitch" || id=="iswitch1"){
             swon=1;   bk=id; note=1;   
             if(swon==1){
         
              if(bk=="iswitch")
              {
                document.getElementById('iswitch1').onclick = null;
                document.getElementById('iswitch1').style.opacity = 0.5;
              
                document.getElementById('iswitch').onclick = null;
                document.getElementById('iswitch').style.opacity = 0.5;
  
                var x=document.getElementById('HUBR1');
                x.style.visibility='visible';
  
                var x=document.getElementById('HUBR2');
                x.style.visibility='visible';
  
                var x=document.getElementById('HUBR3');
                x.style.visibility='visible';
  
                var x=document.getElementById('HUBR4');
                x.style.visibility='visible';
      
                if(note==1 && (ak=="com" || ak=="lap"))
                {
                  Swal.fire({
                    backdrop:false,
                    target:'#mid',
                    customClass: {
                      container: 'position-absolute'
                    }, 
                   title:"Intermediate devices",
                   text:"You can`t connect end devices directly with each other. You obviously need an intermediate device that will serve this purpose.",
                   position:'center',
                   });  
                               
                  note=0;
                }
                flag_hb=1;
             
             
            }
  
              if(bk=="iswitch1")
              {
                document.getElementById('iswitch').onclick = null;
                document.getElementById('iswitch').style.opacity = 0.5;
  
                document.getElementById('iswitch1').onclick = null;
                document.getElementById('iswitch1').style.opacity = 0.5;
  
                var x=document.getElementById('SWITCHR1');
                x.style.visibility='visible';
  
                var x=document.getElementById('SWITCHR2');
                x.style.visibility='visible';
  
                var x=document.getElementById('SWITCHR3');
                x.style.visibility='visible';
  
                var x=document.getElementById('SWITCHR4');
                x.style.visibility='visible';

                flag_sw=1;
                if(note==1 && (ak=="com" || ak=="lap"))
                {
                  
                  Swal.fire({
                    backdrop:false,
                    target:'#mid',
                    customClass: {
                      container: 'position-absolute'
                    }, 
                   title:"Intermediate devices",
                   text:"You can`t connect end devices directly with each other. You obviously need an intermediate device that will serve this purpose.",
                   position:'center',
                   });
           
                  note=0;
                }
                        
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
          var p1 = instance.addEndpoint("PCR1", {
            endpoint: "Dot",
            anchor: ["RightMiddle"],
            enabled: false, 
            isSource: true,
            isTarget: true,
            uuid:"p1",
            connector: 'Straight',
            connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
            endpointStyle:{ fill:"black"}, connectionsDetachable: false,
          } 
        ); 
          
            
          var p2 = instance.addEndpoint("PCR2", {
          endpoint: "Dot",
          anchor: ["LeftMiddle"],
          enabled: false, 
          isSource: true,
          isTarget: true,
          uuid:"p2",
          connector: 'Straight',
          connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
          endpointStyle:{ fill:"black"}, connectionsDetachable: false,
        });
      
        
      var p3 = instance.addEndpoint("PCR3", {
        endpoint: "Dot",
        anchor: ["LeftMiddle"],
        enabled: false, 
        isSource: true,
        isTarget: true,
        uuid:"p3",
        connector: 'Straight',
        connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
        endpointStyle:{ fill:"black"}, connectionsDetachable: false,
      });
    
      
    var p4 = instance.addEndpoint("PCR4", {
      endpoint: "Dot",
      anchor: ["RightMiddle"],
      enabled: false, 
      isSource: true,
      isTarget: true,
      uuid:"p4",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
      endpointStyle:{ fill:"black"}, connectionsDetachable: false,
    });
   
}
        
    
//LAPTOP 
if(flag_lp==1)
{
 var l1 = instance.addEndpoint("LPR1", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 0,95,45]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"l1",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 }, connectionsDetachable: false,
    
  } 
  ); 

  
var l2 = instance.addEndpoint("LPR2", {
  endpoint: "Dot",
  anchor: [[ 0, 0, 0, 0,5,45]],
  enabled: false, 
  isSource: true,
  isTarget: true,
  uuid:"l2",
  connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 }, connectionsDetachable: false,
  });
  

  
  var l3 = instance.addEndpoint("LPR3", {
  endpoint: "Dot",
  anchor: [[ 0, 0, 0, 0,5,45]],
  enabled: false, 
  isSource: true,
  isTarget: true,
  uuid:"l3",
  connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 }, connectionsDetachable: false,
  });
  
  var l4 = instance.addEndpoint("LPR4", {
  endpoint: "Dot",
  anchor: [[ 0, 0, 0, 0,95,45]],
  enabled: false, 
  isSource: true,
  isTarget: true,
  uuid:"l4",
  connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 }, connectionsDetachable: false,
  });
 
}

  
//HUB
if(flag_hb==1)
{
  var h11 = instance.addEndpoint("HUBR1", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,26,54]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"h11",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });
  
  var h12 = instance.addEndpoint("HUBR1", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,46,54]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"h12",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });

var h13 = instance.addEndpoint("HUBR1", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,84,54]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"h13",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });

  //2nd hub
var h21 = instance.addEndpoint("HUBR2", {
  endpoint: "Dot",
  anchor: [[ 0, 0, 0, 1,26,54]],
  enabled: false, 
  isSource: true,
  isTarget: true,
  uuid:"h21",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
  endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });

  var h22 = instance.addEndpoint("HUBR2", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,46,54]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"h22",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });

var h23 = instance.addEndpoint("HUBR2", {
  endpoint: "Dot",
  anchor: [[ 0, 0, 0, 1,84,54]],
  enabled: false, 
  isSource: true,
  isTarget: true,
  uuid:"h23",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });

  //3rd hub
 var h31 = instance.addEndpoint("HUBR3", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,26,54]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"h31",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });

  var h32 = instance.addEndpoint("HUBR3", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,46,54]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"h32",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });

 var h33 = instance.addEndpoint("HUBR3", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,84,54]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"h33",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });

//hub4
var h41 = instance.addEndpoint("HUBR4", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,26,54]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"h41",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });

  var h42 = instance.addEndpoint("HUBR4", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,46,54]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"h42",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });

var h43 = instance.addEndpoint("HUBR4", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,84,54]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"h43",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 }, connectionsDetachable: false,
  });

  

}


//SWITCH
if(flag_sw==1)
{
  var s11 =instance.addEndpoint("SWITCHR1", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,18,45]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"s11",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
  });

  var s12 = instance.addEndpoint("SWITCHR1", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,50,45]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"s12",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
    });

 var s13 = instance.addEndpoint("SWITCHR1", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,84,45]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"s13",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
  });

  // 2nd switch

  var s21 = instance.addEndpoint("SWITCHR2", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,50,45]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"s21",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
    });

  var s22 = instance.addEndpoint("SWITCHR2", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,18,45]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"s22",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
  });

 var s23 = instance.addEndpoint("SWITCHR2", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,84,45]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"s23",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
  });
  
  //3rd hub

  var s31 = instance.addEndpoint("SWITCHR3", {
      endpoint: "Dot",
      anchor: [[ 0, 0, 0, 1,50,45]],
      enabled: false, 
      isSource: true,
      isTarget: true,
      uuid:"s31",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
      endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
    });

  var s32 = instance.addEndpoint("SWITCHR3", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,18,45]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"s32",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
  });

 var s33 = instance.addEndpoint("SWITCHR3", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,84,45]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"s33",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
  });

  //4th hub

  var s41 = instance.addEndpoint("SWITCHR4", {
      endpoint: "Dot",
      anchor: [[ 0, 0, 0, 1,50,45]],
      enabled: false, 
      isSource: true,
      isTarget: true,
      uuid:"s41",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
      endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
    });

  var s42 = instance.addEndpoint("SWITCHR4", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,18,45]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"s42",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
  });

 var s43 = instance.addEndpoint("SWITCHR4", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,84,45]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"s43",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:8 }, connectionsDetachable: false,
  });
 
}

if(flag_pc==1 && flag_hb==1) 
      { 
        //for enabling dragging
        p1.setEnabled(true);p2.setEnabled(true);p3.setEnabled(true);p4.setEnabled(true);
        h11.setEnabled(true);h12.setEnabled(true);h13.setEnabled(true);
        h21.setEnabled(true);h22.setEnabled(true);h23.setEnabled(true);
        h31.setEnabled(true);h32.setEnabled(true);h33.setEnabled(true);
        h41.setEnabled(true);h42.setEnabled(true);h43.setEnabled(true);
      }
      else if(flag_pc==1 && flag_sw==1) 
      { 
        //for enabling dragging
        p1.setEnabled(true);p2.setEnabled(true);p3.setEnabled(true);p4.setEnabled(true);     
        s11.setEnabled(true);s12.setEnabled(true);s13.setEnabled(true);
        s21.setEnabled(true);s22.setEnabled(true);s23.setEnabled(true);
        s31.setEnabled(true);s32.setEnabled(true);s33.setEnabled(true);
        s41.setEnabled(true);s42.setEnabled(true);s43.setEnabled(true);
      }
      else if(flag_lp ==1 && flag_hb==1) 
      { 
        //for enabling dragging
        l1.setEnabled(true);l2.setEnabled(true);l3.setEnabled(true);l4.setEnabled(true);
        h11.setEnabled(true);h12.setEnabled(true);h13.setEnabled(true);
        h21.setEnabled(true);h22.setEnabled(true);h23.setEnabled(true);
        h31.setEnabled(true);h32.setEnabled(true);h33.setEnabled(true);
        h41.setEnabled(true);h42.setEnabled(true);h43.setEnabled(true);
      }
      else if(flag_lp ==1 && flag_sw==1) 
      { 
        //for enabling dragging
        l1.setEnabled(true);l2.setEnabled(true);l3.setEnabled(true);l4.setEnabled(true);
        s11.setEnabled(true);s12.setEnabled(true);s13.setEnabled(true);
        s21.setEnabled(true);s22.setEnabled(true);s23.setEnabled(true);
        s31.setEnabled(true);s32.setEnabled(true);s33.setEnabled(true);
        s41.setEnabled(true);s42.setEnabled(true);s43.setEnabled(true);
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
        window.location.reload();
            }    

        function evaltop(){
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
           else if(conn<8)
           {
            Swal.fire({
              backdrop:false,
              target:'#mid',
              customClass: {
                container: 'position-absolute'
              },
              title:"Oops...",
              text:"All device not connected.",
              icon:"error",
              });
           }
                    else 
                    {
                      var ringlink=0;

                   //for checking dupliate connection
                      for (i = 0; i < 8; i++) {
                        for (j = i + 1; j < 8; j++) {
                        if ((sourceArray[i] == sourceArray[j]) && (targetArray[i] == targetArray[j]))
                          {
                            
                            ringlink=ringlink+1;
                            console.log(ringlink);
                            break;
                          }                       
                        }
                        if(ringlink!=0)
                        {
                          break;
                        }
                        }
                       
                       
                       
                        // if no duplicate connection then check for correct connection
                
                     var n=0;
                     if(ringlink==0)
                     {
                     for(var i=0;i<8;i++)
                     {
                      console.log(sourceArray[i]);
                      console.log(targetArray[i]);            

                      if(
                      (((sourceArray[i] == "PCR1" || sourceArray[i] == "LPR1") && (targetArray[i] == "HUBR1" || targetArray[i] == "SWITCHR1")) || ((targetArray[i] == "PCR1" || targetArray[i] == "LPR1") && (sourceArray[i] == "HUBR1" || sourceArray[i] == "SWITCHR1"))) || 
                      (((sourceArray[i] == "PCR2" || sourceArray[i] == "LPR2") && (targetArray[i] == "HUBR2" || targetArray[i] == "SWITCHR2")) || ((targetArray[i] == "PCR2" || targetArray[i] == "LPR2") && (sourceArray[i] == "HUBR2" || sourceArray[i] == "SWITCHR2"))) ||
                      (((sourceArray[i] == "PCR3" || sourceArray[i] == "LPR3") && (targetArray[i] == "HUBR3" || targetArray[i] == "SWITCHR3")) || ((targetArray[i] == "PCR3" || targetArray[i] == "LPR3") && (sourceArray[i] == "HUBR3" || sourceArray[i] == "SWITCHR3"))) ||
                      (((sourceArray[i] == "PCR4" || sourceArray[i] == "LPR4") && (targetArray[i] == "HUBR4" || targetArray[i] == "SWITCHR4")) || ((targetArray[i] == "PCR4" || targetArray[i] == "LPR4") && (sourceArray[i] == "HUBR4" || sourceArray[i] == "SWITCHR4"))) ||
                      (((sourceArray[i] == "HUBR1" || sourceArray[i] == "HUBR2") && (targetArray[i] == "HUBR1" || targetArray[i] == "HUBR2") && (sourceArray[i]!=targetArray[i])) || ((sourceArray[i] == "SWITCHR1" || sourceArray[i] == "SWITCHR2")&& (targetArray[i] == "SWITCHR2" || targetArray[i] == "SWITCHR1") && (sourceArray[i]!=targetArray[i]))) ||
                      (((sourceArray[i] == "HUBR2" || sourceArray[i] == "HUBR3") && (targetArray[i] == "HUBR2" || targetArray[i] == "HUBR3") && (sourceArray[i]!=targetArray[i])) || ((sourceArray[i] == "SWITCHR2" || sourceArray[i] == "SWITCHR3")&& (targetArray[i] == "SWITCHR2" || targetArray[i] == "SWITCHR3") && (sourceArray[i]!=targetArray[i]))) ||
                      (((sourceArray[i] == "HUBR3" || sourceArray[i] == "HUBR4") && (targetArray[i] == "HUBR3" || targetArray[i] == "HUBR4") && (sourceArray[i]!=targetArray[i])) || ((sourceArray[i] == "SWITCHR3" || sourceArray[i] == "SWITCHR4")&& (targetArray[i] == "SWITCHR3" || targetArray[i] == "SWITCHR4") && (sourceArray[i]!=targetArray[i]))) ||
                      (((sourceArray[i] == "HUBR4" || sourceArray[i] == "HUBR1") && (targetArray[i] == "HUBR4" || targetArray[i] == "HUBR1") && (sourceArray[i]!=targetArray[i])) || ((sourceArray[i] == "SWITCHR4" || sourceArray[i] == "SWITCHR1")&& (targetArray[i] == "SWITCHR4" || targetArray[i] == "SWITCHR1") && (sourceArray[i]!=targetArray[i])))
                      )
                      {
                        n = n + 1;
                        if (n == 8) 
                        {
                          Swal.fire({
                            backdrop:false,
                            target:'#mid',
                            customClass: {
                           container: 'position-absolute'
                             },
                            title:"Connection Established!",
                            text:"The devices are connected in Ring Topology.",
                            icon:"success",
                            timer: 2000,
                            });                    

                          
                         // await sleep(2000);
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
                                       
                      } //for close
                    }

                    else{  //if we have duplicate connections
                       
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
                 
                    }
                  }
                  
                     }
                        
                    
                       
                   
                    