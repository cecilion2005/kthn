document.getElementById("test-form").onchange = function(){
    var n1 = 0;n2 = 0;n3 = 0;n4 = 0;n5 = 0;n6 = 0;n7 = 0;n8 = 0;n9 = 0;kq = 0;
              var checkbox = document.getElementsById('nn');
              for (var i = 0; i < checkbox.length; i++){
                    if (checkbox[i].checked === true){
             switch (checkbox[i].value){
                            case "1a": {n1++;
                            break;
                        }
                            case "1b": {n2++;
                            break;
                        }
                            case "1c": {n3++;
                            break;
                        } 
                            case "1d": {n4++;
                            break;
                        }
                            case "1e": {n5++;
                            break;
                        }
                            case "1f": {n6++;
                            break;
                        }                           
                            case "1h": {n7++;
                            break;
                        }
                            case "1i": {n8++;
                            break;
                        }
                            case "1k": {n9++;
                            break;
                        }
                    }
                }
            }
var kq = Math.max(n1,n2,n3,n4,n5,n6,n7,n8,n9);
document.getElementById("ketq").value = kq;
}