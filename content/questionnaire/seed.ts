import type { QuestionnaireAnswers } from "./types";

/**
 * Pre-filled answers from content/questionnaire/answers.md.
 * localStorage overrides these per field when the user edits in the form.
 */
export const questionnaireSeed: QuestionnaireAnswers = {
  "work-hours":
    "Day job at MLRI: 9-5, but I usually work during the day and often keep working into the evening if I'm deep in a project. When I teach ESOL, class is 6-8pm Tue/Thu.",
  "work-blocks":
    "Some days are full of meetings and admin work. Other days I need long quiet blocks to build, write, plan lessons, or work on technical projects.",
  "work-lunch":
    "Lunch is usually simple and practical. I like salads, protein, cauliflower rice, salmon, chicken, Greek food, or anything filling that does not make me crash.",
  "work-daily-habit":
    "I open too many tabs, check my notes, and try to turn messy ideas into something organized.",
  "work-recent":
    "I had a really helpful meeting with a technical contact about Brightspace. It made me feel more confident that my ideas are supported and permitted.",

  "evening-after-work":
    "I usually try to decompress, clean up my space a little, make food, talk to José, or keep working on a project if my brain still has energy.",
  "evening-study":
    "I often code or work on learning projects at night. Sometimes I mean to stop earlier, but if I get into a flow, I can keep going for hours.",
  "evening-sleep":
    "I try to sleep at around 11, but realistically it depends on how disciplined I am or if I am stuck in a project.",
  "evening-last-night":
    "Last night I worked on my Spanish app, thought through a project problem, made dinner, watched basketball and soccer.",

  "weekend-saturday":
    "A typical Saturday is a mix of yoga/strength, coffee, walking, cleaning, and catching up on things I didn't finish during the week.",
  "weekend-sunday":
    "Sunday is usually reset day. I try to plan, grocery shop, do laundry, prep for the week, and calm my brain down. I do yoga at night. In the fall it's NFL all day long.",
  "weekend-errands":
    "Grocery shopping, laundry, coffee runs, workout classes, pharmacy, and random errands.",
  "weekend-recharge":
    "I recharge by walking, taking a class, drinking coffee, watching something easy, organizing my space, or having quiet time with no one asking me questions.",

  "home-description":
    "My apartment is small but cozy, with a lot of projects, clothes, coffee cups, and evidence that I'm always in the middle of building something.",
  "home-favorite-spot":
    "My couch in front of the TV where I can sit with my laptop and coffee.",
  "home-not-yet":
    "Sometimes Boston still feels temporary, even though I've built a real life here.",
  "neighborhood-words": "Waterfront, changing, diverse",
  "neighborhood-places":
    "Coffee shops, grocery stores, the waterfront, the T, and anywhere I can walk when I need to clear my head.",
  "neighborhood-season": "Boston summer — everything comes to life.",

  "students-who":
    "My learners are adult English students from different countries, mostly working adults with busy lives, families, jobs, and a lot of real-world pressure.",
  "students-proud":
    "I'm proud that they keep showing up, even when they're tired. A lot of them are much more confident with technology and speaking than they were before.",
  "students-hard":
    "It's hard to meet everyone's needs at once because the class has different levels, different confidence levels, and different amounts of time to study. It's also tough with ICE and turbulence within our country.",
  "students-click":
    "A student realized they did not need to understand every grammar rule perfectly before speaking. They just needed enough practice to say the sentence automatically.",
  "students-phrase-1": "I'm proud of how much progress you've made.",
  "students-phrase-2": "You don't have to be perfect to be understood.",
  "students-phrase-3": "Let's slow down and try it one more time.",
  "school-type":
    "Adult education program — East Boston Harborside Community School",
  "school-feel":
    "It feels warm, busy, funny, sometimes chaotic, but very real. I love stations — groups all working together, keeps them on their toes and no one is yawning and checking their phones. Every second of my classes counts. We move quickly.",
  "school-policy":
    "We use Chromebooks and digital tools often, but I try to make the technology feel useful instead of overwhelming.",
  "school-coworkers":
    "I have coworkers I can problem-solve with, and ask for advice when I'm unsure how to handle something.",
  "school-meetings":
    "Meetings are usually about implementation, training systems, learning support, technology, or planning how to make programs easier to use.",
  "work-hard-day":
    "A teaching day feels difficult when students are tired, the lesson is too grammar heavy, the material isn't interesting.",
  "work-recover":
    "I walk, eat something easy, take a bath, scroll, watch my TV shows.",
  "work-colleague-spanish":
    "I'm trying to make this easier for everyone — I am not a trained teacher, but I care deeply and work very hard.",
  "code-languages":
    "Spanish, and also coding languages like JavaScript, TypeScript. I know Python and SQL.",
  "code-project":
    "I'm building a Spanish learning site that uses real life, repeated sentence frames, and personal examples instead of random textbook practice.\n- MLRI LMS\n- Advisor Bulletin Board\n- ESOL LMS\n- Personal planning app for AuDHD",
  "code-frustrating":
    "The frustrating part is turning a huge idea into something simple, clean, and not overwhelming.",
  "code-rewarding":
    "It's rewarding when the structure finally makes sense and I can see how the app could actually help someone speak.",
  "code-why":
    "I want to build useful tools for education, language learning, and public-interest work. I like solving problems that help real people.",
  "code-side-project": "My ESOL LMS and the games.",

  "family-who-where":
    "My family is mostly in Athens, Georgia, and I live in Boston with José.",
  "family-talk-most":
    "My family has a group chat. They send me dog photos. I text my mom and sister. I text my dad about sports. I probably talk to José the most day to day. I text my best friend Emma from childhood — she lives in NYC now.",
  "family-visit":
    "Not as often as I'd like. I haven't had money or stability to travel.",
  "family-miss":
    "I miss the ease of being around people who already know me, Southern food, familiar places, and not having to explain myself.",
  "family-food-ritual":
    "I miss Southern food, family meals, and the feeling of being home without trying.",
  "family-last-convo":
    "A conversation where someone I care about was struggling, and I wanted to help without becoming responsible for fixing everything.",
  "mom-1": "She is strong — she has AuDHD like me.",
  "mom-2": "She is funny.",
  "mom-3": "She worries because she cares.",
  "mom-always-says": "Gives me advice.",
  "mom-next-visit": "Hopefully in the next few weeks.",
  "friend-here":
    "Yes, but José is my closest. Most of my friends from college live away but we talk every day in the group chat.",
  "friend-home":
    "We talk about sports, stress, and the version of me that existed before Boston. We were all swimmers.",
  "friends-making":
    "Most everyone has different schedules. I like people here but I don't like to put myself out there. I like to be home.",
  "friends-memory":
    "Growing up in Georgia gave me a mix of warmth, humor, pressure, and a very specific sense of home. Swimming competitively made me a hard worker and tough.",
  "distance-good":
    "On a good day, being far from home feels independent and exciting.",
  "distance-gray":
    "On a gray day, it feels lonely and like everyone else has a built-in support system.",

  "spanish-why":
    "I came back to Spanish because I want to actually speak it in real life, not just know grammar on paper.",
  "spanish-practice":
    "I practice through conversation, phrases I wish I could say, music, shows, and trying to connect Spanish to my real life.",
  "spanish-media":
    "Music, short videos, maybe shows or podcasts when I have the brain space.",
  "spanish-grammar":
    "Subjunctive, pronouns, or knowing which past tense sounds natural.",
  "spanish-phrase-steal": "No pasa nada.",
  "learn-book":
    "Something about language, law, education, or self-improvement.",
  "learn-podcast":
    "Usually something about culture, news, language, tech, or psychology.",
  "learn-this-week":
    "I learned that sometimes the simplest structure is the most useful one.",
  "learn-next-skill":
    "I want to get better at Spanish conversation and building clean, polished apps.",

  "food-today": "Salmon, salad, cauliflower rice, ice cream.",
  "food-coffee":
    "Coffee is part of my daily personality. I like cold brew, good coffee shops, and having coffee while I work.",
  "food-regional-miss":
    "Biscuits, barbecue, fried chicken, good mac and cheese, and food that feels like home.",
  "food-restaurant":
    "I like places with good seafood, Greek food, salads, or anything that feels special but not fussy.",
  "food-tired":
    "Chicken over salad, cauliflower rice, eggs, salmon, or something frozen that still feels reasonable.",
  "food-energy":
    "Salmon, a big salad with interesting toppings, roasted vegetables, or something that feels healthy but still satisfying.",
  "food-friends-meal":
    "Probably somewhere casual where the food mattered less than being able to talk, laugh, and relax.",
  "food-order-spanish":
    "Coffee, tacos, pupusas, seafood, chicken, salads, and anything with substitutions without sounding awkward.",

  "news-recent":
    "AI and how quickly it is changing education, work, language learning, and trust.",
  "news-education":
    "I think a lot about adult learners and how education systems often forget people who are working, parenting, learning English, and trying to survive at the same time.",
  "news-city":
    "Boston is always changing, especially around housing, transit, and neighborhoods becoming more expensive.",
  "news-home":
    "I still pay attention to things happening in Georgia, especially politics, weather, and family-related news.",
  "news-tech":
    "AI agents, language learning tools, coding tools, and how people build trust with chatbots.",
  "news-hobby":
    "Fitness classes, language learning, coffee, apps, food, or whatever show I'm currently using to turn my brain off.",

  "dream-imagine":
    "I imagine a life where I'm healthy, financially stable, fluent in Spanish, building meaningful tools, and doing work that helps people.",
  "dream-free-time":
    "I would study Spanish, cook more, work out, read, travel, and build projects without feeling rushed.",
  "dream-live":
    "Maybe Boston, maybe somewhere warmer, maybe somewhere near the water.",
  "dream-career-5":
    "I hope I'm working in public-interest technology, legal education, language learning, or data for justice.",
  "dream-this-year":
    "This year I want to get stronger, speak more Spanish, build something real, and stop underestimating myself.",
  "dream-next-summer":
    "Next summer I hope to feel lighter, more stable, more confident, and proud of what I built.",
  "dream-project":
    "I'm planning a Spanish learning site that helps people practice the sentences they actually need for their real lives.",
  "dream-learn-next":
    "I'll learn how to make my apps feel simpler, more beautiful, and more useful.",

  "capture-1-en": "I'm overwhelmed, but I'm still making progress.",
  "capture-1-ctx": "Work/project stress.",
  "capture-2-en": "I don't want to overthink this. I just want to send it.",
  "capture-2-ctx": "Emails or work decisions.",
  "capture-3-en": "I need a quiet night.",
  "capture-3-ctx": "After a long day.",
  "capture-4-en": "I'm proud of this, even though it's not finished.",
  "capture-4-ctx": "Building a project.",
  "capture-5-en": "I care, but I can't carry everything for everyone.",
  "capture-5-ctx": "Relationships and emotional burnout.",
  "capture-retell":
    "I had a meeting about a technical project, and I was nervous because I wasn't sure if my idea made sense. But the person I met with was kind, answered my questions, and told me the project was supported. After the meeting, I felt relieved and more confident.",
};
