let contact = document.getElementById("contact");
let button = document.getElementById("find");
let searchInput = document.getElementById("searchInput");
let alertMsg = document.getElementById("alert-msg");
contact.addEventListener("click", function () {
  window.location = "contact.html";
});

searchInput.addEventListener("input", function () {
  getWeather(searchInput.value);
});
button.addEventListener("click", function (e) {
  e.preventDefault();
});

let final;
async function getWeather(weather) {
  try {
    let myApi = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=24b35c6ae08d4b1bae1155119240812&q=${weather}&days=3`
    );
    final = await myApi.json();
    alertMsg.classList.add("d-none");
    display();
  } catch (error) {
    alertMsg.classList.remove("d-none");
  }
}

getWeather("cairo");
let edit = { weekday: "long" };
let edit2 = { day: "numeric", month: "long" };
function display() {
  let cartona = `
           <div class="col-lg-4 p-0 ">
              <div class="br-10 rounded-end-0 c-2 h-416">
                      <div class="item-header c-1 d-flex justify-content-between p-10 br-10 rounded-bottom-0 rounded-end-0">
                <span class="ms-2">${new Date(
                  final.location.localtime
                ).toLocaleString("en-us", edit)}</span>
                <span class="me-2">${new Date(
                  final.location.localtime
                ).toLocaleString("en-US", edit2)}</span>
              </div>
              <div class="item-content p-30 text-start ">
                <div class="location">${final.location.name}</div>
                <div class="d-flex align-items-center d-lg-block">
                <div class="celsius1 text-white">${
                  final.current.feelslike_c
                }°C</div>
                <div class="icon"><img src="https://${
                  final.current.condition.icon
                }" alt="" /></div></div>
                <div class="clear c-cyan">${final.current.condition.text}</div>
                <div class="row">
                  <div class="col-3">
                    <span class="c-gray">
                      <img
                        src="./images/icon-umberella.png"
                        alt=""
                        class="me-5px"
                      />
                      20%
                    </span>
                  </div>
                  <div class="col-4">
                    <span class="c-gray">
                      <img src="./images/icon-wind.png" alt="" class="me-5px" />
                      18km/h
                    </span>
                  </div>
                  <div class="col-3">
                    <span class="c-gray">
                      <img
                        src="./images/icon-compass.png"
                        alt=""
                        class="me-5px"
                      />
                      East
                    </span>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div class="col-lg-4 p-0">
              <div class="c-4 h-416 media">
              <div class="item-header c-3 text-center p-10">
                <span>${new Date(
                  final.forecast.forecastday[1].date
                ).toLocaleString("en-us", edit)}</span>
              </div>
                  <div class="item-content  p-30 text-center"> 
                    
                <div class="icon mb-20"><img src="https://${
                  final.forecast.forecastday[1].day.condition.icon
                }" alt="" /></div>
                <div class="celsius text-white">${
                  final.forecast.forecastday[1].day.maxtemp_c
                }°C</div>
                <div class="degree c-gray">${
                  final.forecast.forecastday[1].day.mintemp_c
                }°</div>
                <div class="status c-cyan">${
                  final.forecast.forecastday[1].day.condition.text
                }</div>
              </div>
            </div>
            </div>
            <div class="col-lg-4 p-0">
              <div class="br-10 rounded-start-0  c-2 h-416 media">
              <div class="item-header c-1 text-center p-10 br-10 rounded-bottom-0 rounded-start-0">
                <span>${new Date(
                  final.forecast.forecastday[2].date
                ).toLocaleString("en-us", edit)}</span>
              </div>
              <div class="item-content  p-30 text-center ">
                <div class="icon mb-20"><img src="https://${
                  final.forecast.forecastday[2].day.condition.icon
                }" alt="" /></div>
                <div class="celsius text-white">${
                  final.forecast.forecastday[2].day.maxtemp_c
                }°C</div>
                <div class="degree c-gray">${
                  final.forecast.forecastday[2].day.mintemp_c
                }°</div>
                <div class="status c-cyan">${
                  final.forecast.forecastday[2].day.condition.text
                }</div>
              </div>
            </div>
            </div>
    `;
  document.getElementById("weather-row").innerHTML = cartona;
}