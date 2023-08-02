import React from 'react';
//import { useSelector } from 'react-redux';
import { testCampign } from './dummyCampaign'; 
import CampaignCard from './CampaignCard';
import { Link } from 'react-router-dom';

const allCamp = [ 
    {...testCampign, 
        "name":"WarMachine Quest", 
        "id": "🗺️", 
        "banner": "https://tatesgaming.com/wp-content/uploads/2018/02/warmachine1_cal.jpg"
    }, 
    {...testCampign, 
        "name":"Battle for Bedros", 
        "id": "🪐",
        "banner": "https://149455152.v2.pressablecdn.com/wp-content/uploads/2016/02/vedrosbattle.png"
    }, 
    {...testCampign, 
        "name":"Memoir '44", 
        "id": "🌎",
        "banner": "https://gamecows.com/wp-content/uploads/2019/01/Memoir-44-Board-Game.png"
    } 
    , 
    {...testCampign, 
        "name":"Hero scape 1st ed", 
        "id": "🌎",
        "banner": "https://cf.geekdo-images.com/NYtpwphT76CH7bpmdJkAaw__opengraph_letterbox/img/FUHzlQBAd5t-T__47z4nAC1mLek=/fit-in/1200x630/filters:fill(auto):strip_icc()/pic268096.jpg"
    }, 
    {...testCampign, 
        "name":"Stratego Brawl", 
        "id": "🌎",
        "banner": "https://www.ultraboardgames.com/img/slideshow/stratego.jpg"
    }, 
    {...testCampign, 
        "name":"World War III (tide of iron)", 
        "id": "🌎",
        "banner": "https://m.media-amazon.com/images/I/51GVQM2c1BL._AC_.jpg"
    } 
];

const WarRoom = () => {
    //const user = useSelector(state => state.portal.currentUser);
  return (
    <div className='warRoom view'>
        <div className="campaignArea">
        <h3>Available Campaigns</h3>

        {
        /*user.type === "admin" && */ <div>
                <Link to="/createcampaign"> <button>Create New Campaign</button></Link>
            </div>
        }
            <div className="camapigns">
                
                {
                    allCamp.map((c,i) => (
                        <CampaignCard campaign={c} key={i}/>
                    ))
                }

            </div>
        </div>
        
        
    </div>
  )
}

export default WarRoom;