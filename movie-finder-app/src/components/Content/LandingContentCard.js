import React from 'react';
import { CardGroup, Card} from 'react-bootstrap'


const LandingContentCard = () => {
    return (
        <div>
{/* Content Row 1 */}
<CardGroup>
    <Card className="bg-dark">
        <Card.Body>
        <Card.Title> No More Endless Scrolling!</Card.Title>
        <Card.Text>
    Forget long nights of struggling to find movies to watch. You'll always have something new to see with our interactive website
        </Card.Text>
        </Card.Body>
    </Card>
        
    <Card className="bg-dark"> 
        <div> 
        <video autoPlay playsInline muted loop  style={{marginLeft: 25 + '%', marginRight: 25 + '%'}} >
        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
        </video>
        </div>
    </Card>
  
</CardGroup>

{/* Content Row 2 */}

<CardGroup> 
    <Card className="bg-dark"> 
    <Card.Img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" style={{maxWidth: 60 + '%'}} />
    </Card>

    <Card className="bg-dark">
        <Card.Body>
        <Card.Title> Customized Lists Just For You</Card.Title>
        <Card.Text>
    Planning a long movie night ahead? Or want to have an easy and accessible list of movies you've saved? We've got just that!
        </Card.Text>
        </Card.Body>
    </Card>
    
  
</CardGroup>

{/* Content Row 3 */}

<CardGroup>

    <Card className="bg-dark">
        <Card.Body>
        <Card.Title> Enjoy on your TV.</Card.Title>
        <Card.Text>
    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
        </Card.Text>
        </Card.Body>
    </Card>

    <Card className="bg-dark"> 
        <div> 
        <video autoPlay playsInline muted loop  style={{marginLeft: 25 + '%', marginRight: 25 + '%'}} >
        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
        </video>
        </div>
    </Card>
    
        
  
</CardGroup>



</div>

    );
}

export default LandingContentCard;



