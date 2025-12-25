
import { useEffect, useRef } from 'react';
import './Landing.css'

const memories = [
  {
    id: 'library-corners',
    image: '/first.png',
    tag:'Silver Line',
    title: 'First meeting',
    body:
      'sooo ! oki  at first what i saw was your linkdin profile,ofc you caught my off guard like u looked hot?muscular and idk passionate! i was crazy enough to crush on you , but then i saw you for you, a guy with so much potential and everytime we talked later on i came to know more about you,everything abut you was so different and special that i cudnt help but fall for you more and more, you still are my knight shining armour but i could barely forget your grey hair i was so nervous that i didnt dare to look up and see you , my heart was pounding like crazy you were standing beside me,and yea when naren told that uk 6 months apro dan you will say nu , i was hurt but still somehow made this work,i was jelous elarutaiyu you talked ena unaku pidikumaney therla but then one day when i gave up you held on to me, still you are and idk if you remember that day you proposed , i asked you if i was  with you rn , epdi solirupanu hug panirupe sonna ,this is how i imagined!',
  },
  {
    id: 'rain-ride',
    image: '/lap.png',
    tag: 'Home :)',
    title: 'fell harder',
    body:
      'The day  after and everything god i was the happiest , hours days nights days nothing mattered we talked like crazy , how crazy was it but i fell harder nad harder after knowing a lot about you , you  adored me like crazy , and you were my home , i slept for days , i meant iduku minnadi i slept but after that denamum when i heard your breath and slept i felt i felt safe , i felt like i was living my childhood uk nalla irukum romba safe ah irunchu,you made my inner child feel safe not even my friends made it happen,.',
    detail: 'Even the traffic lights felt patient with us that night.',
  },
  {
    id: 'night-text',
    image: '/earphones.png',
    tag: '3 a.m. ping',
    title: 'Endless chats',
    body:
      'We drafted entire life plans over voice notes, swapped playlists, and solved imaginary problems at 3 a.m. Your curiosity pushed me to imagine kinder versions of myself,to be honest i always was a talkitive kid like yea it was hard to mingle, still is but then i talked and talked you listened , it was odd thinking that we used to talk for hours and nights , drafting how things should be in future but lol even a year hasnt passed we have grown past it,its like looking at the childishness of our past selves and laughing at it .',
       
    detail: 'My phone got damaged :).',
  },
  {
    id: 'window-seat',
    image: '/train.png',
    tag: 'Window seat',
    title: 'Train daydreams',
    body:
      'The first train i took alone wasnt scary after all you came to drop me, i told you i was scared and all of suddden ,you bunked your class and came with me tbh i felt like i was being with my dad, in a good way i felt safe epdi solla ,umm mostly i feel like myself onlly around my parents so aniku i felt that , when i was a kid when were travelling,bus la enga correct ah eranganumnu sonney apro bus la  en mela  sanju thoogna lol i loved it , yaraiyume madikama nee  na mattum went , and we held hands and travelled, you kissed me on my forehead and like train mirror la selfie we took and also you made that day special!',
    detail: 'We collected views the way others collect tickets.',
  },
  {
    id: 'cat-video',
    image: '/catbed.png',
    tag: 'Cat spam',
    title: 'Wiwiwi chronicles',
    body:
      'You spammed me with the best pet updates, narrating full monologues for that tiny furball,like na first day after getting commited onaku oru kutty karupu poona dan anupne,idk if you remnmber idk but ena solrathu and wiwiwi cats uh us,inonnu edo solvom ahh gwenchana ding ding ding ding !! ena solrsthu serious nalairunchu epome you made me laugh, minnalasanda vandaley you used to say it and make me laugh hehe , idk maybe as days goes it will  fade away but god you made everything special !',
    detail: 'Every meow carried a little reminder to stay soft.',
  },
  {
    id: 'stargaze',
    image: '/rename.png',
    tag: 'Travelling dreams',
    title: 'Sandy promises',
    body:
      'We discussed what was our travel destination and i might have said that it was beach in night,and you said you hated beaches cause it made your feet sandy and you remember while proposing me , you told that youd take your partner in the beach and propose ,it was the first time someome remembered what i said i just remembered that you did propose lol, you kept your promise after all and also just that youd tolerate me enough to get your feet sandy but then the day when you said that i was the happiest! .',
    detail: 'I wish maybe in parellel universe that might have happened.',
  },
  {
    id: 'street-food',
    image: '/hoodie.png',
    tag: 'Sweater Weather',
    title: 'Dec - 3',
    body:
      'That hoodie when you gave me was the memorable day like lil things that you remembered to make me feel seen,i felt like home and it smelled like you how could i tell you what i felt wearing that id always wear it even if i had it now , it felt like a long lost memory haha! but then god you were so thought ful and i also rembered when you first wrote my python my assignment you gave with a heart drwing hehe i felt really loved that day,you made me feel special in your own little ways my world couldnt tell you how you were to me then and i will always be greatful that i had that met that version of you even it was for lil time that was the best!',
    detail: 'My favorite souvenir was your hoodie.',
  },
  
  {
    id: 'sunrise-walk',
    image: '/sleeping.png',
    tag: '5 a.m. calm',
    title: 'early morning ',
    body:
      'Oneday you trusted me enoug to tell your stuff to me , and it was special , you god went through so much and still was string for the people around you , you will always be the best thing  in their lives too maybe oneday and i remember wanting to console you so bad but didnt know how to , i felt so helpless that day but then you were strong and still are , i wish i cudve done something to make you feel better that day but then you were strong and still are , you will always be the best thing  in their life too , idk if you have to hear it but then you are,too special to obv that youd have known it but then yea you are special!',
    detail: 'Dawn looked softer beside you.',
  },
  {
    id: 'exam-run',
    image: '/safe.png',
    tag: 'Protective wings',
    title: 'rescuer mode',
    body:
      'You were the there when i needed the guidence and that you made me learn stuff , when i needed to look up to someone you were there, i felt so safe around you like a kiddo with his dad , you made me feel protected and safe like i cud tell you anything and youd be there for me no matter what , you were my rock that time and still are in some ways, ',
    detail: 'You made me feel protected.',
  },
  {
    id: 'doodle-trade',
    image: '/plants.png',
    tag: 'Plant sprout',
    title: 'new plants',
    body:
      'Plants idk why you loved them so much that i made a plan to introduce you to mum to you by saying he tooliked palnt wants one like in our home lol sounded way too sus and ofc it was soo cheeky what we did we tried to talk witb our parents telling lame reasons but then it was sooo obv ig.',
    detail: 'Every plant felt like a secret handshake.',
  },
  {
    id: 'arcade-night',
    image: '/kiss.png',
    tag: 'Token rain',
    title: 'kiss night?',
    body:
      'But gog the way you kissed me i got weak on my kneees that you have to hold me to make me calm down , the teeth clash , the way you pressed your weight on me the way your eyes looked obv you dominated the kiss but then i would have wanted nothing else the wole day you held me tight, the kisees along the road way the way we found every corner to kiss how could i veer forget, ever time we kissed back was like taking my soul out and giving me and when i sat on your lap and kissed it was someting else it was just us like sonna puriyathu!! hehe.',
    detail: 'Losing to you somehow felt like winning.',
  },
  {
    id: 'photo-booth',
    image: '/me.png',
    tag : 'Question spree',
    title: 'Thoughts giggles',
    body:
      'Remember the times that i have to ask you questions likethose made up things and we will ask and tell our opinions , lol itwas quirky but then i came to know a lot about you and every time you answered my heart sored cause how could you everytime get me the ans i needed what else i shall say you were so perfect !! and ofc we slept of coddling each other in our phones',
    detail: 'Those stickers still live on my mirror.',
  },
  {
    id: 'gym-bet',
    image: '/cook.png',
    tag: 'Deal sealed',
    title: 'future pact',
    body:
      'We , i meant i went to your house for the first time , we were scared ofc but then it was just us in your room with double take playing tha background and in no tim ewe were naked and when we were kissing i saw the mirror ,it felt perfect so perfect like two puzzels fit together and you were so gentle yet passioante , and i knew i could always trust you, and not once you made me feel bad about my body, i was so hesistant and when you went down on me everyting else faded and god your eyes id die too look at once again when i looked at you, you made me feel wanted and you idk you were perfect when you fell on me idk it was .....hehe but god howw could i describe you , no words could ever do justice i liked, and when i made you moan and when you closed your eyes in pleasure am goneee !! the way your chest felt and raised heheh! but when we claned up you made sure to wipe me up clean to i was baffeled like you were a pakka book bf, lol no you were so  were better and when i went back you made me something too eat tbh i like your food more than sambar !! and you know how  many times we takled intimate things and stuff , nothing felt better than in person you and my poopi made evrything perfect idk, lol the kitchen counter shower couch !! idk nothing could make it like that day ',
    detail: 'would sell my soul to relive the moment.',
  },
  {
    id: 'playlist-drop',
    image: '/baby.png',
    tag: 'Mixtape drop',
    title: 'Shared confusion',
    body:
      'this is idk right to say or not , cause you liked dink reels but yea am not sure too but just so you know i hated kids , like i really other than my friends siblings i cant handle kids nor do i like but youu had to be soo fuckig cute while eating that i had wanted a kid like you it will ofc poutlike you, eating and also will have this bigg doey eyes like you remmber that we named them aadya !? lol and avyukth lol but on a serious note idk if i want them apart the cuteness and stuff lol but if i ever had one i hope it loks like the mini version of you!! idk you made me want to have kids other wise i hated em like look when  on freshwarites that aunty had a kid and i saw your face i wnated kid kinda lol,everything apart like if in future if were together you dont have to uk go by my wishes like idk what will be my mindset then ,its yours too like ik lol ! awky convo ',
    detail: 'You always knew when to send a new track.',
  },
  {
    id: 'beach-day',
    image: '/selfies.png',
    tag: 'Hehe',
    title: 'me half the time',
    body:'half the time we took photos id have been grumpy back then but you always find a way to make me laugh, i really cant stay mad at you i just see a cute lil kiddo ! idk ena solrathu ik my first reaction when things go wrong is just idk sooo dramatic but am just scared cause you are so much and am nothing ofc youd want more onece time comes so didnt know what to do maybe if i took the first step out i wouldnt be hurt, idk uk i laugh like am okay i feel being away from you i just myself around you nad i know you come to despise me but its fine i understand lol,am not even intresting idk , i lack anyways yea but everytime you are soo patient andmaking sure the realtionship is okay! ',
    detail: 'I can still hear that ocean-loud laugh.',
  },
  {
    id: 'movie-marathon',
    image: '/lift.png',
    tag: 'Couch fort',
    title: 'Just us far away',
    body:
      'Sometimes when things get hard i really do think that if we were far away from things nothing would have made our relation ship hard , like we cudve just been us and nothing else mattered like we cudve just been in our own world like when we used to talk for hours and hours and nothing else mattered like that idk maybe if we we ,',
    detail: 'Popcorn crumbs were basically confetti for us.',
  },
  
  {
    id: 'gratitude-text',
    image: '/hugging.png',
    tag: 'Long note',
    title: 'Gratitude thread',
    body:
      'the first time i talked face to face you were so determined that youd want to do something and here you are achieving things that you will .',
    detail: 'Thanks for everything that you are to me and will be proud of everything that you will be, seriously  never in my life i fet so proud of someone like this , i know i wasnt of any help but a hinderance but do know that you are amazing and i am so proud of you,seriously i feel so happy ,like am greatful that i got to meet someone like you in my life!! a very happy 19! sreeju.',
  },
]

