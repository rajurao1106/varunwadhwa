import React from "react";
import Navbar from "./Navbar";
import image1 from "../assets/Articles/image1.png";
import image2 from "../assets/Articles/image2.png";
import image3 from "../assets/Articles/image3.png";
import image4 from "../assets/Articles/image4.png";
import image5 from "../assets/Articles/image5.png";
import image6 from "../assets/Articles/image6.png";
import image7 from "../assets/Articles/image7.png";
import image8 from "../assets/Articles/image8.png";
import image9 from "../assets/Articles/image9.png";

export default function AllArticles() {
  // const articleContent1 = {
  //   title: 'The Journey from Something to Nothing!',
  //   content: [
  //     {
  //       subtitle: '',
  //       text: "They say if you are NOTHING then you can be ANYTHING but if you already SOMETHING then you can be NOTHING! The above sentence may sound mystifying if you read it once but if you pay a little more attention, you will appreciate that it makes perfect sense. It originates at the juncture where science meets spirituality and where the eastern wisdom meets the western principles.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "The eastern wisdom of Sanatana Dharam which is the original name of Hinduism talks about the way we must all live our lives and Shiva has a special place in this culture, he is often referred to as the God of Gods or the Mahadev. The word Shiva means no-thing; nothing from which everything was created; created and manifested to be adorned and respected. We emerge from nothingness and go back to nothingness. Nothing here does mean that which has no value or substance but rather that which is not physical. Shiva has no form, but Shiva takes the form of everything that we perceive and that which all perceive. It is referring to the non-physical dimension of this cosmos which occupies 99% of the space.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "If you read the above few sentences again, somewhere you would be reminded of the black holes. A black hole represents the ‘void’ or ‘nothingness’ in Space. Nothing survives, it just transcends, it goes right into the Absolute. Scientists today are beginning to realize that this dimension which we often refer to as the dark energy has its intelligence, however, we need a different kind of intelligence to realize this. An intelligence that is not marred with intellect. Our modern education system has focused all its energies on the intellect as a form of intelligence, whereas the highest form of intelligence is the ability to perceive or be receptive to life. That is where the reference to Shiva and the third eye comes into the picture. The sensory eyes can perceive that which is physical. When you want to see something that is not physical, the only way to look is inward. When we refer to the “third eye”, we are symbolically talking about seeing something that the two sensory eyes cannot see.",
  //     },
  //     {
  //       subtitle: 'Meditation',
  //       text: "Let’s clear the air on meditation a little bit shall we? First of all, it’s not an act that you must perform in a certain manner, it’s a quality that you must imbibe in yourself. In that sense you don’t meditate, you become meditative. When you become meditative you start cleaning up your life because you feel you can’t go on living life through someone else lens, you are tired of people telling you about how you must live your life and there is a natural inclination to search for the truth in its purest form. Cleaning up your life also means extricating yourself from those things which are obstacles to your liberation.",
  //     },
  //     {
  //       subtitle: 'Gratitude',
  //       text: "Everything that has come to human beings in the form of resources has come from this mother earth, I am asking today are we thankful enough? Everything that perceives as our own in terms of our body or our thoughts has also been picked up from the food that we have eaten and expressions that we have gathered. Again are we thankful enough to our parents, teachers, friends, loved ones, mentors, and well-wishers for this? The more we bow down to this life for what it has given to us, the more we shall receive.",
  //     },
  //     {
  //       subtitle: 'Higher Purpose',
  //       text: "If you would like to live a truly wealthy life it’s important to support a cause that touches you. You must take time out to volunteer and donate to social causes. Learn to empathize with others as everyone has their share of struggles cut out. Your higher purpose is not something you set up for the month or year but rather is something around which you must set up your life. It gives us the biggest reason to get up from bed every day and strive towards. It’s about leaving a legacy that people would remember you for, long after you have gone.",
  //     },
  //     {
  //       subtitle: 'Blessings',
  //       text: "To bless everyone and everything is one of the highest forms of intelligence. It opens the doors for opportunities that we never thought existed. Once you start blessing everything and everyone, you naturally start receiving these blessings. Again, don’t a thing from the intellect, strive towards exploring this possibility! Sooner or later the very earth that you walk upon would bless you, the food you eat would bless you, the air you breathe would bless you and every person you meet shall also bless you. I leave you with these words so you could remember: The real journey is from being SOMETHING to being NOTHING!",
  //     }
  //   ],
  // };

  // const articleContent2 = {
  //     title: 'Spirituality Made Simple!',
  //     content: [
  //       {
  //         subtitle: '',
  //         text: "For days on I have been wondering, how does one explain the beautiful yet mysterious world of spirituality to someone who has never experienced that dimension, especially since all of us are so hardwired into living in a world where we want more of everything, more clothes, more houses, more cars, more money and thus more stress. The other challenge is the concern with the overanalysing of the subject since people over many generations have written and rewritten about the subject of spirituality and made it more complex than ever. The repercussions are so intense that people now think it’s a taboo that needs to be avoided at all costs. ",
  //       },
  //       {
  //         subtitle: '',
  //         text: "There have been people though who have captured the essence of spirituality remarkably well, through their teachings and writings they have enlightened the world and left an indelible impact. That statement though only applies to the minority and that unfortunately is also the tragedy in today’s world where people think that intelligence lies in making simple things complicated, whereas the true mark of intelligence is when you could make complicated things simple. Simple for everyone to understand and implement!",
  //       },
  //       {
  //         subtitle: '',
  //         text: "“If you can’t explain it to a 6-year-old, you don’t understand it yourself.” – Albert Einsteine",
  //       },
  //       {
  //         subtitle: '',
  //         text: "Therefore, to demystify this dimension let us first explore what is not spirituality so that we can peel away the skin and focus on the fruit. ",
  //       },
  //       {

  //         point1: 'It’s not about God or religious beliefs – It’s rather about exploring this life to the fullest',
  //         point2: "It's not about going to a sacred place somewhere in the Himalayas – It's about exploring possibilities to create that sacred place inside you or even inside your home",
  //         point3: "It's certainly not a disempowerment or a hindrance – On the contrary, it’s the biggest empowerment, unfortunately very few realize that ",
  //         point4: "It's not for a specific set of people – It’s really for everyone ",
  //         point5: "It's not just about being happy and joyful – It's about understanding that being happy would help you perceive more so that you can explore this world in so many different ways than you have imagined",

  //       },
  //       {
  //         subtitle: 'Now the question is then, what is spirituality? ',
  //         text: "Let’s explore this through a simple model. Let us imagine this world is divided into the physical world and the Non-Physical world or the spiritual world. Let’s further divide this on the basis of two dimensions which are the motive for us to perform any activity in this world: I) Pain, II) Pleasure.",
  //         image1: image1,
  //       },
  //       {
  //         subtitle: '',
  //         text: "Tony Robbins the world-renowned author, coach, speaker, and philanthropist in one of his most famous teachings talks about this concept of Pain & Pleasure. He mentions and I quote:",
  //       },
  //       {
  //         subtitle: "",
  //         text: "“One of the most important precepts about human behaviour and change is that at the most basic level, there are two forces that motivate people to do what they do: the desire to avoid pain or the desire to gain pleasure.”",
  //       },
  //       {
  //         subtitle: "",
  //         text: "To put it in a different way all he is trying to say is that in the physical world, every human behaviour is driven by either the desire to gain pleasure(beautiful house, fancy cars, fame and fortune, desirable partner, intelligent children, etc.) or the fear of pain (financial insecurity, loneliness, disrespectful neighbours, etc.) That is so true and it's such an elegant yet simple way to perceive human behaviour! ",
  //       },
  //       {
  //         subtitle: "",
  //         text: "Now imagine yourself transcending from this lower physical world to a higher spiritual world where there is no desire to gain any pleasure or fear of pain. Imagine what it would look like to be in a place where your behaviour is no longer driven by the shackles of Pain & Pleasure. For anyone who has never experienced this, it would probably be arduous to imagine. But isn’t it true that we have all had moments in our lives where we felt the need to be free from these physical desires that push us every day and instead transcend into a place where we are completely in charge of our lives?",
  //       },
  //       {
  //         subtitle: "",
  //         text: "Let’s understand this at a deeper level. It’s a scientifically proven fact that if you are free from these constraints that unconsciously drive your behaviour and if you can separate yourself from the result, you are in a better position to think clearly and make better decisions because you are in a stressed-free no-pressure zone. It means you are not dedicated to the result but rather the process. Why is this important? ",
  //       },
  //       {
  //         subtitle: "",
  //         text: "Well, please understand this, success in any field is an outcome of the process done right. One common mistake that people make in life is that they are over-obsessed with the goals and under-obsessed with the process of achieving those goals. Therefore please, please, please “Make Process Your Best Friend”",
  //       },
  //       {
  //         subtitle: "That’s what Bhagvat Gita also mentions: ",
  //         text: "Karm karo, fal ki chinta mat karo (Do your duty without thinking about results) ",
  //       },
  //       {
  //         subtitle: "",
  //         text: "If you are wondering if this is even possible let alone being practical, then let me remind you that people have been doing this for generations, staying in the physical world, yet exploring the possibilities of transcending into the spiritual world. And that is all I ask you to do, just explore the idea!",
  //       },
  //       {
  //         subtitle: "",
  //         text: "This is my wish and blessings that everyone must find that special place where they continue to be involved with everything they do and yet not be attached to any of that stuff.",
  //       },
  //       {
  //         subtitle: "",
  //         text: "Would love to hear your feedback or comments on the subject. Cheers! ",
  //       },
  //       {
  //         subtitle: "",
  //         text: "",
  //       },

  //     ],

  //   };

  // const articleContent3 = {
  //   title: 'Spirituality Made Simple!',
  //   content: [
  //     {
  //       subtitle: '',
  //       text: "For days on I have been wondering, how does one explain the beautiful yet mysterious world of spirituality to someone who has never experienced that dimension, especially since all of us are so hardwired into living in a world where we want more of everything, more clothes, more houses, more cars, more money and thus more stress. The other challenge is the concern with the overanalysing of the subject since people over many generations have written and rewritten about the subject of spirituality and made it more complex than ever. The repercussions are so intense that people now think it’s a taboo that needs to be avoided at all costs. ",
  //     },
  //     {
  //       subtitle: '',
  //       text: "For you, this superpower could be your incredible management of time or money, for someone else it could be the way she handles every relationship in her life. For others, it could be this burning desire of building something new from the scratch or perhaps building something out of nothing. Maybe you are someone who loves to bring people together or maybe your heart opens up when you make others smile. ",
  //     },
  //     {
  //       subtitle: '',
  //       text: "For me, my superpower is helping others! ",
  //     },
  //     {
  //       subtitle: '',
  //       text: "In case you are wondering, how come this is an actual superpower, I want you to stay with me for a bit longer. ",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Ever since my childhood, there was this urge to help as many people as I could, even if it meant sacrificing my comfort. I still remember the smile on my friends' faces when I would offer them my bus seat and continue to stand for the entire journey. I also remember the bizarre gaze of my parents when I would refuse to take a gift or never ask for anything for myself during the market visit so they could continue to save enough for the family. Maybe this superpower came as an inheritance from them because ever since I remember, I never really saw them living for themselves. It was always about our family and the community at large. ",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Therefore, it’s not surprising that as I continue to shape my professional career, I seem to be circling around this superpower. Earlier perhaps it was unconscious but now its become a more conscious choice. Whether it’s the books that I author to spread awareness, the topics that I choose in the public speaking events (child education, spirituality, gratitude & leadership are my favorite), or even the job that I perform as a compliance professional. There is a relentless endeavor of creating a better world by serving others starting with one person at a time. If you are wondering why am I trying to hit a self-goal here, trust me the idea is to serve you only. My superpower helps me be really good at my work because I want to be out there serving others, it makes me feel fulfilled and helps me sleep well at night. There is pride, gratitude, and contentment in everything I do thanks to my superpower. ",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Therefore, I invite you on this journey of self-exploration to discover this hidden treasure. Don’t rely on this world to do this job for you, you are the only one who has lived with yourself every second, therefore no one knows you better. Spend some time alone where no one is there to bother you, look for that move that you have practiced 10000 times, don't be disappointed if it doesn't happen immediately to you, have faith that in a moment of joy and gratitude, it would come to you. ",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Now circle back to the above examples that I mentioned, your superpower of money management could serve you to become an investment consultant or management trainer. You have a superpower in handling relationships, you could be an HR manager or a psychologist. For someone who loves to connect people, you could be into network marketing or become a social media expert. If your superpower is into building something new, then you already know that the entrepreneurship journey awaits you. And last but not the least, if you feel great about making others smile then Amazon Prime/Netflix is all set to welcome you to their comedy stage.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "So what is your SUPERPOWER my friend, time to find out! ",
  //     },

  //   ],
  // };

  // const articleContent4 = {
  //   title: 'Parenting Guide: The Value of Perspective',
  //   content: [
  //     {
  //       subtitle: '',
  //       text: "As am writing this article am thinking about the Covid-19 situation which the world is going through, it has done many things to this world. While it may have created many existential, economic, and social problems it has certainly brought all of us together. For the first time, the world is not fighting against each other but rather against a common enemy. This cannot be called as a black swan event since the very definition of a black swan event is one that cannot be anticipated. This was one event which was anticipated but the one which we were not prepared for. The experts had warned about it long ago, however, the world chose to ignore.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "But this article is not about Covid-19, it’s about us. There is a whole generation of people that have seen this pandemic is unlikely to forget about this event during their lifetime. However, the question is would they remember the lessons that came out of this event.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "What about you, would you remember the lessons that came out of this pandemic four-five years from now? Would you thank the almighty that you were born in a generation that saw this pandemic? Would you grow from this situation to become better physically, mentally, emotionally, and spiritually? Would you thank god that this happened to you?",
  //     },
  //     {
  //       subtitle: '',
  //       text: "For the majority of us, the answer is NO. That’s because most of us are not conditioned to think like that!",
  //     },
  //     {
  //       subtitle: '',
  //       text: "We were never told growing up that situations like this would come your way. You cannot choose if you would like to part of them or not, however, you can certainly choose to determine your response.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Well, we were never told but that doesn’t stop us from talking to our children about this. Your child needs to understand that every situation that happens to them can be viewed as either a crisis or an opportunity. If they look for an opportunity in every challenging situation they would to able to harness their true potential and would be able to grow from strength to strength. On the contrary, if they view every challenging situation as another crisis looming large on their life then they would limit their exposure to life and start to withdraw into their own little cocoon.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "And no matter how safe that cocoon is, you would not like the butterfly to go back into that shell. Our children must not only be given the freedom to fly but the courage to express themselves freely without thinking too much about the consequences. The problem is, once they begin to withdraw from the life they would think twice before committing to anything new. Before we even know, they would have themselves shelved their wings.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "When my dad passed away last year, a similar situation was in front of me. He was a great influence in my life and saying goodbye wasn’t easy. On the third day of his funeral rights, I had my conference in Singapore. I knew if I would not go, everybody would understand. There was chaos outside, however, within me I was peaceful and serene. I had realized that there are only two ways that you could deal with the loss of a loved one. Either accept that with grace or make a chaos out of it. Accepting this with grace gave me the opportunity to find a solution instead of searching for solace. In case you are wondering if I did attend the Singapore conference, then yes indeed I did. I would always miss him but finding solace in this pain isn’t the solution. You must look for opportunities to grow through each of these unfortunate events.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Now, coming back to our children, the question really is what can we do as parents to inculcate this value of perspective. Here is some advice you could use:    ",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Expression of Joy Vs Pursuit of Happiness – The world needs joyful, blissful human beings. The angry, egoistic, fearful, frustrated ones have caused the most amount of damage to this planet. All children when they are born are a true expression of joys, we as parents make the mistake of sending them on this journey called the pursuit of happiness. We make their happiness dependent on material achievements like A+ grades, winning sports/art competitions, and whatnot. Just do this much, try and create a playful, joyful atmosphere at home so that a child doesn’t have to depend on material achievements to find his/her happiness.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Consequence Management – Teaching your child how to handle failures is perhaps the biggest gift you can offer them. They may not exactly like to hear what you tell them, since instead of consoling them for the immediate loss, you are preparing them for the next race, however, sooner or later they would realize the big picture.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Balance in Stillness – I was reading an amazing book, “Stillness is the Key” by Ryan Holiday, he writes, and I quote, “Stillness is what aims the archer’s arrow. It inspires new ideas. It sharpens perspective and illuminates’ connections. It slows the ball down so we may hit it. It generates a vision, helps us resist the passion of the mob, makes way for gratitude and wonder. Stillness allows us to persevere. To succeed. It is the key that unlocks the insights of genius and allows us, regular folks, to understand them.” ",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Teach your child how to sit quietly in a room alone.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Positive Nurturing: Positive nurturing parenting is nourishing life through the following techniques:",
  //     },
  //     {

  //       point1: 'Developing positive self-worth by having appropriate expectations.',
  //       point2: "Developing a sense of caring and compassion by building empathy",
  //       point3: "Providing children with dignified discipline.",
  //       point4: "Developing a healthy sense of empowerment.",

  //     },
  //     {
  //       subtitle: '',
  //       text: "Happy Reading and Parenting! Signing off with a smile of my daughter for you to remember this message. :-)",
  //     },
  //     {
  //       subtitle: '',
  //       text: "",
  //     },
  //     {
  //       subtitle: '',
  //       text: "",
  //     },

  //   ],
  // };

  // const articleContent5 = {
  //   title: 'Skills you must have @2020',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: " 2020 is indeed a special year for everyone, not just it’s the turn of the year but it’s the turn of the decade. A decade which brings along amazing opportunities to learn, transform and grow. While I was writing down my goals for the decade, one thing that struck my mind was that what should be the skills I would need to polish which would elevate me closest to my goals.",
  //     },
  //     {
  //       subtitle: "7 Key skills to own this decade:",
  //       text: " ",
  //     },
  //     {
  //       subtitle: "1) Your love for technology",
  //       text: "You may argue weather AI is a boon or a bane, but one thing is for sure it’s going to the biggest differentiator in how you perform your job in the coming few years. One of best books which is written on the subject is by Brad Smith (President of Microsoft) and Carol Ann Browne known as “Tools & Weapons”. It demonstrates how technology is affecting our lives in so many ways than we could imagine. Personally, I loved the quote in which he mentions that while we put in more technology in this humanity we must also put in humanity into technology.",
  //     },
  //     {
  //       subtitle: "",
  //       text: " The bottom line is you must join this AI revolution and understand that the pace of the advancements in technology would not slow, you must learn somehow to keep pace. Explore what’s happening in your industry as far as AI is concerned, bring in new ideas to the table for management to consider and be the technology enabler for your organization.",
  //     },
  //     {
  //       subtitle: "2) Pro Networking: ",
  //       text: "Being a great networker is perhaps one of most misunderstood notion in this world. For most of the people it means your ability to get your work done through your contacts. You must change that definition right away in your head, for networking is all about relationship building. Here are some great ways to become a pro-networker:",
  //     },
  //     {

  //       point1: 'Elevator Pitch: Prepare a 30 second pitch which introduces you to the person on whom you would want to leave a great impression. Better if you have prepared at-least 2-3 versions of this pitch and basis on whom you are delivering, you can choose to pick your script. Also make sure you personalize this pitch which means the other person should at least get to know the real side of you as a person.',
  //       point2: "Give & Take: A lot of people often look to take something out of a relationship too soon, they end up making the mistake of making an emotional relationship look like transactional. We have all received messages on LinkedIn from individuals showcasing their products and services without even making an effort to know us as individuals.",
  //       point3: "Connectors: A lot of people often take advantage of their immediate contract but often forget about the contacts of your contact. The six degrees of separation is a great reference point, it talks about the theory that any person on the planet can be connected to any other person on the planet through a chain of acquaintances that has no more than five intermediaries. What an amazing way to bridge the world!",
  //       point4: "Network Repository: One of my close friends who is a great networker gave me this splendid idea which am also sharing with you. He maintains what he calls a network repository which is more like a handbook, in that repository he has listed down the details of each of his contacts along with their so-called superpower (in his words). Typically, a superpower could be a skill/reference point/great place of work, something like this:",

  //     },
  //     {

  //       point11: 'Rahul – Mobile Number, works at Facebook marketing team.',
  //       point21: "Heena - Mobile Number, her husband Karan is in the UK High Commission, loves cooking",

  //     },
  //     {
  //       subtitle: "3) Entrepreneur/Intrapreneur",
  //       text: "Weather you choose to take the plunge into the field of entrepreneurship or not, having the mindset of an Entrepreneur is the key. Within the company these individuals are often known as Intrapreneurs. So, what is this mindset all about:",
  //     },
  //     {

  //       point12: 'A Huge Risk Appetite',
  //       point22: "Constantly Pushing the Walls of Possibility",
  //       point32: "A Vision to Solve a Problem",
  //       point42: "Decision Making: Quick to make decisions and slow to change",
  //       point52: "Resourcefulness  ",
  //     },
  //     {
  //       subtitle: "4) Your contribution to the Revenue models: ",
  //       text: "Your contribution to the top line or the bottom line would probably be the most determining factor as far as your value in a company or an industry is concerned. The sooner you would learn that skill, the better it would be. Organizations love the sales force for the simple reason that they are the biggest contributors to the revenue models. Now if you are thinking that all my life has operated in the cost centres here is some cool advice: Look at the potential opportunities of creating value for the company by doing something for which the outside consultant would charge megabucks. Once you have delivered that service make sure you advertise that to the leadership.",
  //     },
  //     {
  //       subtitle: "5) Change cheetah ",
  //       text: "In an age where technology is ensuring that processes as well as business models are evolving at lightning speeds, you must be the change agent for your company. In marketing terminology these people are known as innovators or early adopters as you can see below in the famous model by Everett Rogers (top 16%).",
  //       image2: image2,
  //     },
  //     {
  //       subtitle: "",
  //       text: "The above model is a perfect example of when does a change happen in the real world. It talks about the critical role which innovators as well as early adaptors play in taking forward any new innovation. If you want to be seen as someone who knows how to adapt to the changing times, not only that but also know how to be a change leader, the organizations of the world would want you. So next time remember to be the fastest in making that change happen, be the Change Cheetah!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Implementing Change in Real World!! (Rosabeth Moss Kanter’s model)",
  //       image3: image3,
  //     },
  //     {
  //       subtitle: "6) Personnel Innovation & Marketing ",
  //       text: "Its often said that a company may not pay attention to any other department but can continue to thrive if it knows how to do these two things well. If you extrapolate that to an individual today it’s imperative that focus on your personal innovation & marketing.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Some incredible ways to Market Yourself!",
  //     },
  //     {

  //       point13: 'Contribute to the content on Social Media',
  //       point23: "Always have an opinion on subject.",
  //       point33: "Join a network (Book Clubs/Learning Communities/Business Networking Groups)",
  //       point43: "Write a Book (mine would come out next year)",
  //       point53: "Start a community or a Club",
  //       point63: "Ask questions especially to the folks that matter!",
  //     },
  //     {
  //       subtitle: "7) The Grand-master ",
  //       text: "Its said that an amateur chess player knows his next one or two moves, a good player knows his next four to five moves, but a grand-master typically knows his next ten to fifteen moves. This means that you anticipate what is going to happen and prepare your strategy accordingly. Ever seen a child who is amazing in a shooting video game, simply because he has played that game enough number of times to plan his sequence of moves.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Being a grand-master in the professional world would mean having an expertise in your respective industry. Your ability to understand the disruption which would happen in your field in the next 5-10 years could well determine your growth factor. Some of the industries which are facing disruption right now are:",
  //     },
  //     {

  //       point14: 'Telecom Industry',
  //       point24: "Door to Door Services",
  //       point34: "Aeronautics & Space Industry",
  //       point44: "Knowledge & Skills Industry",
  //       point54: "Automotive Industry",
  //       point64: "Construction",
  //       point74: "Healthcare & many more…",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Disruption as a word may have negative connotation attached to it however it brings along tremendous opportunities for sweeping growth, all you need is to know how to ride the wave. ",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Would love to hear your feedback. Happy Reading!!",
  //     },

  //   ],
  // };

  // const articleContent6 = {
  //   title: 'The Mehrabian Model: Separating Myth from Reality',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "Being able to effectively communicate with everyone is a cornerstone of managing relationships and behavior in a complex environment we live in. The Mehrabian Model to that extent has been the cornerstone in explaining the importance of non-verbal communication.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "But are the numbers 7-38-55 depicting to us the true story? To find that out you would have to go back to the origin of these findings.",
  //     },
  //     {
  //       subtitle: "Origin",
  //       text: "",
  //     },
  //     {
  //       subtitle: "Study 1",
  //       text: "In Mehrabian and Wiener, (1967), subjects listened to nine recorded words, three conveying liking (honey, dear and thanks), three conveying neutrality (maybe, really and oh) and three conveying disliking (don’t, brute and terrible).",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The words were spoken with different tonalities and subjects were asked to guess the emotions behind the words as spoken. The experiment finding was that tone carried more meaning than the individual words themselves.",
  //     },
  //     {
  //       subtitle: "Study 2",
  //       text: "In the second study, subjects were asked to listen to a recording of a female saying the single word 'maybe' in three tones of voice to convey liking, neutrality and disliking. The subjects were then shown photos of female faces with the same three emotions and were asked to guess the emotions in the recorded voices, the photos and both in combination.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The photos got more accurate responses than the voice, by a ratio of 3:2 So, in summary Mehrabian found:",
  //     },
  //     {

  //       point15: "7% of message pertaining to feelings and attitudes is in the words that are spoken.",
  //       point25: "38% of message pertaining to feelings and attitudes is the way the words are said.",
  //       point35: "55% of message pertaining to feelings and attitudes is in facial expression.",

  //     },
  //     {
  //       subtitle: "",
  //       text: "Notice the words feelings and attitudes above. If we limit the formula to the specific conditions of the experiments, it is only applicable if:",
  //     },
  //     {

  //       point16: "a speaker is using only one word or at max a few words,",
  //       point26: "their tone of voice is not matching with the meaning of the word, and",
  //       point36: "the judgement being made is about the feelings of the speaker.",

  //     },
  //     {
  //       subtitle: "",
  //       text: "Something like the below scenario. If your words are not matching with your body language, the listener is more likely to believe your non-verbal cues!!",
  //       image4: image4,
  //     },

  //     {
  //       subtitle: "",
  //       text: "What is surprising is when the findings are over-simplified and used across the industry by soft skills professionals and trainers to demonstrate effective communication skills. In that sense, the derivation of the rule comes out to be that when it comes to effective communication only 7% is dependent on words, rest 93% constitutes non-verbal communication + tone.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "One of the examples that is often quoted is that of Mr Manmohan Singh, that even though he may be using the best of content, his tone and body language often lets him down, making his speech monotonous.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Let me take the same argument to the other extreme, consider a Chinese speaker, speaking in front of an Indian audience none of whom understands Chinese. He is using flawless tone and amazing body language; would that make for effective communication. If we applied the Mehrabian rule it should, given the fact that the speaker has taken cognizance of the 93% of communication effectiveness.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "There is something fundamentally incorrect here isn’t it!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "'Please note that this and other equations regarding relative importance of verbal and nonverbal messages were derived from experiments dealing with communications of feelings and attitudes (i.e., like-dislike). Unless a communicator is talking about their feelings or attitudes, these equations are not applicable.'",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Yet that is precisely what we keep teaching in our communication trainings universally applying the rule to every communication including public speaking.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "You know when it comes to verbal, tone & body language, it is not a zero - sum game as many people think. If you could use all three effectively and efficiently you could win over every type of audience. Collaboration is what you must seek, instead of putting each of these is competition with one another.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The only message I intended to send out through this article is never to undermine your content, for words are powerful, never for a moment consider this scenario that my content only matters 7%. At the same time beware of words-only communications like email. It is very easy to misunderstand what is said, even if emoticons (smileys) are used.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "In short when you have all the three means available, move away from 7-38-55 Rule to the 33-33-33 Rule!!",
  //     },

  //   ],
  // };

  // const articleContent7 = {
  //   title: 'Adult or Adulterated?',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "Sir Ken Robinson in one of his famous TED talks made a remarkable point when he said that when we grow up, we also grow out of our creativity rather than growing into it. The amazing raw intelligence that every child is born with is often induced out of him through this system which often lays all its emphasis on the intellect, the so called LEFT Brain, which is all about Logic, Analysis, words, facts, language, the list can go on.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "When we are children, we are all gung-ho on changing this world, aim for nothing less than the starts and settle for nothing less than the moon. Sometimes I wonder what really happens when we grow up? The answer is not that difficult, it’s an answer which has killed many a million dreams.  What would others thing about me!! Sir Ken Robinson in his above talk told a story about a little girl who was drawing the picture of God. When the teacher told her, Dear Sweetheart how can you draw the picture of God, no one knows how he looks? The little child just smiled and said, you know what, they will in a minute!! Children just don’t care what others think, they just don’t have that noise telling them inside their head, What would others thing about me!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "When Adam Braun, the Founder and CEO of the NGO, Pencils of Promise asked a child from India, what is the one thing that you want? The child though for a moment and then replied, I need a pencil. Isn’t that amazing, he could have asked for anything, but he knew the instrument that had the potential power to change this world. The answer inspired Adam Braun to focus on children’s education as a medium to express his dream. Pencils of Promise is today one of the biggest NGO networks across the globe, covering more than 30000 students and opening a school on this planet every 90 hours.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "This recently happened to me when I was speaking to my wife standing in front of a three floored Bunglow, the roof would always belong to the third floor right I said. My wife was nodding her head when suddenly I noticed my youngest sister-in-law (8 years old) sitting behind in our car disapproving my statement. No Jiju she said, the roof always belongs to the top floor. She had both of us nodding our heads!! Children speak from raw intelligence you see.",
  //     },
  //     {
  //       subtitle: "",
  //       text: " In my own little way have tried to work around things that could connect me to that raw intelligence.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Call for Action",
  //     },
  //     {
  //       subtitle: "Revisit your Childhood Memories",
  //       text: "Some memories of your childhood are worth a revisit for they connect you with your true self, the innocent child who dreamt without fears. If you would want to know mine favourite moment, it is to make shapes and figures from the clouds.",
  //     },
  //     {
  //       subtitle: "Daydreaming",
  //       text: "Some of the best ideas that Einstein would have was when he was daydreaming in his bathtub playing around with bubbles. You may choose your own bubble moment!!",
  //     },
  //     {
  //       subtitle: "Play with your kids",
  //       text: "Whom would you rather learn from, a mentor who is always laughing and stays happy or one who is always cranky and keeps complaining. There is nothing more relaxing and satisfying than playing with your kids, spend time with them for they would teach you the joy in being joyful!!",
  //     },
  //     {
  //       subtitle: "Write down your dreams",
  //       text: "I cannot over-emphasize this enough, written dreams become your goals else it’s all mere fantasies. I had written earlier in one of my articles on the Harvard study, which focused on the income of the group of students after 10 years of professional careers comparing those who write down their goals vs those who do not. The 3 percent who had written goals were earning, on average, 10 times as much as the other 97 percent of the class combined.",
  //     },
  //     {
  //       subtitle: "Get into the habit of writing",
  //       text: "You do not need a reason to write, it’s a medium that gives you space to present your new ideas, at first to yourself and then to the world.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "To my child who is about to born –",
  //     },
  //     {
  //       subtitle: "",
  //       text: "When you are learning to fail I hope I do not come in your way.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "For I know you would be preparing to try.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "When you are failing to try I do hope I come in your way.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "For I know you would be preparing to fail. ",
  //     },

  //   ],
  // };

  // const articleContent8 = {
  //   title: 'What’s your story?',
  //   content: [
  //     {
  //       subtitle: '',
  //       text: " It is often said that the most important story is the one you are telling yourself, day in and day out. Essentially if you look at the history of storytelling, you would realize it is the most natural thing to human mind, humans have been telling stories for almost 10000 years now. Even now when you think of bonfire the next word you think of is stories. Our ancestors would tell stories because it was about their daily experiences, in the sense that it was essential to share stuff as part of survival tactics. As we evolved the art of storytelling evolved.",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Today if you look around yourself, whether it’s an interview or any company advertising its products, everyone is telling a story. Some of the most successful businesses man including Steve Jobs or Bill Gates, the best politicians including Abraham Lincoln or Winston Churchill are also the best storytellers of their respective times. ",
  //     },
  //     {
  //       subtitle: '',
  //       text: " If you look closely to their stories you would have realized that an amazing story often has these four characteristics:",
  //     },
  //     {

  //       point17: "The story has a central character who has faced adversities in his/her life!!",
  //       point27: "The story has a challenge which needs to be overcome under difficult circumstances!!",
  //       point37: "The story has a hero and a villain!!",
  //       point47: "The story has a meaningful and compelling end, one that makes the journey worth!!",

  //     },
  //     {
  //       subtitle: '',
  //       text: " Call for Action",
  //     },
  //     {
  //       subtitle: '',
  //       text: " Write down your own life story, a story which you need to be telling yourself every day, for stories are powerful, they have emotions and they can truly move things.",
  //     },
  //     {
  //       subtitle: '',
  //       text: " The story has a central character who has faced adversities in his/her life!!",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Always create your story around the times that have helped you build your character, those times that have tested you the most. For some people, it may have been the humble backgrounds where they come from, for some it may been tough childhood experiences they have had, for others it may have been lack of financial support. For me personally it was always about having grown up alone, as the only child of my parents, it was tough not having anyone to speak your heart out. The journey from being a shy introvert even in my 20’s, to someone having the strength today to speak in front of hundreds gives me immense satisfaction. ",
  //     },
  //     {
  //       subtitle: '',
  //       text: " The story has a challenge which needs to be overcome under difficult circumstances!!",
  //     },
  //     {
  //       subtitle: '',
  //       text: " Create your own challenges, dream big, for having dreams which are small is like using an aeroplane for taxing around in the city. Always write down your dreams for if you write down your dreams it becomes a mission, almost a challenge to yourself. It’s like saying to yourself, here is what I want you to do, now go out there and do it!! ",
  //     },
  //     {
  //       subtitle: '',
  //       text: " The story has a hero and a villain!!",
  //     },
  //     {
  //       subtitle: '',
  //       text: "Let your story revolve around you, make yourself the hero of the story. And let all the possible adversities that stop you from achieving your goals including procrastination, excuses, inconsistency, lack of focus etc, let of them be the villains of your story. In addition, you could also let the good habits that you inculcate as side heroes of your story, for side heroes often help the hero win over the villains. ",
  //     },
  //     {
  //       subtitle: '',
  //       text: " The story has a meaningful and compelling end, one that makes the journey worth!!",
  //     },
  //     {
  //       subtitle: '',
  //       text: " Creating fascinating climaxes for your audience is a dream for all great directors. You could be a great director and spell out magical endings for your own story. Let those endings be a motivating factor in all your present deeds.Trust me when you have written your story you would want to read it repeatedly, for its something really close to your heart. Now would be a good time to start!!",
  //     },
  //     {
  //       subtitle: '',
  //       text: " Trust me when you have written your story you would want to read it repeatedly, for its something really close to your heart. Now would be a good time to start!!",
  //     },

  //   ],
  // };

  // const articleContent9 = {
  //   title: 'Between 20 & 10000: Where do you stand?',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "When it comes to acquiring a new skill we all have our learning curve however researchers in general have found that it takes about 20 hours for anyone to acquire a new skill and about 10000 hours to become a master in that. If you look closely this journey from 20 Hours to 10000 Hours is what each one of us undertakes in every domain, every sphere of our lives!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "It can be driving a car, or playing a guitar. It can be working on an excel, or the art of resell. It can be learning to be a good parent or learning to stay in moment. It could be practising to sing or guessing a wife likeable present to bring. You get the point....",
  //     },
  //     {
  //       subtitle: "",
  //       text: "In this article, I look to explore what happens when we apply different stages of learning any new skill to the ancient spiritual wisdom that has lived on for centuries.",
  //     },
  //     {
  //       subtitle: "Spiritual Wisdom Applied to Acquiring New Skills",
  //       text: "Essentially every human mind in its raw intelligence is aware of most of the things around him, as he learns and practices he becomes more conscious. In that sense, every new experience passes through four stages of transformation.",
  //     },
  //     {
  //       subtitle: "To Me Stage: (20 – 100 Hours)",
  //       text: "Essentially when you are picking up any new skill usually the first stage is the hardest, when you feel you would never be able to make it to the top. Let’s take an example of Public Speaking, usually the first few hours of practice could give you the courage to go on stage and speak out something. That something may make absolutely no sense for some people, that’s alright, at least you are on the right track. But what hits you is essentially why is this happening to me!!",
  //     },
  //     {
  //       subtitle: "By Me Stage (100 Hours – 1000 Hours)",
  //       text: "As you practice more you begin to realize God after all is not that unfair, your confidence goes up and you feel things have started happening. This is perhaps the first stage when you start taking the process seriously. A lot of people find out their niche, some envision their dreams. A Public Speaker could feel that he is control of things, he could see more and more respective faces in the audience, when this happens, you would know you have reached a threshold. A threshold from where things could only get better!!",
  //       image5: image5,
  //     },
  //     {
  //       subtitle: "Through Me Stage (1000 Hours – 10000 Hours)",
  //       text: "This is the stage when you come to have realized that you are onto something special here, be cautious for most of the people are just happy to be here. You are becoming an expert in your field and people have started looking up to you, make sure you guide them onto the right path. You have already put in thousands of hours of practice in Public Speaking and could connect with most of the audience members. Truly things have started happening Through You!!",

  //     },
  //     {
  //       subtitle: "As Me Stage (Above 10000 Hours)",
  //       text: "You may want to call this mastery since you have become the Steve Jobs of invention, Bill Gates of computers, Michelangelo of Art and indeed our very own Sachin Tendulkar of Cricket. Only the top 3% reach this stage though everyone may aspire to be here, but for once just consider this scenario: If you practiced for 20 Hours in a week for every week on a skill you may reach this stage in 10 years, you could do the numbers if you want to reach early.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "For my favourite example though, yes you have become the Les Brown of Public Speaking!!",
  //     },

  //   ],
  // };

  // const articleContent10 = {
  //   title: '7 Laws of Nature Applied to Public Speaking',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "Mother nature in its purest form is the most prestigious commodity that ever existed, it is the form and substance of every new discovery as well as every new theory. Here in this article, I explore what happens when seven of these laws of nature are applied to public speaking:",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Start with a bang!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Today, the consensus among scientists, astronomers and cosmologists is that the Universe as we know it was created in a massive explosion that not only created most of matter, but the physical laws that govern our ever-expanding cosmos. This is known as The Big Bang Theory. Well, all this happened roughly 13.8 billion years back, no one was alive to testify it for us, but one thing is for sure, to create something as astounding and amazing as our universe you need to start with a bang.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Remember this line: once you have entered the stage you got only 3.5 seconds of visual time & roughly about 5-10 minutes of hearing time to make an impact!! Make sure if you are looking to create something astounding, start with a bang, the audience will stay with you for the rest of your speech.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Audience Connect – Know your Audience!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "There is a reason why the animals living in red hot desserts of Sahara & those living in the cold regions of Norway or Greenland cannot be swapped. The plants that grow thousands of meters below the sea belt cannot survive outside water. Nature in its true sense demands local expertise. ",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Key to public speaking in about knowing what your audience wants to hear, the manner they want to hear it and the eventual transformation it would bring in their lives. Being a local trainer may give you demand over the local language, knowing the lifestyle of the audience members and the cultural influences. Imagine the impact when you say all the punch lines in the local language!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Everyone loves Variety!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "There are roughly 7.5 billion people walking this planet, yet each one has its unique DNA. Believe it or not, there are about 950,000 species of insects and about 15,00000 varieties of discovered plants. Though no one knows for sure how many species of plants as well as animals actually exist on Earth. In fact, some 10,000 species of animals are discovered each year, with over one and a half million species already described. In short nature loves variety!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "If you want your speech or session to be impactful, create variety in your session, let people have the taste of every possible learning style. Some people learn through visuals, others may like auditory while few may always prefer kinaesthetic. When nature has offered so much variety in its creation, why would you want to be left out.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Body Language that leaves an Impact!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The speed of light is much faster than the speed of sound. Sound moves at 343 meters per second (that’s about 770 miles per hour!) The speed of light is a little trickier. In a vacuum, it is roughly 300 million meters per second (so nearly 900 000 times faster than sound!), can this simply mean that we see has a more undying and everlasting effect on us. Let’s explore a little more, shall we!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Let’s look at an experiment which compares hearing vs seeing!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "In an experiment conducted by University of Iowa, participants memory was tested using things they might encounter on an everyday basis. Students listened to audio recordings of dogs barking, watched silent videos of a basketball game, and touched and held common objects blocked from view, such as a coffee mug. The researchers found that between an hour and a week later, students were worse at remembering the sounds they had heard, but their memory for visual scenes and tactile objects was about the same.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "No wonder the Mehrabian principle on communication holds good, the influence of non-verbal communication is stronger than we all think, as strong as 55%!! As a public speaker never ignore your body language, remember light travels much faster than sound.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Control your pace, this is not a race!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "If you study the effect of rainfall on the yield of rice you would understand that it requires just the adequate amount of rainfall to cultivate. Paddy requires more water than any other crop. As a result, paddy cultivation is done only in those areas where minimum rainfall is 115 cm. Although the regions are having average annual rainfall between 175—300 cm are the most suitable. Extreme rainfall variability triggers environmental problems such as flood, gully erosion, drought and desertification, which have serious effect on the yield of rice. Heavy but not too heavy is the mantra!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Public speakers who consider their session as a race or an examination which they want to finish within the timelines often make the mistake of running through the motions. On the contrary if you are too slow then the audience might take some timeout for a quick nap. Remember the rule: Heavy but not so heavy!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Silence is Golden!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Words are not just a sound to communicate to someone, it is a vibration that you send out to the universe. In Sanskrit for example, each word corresponds to a specific frequency. However, modern communication relates words to intellectual knowledge, if we bring silence into this our experience comes into realization.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Silence is the most powerful scream - AnonymousWhile words are powerful, silence is super – powerful. Knowing where to take a pause can create an impact that you have never seen before. Let the audience absorb your content while you take a strategic pause, it would also create curiosity as to what next is coming through. Continuing without any silences may create monotony and your audience would not have any real time to absorb your words especially when you are trying to give out a critical message.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Focussed Attention!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The rays of sunlight when focussed through a magnifying glass for 2 minutes are enough to burn a piece of paper, we have all seen that experiment as children.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The problem with a lot of public speakers is about looking to focus on the next sentence which is to come out and in the process, they often lose focus on the current sentence. When you put all your energy and thoughts on one sentence at a time and let the natural flow take its course you could spell out words that are burning hot!!",
  //     },
  //     {
  //       subtitle: "Remember the rules of nature, they are nothing but truth in its purest form.",
  //       text: "",
  //     },

  //   ],
  // };

  // const articleContent11 = {
  //   title: 'The 20’s Experiment',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "In case you are planning a great story to tell your grandchildren when you grow old, a story which has an element of risk blended with curiosity of adventure, try the 20’s experiment!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Robert Greene in his book Mastery referred to this wonderful concept as Apprenticeship. He gave the example of Charles Darwin whose voyage away from home for 5 years in South America gave us the biggest scientific discovery of human race known as the “Theory of the Evolution”. He could have chosen to perform a comfortable job his father has searched for him at the city Church, instead he chose to experiment.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "A lot of us when we start our career in the youthful 20’s, just choose any field and look to earn some quick money; the trend is common across all cultures and all geographies. The freshness of the work and the energy in our body just overpowers any inner voice which calls for us to take a step back and self-analyse. Very few people in their early years look to focus on learning though experiments. Leonardo Da Vinci was one of them, in his early years, he apprenticed or experimented as a studio boy to Andrea del Verrocchio for 7 years. Leonardo was exposed to both theoretical training and a vast range of technical skills, including drafting, chemistry, metallurgy, metal working, plaster casting, leather working, mechanics and carpentry as well as the artistic skills of drawing, painting, sculpting and modelling. What came out of these experiments later was practically magic!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The question really is not whether one should do it or not, the question really is how one should do this effectively. Let’s introduce the experimental learning matrix!!",
  //       image6: image6,
  //     },
  //     {
  //       subtitle: "",
  //       text: "This matrix above describes the perfect chemistry between Positive Energy + Long Term Focus and Hardships. Keeping your energies positive as well as focused on your long-term goal during the time of hardships is the best outcome one can think of from the 20’s Experiment. When you lose your face during the time of hardships it may lead to depression or low self-esteem, whereas when you chose to stay at shore away from deep waters it can only create limited learnings opportunities for you. Choose wisely!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "A study found it usually takes about 16 hours of dedicated work for one to acquire a skill and somewhere close to about 10,000 hours to master that skill (Malcom Gladwell in Outliers). Thus, a lot of people get it wrong when they perceive that we are good at something therefore we practice it more, whereas it’s because we practice it more that we become good at something. Point being that while practicing hard enough may get you to mastery, finding out where your passion lies to keep practicing hard enough can only be gauged through experimental learning.    ",
  //     },
  //     {
  //       subtitle: "",
  //       text: "For me writing these articles is like creating my own small learning experiment, challenging myself to shove out an article every week is about adding hardships into that experiment. Positive energy & Long-term focus is only about adjusting your state of mind!!",
  //     },

  //   ],
  // };

  // const articleContent12 = {
  //   title: 'The 6 PM to 6 AM Test!!',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "The energy of human beings should be reserved for the things that they truly mean something to them, everything else would sooner or later just bring stress. My words but everyone’s experience!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "This happened when I was sitting in one of recent classes for a course I enrolled, it was close to about 6 PM in evening when the everyone was almost waiting for the class to get over. I realized I was perhaps the only one in the group who did not want the class to get over. Suddenly a big smile spread through my face on the realization that I have made the right choice to be where i am right now. I had passed the 6 PM to 6 AM test!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "There are things you love to do, then there are things that earn you your living however the ones that really matter are the ones that touch your heart. These things usually create a burning desire inside you and convert your life into a mission!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "“Follow your bliss and the universe will open doors for you where there were only walls.” ―Joseph Campbell",
  //     },
  //     {
  //       subtitle: "",
  //       text: "I was working with one of my clients (a student) on some career advice when I asked him the most pertinent question you would look to know as consultant. I asked him to put his hand on his heart and let me know one thing he truly love doing, he thought diligently and then said you know what I love to eat pizza.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "I instantly knew I needed to ask a more intelligent question!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "When I though & researched over this, one thing that struck me was that career decisions are not based on what you truly love to do since most of the people may not have an answer ready but instead about what kind of life would you want to build for yourself. A lot of us nowadays just grab on to the first job we find in the market being afraid that the opportunity might never come back.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "To be cent percent honest am no one to preach since I did the same during my early days, the learnings though should always be shared. So here it is.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "If you are a starting your career or thinking to change over, understand that some of the most passionate and successful people are those who have sacrificed many of their needs to push toward one all-encompassing goal, these goals may often even surpass everything you love to do. It’s like a lost & found case. These people having found something they call as a burning desire to achieve something great, have lost track of time in achieving this desire.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Try the 6PM to 6 AM test… is there something that gives you the same kind of passion and energy at 6PM that it gave you early morning when you are starting your day. Think over it!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "If there is, then trust me it’s worth exploring, it could be the best decision you have made for yourself and could give you a reason to get up every day.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Thomas Edison in one of his famous interviews said to the reporter, you know what buddy if I had not found the light bulb we would not have been having this interview right now. The reporter in trying to be courtiers replied: No sir you have so many other inventions which are great too. Mr Edison smiled and said you didn’t get my point my friend, if I had not found that light bulb till today I would have rather spent my time inventing than giving interviews.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The interviews would come…Keep Inventing!!  ",
  //     },

  //   ],
  // };

  // const articleContent13 = {
  //   title: 'Breathe your Thoughts!!',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "It was the winter of January 1975 when the issue of the magazine Popular Electronics demonstrated the Altair 8800, the computer which MITS wished to develop and distribute. Bill Gates and Paul Allen thought of this as a great opportunity to develop an implementation of the programming language BASIC interpreter for the system. They also knew this could be a doorway for something great in the coming days.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Out of this single thought was born the idea of Microsoft and the rest as they say is history.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Your thoughts are a catalyst for self-perpetuating cycles, your thoughts create your beliefs which in turn directly influences how you feel and how you behave, we all know this don’t we. The more interesting thing to know is where do these wonderful ideas/thoughts come from and can we simply breathe in these ideas. How about a supreme technique that could help bring in these wonderful thoughts and at the same time eliminate stress from your lifestyle.Having attended all the workshops and going through all the wonderful messages on stress management I could account for, the one that works best for this generation came out from Sadguru Jaggi Vasudev",
  //     },
  //     {
  //       subtitle: "",
  //       text: "In my understanding, we manage things which are precious to us – our business, our family, our money, our wealth, our children. Why would anyone manage stress? Stress is not a part of your life. Stress is just your inability to manage your own system. Stress happens not because of the nature of your work. It is just that you do not know how to manage your body, your mind, your emotions and your energy.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "While a lot of spiritual leaders and stress management trainers have defined deep breathing as something that really works, let’s figure out something that works even better, something that aligns your thoughts with your breathing.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The technique is simple, just like you breathe in oxygen which purifies our body to produce energy and breathe out carbon dioxide which is not useful, let’s create a similar cycle for our thoughts.       ",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Let’s define every positive thought that comes to your mind and list it down, look for positive affirmations, new ideas as well as amazing habits. Also list down things that trouble you, those that create an environment that is unhealthy or troublesome, basically you know about these things already.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "You would have already guessed the technique, just remember the process: inhale the positive thoughts and exhale the negative ones (6 second cycle, 10 minute every day-simple but profound). The effect though on your mind would be nothing less than amazing.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "While everyone knows the importance of positive thoughts and the fact that every action we initiate is a mere reflection of our thoughts, lets breathe in these positive thoughts for they are all around us. Modern science today is all gung-ho on matter and energy being two sides of the same coin thereby giving us the concept which was first used by Nepolean Hill in his famous book Think & Grow Rich (1937) known as Infinite Intelligence.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "You can define infinite intelligence as the collective consciousness of which we are all constituents like the water drops in the ocean. This is the source from where you can get the information that will help you to progress in whatever way you want.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Remember the words, whatever you want!! Explore…",
  //     },

  //   ],
  // };

  // const articleContent14 = {
  //   title: 'Five-minute Mission Statement',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "There was a time when the concept of mission statement would apply only to companies since they had varied resources, service lines, locations etc. and such statements would help synchronize everyone’s efforts towards a single goal. Now imagine a human being with all his complexities including the mind, body, emotions and energy representing the above factors all running in different directions. The point being, that the times have changed, today with a more profound understanding that we have about ourselves every single person needs a mission statement.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "While everyone loves to hear the words, Mission Accomplished, lets create one first. The best part about creating your mission statement is that it’s a five-minute job. All the leaders knew this secret, it was about time everyone else knows as well. ",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Just answer the below questions and you are on your way:",
  //     },
  //     {

  //       point18: "Who am I? Simply put your name here nothing more, not your profession, not your religion nothing else but you as a being. ",
  //       point28: "What do I love to do? This could be anything that means more than just a job, anything that creates excitement, or gives you a purpose to get up in the morning. If you would like to go one step ahead, list down something that truly defines you as a person, for Eg. if you love children you could include parenting guidance in this category, or if you are an architect who loves fashion you could choose visual merchandising. ",
  //       point38: "Whom do I do this for? The audience who would ultimately benefit from your mission should be mentioned in this section. Remember you could just mention that am doing this for myself and my family, no one else and that’s alright. Until you are truly being honest to yourself, it works. Just remember though the Law of Karma, the more you bless others, the more you shall be blessed.",
  //       point48: "What strategy do I have to accomplish my mission? This could be something that drives your plan or the methodology through which you would drive your mission. For a trainer, it could be through workshops/tie ups, for a businessman it could be through research as well as exploring new products/services, for a sportsman it could be acquiring great coaching, for a working professional it could be thought industry research and certifications. You choose your own path!!",
  //       point58: "What positive change will it bring about in the respective lives of the people that am doing this for? The most important step because any mission is incomplete without creating a change in anyone’s life. The more lives you touch the bigger would be your mission!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The mission statements for some of the most profound figures in human history would have looked something like this:",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Am Steve Jobs, love to challenge the status-quo and contribute to the world by making tools for the mind that advance humankind. These world class tools are developed through my dream venture Apple which looks to reinvent various technology platforms and revolutionize entire industries.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Am Nelson Mandela, my purpose is dismantling the legacy of apartheid through tackling institutionalized racism, poverty and inequality, and fostering racial reconciliation. For this purpose, am going to find the militant Umkhonto we Sizwe (MK) in 1961, leading a sabotage campaign against the apartheid, as well as would develop the 'Mandela University' in Robben Island government. Millions of Africans would be helped through these social reforms and many more have been inspired to carry the legacy forward.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Am Henry Ford, love to invent and innovate and to demonstrate a natural engineering curiosity by working on the steam engines to create operating vehicles. Would like to create a world class automobile company (Ford Motor Company) where people work together as a lean, global enterprise to make people’s lives better through automotive and mobility leadership.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Am Thomas Edison, love to innovate and create commercially useful things by putting in the hard work and labour. Am prepared to fail however am not prepared to give up, therefore none of my inventions come indirectly through accident. I would like to invest by creating world's first full-fledged research and development centre in West Orange, New Jersey as well as Edison General Electric Co. These innovations would have changed the course of history and help shape the physical/cultural makeup of present-day civilization.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Your mission statement could be your secret to something profound, it’s worth a visit first thing in the morning and the last thing at night!!",
  //     },
  //   ],
  // };

  // const articleContent15 = {
  //   title: 'Goal Setting: The Bubble Theory!!',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "A remarkable study about goal-setting was carried out in the Harvard MBA Program. Harvard’s graduate students were asked if they have set clear, written goals for their futures, as well as if they have made specific plans to transform their fantasies into realities.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The result of the study showed only 3 percent of the students had written goals and plans to accomplish them, let’s take that figure and superimpose on the percentage of people who own the maximum wealth in this world. The numbers show the Top 3% of the wealthiest folks own about 80% of the total wealth in this world. You may want to argue that there may not be a correlation, however have not given you the complete findings of the survey.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "The next part of Harvard study focused on the income of the group after 10 years of their professional careers. The 3 percent who had written goals were earning, on average, 10 times as much as the other 97 percent of the class combined.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "In spite of most of us knowing these numbers, am absolutely amazed and bamboozled by the extent to which people undermine their goal setting, never really caring to give this process enough energy it requires.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Always remember, on your last day on this planet the person you became is going to meet the person you could have become!! - Anonymous",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Running after your goals is the greatest present you could give to yourself. However one caution, almost everyone with whom you would meet would discourage you that these goals cannot be achieved simply because they can’t see what you see and they are not supposed to either. Therefore be very careful in selecting your goal – keepers (those who keep your goals protected)",
  //     },
  //     {
  //       subtitle: "",
  //       text: "In case you are wondering what could you do more than just writing your goals down once, how can you track them and ultimately achieve them? Well you could use the bubble theory which i have started using, all you need are four bubbles as shields to protect your goals. Just read on!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Pick up a sheet of paper and make four bubbles representing the following:",
  //       image7: image7,
  //     },
  //     {
  //       subtitle: "",
  //       text: "Just remember to first write down your lifetime goals and then do the reverse engineering reaching the daily goals, ensuring that every day you do little to reach your monthly, yearly and then the lifetime goal. Only the daily bubble needs to be written every day, first thing in the morning and be looked at once in the evening.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "In case you are wondering if this theory works, this article is a living example. This month starting on 1st April when i made my Monthly Goal Bubble, i wrote down 2 articles for the month as my goal, 2/3rd of the month down the line, i have already written four. Do not wait, just do it!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Just remember, your goals belong to you:",
  //     },
  //     {
  //       subtitle: "",
  //       text: "BLESS THEM!! ENERGIZE THEM!! PROTECT THEM!!  NURTURE THEM!!    ",
  //     },

  //   ],
  // };

  // const articleContent16 = {
  //   title: 'Ignoring Soft Skills: A Sin!!',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "Sit down before you absorb these numbers. Research conducted by Harvard University, and Stanford Research Centre has all concluded that 85% of job success comes from having well‐developed soft and people skills, and only 15% of job success comes from technical skills and knowledge (hard skills)",
  //     },
  //     {
  //       subtitle: "",
  //       text: "This is not a typing error, you heard it right, a whopping 85% your job success comes from Soft Skills. Reverse the numbers and you would find out the percentage of your money an average person spends on developing these soft skills (15% or sometimes even less). There could not have been a bigger disconnect.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Very few people know this story that Mr Narayan Murthi once wrote to the ICAI (Institute of Chartered Accountants of India), a letter in which he objected to the quality of some of these skills of the Top Chartered Accountants being hired by Infosys. The leaders always knew the importance which is attached to these skills, it’s about time everyone else did as well.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "You would not have to worry too much if you take care of the three key attributes, they give you the ACE (the highest card of the pack) you need to Rise in your respective field.  ",
  //     },
  //     {
  //       subtitle: "Attitude",
  //       text: "",
  //     },
  //     {

  //       point19: "Creating a positive ambience in your mind – Remember thoughts have creative energy",
  //       point29: "Putting first things first – time management",
  //       point39: "Converting your dreams into vision – Goal settings",
  //       point49: "Respond to a situation instead of reacting – Stress Management",
  //       point59: "Achieving your highest efficiency – Self Motivation",
  //       point69: "Creating synergies – Team work",
  //     },
  //     {
  //       subtitle: "Communication",
  //       text: "",
  //     },
  //     {

  //       point110: "Body Language Finesse – Remember Non-verbal attracts for 55% of the total views",
  //       point210: "Create powerful first impressions - your clothes speak too",
  //       point310: "The Art of Listening i.e. understanding others before being understood",
  //       point410: "Negotiation Skills i.e. creating a win-win situation",
  //       point510: "Creating connections through Small Talk Etiquette",
  //       point610: "Business Etiquette  ",
  //       point710: "Dining Etiquette",
  //       point810: "Social Media Etiquette ",
  //       point910: "Emails Etiquette",

  //     },
  //     {
  //       subtitle: "",
  //       text: "My only request to you is that when you are going for an ACE, go for an ACE of hearts because a heart could give wings to any skill.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Throw your heart over the Bar and your body shall follow. – Norman Vincent Peale",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Now some food for thought!! How much of these skills could you gather from reading books or watching videos?? If someone tells you these are enough, they are not being completely honest to you, especially since you are putting something on line which accounts for 85% of your success in professional career. Ask for help from anyone you can look up to and create a professional learning ambiance around yourself.  ",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Just remember soft skills are essential in today’s challenging professional world and in case you possess some of these, the career path will only get smooth for you.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Don’t ignore them. It’s a Sin!!",
  //     },

  //   ],
  // };

  // const articleContent17 = {
  //   title: 'The other eight hours!!',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "The argument on time vs money has lingered on for many years, if you really wish to know which one is more valuable just think on the context that time can get you money, well if you are willing to do things in a certain way…. but can money get you time? So, to say that time is money like people say is highly undermining the value of the former.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Time is the inexplicable raw material for everything, with it, all is possible. The best part about time is no matter how you treat it, whether you are dumb or genius, no matter which age, caste or religion, social status you may belong time does not discriminate, every day without any reminder or failure 24 hours automatically get credited into your account. Let’s see how do we make use of these 24 hours.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "We all have our breads to earn which takes away the eight hours from our day. Let’s assume that you are the easy-going types who needs his/her fair share of sleep and that takes away another eight hours.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "That my friends leave us with the other eight hours. I could bet for most of us if you were to calculate the percentage of where have you spend these eight hours you would get answers like: Chatting on the phone (yes, your friends/loved ones deserve your time), watching television, listening to music, playing candy crush (proud at the level you had reached, I know), dinner/lunch parties…well the list could go on. Just how many of these are you willing to sacrifice for yourself, completely and totally your choice. Choose wisely though since this one single decision could well be a life changing one.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Jack Ma the founder of Alibaba says “after work is what determines your future” …. Such a profound and powerful philosophy!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Please understand that it’s not the responsibility of your company or your boss to take care of your learning & growth, that you must take in your own hands.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "So, if you are really feel stuck in your professional space, look around for some inspiration, something that strikes the cord of your inner happiness. If you would like to get more specific, form an all new mission statement for yourself, it’s an easy 5 question process, just answer them:",
  //     },
  //     {

  //       point111: "Who am I?",
  //       point211: "What am I passionate about or what do I really love to do?",
  //       point311: "Whom do I do this for?",
  //       point411: "How do I plan to implement my love/passion into action?",
  //       point511: "How would it positively affect my space and bring about a change in the lives of those for whom am doing this?",

  //     },
  //     {
  //       subtitle: "",
  //       text: "Now your job is really to keep a track of the other eight hours, how much of these hours are you spending on your mission statement. Simple but efficient. And the best part of this whole thing is that this could be doorway for you to realize that people could well be willing to pay you for the thing that you love doing, pay you for something you are willing to do for free anyway. Bliss!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "So, the bad news is that time flies but the good news is that you could become the pilot, fly away!! Cheers!!",
  //     },

  //   ],
  // };

  // const articleContent18 = {
  //   title: 'The Art of Creating Opportunities!!',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "It is often said when an opportunity knocks down on your door, then break the door open and introduce yourself. But the real question is, do you really want to wait for it to knock or would you like create an ambiance around you that automatically attracts every possible opportunity?",
  //     },
  //     {
  //       subtitle: "",
  //       text: "You would have heard people saying this many a times, I would have done something great if I could have only got an opportunity. And you feel like saying to those people: it’s a tough life, isn’t it? And you would hear the loudest YESSSSSSS you have ever heard. Let’s analyse, shall we!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "If you think of it this way that there are 7 billion people living on this planet and yet not one person has your DNA which means you are a unique possibility. Every one whom you met during your childhood told you that you were unique, until something happened may be during the high school.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Even wondered what really transpired during the high school that changed your life so much that you stopped believing that you were unique? Was it the hormones running inside you, well not really. The only thing that really happened was that you started repeating in your mind, the dumbest of dialogues “what would others think about me”.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "This single dialogue has killed many a million dreams!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Your happiness factor which drives your dreams should never be determined by what others think about you. Therefore, creating opportunities for yourself is not difficult if you really think of yourself as a unique possibility. All it requires is a simple road-map:",
  //     },
  //     {
  //       point112: "Make truce with yourself – I am unique!!",
  //       point212: "dentify what makes you unique – Your strengths & your gifts!!",
  //       point312: "Take feedback and prepare an improvement plan - Time Bound & Documented!! ",
  //       point412: "Present your best foot forward – Glorify your strengths!!",
  //       point512: "Finally when opportunity comes your way – Rise & shine!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Now a lot of people would think it looks so wonderful on paper but when it comes to implementation it’s a different ball game altogether. Well I would have to agree with you that saying and doing are totally different things, but once you get the ball rolling it’s only a matter of time.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "So, the next time when you blame the outside world for the opportunities not being there for you, try and look inside, may the answer lies in there. Cheers!!",
  //     }

  //   ],
  // };

  // const articleContent19 = {
  //   title: 'Breaking the jinx - Image Consulting for the Corporate World!',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "While we talk about consulting the buzz word that comes into the mind are folks who would promise the galaxy and hope you would settle with a handful of stars.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "As image consultants it is often about breaking that jinx specially because being in the image business we understand the existing image the consulting business caries!! It is like the age old saying that only the wearer knows where the shoe pinches.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Having experienced both the worlds, that is being the client as well the consultant can irrefutably argue that reaching the mid point in the expectation matrix is the most challenging task for both the parties.",
  //       image8: image8,
  //     },
  //     {
  //       subtitle: "",
  //       text: "India being what it is the so called land of start ups specially with government pitching in with the startup India drive, the door is now open for ones those have dreams. One of the most important things to remember though for any start up is that it is sending the right message, the one that the customers want to hear. You may be surprised to discover in many cases there's a major difference between what a company is selling and what its customers are actually buying. It's a schism that becomes immediately evident once you look at a product or service from the customer's perspective. Where would Harley-Davidson be, for example, if it merely sold motorcycles instead of the lifestyle, adventure and persona being a Harley-Davidson owner represents? Or Justin which is into the shoe business actually sell cowboys lifestyle and the people buy it simply because they love this cowboy swagger. In a crux they are selling a lifestyle and not a product!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "You would call this branding which people think only the big companies can afford, the ones that have deep pockets, but in reality every company needs it. An image or a brand that is deep rooting and soul moving!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Coming back to the tagline that how image consulting business is different than the other consulting for the corporate world, it is like looking at your enterprise from a 360 degree angle:",
  //     },
  //     {
  //       point113: "As a customer",
  //       point213: "As a business client",
  //       point313: "As a lifestyle expert",
  //       image9: image9,
  //     },
  //     {
  //       subtitle: "",
  //       text: "The image consultants having worked with the individual clients understanding their lifestyles as well as personal style, it gives that that added edge to replicate a similar model for the corporate world. So whether you are already part of a colossal business set up or starting your own new venture close to your heart, remember to focus on the lifestyle and not the product or service!!",
  //     },
  //     {
  //       subtitle: "",
  //       text: "As i always say in the end all that really matters is your well-being and of-course that of your enterprise!! ",
  //     },

  //   ],
  // };

  // const articleContent20 = {
  //   title: 'Why can Image Consultants change the way you think?',
  //   content: [
  //     {
  //       subtitle: "",
  //       text: "The thing that everyone wants to change is the way they think. People look at motivational books for solutions, they listen to saints and preachers for solace and often even go to quite places to take a break from all that is going inside their heads.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "All this and more works however when you are looking for practical solutions into what is really happening in your head you need a two way communication. An image consultant can be that doorway and guide.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "Most people think an image consultant works on your appearance, what they really work on is your approach towards looking at yourself. So when you have the word ‘awesome’ ringing all inside your head the actions on the ground would be no less different. After all everything in this world was first created inside the head and later replicated.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "With the image that you carry being nurtured through your clothing, grooming, body language and etiquette gives you that added advantage you need to create more opportunities for yourself, the confidence gained in the process works for you to perform when that opportunity arrives at your doorstep.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "So once the CEO of an US firm asked one of his principal advisers and sales heads that why do my teams require to be in business attire even on transcontinental flights? He simply said because we represent the company and you never know who you would be seated next too. In fact he struck three profitable business deals in one year just from interactions that started on the plane which started with the comment like, “Well you don’t see people dress like this anymore on flights. Where are you headed?”",
  //     },
  //     {
  //       subtitle: "",
  //       text: "A piece of advice, next time when you sit down at your office/home or anywhere else to make an important call for your sales pitch, even if no one else is watching you, try being in your best clothing ever. Look at the difference it makes in the way your words flow so diligently one after the other.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "So while you look at the things that you can do to build your image consciously it’s also a whole lot of stuff that your should also avoid and that is where most of the people make the mistake. People are constantly observing your behavior and forming theories about your competence, character, and commitment, which are rapidly disseminated throughout your workplace and beyond. This means one way or the other your image build up would happen if not by yourself then by someone else, since it would happen never the less why not have a voice in that build up?",
  //     },
  //     {
  //       subtitle: "",
  //       text: "While spending some time with yourself looking to create a positive thinking space is always a welcome move, looking at the possibility of having a conversation with someone who could guide you through your aspirations is not too bad either.",
  //     },
  //     {
  //       subtitle: "",
  //       text: "In the end all that really matters is your well-being!!",
  //     },

  //   ],
  // };

  return (
    <div>
      <Navbar />
      <section className="article py-16 w-full flex flex-col justify-center items-center">
        {/* <div className=" px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {articleContent1.title}
          </h2>

          <div className=" w-full ">
            {articleContent1.content.map((section, index) => (
              <div key={index} className="">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-4">{section.subtitle}</h3>}
                <p className="text-gray-600 mb-4 font-Minion text-lgmb-5">{section.text}</p>
              </div>
            ))}
          </div>

        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent2.title}
          </h2>

          <div className=" w-full flex flex-col justify-center ">
            {articleContent2.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                {(section.point1 || section.point2 || section.point3 || section.point4 || section.point5) && (
                  <ul className="text-lg list-outside list-disc ml-6 font-Minion">
                    {section.point1 && <li>{section.point1}</li>}
                    {section.point2 && <li>{section.point2}</li>}
                    {section.point3 && <li>{section.point3}</li>}
                    {section.point4 && <li>{section.point4}</li>}
                    {section.point5 && <li>{section.point5}</li>}
                  </ul>
                )}
                <div className="p-5">
                {(section.image1) && (
                  <img loading="lazy" src={section.image1} alt="" />
                )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className=" text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent3.title}
          </h2>

          <div className=" w-full flex flex-col justify-center ">
            {articleContent3.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5mb-5">{section.text}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className=" text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent4.title}
          </h2>

          <div className=" w-full flex flex-col justify-center ">
            {articleContent4.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg ">{section.text}</p>
                <div className="p-5">
                {(section.point1 || section.point2 || section.point3 || section.point4 || section.point5) && (
                  <ul className="text-lg list-outside list-disc ml-6 font-Minion">
                    {section.point1 && <li>{section.point1}</li>}
                    {section.point2 && <li>{section.point2}</li>}
                    {section.point3 && <li>{section.point3}</li>}
                    {section.point4 && <li>{section.point4}</li>}
                    
                  </ul>
                )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className=" text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent5.title}
          </h2>

          <div className=" w-full flex flex-col justify-center ">
            {articleContent5.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                {(section.point1 || section.point2 || section.point3 || section.point4 || section.point5) && (
                  <ul className="text-lg list-outside list-disc ml-6 p-5 font-Minion">
                    {section.point1 && <li>{section.point1}</li>}
                    {section.point2 && <li>{section.point2}</li>}
                    {section.point3 && <li>{section.point3}</li>}
                    {section.point4 && <li>{section.point4}</li>}
                    {section.point5 && <li>{section.point5}</li>}
                  </ul>
                )}
                {(section.point12 || section.point22 || section.point32 || section.point42 || section.point52 ) && (
                  <ul className="text-lg list-outside list-decimal ml-6  font-Minion">
                    {section.point12 && <li>{section.point12}</li>}
                    {section.point22 && <li>{section.point22}</li>}
                    {section.point32 && <li>{section.point32}</li>}
                    {section.point42 && <li>{section.point42}</li>}
                    {section.point52 && <li>{section.point52}</li>}
                  </ul>
                )}
                <div className="p-5">
                {(section.image2) && (
                  <img loading="lazy" src={section.image2} alt="" />
                )}
                </div>
                <div className="p-5">
                {(section.image3) && (
                  <img loading="lazy" src={section.image3} alt="" />
                )}
                </div>
                {(section.point13 || section.point23 || section.point33 || section.point43 || section.point53 || section.point63) && (
                  <ul className="text-lg list-outside list-disc ml-6  font-Minion">
                    {section.point13 && <li>{section.point13}</li>}
                    {section.point23 && <li>{section.point23}</li>}
                    {section.point33 && <li>{section.point33}</li>}
                    {section.point43 && <li>{section.point43}</li>}
                    {section.point53 && <li>{section.point53}</li>}
                    {section.point63 && <li>{section.point63}</li>}
                  </ul>
                )}
                {(section.point14 || section.point24 || section.point34 || section.point44 || section.point54 || section.point64 || section.point64) && (
                  <ul className="text-lg list-outside list-disc ml-6  font-Minion">
                    {section.point14 && <li>{section.point14}</li>}
                    {section.point24 && <li>{section.point24}</li>}
                    {section.point34 && <li>{section.point34}</li>}
                    {section.point44 && <li>{section.point44}</li>}
                    {section.point54 && <li>{section.point54}</li>}
                    {section.point64 && <li>{section.point64}</li>}
                    {section.point74 && <li>{section.point74}</li>}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className=" text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent6.title}
          </h2>
          <div className=" w-full flex flex-col justify-center ">
            {articleContent6.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                {(section.point15 || section.point25 || section.point35 ) && (
                  <ul className="text-lg list-outside list-decimal ml-6 font-Minion">
                    {section.point15 && <li>{section.point15}</li>}
                    {section.point25 && <li>{section.point25}</li>}
                    {section.point35 && <li>{section.point35}</li>}
                    
                  </ul>
                )}
                {(section.point16 || section.point26 || section.point36 ) && (
                  <ul className="text-lg list-outside list-decimal ml-6 font-Minion">
                    {section.point16 && <li>{section.point16}</li>}
                    {section.point26 && <li>{section.point26}</li>}
                    {section.point36 && <li>{section.point36}</li>}
                    
                  </ul>
                )}
                <div className="p-5">
                {(section.image4) && (
                  <img loading="lazy" src={section.image4} alt="" />
                )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent7.title}
          </h2>
          <div className=" w-full flex flex-col justify-center ">
            {articleContent7.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className=" text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent8.title}
          </h2>
          <div className=" w-full flex flex-col justify-center ">
            {articleContent8.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                
                {(section.point17 || section.point27 || section.point37 || section.point47) && (
                  <ul className="text-lg list-outside list-decimal ml-6 font-Minion">
                    {section.point17 && <li>{section.point17}</li>}
                    {section.point27 && <li>{section.point27}</li>}
                    {section.point37 && <li>{section.point37}</li>}
                    {section.point47 && <li>{section.point47}</li>}
                    
                  </ul>
                )}
                
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent9.title}
          </h2>
          <div className=" w-full flex flex-col justify-center ">
            {articleContent9.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                <div className="p-5">
                {(section.image5) && (
                  <img loading="lazy" src={section.image5} alt="" />
                )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent10.title}
          </h2>

          <div className=" w-full flex flex-col justify-center ">
            {articleContent10.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent11.title}
          </h2>
          <div className=" w-full flex flex-col justify-center ">
            {articleContent11.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                <div className="p-5">
                {(section.image6) && (
                  <img loading="lazy" src={section.image6} alt="" />
                )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent12.title}
          </h2>

          <div className=" w-full flex flex-col justify-center ">
            {articleContent12.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent13.title}
          </h2>

          <div className=" w-full flex flex-col justify-center ">
            {articleContent13.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent14.title}
          </h2>

          <div className=" w-full flex flex-col justify-center ">
            {articleContent14.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                {(section.point18 || section.point28 || section.point38 || section.point48 || section.point58) && (
                  <ul className="text-lg list-outside list-disc ml-6 font-Minion">
                    {section.point18 && <li>{section.point18}</li>}
                    {section.point28 && <li>{section.point28}</li>}
                    {section.point38 && <li>{section.point38}</li>}
                    {section.point48 && <li>{section.point48}</li>}
                    {section.point58 && <li>{section.point58}</li>}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent15.title}
          </h2>

          <div className=" w-full flex flex-col justify-center ">
            {articleContent15.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                <div className="p-5">
                {(section.image7) && (
                  <img loading="lazy" src={section.image7} alt="" />
                )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent16.title}
          </h2>
          <div className=" w-full flex flex-col justify-center ">
            {articleContent16.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                {(section.point19 || section.point29 || section.point39 || section.point49 || section.point59 || section.point69) && (
                  <ul className="text-lg list-outside list-disc ml-6 font-Minion">
                    {section.point19 && <li>{section.point19}</li>}
                    {section.point29 && <li>{section.point29}</li>}
                    {section.point39 && <li>{section.point39}</li>}
                    {section.point49 && <li>{section.point49}</li>}
                    {section.point59 && <li>{section.point59}</li>}
                    {section.point69 && <li>{section.point69}</li>}
                  </ul>
                )}
                {(section.point110 || section.point210 || section.point310 || section.point410 || section.point510 || section.point610 || section.point710 || section.point810 || section.point910) && (
                  <ul className="text-lg list-outside list-disc ml-6 font-Minion">
                    {section.point110 && <li>{section.point110}</li>}
                    {section.point210 && <li>{section.point210}</li>}
                    {section.point310 && <li>{section.point310}</li>}
                    {section.point410 && <li>{section.point410}</li>}
                    {section.point510 && <li>{section.point510}</li>}
                    {section.point610 && <li>{section.point610}</li>}
                    {section.point710 && <li>{section.point710}</li>}
                    {section.point810 && <li>{section.point810}</li>}
                    {section.point910 && <li>{section.point910}</li>}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent17.title}
          </h2>
          <div className=" w-full flex flex-col justify-center ">
            {articleContent17.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                {(section.point111 || section.point211 || section.point311 || section.point411 || section.point511) && (
                  <ul className="text-lg list-outside list-disc ml-6 font-Minion">
                    {section.point111 && <li>{section.point111}</li>}
                    {section.point211 && <li>{section.point211}</li>}
                    {section.point311 && <li>{section.point311}</li>}
                    {section.point411 && <li>{section.point411}</li>}
                    {section.point511 && <li>{section.point511}</li>}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent18.title}
          </h2>
          <div className=" w-full flex flex-col justify-center ">
            {articleContent18.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                {(section.point112 || section.point212 || section.point312 || section.point412 || section.point512) && (
                  <ul className="text-lg list-outside list-disc ml-6 font-Minion">
                    {section.point112 && <li>{section.point112}</li>}
                    {section.point212 && <li>{section.point212}</li>}
                    {section.point312 && <li>{section.point312}</li>}
                    {section.point412 && <li>{section.point412}</li>}
                    {section.point512 && <li>{section.point512}</li>}
                  </ul>
                )}
                
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent19.title}
          </h2>



          <div className=" w-full flex flex-col justify-center ">
            {articleContent19.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
                {(section.point113 || section.point213 || section.point313 ) && (
                  <ul className="text-lg list-outside list-disc ml-6 font-Minion">
                    {section.point113 && <li>{section.point113}</li>}
                    {section.point213 && <li>{section.point213}</li>}
                    {section.point313 && <li>{section.point313}</li>}
                    
                  </ul>
                )}
                <div className="p-5">
                {(section.image8) && (
                  <img loading="lazy" src={section.image8} alt="" />
                )}
                </div>
                <div className="p-5">
                {(section.image9) && (
                  <img loading="lazy" src={section.image9} alt="" />
                )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent20.title}
          </h2>

          <div className=" w-full flex flex-col justify-center ">
            {articleContent20.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && <h3 className="text-2xl font-semibold mb-5">{section.subtitle}</h3>}
                <p className="text-gray-600  font-Minion text-lg mb-5">{section.text}</p>
              </div>
            ))}
          </div>
        </div> */}
      </section>
    </div>
  );
}
