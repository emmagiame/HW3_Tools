        // Author: Emma Giamello
        // Version: 2/7/24
        //sends an alert when cake is ordered
        function cakeOrdered(){
            var text = document.getElementById("moreInfo").value;
            if(text.includes("vegan") || text.includes("Vegan")){
               alert('Our cheese cakes contain dairy');
            }
            else {

                //CANT CLEAR FORM :(
                //document.getElementById('cakeOrder').style.visibility = 'none';
                //let originalMessage = document.getElementById('message').value;
                //let newMessage = originalMessage.replace("Order a cheesecake here with this form!!!", "Thank you for ordering from us. Enjoy your cheesecake!!!");
                //document.getElementById('cakeOrders').innerHTML = "thank you.";

                //once cake is ordered send comfirmation and order details
                if(document.getElementById("cb1").checked){
                    document.getElementById('cakeOrder').innerHTML = "Thank you for ordering from us! Enjoy your " + document.getElementById("numOfCakesSelection").value + " Plain cheesecakes.";
                }
                else if(document.getElementById("cb2").checked){
                    document.getElementById('cakeOrder').innerHTML = "Thank you for ordering from us! Enjoy your " + document.getElementById("numOfCakesSelection").value + " Cherry cheesecakes.";
                }
                else if(document.getElementById("cb3").checked){
                    document.getElementById('cakeOrder').innerHTML = "Thank you for ordering from us! Enjoy your " + document.getElementById("numOfCakesSelection").value + " Chocolate cheesecakes.";
                }
                else{
                    alert("Please select a topping.");
                }
            }
        }
