// register on rapid api, subscirbe exercise db api and use your api key here
// https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb

export const rapidApiKey = 'c0a9138814msh3f3f3ef85d660dbp103755jsne12a4cb1d664';
export const sliderImages = [
  require('../assets/images/slide1.png'),
  require('../assets/images/slide3.png'),
  require('../assets/images/slide2.png'),
  require('../assets/images/slide4.png'),
  require('../assets/images/slide5.png'),
]

export const bodyParts = [
  {
    name: 'back',
    image: require('../assets/images/back.png'),
  },
  {
    name: 'cardio',
    image: require('../assets/images/cardio.png'),
  },

  {
    name: 'lower arms',
    image: require('../assets/images/lowerArms.png'),
  },
  {
    name: 'lower legs',
    image: require('../assets/images/lowerLegs.png'),
  },
  {
    name: 'chest',
    image: require('../assets/images/chest.png'),
  },
  {
    name: 'neck',
    image: require('../assets/images/neck.png'),
  },
  {
    name: 'shoulders',
    image: require('../assets/images/shoulders.png'),
  },
  {
    name: 'upper arms',
    image: require('../assets/images/upperArms.png'),
  },
  {
    name: 'upper legs',
    image: require('../assets/images/upperLegs.png'),
  },
  {
    name: 'waist',
    image: require('../assets/images/waist.png'),
  }
]

