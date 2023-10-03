import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [selectedPeople, setSelectedPeople] = useState('1');

  // Function to handle the reservation form submission
  const handleReservationSubmit = (e) => {
    e.preventDefault();
    const formattedDate = selectedDate
      ? selectedDate.toDateString()
      : 'No Date Selected';
    alert(`Date: ${formattedDate}, Time: ${selectedTime}, People: ${selectedPeople}`);
  };

  return (
    <div>
      <header
        id="gtco-header"
        className="gtco-cover gtco-cover-md"
        role="banner"
        style={{
          backgroundImage: 'url(images/img_bg_1.jpg)',
          backgroundPosition: 'center',
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="col-md-12 col-md-offset-0 text-left">
          <div className="row row-mt-15em">
            <div
              className="col-md-7 mt-text animate-box"
              data-animate-effect="fadeInUp"
            >
              <h1 className="cursive-font">Good Food is Good Mood!</h1>
            </div>

            <div
              className="col-md-4 col-md-push-1 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="form-wrap">
                <div className="tab">
                  <div className="tab-content">
                    <h3 className="cursive-font">Reservation</h3>
                    <div
                      className="tab-content-inner active"
                      data-content="signup"
                    >
                      <form onSubmit={handleReservationSubmit}>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <label htmlFor="people">People</label>
                            <select
                              name="people"
                              id="people"
                              className="form-select"
                              value={selectedPeople}
                              onChange={(e) => setSelectedPeople(e.target.value)}
                            >
                              <option value="1">1 Person</option>
                              <option value="2">2 People</option>
                              <option value="3">3 People</option>
                              <option value="4">4 People</option>
                              <option value="5+">5+ People</option>
                            </select>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <label htmlFor="date">Date</label>
                            <DatePicker
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <label htmlFor="time">Time</label>
                            <input
                              type="time"
                              id="time"
                              name="time"
                              className="form-control"
                              value={selectedTime}
                              onChange={(e) => setSelectedTime(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <input
                              type="submit"
                              className="btn btn-primary btn-block"
                              value="Reserve Now"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <h2>Our Partners</h2>
        <div className="partner-images">
          <div className="partner" style={{ display: 'inline-block', marginRight: '20px' }}>
            <img src="images/zomato.png" alt="Zomato" style={{ width: '100px', height: '100px', borderRadius: '25px' }} />
            <p>Zomato</p>
          </div>
          <div className="partner" style={{ display: 'inline-block', marginRight: '20px' }}>
            <img src="images/swiggy.png" alt="Swiggy" style={{ width: '100px', height: '100px', borderRadius: '25px' }} />
            <p>Swiggy</p>
          </div>
          <div className="partner" style={{ display: 'inline-block' }}>
            <img src="images/ubereats.png" alt="UberEats" style={{ width: '100px', height: '100px', borderRadius: '25px' }} />
            <p>UberEats</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
