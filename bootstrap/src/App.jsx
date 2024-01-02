import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Grid from './components/Grid'
import Images from './components/Images'
import Test from './components/Test'
import Footer from './components/Footer'
import Actions from './components/Actions'
import img1 from "./assets/img/bg-showcase-1.jpg"
import img2 from "./assets/img/bg-showcase-2.jpg"
import img3 from "./assets/img/bg-showcase-3.jpg"
import img4 from "./assets/img/testimonials-1.jpg"
import img5 from "./assets/img/testimonials-2.jpg"
import img6 from "./assets/img/testimonials-3.jpg"

function App() {
  let icon = [
    {
      url: "bi-window m-auto text-primary",
      h3: "Fully Responsive",
      p: "This theme will look great on any device, no matter the size!"
    },
    {
      url: "bi-layers m-auto text-primary",
      h3: "Bootstrap 5 Ready",
      p: "Featuring the latest build of the new Bootstrap 5 framework!"
    },
    {
      url: "bi-terminal m-auto text-primary",
      h3: "Easy to Use",
      p: "Ready to use with your own content, or customize the source files!"
    }
  ]

  let showcase = [
    {
      img: img1,
      class: "col-lg-6 order-lg-2 text-white showcase-img",
      h2: "Fully Responsive Design",
      para: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
    },
    {
      img: img2,
      class: "col-lg-6 text-white showcase-img",
      h2: "Updated For Bootstrap 5",
      para: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
    },
    {
      img: img3,
      class: "col-lg-6 order-lg-2 text-white showcase-img",
      h2: "Easy to Use & Customize",
      para: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
    }
  ]

  let comments = [
    {
      src: img4,
      h5: "Margaret E.",
      cmt: "This is fantastic! Thanks so much guys!"
    },
    {
      src: img5,
      h5: "Fred S.",
      cmt: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    },
    {
      src: img6,
      h5: "Sarah W.",
      cmt: "Thanks so much for making these free resources available to us!"
    }
  ]
  return <>
    <Navbar />
    <Header />
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {
            icon.map((e, i) => {
              return <Grid icon={e} key={i} />
            })
          }
        </div>
      </div>
    </section>
    <section className="showcase">
      <div className="container-fluid p-0">
        {
          showcase.map((e, i) => {
            return <Images showcase={e} key={i} />
          })
        }
      </div>
    </section>
    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          {
            comments.map((e, i) => {
              return <Test comments={e} key={i} />
            })
          }
        </div>
      </div>
    </section>
    <Actions/>
    <Footer />
  </>
}

export default App