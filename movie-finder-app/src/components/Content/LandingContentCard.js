import React from 'react';
import { CardGroup, Card} from 'react-bootstrap'
import './LandingContentCard.css'

const LandingContentCard = () => {
    return (
        <div>
{/* Content Row 1 */}
<CardGroup className="cardGroupBox">
    <Card className="bg-dark cardTextBoxes">
        <Card.Body>
        <Card.Title> No More Endless Scrolling!</Card.Title>
        <Card.Text>
    Forget long nights of struggling to find movies to watch. You'll always have something new to see with our interactive website
        </Card.Text>
        </Card.Body>
    </Card>
        
    <Card className="bg-dark"> 
        <div className="videoContainerBox"> 
        <Card.Img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
        <video autoPlay playsInline muted loop  className="videoContentBox">
        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
        </video>
        </div>
    </Card>
  
</CardGroup>

{/* Content Row 2 */}

<CardGroup className="cardGroupBox" > 
    <Card className="bg-dark imageCardBox"> 
    <Card.Img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
    </Card>

    <Card className="bg-dark cardTextBoxes">
        <Card.Body>
        <Card.Title > Customized Lists Just For You</Card.Title>
        <Card.Text>
    Planning a long movie night ahead? Or want to have an easy and accessible list of movies you've saved? We've got just that!
        </Card.Text>
        </Card.Body>
    </Card>
    
  
</CardGroup>

{/* Content Row 3 */}

<CardGroup className="cardGroupBox">

    <Card className="bg-dark cardTextBoxes">
        <Card.Body>
        <Card.Title> Watch everywhere.</Card.Title>
        <Card.Text>
    Finally have the ease of access of having your go-to list of movies to watch when you need it most.
        </Card.Text>
        </Card.Body>
    </Card>

    <Card className="bg-dark"> 
    <div className="videoContainerBox2"> 
    <div className="overFlowControl"> 
    <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"/>
        <video autoPlay playsInline muted loop className="videoContentBox2">
        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
        </video>
    </div>
    </div>


    </Card>
    
        
  
</CardGroup>



</div>

    );
}

export default LandingContentCard;



