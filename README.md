[![Build Status](https://travis-ci.org/maccyber/micro-bigfive-generator.svg?branch=master)](https://travis-ci.org/maccyber/micro-bigfive-generator)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-bigfive-generator

[![Greenkeeper badge](https://badges.greenkeeper.io/maccyber/micro-bigfive-generator.svg)](https://greenkeeper.io/)

Example: https://generator.bigfive.maccyber.io/

[micro](https://github.com/zeit/micro) webservice that calculates score, descriptions and saves results

See [bigfive-web](https://github.com/maccyber/bigfive-web) for full repo.


## Save data

### Request


```POST /```

```json
{
  "timeElapsed": -51,
  "ip": "127.0.0.1",
  "lang": "en",
  "test": "50-IPIP-NEO-PI-R",
  "totalQuestions": 50,
  "answers": [
    {
      "score": 2,
      "domain": "O"
    },
    {
      "score": 3,
      "domain": "N"
    },
    {
      "score": 4,
      "domain": "E"
    },
    {
      "score": 4,
      "domain": "E"
    },
    {
      "score": 2,
      "domain": "C"
    },
    {
      "score": 2,
      "domain": "A"
    }
  ]
}
```

### Response

```json
{
  "id": "58a4e184a835c400c8b38e6c"
}
```

## Get data

### Request

```GET /?id=58a4e184a835c400c8b38e6c```

### Response

```json
[  
  {  
    "domain":"O",
    "title":"Openness To Experience",
    "shortDescription":"Openness to Experience describes a dimension of cognitive style that distinguishes imaginative, creative people from down-to-earth, conventional people.",
    "description":"Openness to Experience describes a dimension of cognitive style that\ndistinguishes imaginative, creative people from down-to-earth,\nconventional people. Open people are intellectually curious,\nappreciative of art, and sensitive to beauty. They tend to be,\ncompared to closed people, more aware of their feelings. They tend to\nthink and act in individualistic and nonconforming\nways. Intellectuals typically score high on Openness to Experience;\nconsequently, this factor has also been called Culture or\nIntellect. Nonetheless, Intellect is probably best regarded as one aspect of openness\nto experience. Scores on Openness to Experience are only modestly\nrelated to years of education and scores on standard intelligent tests.\nAnother characteristic of the open cognitive style is a facility for thinking\nin symbols and abstractions far removed from concrete experience. Depending on\nthe individual's specific intellectual abilities, this symbolic cognition may\ntake the form of mathematical, logical, or geometric thinking, artistic and\nmetaphorical use of language, music composition or performance, or one of the\nmany visual or performing arts.\n\nPeople with low scores on openness to experience tend to have narrow, common\ninterests. They prefer the plain, straightforward, and obvious over the\ncomplex, ambiguous, and subtle. They may regard the arts and sciences with\nsuspicion, regarding these endeavors as abstruse or of no practical use.\nClosed people prefer familiarity over novelty; they are conservative and\nresistant to change.\n\nOpenness is often presented as healthier or more mature by psychologists, who\nare often themselves open to experience. However, open and closed styles of\nthinking are useful in different environments. The intellectual style of the\nopen person may serve a professor well, but research has shown that closed\nthinking is related to superior job performance in police work, sales, and\na number of service occupations.",
    "scoreText":"high",
    "score":31,
    "facets":[  

    ],
    "text":"Your score on Openness to Experience is high, indicating you enjoy novelty,\nvariety, and change. You are curious, imaginative, and creative. Your score is: 31"
  },
  {  
    "domain":"N",
    "title":"Neuroticism",
    "shortDescription":"Neuroticism refers to the tendency to experience negative feelings.",
    "description":"Freud originally used the term neurosis to describe a\ncondition marked by mental distress, emotional suffering, and an\ninability to cope effectively with the normal demands of life. He\nsuggested that everyone shows some signs of neurosis, but that we\ndiffer in our degree of suffering and our specific symptoms of\ndistress. Today neuroticism refers to the tendency to experience\nnegative feelings. Those who score high on Neuroticism may\nexperience primarily one specific negative feeling such as anxiety,\nanger, or depression, but are likely to experience several of these\nemotions. People high in neuroticism are emotionally reactive. They\nrespond emotionally to events that would not affect most people, and\ntheir reactions tend to be more intense than normal. They are more\nlikely to interpret ordinary situations as threatening, and minor\nfrustrations as hopelessly difficult. Their negative emotional\nreactions tend to persist for unusually long periods of time, which\nmeans they are often in a bad mood. These problems in emotional\nregulation can diminish a neurotic's ability to think clearly, make\ndecisions, and cope effectively with stress.",
    "scoreText":"high",
    "score":32,
    "facets":[  

    ],
    "text":"Your score on Neuroticism is high, indicating that you are easily\nupset, even by what most people consider the normal demands of\nliving. People consider you to be sensitive and emotional. Your score is: 32"
  },
  {  
    "domain":"E",
    "title":"Extraversion",
    "shortDescription":"Extraversion is marked by pronounced engagement with the external world.",
    "description":"Extraversion is marked by pronounced engagement with the external\nworld. Extraverts enjoy being with people, are full of energy, and\noften experience positive emotions. They tend to be enthusiastic,\naction-oriented, individuals who are likely to say \"Yes!\" or \"Let's\ngo!\" to opportunities for excitement. In groups they like to talk,\nassert themselves, and draw attention to themselves.\n\nIntroverts lack the exuberance, energy, and activity levels of\nextraverts. They tend to be quiet, low-key, deliberate, and\ndisengaged from the social world. Their lack of social involvement\nshould not be interpreted as shyness or depression; the\nintrovert simply needs less stimulation than an extravert and prefers\nto be alone. The independence and reserve of the introvert is\nsometimes mistaken as unfriendliness or arrogance. In reality, an\nintrovert who scores high on the agreeableness dimension will not\nseek others out but will be quite pleasant when approached.",
    "scoreText":"neutral",
    "score":30,
    "facets":[  

    ],
    "text":"Your score on Extraversion is average, indicating you are\nneither a subdued loner nor a jovial chatterbox. You enjoy time with\nothers but also time alone. Your score is: 30"
  },
  {  
    "domain":"C",
    "title":"Conscientiousness",
    "shortDescription":"Conscientiousness concerns the way in which we control, regulate, and direct our impulses.",
    "description":"Conscientiousness concerns the way in which we control, regulate,\nand direct our impulses. Impulses are not inherently bad;\noccasionally time constraints require a snap decision, and acting on\nour first impulse can be an effective response. Also, in times of\nplay rather than work, acting spontaneously and impulsively can be\nfun. Impulsive individuals can be seen by others as colorful,\nfun-to-be-with, and zany.\nNonetheless, acting on impulse can lead to trouble in a number of\nways. Some impulses are antisocial. Uncontrolled antisocial acts\nnot only harm other members of society, but also can result in\nretribution toward the perpetrator of such impulsive acts. Another\nproblem with impulsive acts is that they often produce immediate\nrewards but undesirable, long-term consequences. Examples include\nexcessive socializing that leads to being fired from one's job,\nhurling an insult that causes the breakup of an important\nrelationship, or using pleasure-inducing drugs that eventually\ndestroy one's health.\nImpulsive behavior, even when not seriously destructive, diminishes\na person's effectiveness in significant ways. Acting impulsively\ndisallows contemplating alternative courses of action, some of which\nwould have been wiser than the impulsive choice. Impulsivity also\nsidetracks people during projects that require organized sequences\nof steps or stages. Accomplishments of an impulsive person are\ntherefore small, scattered, and inconsistent.\nA hallmark of intelligence, what potentially separates human beings\nfrom earlier life forms, is the ability to think about future\nconsequences before acting on an impulse. Intelligent activity\ninvolves contemplation of long-range goals, organizing and planning\nroutes to these goals, and persisting toward one's goals in the face\nof short-lived impulses to the contrary. The idea that intelligence\ninvolves impulse control is nicely captured by the term prudence, an\nalternative label for the Conscientiousness domain. Prudent means\nboth wise and cautious. Persons who score high on the\nConscientiousness scale are, in fact, perceived by others as\nintelligent.\nThe benefits of high conscientiousness are obvious. Conscientious\nindividuals avoid trouble and achieve high levels of success through\npurposeful planning and persistence. They are also positively\nregarded by others as intelligent and reliable. On the negative\nside, they can be compulsive perfectionists and workaholics.\nFurthermore, extremely conscientious individuals might be regarded\nas stuffy and boring. Unconscientious people may be criticized for\ntheir unreliability, lack of ambition, and failure to stay within\nthe lines, but they will experience many short-lived pleasures and\nthey will never be called stuffy.",
    "scoreText":"low",
    "score":27,
    "facets":[  

    ],
    "text":"Your score on Conscientiousness is low, indicating you like to live\nfor the moment and do what feels good now. Your work tends to be\ncareless and disorganized. Your score is: 27"
  },
  {  
    "domain":"A",
    "title":"Agreeableness",
    "shortDescription":"Agreeableness reflects individual differences in concern with cooperation and social harmony. Agreeable individuals value getting along with others.",
    "description":"Agreeableness reflects individual differences in concern with\ncooperation and social harmony. Agreeable individuals value getting\nalong with others. They are therefore considerate, friendly,\ngenerous, helpful, and willing to compromise their interests with\nothers'. Agreeable people also have an optimistic view of human\nnature. They believe people are basically honest, decent, and\ntrustworthy. Disagreeable individuals place self-interest above getting along with\nothers.  They are generally unconcerned with others' well-being, and\ntherefore are unlikely to extend themselves for other people.\nSometimes their skepticism about others' motives causes them to be\nsuspicious, unfriendly, and uncooperative.\nAgreeableness is obviously advantageous for attaining and maintaining\npopularity. Agreeable people are better liked than disagreeable\npeople. On the other hand, agreeableness is not useful in situations\nthat require tough or absolute objective decisions. Disagreeable\npeople can make excellent scientists, critics, or soldiers.",
    "scoreText":"high",
    "score":32,
    "facets":[  

    ],
    "text":"Your high level of Agreeableness indicates a strong interest in\nothers' needs and well-being. You are pleasant, sympathetic, and\ncooperative. Your score is: 32"
  }
]
```

## Deploy using [Now](https://zeit.co/now)

```bash
$ now https://github.com/maccyber/micro-bigfive-generator
```

## Related
- [bigfive-web](https://github.com/maccyber/bigfive-web) Web frontend for bigfive tests
- [micro-bigfive-questions](https://github.com/maccyber/micro-bigfive-questions) Webservice that returns bigfive questions
- [micro-bigfive-evaluator](https://github.com/maccyber/micro-bigfive-evaluator) Webservice that evaluates bigfive questions
- [micro-bigfive-results](https://github.com/maccyber/micro-bigfive-results) Webservice that returns bigfive informative test results
- [micro-bigfive-save](https://github.com/maccyber/micro-bigfive-save) Webservice that stores bigfive answers

## License

[MIT](LICENSE)

## About

Created with <3 by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber)

![alt text](https://robots.kebabstudios.party/zrrrzzt.png "Robohash image of zrrrzzt") 
![alt text](https://robots.kebabstudios.party/maccyber.png "Robohash image of maccyber")
