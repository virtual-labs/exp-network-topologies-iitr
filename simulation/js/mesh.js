

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
   
          var x=document.getElementById('PCM1');
          x.style.visibility='visible';
     
          var x=document.getElementById('PCM2');
          x.style.visibility='visible';
      
          var x=document.getElementById('PCM3');
          x.style.visibility='visible';
   
          var x=document.getElementById('PCM4');
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
        
           });  ;

                 
     }
   
               if(ak=="lap"){
   
                 document.getElementById('com').onclick = null;
           document.getElementById('com').style.opacity = 0.5;
   
           document.getElementById('lap').onclick = null;
           document.getElementById('lap').style.opacity = 0.5;
   
          var x=document.getElementById('LPM1');
          x.style.visibility='visible';
     
          var x=document.getElementById('LPM2');
          x.style.visibility='visible';
      
          var x=document.getElementById('LPM3');
          x.style.visibility='visible';
   
          var x=document.getElementById('LPM4');
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
  
                var x=document.getElementById('HUBM1');
                x.style.visibility='visible';
  
                var x=document.getElementById('HUBM2');
                x.style.visibility='visible';
  
                var x=document.getElementById('HUBM3');
                x.style.visibility='visible';
  
                var x=document.getElementById('HUBM4');
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
  
                var x=document.getElementById('SWITCHM1');
                x.style.visibility='visible';
  
                var x=document.getElementById('SWITCHM2');
                x.style.visibility='visible';
  
                var x=document.getElementById('SWITCHM3');
                x.style.visibility='visible';
  
                var x=document.getElementById('SWITCHM4');
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
      var p1 = instance.bind("ready", function() {
        if(flag_pc==1)
        {
          var p1 = instance.addEndpoint("PCM1", {
            endpoint: "Dot",
            enabled: false, 
            anchor: ["RightMiddle"],
            isSource: true,
            isTarget: true,
            uuid:"p1",
            connector: 'Straight',
            connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
            endpointStyle:{ fill:"black"},
            connectionsDetachable: false,
          } 
        ); 
          
            
          var p2 = instance.addEndpoint("PCM2", {
          endpoint: "Dot",
          enabled: false, 
          anchor: ["LeftMiddle"],
          isSource: true,
          isTarget: true,
          uuid:"p2",
          connector: 'Straight',
          connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
          endpointStyle:{ fill:"black"}, connectionsDetachable: false,
        });
      
        
      var p3 = instance.addEndpoint("PCM3", {
        endpoint: "Dot",
        enabled: false, 
        anchor: ["LeftMiddle"],
        isSource: true,
        isTarget: true,
        uuid:"p3",
        connector: 'Straight',
        connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
        endpointStyle:{ fill:"black"}, connectionsDetachable: false,
      });
    
      
    var p4 = instance.addEndpoint("PCM4", {
      endpoint: "Dot",
      enabled: false, 
      anchor: ["RightMiddle"],
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
 var l1 = instance.addEndpoint("LPM1", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 0,95,45]],
    isSource: true,
    isTarget: true,
    uuid: "l1",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 },
    connectionsDetachable: false,
  }); 

  
 var l2 = instance.addEndpoint("LPM2", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 0,5,45]],
    isSource: true,
    isTarget: true,
    uuid:"l2",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 },
    connectionsDetachable: false,
  });
  

  
  var l3 = instance.addEndpoint("LPM3", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 0,5,45]],
    isSource: true,
    isTarget: true,
    uuid:"l3",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 },
    connectionsDetachable: false,
  });
  
  var l4 = instance.addEndpoint("LPM4", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 0,95,45]],
    isSource: true,
    isTarget: true,
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 },
    connectionsDetachable: false,
  });
 
}

  
//HUB
if(flag_hb==1)
{
    var h11 = instance.addEndpoint("HUBM1", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,26,54]],
    isSource: true,
    isTarget: true,
    uuid:"h11",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5},
    connectionsDetachable: false,
  });
  
  var h12 = instance.addEndpoint("HUBM1", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,46,54]],
    isSource: true,
    isTarget: true,
    uuid:"h12",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  });

  var h13 = instance.addEndpoint("HUBM1", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,66,54]],
    isSource: true,
    isTarget: true,
    uuid:"h13",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  });

