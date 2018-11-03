import React, { Component } from 'react';
import { connect } from 'react-redux';

import scrollToComponent from 'react-scroll-to-component';

import ProfilePic from './images/profile.jpg';
import iphone from './images/phone.png';

import './css/header.css';
import './css/App.css';

const scrollOptions = {
  duration: 700,
  ease: 'inOutCube'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      midiEnabled: false,
      controllerName: 'N/A'
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="header-wrapper">
            <nav>
              <ul>
                <li>
                  <a
                    href="/#seed"
                    onClick={() => {
                      scrollToComponent(
                        this.tokenize,
                        Object.assign(scrollOptions, { offset: 0 })
                      );
                    }}
                  >
                    Create Seeds
                  </a>
                </li>
                <li>
                  <a
                    href="/#grow"
                    onClick={() => {
                      scrollToComponent(
                        this.distribute,
                        Object.assign(scrollOptions, { offset: 0 })
                      );
                    }}
                  >
                    Shape
                  </a>
                </li>
                <li>
                  <a
                    href="/#release"
                    onClick={() => {
                      scrollToComponent(
                        this.contribute,
                        Object.assign(scrollOptions, { offset: 0 })
                      );
                    }}
                  >
                    Release
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    onClick={() => {
                      scrollToComponent(
                        this.about,
                        Object.assign(scrollOptions, { offset: 0 })
                      );
                    }}
                  >
                    About
                  </a>
                </li>
              </ul>

              <div>
                <a
                  href="/#"
                  onClick={() => {
                    scrollToComponent(this.home, scrollOptions);
                  }}
                >
                  <span className="title">Community Garden</span>
                </a>
              </div>
            </nav>
          </div>
        </header>

        <section
          id="home"
          ref={section => {
            this.home = section;
          }}
        >
          <div className="hero-box">
            <div className="wrapper">
              <div className="content-wrapper">
                <h3>
                  <span className="highlight-light">Community Garden</span> is a
                  framework for building{' '}
                  <span className="highlight-light">vibrant communities</span>
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section
          className="grey"
          id="seed"
          ref={section => {
            this.tokenize = section;
          }}
        >
          <div className="wrapper">
            <h2>Create seeds</h2>
            <div className="row row-2">
              <div className="content-wrapper">
                <p>
                  Seeds are the primary unit in Community Garden. Think of a
                  seed as a ticket, a member's badge, and an invitation – all at
                  the same time. But seeds are also more than that: every seed
                  contains [the power to create new communities]
                </p>

                <p>
                  As your community interacts it produces new seeds that can be
                  given or sold to new potential members. Design the rules for
                  how your community's seeds will grow (participation,
                  attendance, promotion, donations, etc).
                </p>
                <p>Create and distribute seeds to begin the process.</p>
              </div>
              <div className="text-center">
                <div className="iphone-background"> </div>
                <img className="iphone" src={iphone} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section
          id="grow"
          ref={section => {
            this.distribute = section;
          }}
        >
          <div className="wrapper">
            <h2 style={{ textAlign: 'right' }}>
              Shape your community as it grows
            </h2>
            <div className="row row-2">
              <div className="text-center">
                <div className="iphone-background"> </div>
                <img className="iphone" src={iphone} alt="" />
              </div>
              <div className="content-wrapper">
                <p>
                  You can adjust your incentives as you begin to understand your
                  community.
                </p>
                <p> Establish norms and values as your community grows.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="release"
          ref={section => {
            this.contribute = section;
          }}
        >
          <div className="wrapper">
            <h2>Release into the world</h2>
            <p>
              When it’s ready, lock in your incentives and release it into the
              world.
            </p>
            <p>Release options:</p>
            <ul>
              <li>Open source</li>
              <li>Community licensing agreement</li>
              <li>
                Non-binding service model (eg, publishing infrastructure for
                monthly fee)
              </li>
              <li>Exclusive content model</li>
            </ul>
          </div>
        </section>

        <section
          id="about"
          ref={section => {
            this.about = section;
          }}
        >
          <div className="wrapper">
            <h2>
              <span className="highlight-light">Community Garden</span>
            </h2>
            <div className="row row-2">
              <div>
                <h4>About Us</h4>
                <p>Matt Lovan: self-proclaimed Olympic gold-medalist</p>
              </div>
              <div className="reading">
                <h4>Inspiration and Readings</h4>
                <ul>
                  <li className="clear">
                    <a href="https://medium.com/humanizing-the-singularity/part-i-are-you-sure-you-exist-we-are-5cfe13ab488c">
                      Tell Me Who You Are
                    </a>
                    <span> by Vinay Gupta</span>
                  </li>

                  <li className="clear">
                    <a href="https://medium.com/what-to-build/how-to-design-social-systems-without-causing-depression-and-war-3c3f8e0226d1">
                      How to Design Social Systems (Without Causing Depression
                      and War)
                    </a>
                    <span> by Joe Edelman</span>
                  </li>

                  <li className="clear">
                    <a href="https://wtf.tw/ref/ostrom_1990.pdf">
                      Governing the Commons: The Evolution of Institutions for
                      Collective Action (PDF)
                    </a>
                    <span> by Elinor Olstrom</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper">
          <footer>
            <div>
              <h4>About this project</h4>
              <p>
                This project is an expirement in using participation and
                responsibility to create meaning.
              </p>
            </div>
            <div>
              <img
                style={{ border: 'solid 1px #393939', borderRadius: '50%' }}
                src={ProfilePic}
                alt="profile pic of matt lovan"
              />
              <p>@mattlovan</p>
              <p>mattlovan@gmail.com</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    samples: state.controller.samples
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // cancelBid: index => {
    //   dispatch(cancelBid(index));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