function MemoryLane({ onRestart, onBack }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay might be blocked by browser
        });
      }
    }
  }, []);

  return (
    <div className="landing">
      {/* Hidden looping background audio */}
      
      {/* ...existing code... */}
      <div className="landing__background" aria-hidden="true" />
      <section className="landing__panel prediction__panel">
        <p className="landing__eyebrow">Memory lane</p>
        <h1>Little moments we made ours</h1>

        <div className="prediction__sky" aria-hidden="true">
          <span className="prediction__moon" />
          <span className="prediction__star prediction__star--one" />
          <span className="prediction__star prediction__star--two" />
          <span className="prediction__star prediction__star--three" />
          <span className="prediction__star prediction__star--four" />
        </div>

        <div className="prediction__eight-containers">
          {memories.map(({ id, image, tag, title, body, detail }, index) => {
            const cardClass =
              index % 2 === 1
                ? 'prediction__card prediction__card--flip'
                : 'prediction__card'

            return (
              <div key={id} className={cardClass}>
                <div className="prediction__media">
                  <img src={image} alt={title} />
                </div>
                <div className="prediction__text">
                  <p className="prediction__tag">{tag}</p>
                  <h2>{title}</h2>
                  <p>{body}</p>
                  <p className="prediction__detail">{detail}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="landing__actions">
          {onBack && (
            <button className="landing__cta landing__cta--ghost" onClick={onBack}>
              previous page
            </button>
          )}
          {onRestart && (
            <button className="landing__cta" onClick={onRestart}>
              start over
            </button>
          )}
        </div>
      </section>
    </div>
  )
}

export default MemoryLane
