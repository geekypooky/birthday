import './Landing.css'

function Landing({ onRead }) {
  return (
    <div className="landing">
      <div className="landing__background" aria-hidden="true" />
      <section className="landing__panel">
        <p className="landing__eyebrow">Baby Poopi turns 19!!</p>
        <h1>Happy 19th Birthday, Sreejuu!</h1>
        <p>
          I’m so proud of the person you’ve become and everything you’ve worked for. 
          Thank you for all the things you’ve done and for being the wonderful person 
          that you are — truly one of the most amazing people I’ve ever met. 
          I hope this year brings you endless joy, new achievements, and beautiful memories.
        </p>
        <button className="landing__cta" onClick={onRead}>
          please read
        </button>
      </section>
    </div>
  )
}

export default Landing