var h14 = instance.addEndpoint("HUBM1", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,84,54]],
    isSource: true,
    isTarget: true,
    uuid:"h14",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  });

  //2nd hub
var h21 = instance.addEndpoint("HUBM2", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,26,54]],
  isSource: true,
  isTarget: true,
  uuid:"h21",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
  endpointStyle:{ fill:"red", radius:5 },
  connectionsDetachable: false,
  });

  var h22 = instance.addEndpoint("HUBM2", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,46,54]],
    isSource: true,
    isTarget: true,
    uuid:"h22",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  });

  var h23 = instance.addEndpoint("HUBM2", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,66,54]],
    isSource: true,
    isTarget: true,
    uuid:"h23",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
    });

var h24 = instance.addEndpoint("HUBM2", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,84,54]],
  isSource: true,
  isTarget: true,
  uuid:"h24",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
  endpointStyle:{ fill:"red", radius:5 },
  connectionsDetachable: false,
  });

  //3rd hub
var h31 = instance.addEndpoint("HUBM3", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,26,54]],
    isSource: true,
    isTarget: true,
    uuid:"h31",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  });


  var h32 = instance.addEndpoint("HUBM3", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,46,54]],
    isSource: true,
    isTarget: true,
    uuid:"h32",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  });


  var h33 = instance.addEndpoint("HUBM3", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,66,54]],
    isSource: true,
    isTarget: true,
    uuid:"h33",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  });

var h34 = instance.addEndpoint("HUBM3", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,84,54]],
    isSource: true,
    isTarget: true,
    uuid:"h34",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  });

//hub4
var h41 = instance.addEndpoint("HUBM4", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,26,54]],
    isSource: true,
    isTarget: true,
    uuid:"h41",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  });

  var h42 = instance.addEndpoint("HUBM4", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,46,54]],
    isSource: true,
    isTarget: true,
    uuid:"h42",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  });

  var h43 = instance.addEndpoint("HUBM4", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,66,54]],
    isSource: true,
    isTarget: true,
    uuid:"h43",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  } );

var h44 = instance.addEndpoint("HUBM4", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,84,54]],
    isSource: true,
    isTarget: true,
    uuid:"h44",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:5 },
    connectionsDetachable: false,
  });

}


