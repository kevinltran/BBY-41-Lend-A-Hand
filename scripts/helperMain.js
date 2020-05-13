var map, infoWindow;
var rad;
let info = document.getElementById("info");

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
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

            btn.onclick = function () {
                rad = distance.value * 1000;
                circle.setRadius(rad);

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
                                                    } else if (directionsData.distance.value <= rad) {
                                                        console.log(doc.data().name + directionsData.distance.text);
                                                        //displayHelpees(doc, user);
                                                        createCard(doc, user);
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

// function displayHelpees(doc, user) {
//     let info = document.getElementById("info");
//     let name = doc.data().name;
//     let link = document.createElement("button");
//     let br = document.createElement("br");
//     link.innerHTML = name;
//     link.setAttribute("onclick", "viewInfo(" + JSON.stringify(doc.id) + "," + JSON.stringify(user.uid) + ")");
//     info.append(link);
//     info.append(br);
// }

function notifications() {
    let notifications = $("<a href='helperNotifications.html'>View notifications</a>");
    $("body").append(notifications);
}

notifications();


function createCard(doc, user) {
    document.getElementById("help").innerHTML = "These people are in your area and need some help!";
    document.getElementById("moreInfo").innerHTML= "Click on the cards to see more info.";
    let col = document.createElement('div');
    col.className = "col-xs-6 col-sm-6 col-md-4 col-lg-3";
    let card = document.createElement('div');
    card.className = "card text-white bg-info mb-3";
    card.style.width = "18rem";
    card.style.margin = "auto";
    card.style.marginTop = "10px";
    // let img = document.createElement("img");
    // img.className = "card-img-top";
    // img.src = "";
    // img.style.width = "100%";
    // img.style.height = "10vw";
    // img.style.objectFit = "cover";
    let cardBody = document.createElement('div');
    cardBody.class = "card-body";
    cardBody.style.height = "10rem";
    cardBody.style.overflow = "hidden";
    let title = document.createElement('h5');
    title.className = "card-title";
    let textName = document.createTextNode(doc.data().name);
    title.appendChild(textName);
    let cardText = document.createElement('p');
    cardText.className = "card-text";
    let description = document.createTextNode(doc.data().description);
    cardText.appendChild(description);
    let viewHelpee = document.createElement('a');
    viewHelpee.className = "align-self-end btn stretched-link";
    //viewHelpee.href = "helpeeProfile.html?" + helpee.id;
    //viewHelpee.onclick = viewInfo();
    viewHelpee.setAttribute("onclick", "viewInfo(" + JSON.stringify(doc.id) + "," + JSON.stringify(user.uid) + ")");
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(viewHelpee);
    // img.appendChild(cardBody);
    // card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    document.getElementsByClassName("row")[0].appendChild(col);
}