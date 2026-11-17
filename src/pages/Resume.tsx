import "../styles/resumeStyles.css";
import { ResumeModel } from "../types/resume";
import personalHeadshot from "../assets/personalHeadshot.jpg";

export interface Props {
  resumeData: ResumeModel;
}

export default function Resume({ resumeData }: Props) {
  return (
    <div className="paper-wrap">
      <div className="paper">
        {/* HEADER */}
        <div className="r-header">
          <div>
            <div className="r-title">{resumeData.header.position}</div>
            <div className="r-name">{resumeData.header.name}</div>
          </div>
          <div className="r-contact-block">
            {resumeData.contact.email && (
              <div>
                <a href={`mailto:${resumeData.contact.email}`}>
                  {resumeData.contact.email}
                </a>
              </div>
            )}
            {resumeData.contact.website && (
              <div>
                <a href={resumeData.contact.website}>
                  {resumeData.contact.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
            {resumeData.contact.linkedIn && (
              <div>
                <a href={resumeData.contact.linkedIn}>
                  {resumeData.contact.linkedIn}
                </a>
              </div>
            )}
            <div>{resumeData.header.location}</div>
          </div>
          <div className="r-tagline-row">
            <p className="r-tagline">{resumeData.objective.summary}</p>
            <img
              className="r-headshot"
              src={personalHeadshot}
              alt={`${resumeData.header.name} headshot`}
            />
          </div>
          {/* <p className="r-tagline">{resumeData.objective.summary}</p> */}
        </div>
        <div className="r-accent-bar" />

        {/* BODY */}
        <div className="r-body">
          {/* MAIN COLUMN */}
          <div className="r-main">
            {/* EXPERIENCE */}
            <div className="r-experience">
              <div className="r-experience-title">Experience</div>

              {resumeData.experience.map((job, x) => (
                <div className="job" key={x}>
                  <div className="job-header">
                    <div className="job-title">{job.role}</div>
                    <div className="job-period">{job.dates}</div>
                  </div>
                  <div className="job-company">{job.company}</div>
                  <ul className="job-bullets">
                    {job.bullets.map((bullet, y) => (
                      <li key={y}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* SELECTED PROJECTS */}
            <div className="r-experience">
              <div className="r-experience-title">Selected Projects</div>

              {resumeData.projects.map((project, x) => (
                <div className="job" key={x}>
                  <div className="job-header">
                    <div className="job-title">{project.name}</div>
                    <div className="job-period">{project.dates}</div>
                  </div>
                  <div className="job-company">{project.context}</div>
                  <ul className="job-bullets">
                    {project.bullets.map((bullet, y) => (
                      <li key={y}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="r-sidebar">
            <div className="sidebar-section">
              <div className="sidebar-title">Core Skills</div>
              <ul className="skill-list">
                {resumeData.coreSkills.map((skill, x) => (
                  <li key={x}>
                    {skill}
                    <div className="skill-dot" />
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="sidebar-section">
              <div className="sidebar-title">Education</div>
              {resumeData.education.map((school, x) => (
                <div className="edu-item" key={x}>
                  <div className="edu-school">{school.institution}</div>
                  <div className="edu-year">{school.dates}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
