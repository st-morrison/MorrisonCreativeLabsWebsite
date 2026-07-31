import "@/styles/app.css";
import { Button, Typography } from "@mui/material";
import { TerminalDisplay } from "@/components/TerminalDisplay";
import { tickerScript } from "@/data/tickerScript";

export default function Home() {
  const emailSubject = encodeURIComponent("Let's talk");
  const emailBody = encodeURIComponent(
    "Hi Sam,\n\nI'd like to connect about...",
  );
  return (
    <>
      <section id="center">
        <div className="hero">
          <div className="hero-tag">Full-Stack Engineer · 8+ Years</div>

          <div className="hero-top">
            <div className="hero-heading">
              <Typography variant="h4">
                I Craft <em>Code</em> and
                <br />
                Integrate <em>Meaningful</em> Solutions
                <br />
                with both <em>Intent</em> and <em>Purpose</em>.
              </Typography>

              <p className="hero-sub">
                React, Node.js, and cloud-native architecture — all carefully
                crafted for longevity and scalability to meet your needs.
              </p>

              <div className="hero-cta">
                <Button
                  component="a"
                  href={`mailto:sam@morrisoncreativelabs.com?subject=${emailSubject}&body=${emailBody}`}
                  className="btn-primary"
                  color="inherit"
                >
                  Let's Talk!
                </Button>
              </div>
            </div>

            <div className="hero-terminal">
              <TerminalDisplay scripts={tickerScript} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
