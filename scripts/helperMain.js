var map, infoWindow;
var rad;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 10
    });
    infoWindow = new google.maps.InfoWindow;

    //Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            //Pin or Marker
            var marker = new google.maps.Marker({
                position: pos,
                map: map
            })
            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here');
            infoWindow.open(map);
            map.setCenter(pos);
            // Display distance information

            btn.onclick = function () {
                rad = distance.value * 1000;
                var circle = new google.maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: map,
                    center: pos,
                    radius: rad
                })

                //Calcuates distance between helper and helpee
                var directionsService = new google.maps.DirectionsService();
                firebase.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        db.collection("users").doc(user.uid).get().then(function (snap) {
                            let locationInfo = snap.data().address + snap.data().city + snap.data().postalCode;
                            db.collection("users").get().then(function (snapshot) {
                                snapshot.forEach(function (doc) {
                                    if (doc.data().role == "helpee") {
                                        let helpeeLocation = doc.data().address + doc.data().city + doc.data().postalCode;
                                        const route = {
                                            origin: locationInfo,
                                            destination: helpeeLocation,
                                            travelMode: 'DRIVING'
                                        }

                                        directionsService.route(route,
                                            function (response, status) { // anonymous function to capture directions
                                                if (status !== 'OK') {
                                                    window.alert('Directions request failed due to ' + status);
                                                    return;
                                                } else {
                                                    var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
                                                    if (!directionsData) {
                                                        window.alert('Directions request failed');
                                                        return;
                                                    }
                                                    else if (directionsData.distance.value <= rad) {
                                                        console.log(doc.data().name + directionsData.distance.text);
                                                        viewHelpees();
                                                    }
                                                }
                                            });
                                    }
                                })
                            })
                        })
                    }
                })
            }
        })
    }
}

function viewHelpees() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        let info = document.getElementById("info");
        let helpees = db.collection("users").where("role", "==", "helpee");
        helpees.get().then(function (list) {
          list.forEach(function (doc) {
            let name = doc.data().name;
            let link = document.createElement("button");
            let br = document.createElement("br");
            link.innerHTML = name;
            link.setAttribute("onclick", "viewInfo(" + JSON.stringify(doc.id) + "," + JSON.stringify(user.uid) + ")");
            info.append(link);
            info.append(br);
          });
        });
  
        // delete next 2 lines to remove "View notifications" anchor
        let notifications = $("<a href='helperNotifications.html'>View notifications</a>");
        $("body").append(notifications);
      }
      else {
        console.log("not logged in");
      }
    });
  }

/*function createCard(helpee) {
    let card = document.createElement('div');
    card.className = "card";
    card.style.width = "18rem";
    card.style.margin = "auto";
    card.style.marginTop = "10px";
    let img = document.createElement("img");
    img.className = "card-img-top";
    img.src = "";
    img.style.width = "100%";
    img.style.height = "10vw";
    img.style.objectFit = "cover";
    let cardBody = document.createElement('div');
    cardBody.class = "card-body";
    let title = document.createElement('h5');
    title.className = "card-title";
    let textName = document.createTextNode(helpee.data().name);
    title.appendChild(textName);
    //let cardText = document.createElement('p');
    //cardText.className = "card-text";
    //let description = document.createTextNode(helpee.data().description);
    //cardText.appendChild(description);
    let viewHelpee = document.createElement('a');
    viewHelpee.className = "align-self-end btn btn-primary btn-block";
    viewHelpee.href = "helpeeProfile.html?" + helpee.id;
    let text = document.createTextNode("View Helpee");
    viewHelpee.appendChild(text);
    cardBody.appendChild(title);
    //cardBody.appendChild(description);
    cardBody.appendChild(viewHelpee);
    img.appendChild(cardBody);
    card.appendChild(img);
    card.appendChild(cardBody);
    let t = document.createTextNode("These people are near you and need your help!");
    document.getElementById("nearYou").innerHTML = "These people are near you and need your help!";
    document.getElementsByClassName("card-columns")[0].appendChild(card);
}*/

