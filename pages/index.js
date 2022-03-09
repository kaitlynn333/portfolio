import Card from '../components/card/Card'
import ContactForm from '../components/contactForm/ContactForm'
import Hero from '../components/hero/Hero'
import Layout from '../components/layout/Layout'
import SectionBreak from '../components/sectionbreak/SectionBreak'

function Home() {
  return (
  <Layout>
    <title>tabname here</title>
    <Hero 
      heading="Kaitlynn Farkas." 
      subHeading="I'm a middle school student at the Astra Nova School. I'm very interested in English, specifically reflection through poetry, and EdTech. Recently, I've found passions through coding, in both JavaScript and Python, and API activism. Thank you for coming by!" 
      buttonText="Learn More"
      bgImage="/bgGif.gif"
    />
    <SectionBreak />
    <h2>Projects</h2>
    <div className="flex justify-space-evenly flex-wrap">
      <Card 
        image="/project.jpeg"
        alt="a cool project"
        title="Cool Project"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
        buttonText="Learn More"
        buttonLink=""
      /> 
      <Card 
        image="/project.jpeg"
        alt="a cool project"
        title="Cool Project"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
        buttonText="Learn More"
        buttonLink=""
      />
    <Card 
        image="/project.jpeg"
        alt="a cool project"
        title="Cool Project"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
        buttonText="Learn More"
        buttonLink=""
      />
    </div>
    <ContactForm />
  </Layout>
  )
}

export default Home