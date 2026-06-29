interface AboutProps {
  title?: string
}

function About({ title = 'About Me' }: AboutProps) {
  return <h1>{title}</h1>
}

export default About