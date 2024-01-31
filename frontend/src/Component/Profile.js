import React, { useEffect } from 'react'
import "./Profile.css"
import {useDispatch,useSelector} from "react-redux"
import { getcurrent } from '../Redux/Action/Action'
function Profile() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getcurrent())
    
    },[])
    const user=useSelector(state=>state.userReducer.user)
    console.log(user)
  return (
    <>
    <div className="main-container">
      {/* HEADER */}
      <header className="block">
        <ul className="header-menu horizontal-list">
          <li>
            <a className="header-menu-tab" href="#1">
              <span className="icon entypo-cog scnd-font-color" />
              Settings
            </a>
          </li>
          <li>
            <a className="header-menu-tab" href="#2">
              <span className="icon fontawesome-user scnd-font-color" />
              Account
            </a>
          </li>
          <li>
            <a className="header-menu-tab" href="#3">
              <span className="icon fontawesome-envelope scnd-font-color" />
              Messages
            </a>
            <a className="header-menu-number" href="#4">
              5
            </a>
          </li>
          <li>
            <a className="header-menu-tab" href="#5">
              <span className="icon fontawesome-star-empty scnd-font-color" />
              Favorites
            </a>
          </li>
        </ul>
        <div className="profile-menu">
          <p>
            Me{" "}
            <a href="#26">
              <span className="entypo-down-open scnd-font-color" />
            </a>
          </p>
          <div className="profile-picture small-profile-picture">
            <img
              width="40px"
              alt="Anne Hathaway picture"
              src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
            />
          </div>
        </div>
      </header>
      {/* LEFT-CONTAINER */}
      <div className="left-container container">
        <div className="menu-box block">
          {" "}
          {/* MENU BOX (LEFT-CONTAINER) */}
          <h2 className="titular">MENU BOX</h2>
          <ul className="menu-box-menu">
            <li>
              <a className="menu-box-tab" href="#6">
                <span className="icon fontawesome-envelope scnd-font-color" />
                Messages<div className="menu-box-number">24</div>
              </a>
            </li>
            <li>
              <a className="menu-box-tab" href="#8">
                <span className="icon entypo-paper-plane scnd-font-color" />
                Invites<div className="menu-box-number">3</div>
              </a>
            </li>
            <li>
              <a className="menu-box-tab" href="#10">
                <span className="icon entypo-calendar scnd-font-color" />
                Events<div className="menu-box-number">5</div>
              </a>
            </li>
            <li>
              <a className="menu-box-tab" href="#12">
                <span className="icon entypo-cog scnd-font-color" />
                Account Settings
              </a>
            </li>
            <li>
              <a className="menu-box-tab" href="#13">
                <sapn className="icon entypo-chart-line scnd-font-color" />
                Statistics
              </a>
            </li>
          </ul>
        </div>
        <div className="donut-chart-block block">
          {" "}
          {/* DONUT CHART BLOCK (LEFT-CONTAINER) */}
          <h2 className="titular">OS AUDIENCE STATS</h2>
          <div className="donut-chart">
            {/* DONUT-CHART by @kseso https://codepen.io/Kseso/pen/phiyL */}
            <div id="porcion1" className="recorte">
              <div className="quesito ios" data-rel={21} />
            </div>
            <div id="porcion2" className="recorte">
              <div className="quesito mac" data-rel={39} />
            </div>
            <div id="porcion3" className="recorte">
              <div className="quesito win" data-rel={31} />
            </div>
            <div id="porcionFin" className="recorte">
              <div className="quesito linux" data-rel={9} />
            </div>
            {/* END DONUT-CHART by @kseso https://codepen.io/Kseso/pen/phiyL */}
            <p className="center-date">
              JUNE
              <br />
              <span className="scnd-font-color">2013</span>
            </p>
          </div>
          <ul className="os-percentages horizontal-list">
            <li>
              <p className="ios os scnd-font-color">iOS</p>
              <p className="os-percentage">
                21<sup>%</sup>
              </p>
            </li>
            <li>
              <p className="mac os scnd-font-color">Mac</p>
              <p className="os-percentage">
                48<sup>%</sup>
              </p>
            </li>
            <li>
              <p className="linux os scnd-font-color">Linux</p>
              <p className="os-percentage">
                9<sup>%</sup>
              </p>
            </li>
            <li>
              <p className="win os scnd-font-color">Win</p>
              <p className="os-percentage">
                32<sup>%</sup>
              </p>
            </li>
          </ul>
        </div>
        <div className="line-chart-block block clear">
          {" "}
          {/* LINE CHART BLOCK (LEFT-CONTAINER) */}
          <div className="line-chart">
            {/* LINE-CHART by @kseso https://codepen.io/Kseso/pen/phiyL */}
            <div className="grafico">
              <ul className="eje-y">
                <li data-ejey={30} />
                <li data-ejey={20} />
                <li data-ejey={10} />
                <li data-ejey={0} />
              </ul>
              <ul className="eje-x">
                <li>Apr</li>
                <li>May</li>
                <li>Jun</li>
              </ul>
              <span data-valor={25}>
                <span data-valor={8}>
                  <span data-valor={13}>
                    <span data-valor={5}>
                      <span data-valor={23}>
                        <span data-valor={12}>
                          <span data-valor={15}></span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
            {/* END LINE-CHART by @kseso https://codepen.io/Kseso/pen/phiyL */}
          </div>
          <ul className="time-lenght horizontal-list">
            <li>
              <a className="time-lenght-btn" href="#14">
                Week
              </a>
            </li>
            <li>
              <a className="time-lenght-btn" href="#15">
                Month
              </a>
            </li>
            <li>
              <a className="time-lenght-btn" href="#16">
                Year
              </a>
            </li>
          </ul>
          <ul className="month-data clear">
            <li>
              <p>
                APR<span className="scnd-font-color"> 2013</span>
              </p>
              <p>
                <span className="entypo-plus increment"> </span>21<sup>%</sup>
              </p>
            </li>
            <li>
              <p>
                MAY<span className="scnd-font-color"> 2013</span>
              </p>
              <p>
                <span className="entypo-plus increment"> </span>48<sup>%</sup>
              </p>
            </li>
            <li>
              <p>
                JUN<span className="scnd-font-color"> 2013</span>
              </p>
              <p>
                <span className="entypo-plus increment"> </span>35<sup>%</sup>
              </p>
            </li>
          </ul>
        </div>
        <div className="media block">
          {" "}
          {/* MEDIA (LEFT-CONTAINER) */}
          <div id="media-display">
            <a className="media-btn play" href="#23">
              <span className="fontawesome-play" />
            </a>
          </div>
          <div className="media-control-bar">
            <a className="media-btn play" href="#23">
              <span className="fontawesome-play scnd-font-color" />
            </a>
            <p className="time-passed">
              4:15 <span className="time-duration scnd-font-color">/ 9:23</span>
            </p>
            <a className="media-btn volume" href="#24">
              <span className="fontawesome-volume-up scnd-font-color" />
            </a>
            <a className="media-btn resize" href="#25">
              <span className="fontawesome-resize-full scnd-font-color" />
            </a>
          </div>
        </div>
        <ul className="social horizontal-list block">
          {" "}
          {/* SOCIAL (LEFT-CONTAINER) */}
          <li className="facebook">
            <p className="icon">
              <span className="zocial-facebook" />
            </p>
            <p className="number">248k</p>
          </li>
          <li className="twitter">
            <p className="icon">
              <span className="zocial-twitter" />
            </p>
            <p className="number">30k</p>
          </li>
          <li className="googleplus">
            <p className="icon">
              <span className="zocial-googleplus" />
            </p>
            <p className="number">124k</p>
          </li>
          <li className="mailbox">
            <p className="icon">
              <span className="fontawesome-envelope" />
            </p>
            <p className="number">89k</p>
          </li>
        </ul>
      </div>
      {/* MIDDLE-CONTAINER */}
      <div className="middle-container container">
        <div className="profile block">
          {" "}
          {/* PROFILE (MIDDLE-CONTAINER) */}
          <a className="add-button" href="#28">
            <span className="icon entypo-plus scnd-font-color" />
          </a>
          <div className="profile-picture big-profile-picture clear">
            <img
              width="150px"
              alt="Anne Hathaway picture"
              src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
            />
          </div>
          <h1 className="user-name">{user.name}</h1>
          <div className="profile-description">
            <p className="scnd-font-color">
              Lorem ipsum dolor sit amet consectetuer adipiscing
            </p>
          </div>
          <ul className="profile-options horizontal-list">
            <li>
              <a className="comments" href="#40">
                <p>
                  <span className="icon fontawesome-comment-alt scnd-font-color" />
                  23
                </p>
              </a>
            </li>
            <p />
            <li>
              <a className="views" href="#41">
                <p>
                  <span className="icon fontawesome-eye-open scnd-font-color" />
                  841
                </p>
              </a>
            </li>
            <p />
            <li>
              <a className="likes" href="#42">
                <p>
                  <span className="icon fontawesome-heart-empty scnd-font-color" />
                  49
                </p>
              </a>
            </li>
            <p />
          </ul>
        </div>
        <div className="weather block clear">
          {" "}
          {/* WEATHER (MIDDLE-CONTAINER) */}
          <h2 className="titular">
            <span className="icon entypo-location" />
            <strong>CLUJ-NAPOCA</strong>/RO
          </h2>
          <div className="current-day">
            <p className="current-day-date">FRI 29/06</p>
            <p className="current-day-temperature">
              24º
              <span className="icon-cloudy" />
            </p>
          </div>
          <ul className="next-days">
            <li>
              <a href="#43">
                <p className="next-days-date">
                  <span className="day">SAT</span>{" "}
                  <span className="scnd-font-color">29/06</span>
                </p>
                <p className="next-days-temperature">
                  25º
                  <span className="icon icon-cloudy scnd-font-color" />
                </p>
              </a>
            </li>
            <li>
              <a href="#44">
                <p className="next-days-date">
                  <span className="day">SUN</span>{" "}
                  <span className="scnd-font-color">30/06</span>
                </p>
                <p className="next-days-temperature">
                  22º
                  <span className="icon icon-cloudy2 scnd-font-color" />
                </p>
              </a>
            </li>
            <li>
              <a href="#45">
                <p className="next-days-date">
                  <span className="day">MON</span>{" "}
                  <span className="scnd-font-color">01/07</span>
                </p>
                <p className="next-days-temperature">
                  24º
                  <span className="icon icon-cloudy2 scnd-font-color" />
                </p>
              </a>
            </li>
            <li>
              <a href="#46">
                <p className="next-days-date">
                  <span className="day">TUE</span>{" "}
                  <span className="scnd-font-color">02/07</span>
                </p>
                <p className="next-days-temperature">
                  26º
                  <span className="icon icon-cloudy scnd-font-color" />
                </p>
              </a>
            </li>
            <li>
              <a href="">
                <p className="next-days-date">
                  <span className="day">WED</span>{" "}
                  <span className="scnd-font-color">03/07</span>
                </p>
                <p className="next-days-temperature">
                  27º
                  <span className="icon icon-sun scnd-font-color" />
                </p>
              </a>
            </li>
            <li>
              <a href="">
                <p className="next-days-date">
                  <span className="day">THU</span>{" "}
                  <span className="scnd-font-color">04/07</span>
                </p>
                <p className="next-days-temperature">
                  29º
                  <span className="icon icon-sun scnd-font-color" />
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div className="tweets block">
          {" "}
          {/* TWEETS (MIDDLE-CONTAINER) */}
          <h2 className="titular">
            <span className="icon zocial-twitter" />
            LATEST TWEETS
          </h2>
          <div className="tweet first">
            <p>
              Ice-cream trucks only play music when out of ice-cream. Well played
              dad. On{" "}
              <a className="tweet-link" href="#17">
                @Quora
              </a>
            </p>
            <p>
              <a className="time-ago scnd-font-color" href="#18">
                3 minutes ago
              </a>
            </p>
          </div>
          <div className="tweet">
            <p>
              We are in the process of pushing out all of the new CC apps! We will
              tweet again once they are live{" "}
              <a className="tweet-link" href="#19">
                #CreativeCloud
              </a>
            </p>
            <p>
              <a className="scnd-font-color" href="#20">
                6 hours ago
              </a>
            </p>
          </div>
        </div>
        <ul className="social block">
          {" "}
          {/* SOCIAL (MIDDLE-CONTAINER) */}
          <li>
            <a href="#50">
              <div className="facebook icon">
                <span className="zocial-facebook" />
              </div>
              <h2 className="facebook titular">SHARE TO FACEBOOK</h2>
            </a>
          </li>
          <li>
            <a href="#51">
              <div className="twitter icon">
                <span className="zocial-twitter" />
              </div>
              <h2 className="twitter titular">SHARE TO TWITTER</h2>
            </a>
          </li>
          <li>
            <a href="#52">
              <div className="googleplus icon">
                <span className="zocial-googleplus" />
              </div>
              <h2 className="googleplus titular">SHARE TO GOOGLE+</h2>
            </a>
          </li>
        </ul>
      </div>
      {/* RIGHT-CONTAINER */}
      <div className="right-container container">
        <div className="join-newsletter block">
          {" "}
          {/* JOIN NEWSLETTER (RIGHT-CONTAINER) */}
          <h2 className="titular">JOIN THE NEWSLETTER</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="yourname@gmail.com"
              className="email text-input"
            />
            <div className="input-icon envelope-icon-newsletter">
              <span className="fontawesome-envelope scnd-font-color" />
            </div>
          </div>
          <a className="subscribe button" href="#21">
            SUBSCRIBE
          </a>
        </div>
        <div className="account block">
          {" "}
          {/* ACCOUNT (RIGHT-CONTAINER) */}
          <h2 className="titular">SIGN IN TO YOUR ACCOUNT</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="yourname@gmail.com"
              className="email text-input"
            />
            <div className="input-icon envelope-icon-acount">
              <span className="fontawesome-envelope scnd-font-color" />
            </div>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Password"
              className="password text-input"
            />
            <div className="input-icon password-icon">
              <span className="fontawesome-lock scnd-font-color" />
            </div>
          </div>
          <a className="sign-in button" href="#22">
            SIGN IN
          </a>
          <p className="scnd-font-color">Forgot Password?</p>
          <a className="fb-sign-in" href={58}>
            <p>
              <span className="fb-border">
                <span className="icon zocial-facebook" />
              </span>
              Sign in with Facebook
            </p>
          </a>
        </div>
        <div className="loading block">
          {" "}
          {/* LOADING (RIGHT-CONTAINER) */}
          <div className="progress-bar downloading" />
          <p>
            <span className="icon fontawesome-cloud-download scnd-font-color" />
            Downloading...
          </p>
          <p className="percentage">
            81<sup>%</sup>
          </p>
          <div className="progress-bar uploading" />
          <p>
            <span className="icon fontawesome-cloud-upload scnd-font-color" />
            Uploading...
          </p>
          <p className="percentage">
            43<sup>%</sup>
          </p>
        </div>
        <div className="calendar-day block">
          {" "}
          {/* CALENDAR DAY (RIGHT-CONTAINER) */}
          <div className="arrow-btn-container">
            <a className="arrow-btn left" href="#200">
              <span className="icon fontawesome-angle-left" />
            </a>
            <h2 className="titular">WEDNESDAY</h2>
            <a className="arrow-btn right" href="#201">
              <span className="icon fontawesome-angle-right" />
            </a>
          </div>
          <p className="the-day">26</p>
          <a className="add-event button" href="#27">
            ADD EVENT
          </a>
        </div>
        <div className="calendar-month block">
          {" "}
          {/* CALENDAR MONTH (RIGHT-CONTAINER) */}
          <div className="arrow-btn-container">
            <a className="arrow-btn left" href="#202">
              <span className="icon fontawesome-angle-left" />
            </a>
            <h2 className="titular">APRIL 2013</h2>
            <a className="arrow-btn right" href="#203">
              <span className="icon fontawesome-angle-right" />
            </a>
          </div>
          <table className="calendar">
            <thead className="days-week">
              <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>R</th>
                <th>F</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>
                  <a className="scnd-font-color" href="#100">
                    1
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="scnd-font-color" href="#101">
                    2
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#102">
                    3
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#103">
                    4
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#104">
                    5
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#105">
                    6
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#106">
                    7
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#107">
                    8
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="scnd-font-color" href="#108">
                    9
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#109">
                    10
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#110">
                    11
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#111">
                    12
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#112">
                    13
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#113">
                    14
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#114">
                    15
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="scnd-font-color" href="#115">
                    16
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#116">
                    17
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#117">
                    18
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#118">
                    19
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#119">
                    20
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#120">
                    21
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#121">
                    22
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="scnd-font-color" href="#122">
                    23
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#123">
                    24
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#124">
                    25
                  </a>
                </td>
                <td>
                  <a className="today" href="#125">
                    26
                  </a>
                </td>
                <td>
                  <a href="#126">27</a>
                </td>
                <td>
                  <a href="#127">28</a>
                </td>
                <td>
                  <a href="#128">29</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#129">30</a>
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>{" "}
        {/* end calendar-month block */}
      </div>{" "}
      {/* end right-container */}
    </div>{" "}
    {/* end main-container */}
  </>
  
  )
}

export default Profile