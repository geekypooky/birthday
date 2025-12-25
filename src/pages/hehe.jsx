import './Landing.css'

function Hehe({ onBack, onNext }) {
  return (
    <div className="landing">
      <div className="landing__background" aria-hidden="true" />
      <section className="landing__panel">
        <p className="landing__eyebrow">To the Most Wonderful Person</p>
        <h1>Dear Sreejesh, thank you for everything.</h1>
        <div className="landing__content-grid">
          <div className="landing__text">
            <p>
              I just want to take a moment to tell you how truly amazing you are. Your presence in
              my life has been nothing short of a blessing. You’ve been there when no one else was,
              holding me up through the toughest times and making me feel safe and understood.
            </p>
            <p>
              You’ve always cared so deeply—not just for me, but for everyone around you. Your
              guidance, patience, and kindness have made such a difference in my life. Whenever I
              felt lost, you gently showed me the way. Whenever I felt weak, you reminded me of my
              strength.
            </p>
            <p>
              There is black cat la, thats me that was how i was when you met me , but you made me smile,made me feel alive again there was a period when I thought that na perfect ah irundadan someone will even look at me nu but you looked beyond that idk why you liked me still i have a personality of a card board but you liked me still , i felt happy meeting someone like you , hehe!!:)
              you were my knight back then, uk apavum i get anxious but i know i had you,i know that you not go away but then baby am not a person with somuch people in their life ,the person who you are seeing is not who i was,enakunu solla i didnt have anything or anyone but I got you,the most precious gift of my life.
               
</p>
<p>
     You know when people grow they have to seperate, you are the best thing , i have learned so much from  you in many ways but we both know you deserve more ,in a good way ofc , i will be one in the crowd and see you achieve things!! 
    As time went you grew i stayed the same ,but i was not ready to let you go aana i knew you needed more but alas this was how much i am and will be , so i just let you go , you need to explore learn and experience more with me you really can't,so yes hehe,anyways next year kulla find someone nice , i won't be nice like this hehe!! i wanna become the bitter ex so yes hehe!!
    </p>
            {(onBack || onNext) && (
              <div className="landing__actions">
                {onBack && (
                  <button className="landing__cta landing__cta--ghost" onClick={onBack}>
                    back to wish
                  </button>
                )}
                {onNext && (
                  <button className="landing__cta" onClick={onNext}>
                    next surprise
                  </button>
                )}
              </div>
            )}
          </div>
          <figure className="landing__photo-slot">
            <span>
            <img src="/black.png" alt="Sreejesh" />
            </span>
          </figure>
        </div>
      </section>
    </div>
  )
}

export default Hehe