//SWITCH
if(flag_sw==1)
{
  var s11 = instance.addEndpoint("SWITCHM1", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,16,46]],
    isSource: true,
    isTarget: true,
    uuid:"s11",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
    endpointStyle:{ fill:"red", radius:7 },
    connectionsDetachable: false,
  });

  var s12 = instance.addEndpoint("SWITCHM1", {
      endpoint: "Dot",
      enabled: false, 
      anchor: [[ 0, 0, 0, 1,38,46]],
      isSource: true,
      isTarget: true,
      uuid:"s12",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
      endpointStyle:{ fill:"red", radius:7 },
      connectionsDetachable: false,
    });

    var s13 = instance.addEndpoint("SWITCHM1", {
        endpoint: "Dot",
        enabled: false, 
        anchor: [[ 0, 0, 0, 1,60,46]],
        isSource: true,
        isTarget: true,
        uuid:"s13",
        connector: 'Straight',
        connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,},
        endpointStyle:{ fill:"red", radius:7 },
        connectionsDetachable: false,
      });

 var s14 = instance.addEndpoint("SWITCHM1", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,84,46]],
    isSource: true,
    isTarget: true,
    uuid:"s14",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,  },
    endpointStyle:{ fill:"red", radius:7 },
    connectionsDetachable: false,
  });

  //2nd switch
  var s21 = instance.addEndpoint("SWITCHM2", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,16,46]],
    isSource: true,
    isTarget: true,
    uuid:"s21",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,  },
    endpointStyle:{ fill:"red", radius:7 },
    connectionsDetachable: false,
  });

  var s22 = instance.addEndpoint("SWITCHM2", {
      endpoint: "Dot",
      enabled: false, 
      anchor: [[ 0, 0, 0, 1,38,46]],
      isSource: true,
      isTarget: true,
      uuid:"s22",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,  },
      endpointStyle:{ fill:"red", radius:7 },
      connectionsDetachable: false,
    });

    var s23 = instance.addEndpoint("SWITCHM2", {
        endpoint: "Dot",
        enabled: false, 
        anchor: [[ 0, 0, 0, 1,60,46]],
        isSource: true,
        isTarget: true,
        uuid:"s23",
        connector: 'Straight',
        connectorStyle: {  color:'black',stroke:"black",strokeWidth:3,  },
        endpointStyle:{ fill:"red", radius:7 }, connectionsDetachable: false,
      });

 var s24 = instance.addEndpoint("SWITCHM2", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,84,46]],
    isSource: true,
    isTarget: true,
    uuid:"s24",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:7 }, connectionsDetachable: false,
  });

  //3rd switch

  var s31 = instance.addEndpoint("SWITCHM3", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,16,46]],
    isSource: true,
    isTarget: true,
    uuid:"s31",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:7 }, connectionsDetachable: false,
  });

  var s32 = instance.addEndpoint("SWITCHM3", {
      endpoint: "Dot",
      enabled: false, 
      anchor: [[ 0, 0, 0, 1,38,46]],
      isSource: true,
      isTarget: true,
      uuid:"s32",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
      endpointStyle:{ fill:"red", radius:7 }, connectionsDetachable: false,
    });

    var s33 = instance.addEndpoint("SWITCHM3", {
        endpoint: "Dot",
        enabled: false, 
        anchor: [[ 0, 0, 0, 1,60,46]],
        isSource: true,
        isTarget: true,
        uuid:"s33",
        connector: 'Straight',
        connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
        endpointStyle:{ fill:"red", radius:7 }, connectionsDetachable: false,
      });

 var s34 = instance.addEndpoint("SWITCHM3", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,84,46]],
    isSource: true,
    isTarget: true,
    uuid:"s34",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:7 }, connectionsDetachable: false,
  });

  //4th switch

  var s41 = instance.addEndpoint("SWITCHM4", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,16,46]],
    isSource: true,
    isTarget: true,
    uuid:"s41",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:7 }, connectionsDetachable: false,
  });

  var s42 = instance.addEndpoint("SWITCHM4", {
      endpoint: "Dot",
      enabled: false, 
      anchor: [[ 0, 0, 0, 1,38,46]],
      isSource: true,
      isTarget: true,
      uuid:"s42",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
      endpointStyle:{ fill:"red", radius:7 }, connectionsDetachable: false,
    });

    var s43 = instance.addEndpoint("SWITCHM4", {
        endpoint: "Dot",
        enabled: false, 
        anchor: [[ 0, 0, 0, 1,60,46]],
        isSource: true,
        isTarget: true,
        uuid:"s43",
        connector: 'Straight',
        connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
        endpointStyle:{ fill:"red", radius:7 }, connectionsDetachable: false,
      });

 var s44 = instance.addEndpoint("SWITCHM4", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,84,46]],
    isSource: true,
    isTarget: true,
    uuid:"s44",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3, },
    endpointStyle:{ fill:"red", radius:7 }, connectionsDetachable: false,
  });
 
}