export const demoExercises = [
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ZBdUybBsOJZxqq",
    "id": "3220",
    "instructions": [
      "Stand with your feet shoulder-width apart.",
      "Bend your knees and lower your body into a squat position.",
      "Jump explosively upwards, extending your legs and arms.",
      "While in the air, spread your legs apart and bring your arms out to the sides.",
      "Land softly with your feet shoulder-width apart, bending your knees to absorb the impact.",
      "Repeat for the desired number of repetitions."
    ],
    "name": "astride jumps (male)",
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "calves"
    ],
    "target": "cardiovascular system"
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/cvknkoB1wdv77s",
    "id": "3672",
    "instructions": [
      "Stand with your feet shoulder-width apart.",
      "Step forward with your right foot, bending your knee and lowering your body into a lunge position.",
      "Push off with your right foot and step back to the starting position.",
      "Repeat the movement with your left foot, alternating legs with each step.",
      "Continue stepping back and forth, maintaining a steady pace.",
      "Repeat for the desired duration or number of repetitions."
    ],
    "name": "back and forth step",
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "glutes",
      "calves"
    ],
    "target": "cardiovascular system"
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Yzjs053WanECXK",
    "id": "3360",
    "instructions": [
      "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
      "Lift your knees slightly off the ground, keeping your back flat and your core engaged.",
      "Move your right hand and left foot forward simultaneously, followed by your left hand and right foot.",
      "Continue crawling forward, alternating your hand and foot movements.",
      "Maintain a steady pace and keep your core tight throughout the exercise.",
      "Continue for the desired distance or time."
    ],
    "name": "bear crawl",
    "secondaryMuscles": [
      "core",
      "shoulders",
      "triceps"
    ],
    "target": "cardiovascular system"
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/VhYJMVKNSofs9D",
    "id": "1160",
    "instructions": [
      "Start in a standing position with your feet shoulder-width apart.",
      "Lower your body into a squat position by bending your knees and placing your hands on the floor in front of you.",
      "Kick your feet back into a push-up position.",
      "Perform a push-up, keeping your body in a straight line.",
      "Jump your feet back into the squat position.",
      "Jump up explosively, reaching your arms overhead.",
      "Land softly and immediately lower back into a squat position to begin the next repetition."
    ],
    "name": "burpee",
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "calves",
      "shoulders",
      "chest"
    ],
    "target": "cardiovascular system"
  },
  {
    "bodyPart": "cardio",
    "equipment": "leverage machine",
    "gifUrl": "https://v2.exercisedb.io/image/pNgtBASgUkfB3b",
    "id": "2331",
    "instructions": [
      "Adjust the seat height and position yourself on the cycle cross trainer.",
      "Place your feet on the pedals and grip the handlebars.",
      "Start pedaling in a smooth and controlled motion.",
      "Maintain a steady pace and increase the resistance if desired.",
      "Continue pedaling for the desired duration of your cardio workout."
    ],
    "name": "cycle cross trainer",
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "glutes"
    ],
    "target": "cardiovascular system"
  },
  {
    "bodyPart": "cardio",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/NvEGPiHWN-0dBO",
    "id": "1201",
    "instructions": [
      "Start in a standing position with your feet shoulder-width apart and a dumbbell in each hand.",
      "Lower your body into a squat position, placing the dumbbells on the ground in front of you.",
      "Kick your feet back into a push-up position, keeping your body in a straight line.",
      "Perform a push-up, bending your elbows and lowering your chest towards the ground.",
      "Jump your feet back towards your hands, landing in a squat position.",
      "Stand up explosively, lifting the dumbbells off the ground and bringing them to your shoulders.",
      "Press the dumbbells overhead, fully extending your arms.",
      "Lower the dumbbells back to your shoulders and repeat the entire sequence for the desired number of repetitions."
    ],
    "name": "dumbbell burpee",
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "calves",
      "shoulders",
      "triceps",
      "core"
    ],
    "target": "cardiovascular system"
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/m-cBLDwdpfL1LN",
    "id": "3221",
    "instructions": [
      "Stand with your feet shoulder-width apart.",
      "Bend your knees and lower your body down as if you were sitting back into a chair.",
      "Keep your chest up and your weight in your heels.",
      "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "name": "half knee bends (male)",
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "glutes"
    ],
    "target": "cardiovascular system"
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/dXJUgwQDbb4DWp",
    "id": "3636",
    "instructions": [
      "Stand facing a wall with your feet hip-width apart.",
      "Place your hands on the wall for support.",
      "Engage your core and lift your right knee up towards your chest, while keeping your left foot on the ground.",
      "Quickly switch legs, bringing your left knee up towards your chest and lowering your right foot back down.",
      "Continue alternating legs in a running motion, bringing your knees up as high as possible.",
      "Maintain a fast pace and keep your upper body stable throughout the exercise.",
      "Repeat for the desired duration or number of repetitions."
    ],
    "name": "high knee against wall",
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "glutes",
      "calves"
    ],
    "target": "cardiovascular system"
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/94ePXp-xmeMB-J",
    "id": "0501",
    "instructions": [
      "Start in a standing position with your feet shoulder-width apart.",
      "Lower your body into a squat position, placing your hands on the ground in front of you.",
      "Kick your feet back, landing in a push-up position.",
      "Perform a push-up, lowering your chest to the ground and then pushing back up.",
      "Jump your feet forward, landing in a squat position.",
      "Jump up explosively, reaching your arms overhead.",
      "Land softly and immediately lower back into the squat position to begin the next repetition."
    ],
    "name": "jack burpee",
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "calves",
      "shoulders",
      "triceps",
      "core"
    ],
    "target": "cardiovascular system"
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/tqoEMpfmp0WWvi",
    "id": "3224",
    "instructions": [
      "Stand with your feet together and your arms by your sides.",
      "Jump up, spreading your feet apart and raising your arms above your head.",
      "As you land, quickly jump back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "name": "jack jump (male)",
    "secondaryMuscles": [
      "quadriceps",
      "calves"
    ],
    "target": "cardiovascular system"
  }
][
  {
    "bodyPart": "back",
    "equipment": "cable",
    "gifUrl": "https://v2.exercisedb.io/image/dGtKnO4sVgyo6G",
    "id": "0007",
    "instructions": [
      "Sit on the cable machine with your back straight and feet flat on the ground.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "name": "alternate lateral pulldown",
    "secondaryMuscles": [
      "biceps",
      "rhomboids"
    ],
    "target": "lats"
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/IwmB2jcZESh3vD",
    "id": "3293",
    "instructions": [
      "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
      "Engage your core and pull your shoulder blades down and back.",
      "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
      "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
      "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
      "Alternate sides with each repetition."
    ],
    "name": "archer pull up",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "target": "lats"
  },
  {
    "bodyPart": "back",
    "equipment": "leverage machine",
    "gifUrl": "https://v2.exercisedb.io/image/YRi9c-s2QBstFH",
    "id": "0015",
    "instructions": [
      "Adjust the machine to your desired weight and height.",
      "Place your hands on the parallel bars with a close grip, palms facing each other.",
      "Hang from the bars with your arms fully extended and your feet off the ground.",
      "Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.",
      "Continue pulling until your chin is above the bars.",
      "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "name": "assisted parallel close grip pull-up",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "target": "lats"
  },
  {
    "bodyPart": "back",
    "equipment": "leverage machine",
    "gifUrl": "https://v2.exercisedb.io/image/Y67PF27L8BX4wJ",
    "id": "0017",
    "instructions": [
      "Adjust the machine to your desired weight and height settings.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Hang with your arms fully extended and your feet off the ground.",
      "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.",
      "Continue pulling until your chin is above the handles.",
      "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "name": "assisted pull-up",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "target": "lats"
  },
  {
    "bodyPart": "back",
    "equipment": "leverage machine",
    "gifUrl": "https://v2.exercisedb.io/image/KB3zSVv6l23CWq",
    "id": "1431",
    "instructions": [
      "Adjust the machine to your desired assistance level.",
      "Stand on the foot platform and grip the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Keep your chest up and shoulders back, engage your core, and slightly bend your knees.",
      "Pull your body up by flexing your elbows and driving your elbows down towards your sides.",
      "Continue pulling until your chin is above the bar.",
      "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "name": "assisted standing chin-up",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "target": "lats"
  },
  {
    "bodyPart": "back",
    "equipment": "leverage machine",
    "gifUrl": "https://v2.exercisedb.io/image/RMABIsdrHtdD4K",
    "id": "1432",
    "instructions": [
      "Adjust the machine to your desired weight and height settings.",
      "Stand facing the machine with your feet shoulder-width apart.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Engage your lats and biceps, and pull yourself up towards the handles.",
      "Pause for a moment at the top, squeezing your back muscles.",
      "Slowly lower yourself back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "name": "assisted standing pull-up",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "target": "lats"
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/erWo1QbK6aUwbf",
    "id": "1314",
    "instructions": [
      "Place the stability ball on the ground and lie face down on top of it, with your hips resting on the ball and your feet against a wall or other stable surface.",
      "Position your hands behind your head or crossed over your chest.",
      "Engage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your heels.",
      "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "name": "back extension on exercise ball",
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ],
    "target": "spine"
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/HCxc4x-loDwpqS",
    "id": "3297",
    "instructions": [
      "Start by hanging from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.",
      "Engage your core and pull your shoulder blades down and back.",
      "Bend your knees and tuck them towards your chest.",
      "Slowly lift your legs up, keeping them straight, until your body is parallel to the ground.",
      "Hold this position for a few seconds, then slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "name": "back lever",
    "secondaryMuscles": [
      "biceps",
      "forearms",
      "core"
    ],
    "target": "upper back"
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/YyhsmFurbWVH-6",
    "id": "1405",
    "instructions": [
      "Stand tall with your feet shoulder-width apart.",
      "Extend your arms straight out in front of you, parallel to the ground.",
      "Cross your arms in front of your body, with your right arm over your left arm.",
      "Interlock your fingers and rotate your palms away from your body.",
      "Slowly raise your arms up and away from your body, feeling a stretch in your back and chest.",
      "Hold the stretch for 15-30 seconds, then release.",
      "Repeat on the opposite side."
    ],
    "name": "back pec stretch",
    "secondaryMuscles": [
      "shoulders",
      "chest"
    ],
    "target": "lats"
  },
  {
    "bodyPart": "back",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/gVEhQZD2Hys70M",
    "id": "0970",
    "instructions": [
      "Attach the band to a pull-up bar or sturdy anchor point.",
      "Step onto the band and grip the bar with your palms facing away from you, hands slightly wider than shoulder-width apart.",
      "Hang with your arms fully extended, keeping your core engaged and your shoulders down and back.",
      "Pull your body up towards the bar by squeezing your shoulder blades together and driving your elbows down towards your hips.",
      "Continue pulling until your chin is above the bar, then slowly lower yourself back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "name": "band assisted pull-up",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "target": "lats"
  }
]