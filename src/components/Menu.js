import React from 'react';
import './Menu.css'
const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
      <div style={{ paddingLeft: '150px' }}>

      <h1>Good Food is Good Mood!</h1>
      <br></br><br></br>
      <h2>MENU</h2>
      <br></br>
      <h4>"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.”</h4>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/chole.jpg" // Replace with your image path
                alt="Card image 1"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">CHOLE BHATURE</h5>
              <p className="card-text">
                A Mouthful Of Tangy Temptation, Chole-Bhature Is Definitely One Of India’s Most Delectable Foods.
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/shahi.jpg" // Replace with your image path
                alt="Card image 2"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">SHAHI PANEER</h5>
              <p className="card-text">
                Love need to be like " Shahi Panner "
                Unchangeable, unbeatable, Wonderfull &  irresistible...
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/butter.png" // Replace with your image path
                alt="Card image 3"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">BUTTER PANEER</h5>
              <p className="card-text">
                I always say,'Eat clean to stay fit; have a burger to stay sane. ..
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/heavy.jpg" // Replace with your image path
                alt="Card image 4"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">HEAVY WEIGHT</h5>
              <p className="card-text">
                At the base level, a burger is a piece of meat and a bun with something on it...
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/fry.jfif" // Replace with your image path
                alt="Card image 5"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">AFRICAN PRI FRIES</h5>
              <p className="card-text">
                I hate eating vegetables. The only vegetables I eat are lettuce on a burger...
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/cake.jpg" // Replace with your image path
                alt="Card image 6"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">NUTYBELGIUM</h5>
              <p className="card-text">
                I ain't no veggie, like my flesh to the bone, alive and licking on your ice cream cone. ...
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/h.jpg" // Replace with your image path
                alt="Card image 7"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">COOKIE CREAM</h5>
              <p className="card-text">
                I'd rather be at home and eat ice cream than go out and get wasted. ...
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/cup.png" // Replace with your image path
                alt="Card image 8"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">TRIPLE SUNDAE</h5>
              <p className="card-text">
                I'd rather be at home and eat ice cream than go out and get wasted. ...
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Card 9 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/M.jpg" // Replace with your image path
                alt="Card image 9"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">CHEESI PIZZA</h5>
              <p className="card-text">
                You better cut the pizza in four pieces because I'm not hungry enough to eat six..
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Card 10 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/L.jpg" // Replace with your image path
                alt="Card image 10"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">VEG LOADED</h5>
              <p className="card-text">
                I don't eat vegetables. I only eat food like cheeseburgers, Spam, hot dogs, and pizza...
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Card 11 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/N.jpg" // Replace with your image path
                alt="Card image 11"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">AMERICAN PIZZA</h5>
              <p className="card-text">
                I love pizza. I want to marry it, but it would just be to eat her family at the wedding...
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Card 12 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', marginBottom: '20px', overflow: 'hidden' }}>
            <div className="card-img-container" style={{ width: '100%', transition: 'transform 0.3s' }}>
              <img
                className="card-img-top"
                src="images/a.jfif" // Replace with your image path
                alt="Card image 12"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">PAV BHAJI</h5>
              <p className="card-text">
                All you need is love. But a little chocolate now and then doesn't hurt...
              </p>
              <button className="btn btn-primary">
                <img
                  src="https://previews.123rf.com/images/romanbykhalets/romanbykhalets2005/romanbykhalets200500066/147735434-Add-icon-vector-isolated-icon-online-shopping-sign-or-symbol-buy-shop-eps-10.jpg"
                  alt="Add"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                Add
              </button>
            </div>
          </div>
        </div>
        </div>
        </div>

        <div>
        <h1>
        “ Our high quality of food makes you back over and over again!”

        <h1>
        Fun Facts
        </h1>

        <h4>
        The most expensive pizza in the world costs $12,000 and takes 72 hours to make....
        </h4>

        </h1>

        </div>
      </div>
    </div>
  );
};

export default Menu;