if(flag_pc==1 && flag_hb==1) 
      { 
        //for enabling dragging
        p1.setEnabled(true);p2.setEnabled(true);p3.setEnabled(true);p4.setEnabled(true);
        h11.setEnabled(true);h12.setEnabled(true);h13.setEnabled(true);h14.setEnabled(true);
        h21.setEnabled(true);h22.setEnabled(true);h23.setEnabled(true);h24.setEnabled(true);
        h31.setEnabled(true);h32.setEnabled(true);h33.setEnabled(true);h34.setEnabled(true);
        h41.setEnabled(true);h42.setEnabled(true);h43.setEnabled(true);h44.setEnabled(true);
      }
      else if(flag_pc==1 && flag_sw==1) 
      { 
        //for enabling dragging
        p1.setEnabled(true);p2.setEnabled(true);p3.setEnabled(true);p4.setEnabled(true);     
        s11.setEnabled(true);s12.setEnabled(true);s13.setEnabled(true);s14.setEnabled(true);
        s21.setEnabled(true);s22.setEnabled(true);s23.setEnabled(true);s24.setEnabled(true);
        s31.setEnabled(true);s32.setEnabled(true);s33.setEnabled(true);s34.setEnabled(true);
        s41.setEnabled(true);s42.setEnabled(true);s43.setEnabled(true);s44.setEnabled(true);
      }
      else if(flag_lp ==1 && flag_hb==1) 
      { 
        //for enabling dragging
        l1.setEnabled(true);l2.setEnabled(true);l3.setEnabled(true);l4.setEnabled(true);
        h11.setEnabled(true);h12.setEnabled(true);h13.setEnabled(true);h14.setEnabled(true);
        h21.setEnabled(true);h22.setEnabled(true);h23.setEnabled(true);h24.setEnabled(true);
        h31.setEnabled(true);h32.setEnabled(true);h33.setEnabled(true);h34.setEnabled(true);
        h41.setEnabled(true);h42.setEnabled(true);h43.setEnabled(true);h44.setEnabled(true);
      }
      else if(flag_lp ==1 && flag_sw==1) 
      { 
        //for enabling dragging
        l1.setEnabled(true);l2.setEnabled(true);l3.setEnabled(true);l4.setEnabled(true);
        s11.setEnabled(true);s12.setEnabled(true);s13.setEnabled(true);s14.setEnabled(true);
        s21.setEnabled(true);s22.setEnabled(true);s23.setEnabled(true);s24.setEnabled(true);
        s31.setEnabled(true);s32.setEnabled(true);s33.setEnabled(true);s34.setEnabled(true);
        s41.setEnabled(true);s42.setEnabled(true);s43.setEnabled(true);s44.setEnabled(true);
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
           else if(conn<10)
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
                      //for checking dupliate connection
                      var meshlink=0;
                      for (i = 0; i < 10; i++) {
                        for (j = i + 1; j < 10; j++) {
                        if ((sourceArray[i] == sourceArray[j]) && (targetArray[i] == targetArray[j]))
                          {
                            console.log(meshlink);
                            meshlink=meshlink+1;
                            break;
                          }                       
                        }
                        if(meshlink!=0)
                        {break;}
                        }

                  
                     if(meshlink==0)
                     {
                     var n=1;
                     for(var i=0;i<10;i++)
                     {
                      console.log(sourceArray[i]);
                      console.log(targetArray[i]);
                      if(
                      (((sourceArray[i] == "PCM1" || sourceArray[i] == "LPM1") && (targetArray[i] == "HUBM1" || targetArray[i] == "SWITCHM1")) || ((targetArray[i] == "PCM1" || targetArray[i] == "LPM1") && (sourceArray[i] == "HUBM1" || sourceArray[i] == "SWITCHM1"))) || 
                      (((sourceArray[i] == "PCM2" || sourceArray[i] == "LPM2") && (targetArray[i] == "HUBM2" || targetArray[i] == "SWITCHM2")) || ((targetArray[i] == "PCM2" || targetArray[i] == "LPM2") && (sourceArray[i] == "HUBM2" || sourceArray[i] == "SWITCHM2"))) ||
                      (((sourceArray[i] == "PCM3" || sourceArray[i] == "LPM3") && (targetArray[i] == "HUBM3" || targetArray[i] == "SWITCHM3")) || ((targetArray[i] == "PCM3" || targetArray[i] == "LPM3") && (sourceArray[i] == "HUBM3" || sourceArray[i] == "SWITCHM3"))) ||
                      (((sourceArray[i] == "PCM4" || sourceArray[i] == "LPM4") && (targetArray[i] == "HUBM4" || targetArray[i] == "SWITCHM4")) || ((targetArray[i] == "PCM4" || targetArray[i] == "LPM4") && (sourceArray[i] == "HUBM4" || sourceArray[i] == "SWITCHM4"))) ||
                      (((sourceArray[i] == "HUBM1" || sourceArray[i] == "HUBM2") && (targetArray[i] == "HUBM1" || targetArray[i] == "HUBM2") && (sourceArray[i]!=targetArray[i])) || ((sourceArray[i] == "SWITCHM1" || sourceArray[i] == "SWITCHM2")&& (targetArray[i] == "SWITCHM2" || targetArray[i] == "SWITCHM1") && (sourceArray[i]!=targetArray[i]))) ||
                      (((sourceArray[i] == "HUBM2" || sourceArray[i] == "HUBM3") && (targetArray[i] == "HUBM2" || targetArray[i] == "HUBM3") && (sourceArray[i]!=targetArray[i])) || ((sourceArray[i] == "SWITCHM2" || sourceArray[i] == "SWITCHM3")&& (targetArray[i] == "SWITCHM2" || targetArray[i] == "SWITCHM3") && (sourceArray[i]!=targetArray[i]))) ||
                      (((sourceArray[i] == "HUBM3" || sourceArray[i] == "HUBM4") && (targetArray[i] == "HUBM3" || targetArray[i] == "HUBM4") && (sourceArray[i]!=targetArray[i])) || ((sourceArray[i] == "SWITCHM3" || sourceArray[i] == "SWITCHM4")&& (targetArray[i] == "SWITCHM3" || targetArray[i] == "SWITCHM4") && (sourceArray[i]!=targetArray[i]))) ||
                      (((sourceArray[i] == "HUBM4" || sourceArray[i] == "HUBM1") && (targetArray[i] == "HUBM4" || targetArray[i] == "HUBM1") && (sourceArray[i]!=targetArray[i])) || ((sourceArray[i] == "SWITCHM4" || sourceArray[i] == "SWITCHM1")&& (targetArray[i] == "SWITCHM4" || targetArray[i] == "SWITCHM1") && (sourceArray[i]!=targetArray[i]))) ||
                      (((sourceArray[i] == "HUBM1" || sourceArray[i] == "HUBM3") && (targetArray[i] == "HUBM1" || targetArray[i] == "HUBM3") && (sourceArray[i]!=targetArray[i])) || ((sourceArray[i] == "SWITCHM1" || sourceArray[i] == "SWITCHM3")&& (targetArray[i] == "SWITCHM1" || targetArray[i] == "SWITCHM3") && (sourceArray[i]!=targetArray[i]))) ||
                      (((sourceArray[i] == "HUBM4" || sourceArray[i] == "HUBM2") && (targetArray[i] == "HUBM4" || targetArray[i] == "HUBM2") && (sourceArray[i]!=targetArray[i])) || ((sourceArray[i] == "SWITCHM4" || sourceArray[i] == "SWITCHM2")&& (targetArray[i] == "SWITCHM4" || targetArray[i] == "SWITCHM2") && (sourceArray[i]!=targetArray[i]))) 
                      
                      )
                      {
                        n = n + 1;
                        if (n == 10) 
                        { 
                          Swal.fire({
                          backdrop:false,
                          target:'#mid',
                          customClass: {
                         container: 'position-absolute'
                           },
                          title:"Connection Established!",
                          text:"The devices are connected in Mesh Topology.",
                          icon:"success",
                          timer: 2000,
                          });   
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
                                          
                      } //for loop close

                    }
                    else{ //if we have duplicate connections
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
                        
                    
                       