import personalHeadshot from "@/assets/personalHeadshot.jpg";
import "@/styles/aboutStyles.css";

interface AboutProps {
  title?: string;
}

function About({ title = "About Me" }: AboutProps) {
  return (
    <div className="about-page">
      <div className="about-intro">
        <div className="about-intro-left">
          <h1 className="about-heading">{title}</h1>

          <p className="about-intro-text">
          Hi! I'm Sam, and I found coding later than most- and purely by
          accident. I've walked a few different career paths in life, and I
          found myself in Springfield, Missouri- going to MSU for a degree in
          physical therapy, as one does, and I found myself looking to my GI
          Bill to pay for it. That's when I met Mr. Kevin Thirry, my counselor
          for the vocational rehab program through the VA. His job was to
          assess me and to determine if I would be able to actually take and
          complete the coursework, and to that end he gave me an aptitude
          test. When he looked at the results, he told me that while he had no
          doubt whatsoever that I could finish my degree and become a
          physical therapist, I also showed promise in the world of
          technology as either a software developer or an IT engineer of some
          sorts. He showed me some numbers, and the amount of training I
          would need to get into each field, and I decided to give his plan a
          try. Especially since I could still go the route of becoming a
          physical therapist if it didn't work out. I took a few classes at
          OTC, and learning SQL was when everything just clicked for me. I
          decided to start applying to jobs while I was still in school, and
          I got my foot in the door. After that, it was all on the job
          training, and full steam ahead. That's how I got into software
          development, and eventually became a full-stack software engineer!
          </p>
        </div>

        <div className="about-photo-wrap">
          <img
            src={personalHeadshot}
            alt="Sam Morrison"
            className="about-photo"
          />
        </div>
      </div>

      <div className="about-body">
        <p>
          Things you might have picked up on from my intro paragraph. I did
          indeed say that I used my VA benefits to break into the coding
          world. Yes, I'm a veteran, and no, I don't like making a big deal
          out of it. I enlisted in a pre-9/11 world. I tore my ACL and it
          wound up being a career ending injury. Most people also notice that
          I was pursuing a career path that would've taken me into medicine,
          and helping others. That is quite the juxtaposition to having
          enlisted in the Army when taken at face value. But they're actually
          quite closely related. I found that deep tissue massage, while
          excruciating, was also very beneficial to my ability to stay
          ambulatory. That led me to pursue massage therapy to understand
          how, and also to pay it forward to others. Massage therapy led me
          to MSU and Physical Therapy, and the economy led me back to the VA
          for help with school, which led me to my newest avocation. Isn't it
          funny how that works?
        </p>
        <p>
          About me as a person- because you're hiring a person. Having the
          right skills is one thing, but how we connect on a personal level
          is ultimately what makes a team work. I'm a dog person. I even
          bought a house with a huge backyard, just for them. I'm happily
          child-free, I can play the guitar even though playing in front of
          people terrifies me, and I ride motorcycles. (Triumph all day) I'm
          also a cat guardian, and I enjoy getting out in the backwoods with
          my Jeep ALMOST as much as I enjoy an afternoon ride on a cool sunny
          day.
        </p>
      </div>
    </div>
  );
}

export default About;
