import { slugify } from "../utils/slugify";

const games = [
  // ACTION GAMES (15)
  { 
    id: 1, 
    slug: slugify("car"), 
    title: "Car Game", 
    category: "Car", 
    thumbnail: "https://img.gamedistribution.com/6de7fe918ed24506a45f8047a16bff72-512x384.jpg", 
    embedUrl: "/AllGame/car.html", 
    description: "Car Game is an exciting racing game that puts you in the driver's seat of a high-speed vehicle. Navigate through challenging tracks, avoid obstacles, and compete against other racers to reach the finish line first. With stunning graphics and realistic physics, Car Game offers an immersive racing experience for players of all ages. Customize your car, upgrade its performance, and unlock new tracks as you progress through the game. Get ready to rev your engines and hit the road in Car Game!" 
  },
  //   { 
  //   id: 2, 
  //   slug: slugify("Moto X3M Bike Race Game"), 
  //   title: "Moto X3M Bike Race", 
  //   category: "Racing", 
  //   thumbnail: "https://img.gamedistribution.com/5b0abd4c0faa4f5eb190a9a16d5a1b4c-512x384.jpeg", 
  //   embedUrl: "/AllGame/demo1.html", 
  //   description: "Moto X3M is an awesome bike racing game with 25 challenging levels. So grab your motorbike, strap on your helmet and grab some airtime over obstacles and beat the clock on amazing off road circuits. Enjoy Moto X3M!" 
  // },

   { 
    id: 3, 
    slug: slugify("chess game"), 
    title: "Chess Game", 
    category: "Board Game", 
    thumbnail: "https://img.gamedistribution.com/98ddff27fcb349bea90758188b384e31-512x384.jpg", 
    embedUrl: "/AllGame/demo2.html", 
    description: "In this exciting game, you will take on the role of an experienced chess player, strategizing your moves to outsmart your opponent. Unlock new levels and challenges as you improve your skills in the Chess Game." 
  },
  
    { 
    id: 4, 
    slug: slugify("Highway Road Racing"), 
    title: "Highway Road Racing", 
    category: "Racing", 
    thumbnail: "https://img.gamedistribution.com/6210bcbbdc2c473bb57a827c3cddc036-512x512.jpeg", 
    embedUrl: "/AllGame/gameCar1.html", 
    description: "Highway Road Racing brings to you one of the most compelling and satisfying traffic dodging experience in the world. Enjoy the ultimate endless traffic racing game! Beat crazy challenges and race in a selection of modified cars." 
  },

    { 
    id: 5, 
    slug: slugify("Aventador Vice Crime City"), 
    title: "Aventador Vice Crime City", 
    category: "Action", 
    thumbnail: "/AllGame/gameCosmicDefender.html", 
    description: "Dive into city driving with four game modes. Navigate realistic traffic and monitor your fuel while exploring busy streets. Enjoy stunning morning city graphics, transforming the city into a spectacle. Pedestrians add unpredictability, and hitting them triggers police chases. Customize your car's appearance and performance. All this chaos is accompanied by your cute dog. Whether evading the cops or just cruising, Aventador Vice Crime City offers a thrilling and visually amazing experience." 
  },

     { 
    id: 6, 
    slug: slugify("Pool Mania"), 
    title: "Pool Mania", 
    category: "Arcade", 
    thumbnail: "/AllGame/gameFlipyBird.html", 
    description: "Challenge your intellect and skills in this one-of-a-kind pool game. Collect stars and unlock stronger cues so you can beat harder levels. Play pool, roam through levels, and collect all the special cues." 
  },

    { 
    id: 7, 
    slug: slugify("Moto Road Rash 3D 2"), 
    title: "Moto Road Rash 3D 2", 
    category: "Racing", 
    thumbnail: "/AllGame/gameGemBlaster.html", 
    description: "Rev up your engines and feel the thrill of the open road in Moto Road rash 3D 2! This high-octane motorcycle game immerses you in a heart-pounding racing experience where agility and precision are your best allies. Zoom through a dynamic, ever-changing cityscape, weaving between lanes, dodging traffic, and mastering daring stunts." 
  },

    { 
    id: 8, 
    slug: slugify("Highway Traffic"), 
    title: "Highway Traffic", 
    category: "Racing", 
    thumbnail: "https://img.gamedistribution.com/7c151f5e29eb40a591edfe1823e1d0ea-1280x720.jpeg", 
    embedUrl: "/AllGame/gameSnake.html", 
    description: "Fun traffic game with a diversity of game modes and car modelsFeaturesMany car models from the classic sedan to modern sports car Four game modes as a single player weather options Smooth car controls" 
  },

      { 
    id: 9, 
    slug: slugify("Halloween Fruit Slice"), 
    title: "Halloween Fruit Slice", 
    category: "Arcade", 
    thumbnail: "https://img.gamedistribution.com/754a3153c5964afe918325052fa17419-512x384.jpg", 
    embedUrl: "https://html5.gamedistribution.com/754a3153c5964afe918325052fa17419/?gd_sdk_referrer_url=https://gamedistribution.com/games/halloween-fruit-slice/", 
    description: "Halloween Fruit Slice is a high-energy arcade action game set in a spooky Halloween world. Vivid fruits and devious traps streak across the screen in an instant. Your task is to slice as many fruits as possible with lightning speed, chaining spectacular combos and racking up points while dodging explosive bombs. Rich visuals, splashy juice effects, and eerie backdrops create a thrilling, immersive atmosphere. The tempo keeps rising, so every moment tests your reflexes and precision." 
  },

    { 
    id: 10, 
    slug: slugify("CANDY MATCH 3 KIT"), 
    title: "CANDY MATCH 3 KIT ", 
    category: "Action", 
    thumbnail: "https://img.gamemonetize.com/b4fj2duqnsxijnxvr8r4k4evkxm74zhv/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/b4fj2duqnsxijnxvr8r4k4evkxm74zhv/", 
    description: "Get ready for intense street fights inspired by Squid Game! Team up with a friend, defeat red enemies, and face the boss girl in action-packed battles. Play campaign mode, use combos, run, and jump to win. Perfect for your website—an exciting multiplayer fighting experience!" 
  },

    { 
    id: 11, 
    slug: slugify("Squid Game Multiplayer"), 
    title: "Squid Game Multiplayer ", 
    category: "Arcade", 
    thumbnail: "https://img.gamemonetize.com/b6jfcy0rn288sn5p61pn86i2l6yyo8ni/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/b6jfcy0rn288sn5p61pn86i2l6yyo8ni/", 
    description: "Candy Match 3 is a fun and addictive puzzle game! Match three or more candies to clear the board and unlock power-ups. Enjoy bright visuals, easy-to-learn gameplay, and hundreds of challenging levels. Swap, match, and crush your way through a world of sweet puzzles!" 
  },

      { 
    id: 12, 
    slug: slugify("WORDLY"), 
    title: "WORDLY", 
    category: "Puzzle", 
    thumbnail: "https://img.gamemonetize.com/vy809reourjzmnf76c7l3b2sj7k2la96/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/vy809reourjzmnf76c7l3b2sj7k2la96/", 
    description: "Wordly is a fun and relaxing word puzzle game that trains your mind and vocabulary while keeping you entertained. Your goal is simple: form the target word by tapping the letters in the correct order. Each level brings a new challenge with words of increasing difficulty. Earn 15 coins for every correct answer and lose 15 for mistakes - so think carefully before you tap! You have five attempts per level; fail them all and it’s game over. Use a Hint to reveal the first letter of the hidden word or Shuffle the tiles for a fresh perspective. The game is suitable for everyone!" 
  },

     { 
    id: 13, 
    slug: slugify("Truck Simulation"), 
    title: "Truck Simulation", 
    category: "Adventure", 
    thumbnail: "https://img.gamemonetize.com/ldyyypn720nku1dw3yyq2x4nwzhtid7z/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/ldyyypn720nku1dw3yyq2x4nwzhtid7z/", 
    description: "Truck Simulation gives you the chance to step into the life of a real trucker! Start your journey as the driver of a modest old truck and climb your way up to becoming the proud owner of a massive trucking company. Experience the thrill of long-haul driving, master realistic controls, and explore a huge open world full of challenges and opportunities." 
  },
  
    { 
    id: 14, 
    slug: slugify("Infinity Roll 3D"), 
    title: "Infinity Roll 3D", 
    category: "Arcade", 
    thumbnail: "https://img.gamemonetize.com/3q0k2f1pvoevwqphm95snp3kyduteejs/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/3q0k2f1pvoevwqphm95snp3kyduteejs/", 
    description: "Infinity Rolls 3D is a fast-paced endless rolling adventure that puts your reflexes and focus to the ultimate test! Control a rolling ball racing through futuristic 3D tracks where the speed never stops. Your mission is simple tap or click on time to make perfect turn and collect diamonds, and push your score higher and higher! With smooth controls, dynamic challenges, and neon-style graphics, Infinity Rolls 3D delivers an addictive and immersive experience that keeps you coming back for “one more round." 
  },

    { 
    id: 15, 
    slug: slugify("Vector Parkour"), 
    title: "Vector Parkour", 
    category: "Action", 
    thumbnail: "https://img.gamemonetize.com/gcg6mybdrkv0l5midg3b798bx5h30ltk/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/gcg6mybdrkv0l5midg3b798bx5h30ltk/", 
    description: "Vector is an exciting arcade-style game featuring you as the exceptional free runner who wont be held down by the system. Run, jump and climb using techniques based on the urban-ninja sport of parkour with Big Brother in hot pursuit!" 
  },

    { 
    id: 16, 
    slug: slugify("Mini Tennis Club"), 
    title: "Mini Tennis Club", 
    category: "Sports", 
    thumbnail: "https://img.gamemonetize.com/49eln5cwqtgvyhxuxvb8ksp8jkz33h81/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/49eln5cwqtgvyhxuxvb8ksp8jkz33h81/", 
    description: "Take part in an amazing tennis match and enjoy the swift and fluent game. Practice before joining a tournament, because playing is easy, but mastering all the moves is not so much Have fun with this entertaining 3D tennis game with this new Mini Tennis Club game, a casual game compete against other players and beat them all and you can unlock new characters.Website Developer" 
  },

      { 
    id: 17, 
    slug: slugify("Donkey Kong Run"), 
    title: "Donkey Kong Run", 
    category: "Adventure", 
    thumbnail: "https://img.gamemonetize.com/u35ssp4qqq2dolkrqo4gb2pzkqmmwbtw/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/u35ssp4qqq2dolkrqo4gb2pzkqmmwbtw/", 
    description: "An exciting journey through the jungle, caves and treetops. Run, jump, bounce and swing through vines to help Donkey Kong outrun an avalanche of bananas! Run through the levels, jumping between platforms, and avoiding obstacles and enemies. You will collect items such as bananas and unlock new Donkey Kong characters to reach the highscores!" 
  },

      { 
    id: 18, 
    slug: slugify("Stickman Street Fighter 3D"), 
    title: "Stickman Street Fighter 3D", 
    category: "Action", 
    thumbnail: "https://img.gamemonetize.com/r5tug67vf8lprllpnawokwa3p0xddr45/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/r5tug67vf8lprllpnawokwa3p0xddr45/", 
    description: "It is time to fight in kz10 !! Choose your favorite stickman and perform awesome combos to take the opponents down! Even more awesome is to be the one in the middle who kicks everyones ass. In Stickman Ultimate StreetFighter 3D, an amazing reaction fighting game, you have to act really fast to throw punches and kicks in perfect timing to avoid getting" 
  },

  
      { 
    id: 19, 
    slug: slugify("Kid Ball Adventure"), 
    title: "Kid Ball Adventure", 
    category: "Adventure", 
    thumbnail: "https://img.gamemonetize.com/30q2nhz4ns0p9q7nn6bk1lrmsbml8i0c/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/30q2nhz4ns0p9q7nn6bk1lrmsbml8i0c/", 
    description: "Enter a fantasy world of bouncing balls and magic castles in Kid Ball Adventure is a 2D platformer where risk is balanced with great reward! Take control of Kid Ball as he pursues those who captured his love through treacherous castle dungeons. To guide Kid Ball to victory, you will need to overcome many challenging stages filled with traps and deadly enemies, bouncing over spikes and using booster cannons to your advantage! Locate the key and unlock the exit to move on to the next daunting chamber of hazards!" 
  },

     { 
    id: 20, 
    slug: slugify("Mr Autofire"), 
    title: "Mr Autofire", 
    category: "Action", 
    thumbnail: "https://img.gamemonetize.com/ghsqbsab3s37q5x2gk5k54w6shwl4i5f/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/ghsqbsab3s37q5x2gk5k54w6shwl4i5f/", 
    description: "Blast endless alien hordes in this fast-paced retro shooter! Play as Mr. Autofire, the Defender of Everything — run, gun, unlock new worlds, and upgrade your weapons to survive the chaos. Bite the bullet and rumble!" 
  },

     { 
    id: 21, 
    slug: slugify("Math Runner"), 
    title: "Math Runner", 
    category: "Arcade", 
    thumbnail: "https://img.gamedistribution.com/a8870b5a6a76492db5cb8ca599f64843-512x512.jpg", 
    embedUrl: "https://html5.gamedistribution.com/a8870b5a6a76492db5cb8ca599f64843/?gd_sdk_referrer_url=https://gamedistribution.com/games/math-runner/", 
    description: "Test your mind and reflexes in this fast-paced math adventure! Solve problems, dodge obstacles, and race against time to sharpen your skills and hit the highest score!" 
  },
  
      { 
    id: 22, 
    slug: slugify("Speed Run 3d"), 
    title: "Speed Run 3d", 
    category: "Arcade", 
    thumbnail: "https://img.gamedistribution.com/68c91de8354345d38c54aa8f81e13393-512x384.jpg", 
    embedUrl: "https://html5.gamedistribution.com/68c91de8354345d38c54aa8f81e13393/?gd_sdk_referrer_url=https://gamedistribution.com/games/speed-run-3d/", 
    description: "Race through glowing 3D tunnels, react fast, and dodge gaps as speed ramps up. Enjoy smooth one-touch controls and stunning neon visuals for a thrilling, reflex-driven ride!" 
  },

   
      { 
    id: 23, 
    slug: slugify("Nose Hospital"), 
    title: "Nose Hospital", 
    category: "Arcade", 
    thumbnail: "https://img.gamedistribution.com/867b8b1d8dbb494fb0f056328bbe792f-200x120.jpg", 
    embedUrl: "https://html5.gamedistribution.com/867b8b1d8dbb494fb0f056328bbe792f/?gd_sdk_referrer_url=https://gamedistribution.com/games/nose-hospital/", 
    description: "Step into the operating room and perform life-saving nose surgeries! Become the hero your patients need in this exciting plastic surgery game." 
  },

     { 
    id: 24, 
    slug: slugify("Fisherman Fortune"), 
    title: "Fisherman Fortune", 
    category: "Arcade", 
    thumbnail: "https://img.gamemonetize.com/f61q4cn345i0tseo44xwn1m6dv758mq8/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/f61q4cn345i0tseo44xwn1m6dv758mq8/", 
    description: "Join Henry in Fisherman Fortune, a thrilling fish-hunting adventure! Help him catch different fish to bring home to his wife, Erica, and overcome challenges to reach the next level." 
  },

  
     { 
    id: 25, 
    slug: slugify("Subway Rabbit"), 
    title: "Subway Rabbit", 
    category: "Arcade", 
    thumbnail: "https://img.gamemonetize.com/7wn0lps91gd2v6codeene531mlfeljss/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/7wn0lps91gd2v6codeene531mlfeljss/", 
    description: "Subway Rabbit Run, jump, duck and swerve your bunny through the forest at full hopping speed! Collect gems to earn upgrades!" 
  },

   { 
    id: 26, 
    slug: slugify("Perfect Piano"), 
    title: "Perfect Piano", 
    category: "Arcade", 
    thumbnail: "https://img.gamemonetize.com/w4lpkl2xnvoyx1irfvevh6rrirjx205z/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/w4lpkl2xnvoyx1irfvevh6rrirjx205z/", 
    description: "Learning what you love isn’t easy, but quitting isn’t the answer. Keep training, gain experience, and never give up—growth comes with persistence." 
  },

     { 
    id: 27, 
    slug: slugify("Forest Rush"), 
    title: "Forest Rush", 
    category: "Arcade", 
    thumbnail: "https://img.gamemonetize.com/xoc2xarpf45vna7cbrfvdt810d2j82h5/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/xoc2xarpf45vna7cbrfvdt810d2j82h5/", 
    description: "Help Mush Mush run through the forest, dodge spikes, collect points, and reach the end of each level!" 
  },

    { 
    id: 28, 
    slug: slugify("Slash FRVR"), 
    title: "Slash FRVR", 
    category: "Arcade", 
    thumbnail: "https://img.gamemonetize.com/zq0kl2wz1k7i0j1u83lyokfzun3ualss/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/zq0kl2wz1k7i0j1u83lyokfzun3ualss/", 
    description: "Love ball games? This one’s different — no scoring or goals, just pure excitement as you slice the balls instead!" 
  },

      { 
    id: 29, 
    slug: slugify("Snake Color Challenge"), 
    title: "Snake Color Challenge", 
    category: "Arcade", 
    thumbnail: "https://img.gamemonetize.com/djlhj9byrm6ma3wa7j8kjtgjfgx5mycy/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/djlhj9byrm6ma3wa7j8kjtgjfgx5mycy/", 
    description: "Control a colorful snake, collect matching color dots to grow, and avoid obstacles in this vibrant twist on the classic snake game!" 
  },

     { 
    id: 30, 
    slug: slugify("Stickman Jailbreak"), 
    title: "Stickman Jailbreak", 
    category: "Adventure", 
    thumbnail: "https://img.gamemonetize.com/ydmtrmpnnggfcblhk9blfhqkld9a6hga/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/ydmtrmpnnggfcblhk9blfhqkld9a6hga/", 
    description: "Plan the perfect escape! Outsmart guards, avoid cameras, and navigate tricky obstacles to break free from prison in this thrilling stickman adventure.  " 
  },


    { 
    id: 31, 
    slug: slugify("Army Truck Simulator"), 
    title: "Army Truck Simulator", 
    category: "Racing", 
    thumbnail: "https://img.gamemonetize.com/3p0c5gp13e1cmlw7dew2pvjulv2akyxu/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/3p0c5gp13e1cmlw7dew2pvjulv2akyxu/", 
    description: "Experience the thrill of driving powerful army trucks through challenging terrains. Master realistic controls, complete missions, and become a top military driver!" 
  },

    { 
    id: 32, 
    slug: slugify("Zombie Survival Escape"), 
    title: "Zombie Survival Escape", 
    category: "Action", 
    thumbnail: "https://img.gamemonetize.com/w9h0ox73ecodjfss7y26nqxyrntaz37c/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/w9h0ox73ecodjfss7y26nqxyrntaz37c/", 
    description: "Survive the zombie apocalypse! Scavenge for supplies, build defenses, and fend off hordes of the undead in this intense survival game." 
  },

    { 
    id: 33, 
    slug: slugify("Boom Stick Bazooka 2"), 
    title: "Boom Stick Bazooka 2", 
    category: "Action", 
    thumbnail: "https://img.gamemonetize.com/nr4piqtonxo1bfiolcy70aeo7itsxdr3/512x384.jpg", 
    embedUrl: "https://html5.gamemonetize.co/nr4piqtonxo1bfiolcy70aeo7itsxdr3/", 
    description: "Blast through waves of enemies with your trusty bazooka! Upgrade your weapons, unlock new levels, and become the ultimate demolition expert!" 
  },

   { 
    id: 34, 
    slug: slugify("Traffic Jam 3D"), 
    title: "Traffic Jam 3D", 
    category: "Racing", 
    thumbnail: "https://img.gamedistribution.com/337302b23b5943d8bcfc501d81d50cdb-512x384.jpeg", 
    embedUrl: "https://html5.gamedistribution.com/337302b23b5943d8bcfc501d81d50cdb/?gd_sdk_referrer_url=https://gamedistribution.com/games/traffic-jam-3d/", 
    description: "Navigate through hectic traffic in this thrilling 3D driving game! Dodge cars, avoid obstacles, and reach your destination safely. Perfect for quick, exciting gameplay!" 
  },

   { 
    id: 35, 
    slug: slugify("Xtreme Bottle Shoot"), 
    title: "Xtreme Bottle Shoot", 
    category: "Action", 
    thumbnail: "https://img.gamedistribution.com/590d004ffe2b4a0c8515cd99829f5835-512x384.jpeg", 
    embedUrl: "https://html5.gamedistribution.com/590d004ffe2b4a0c8515cd99829f5835/?gd_sdk_referrer_url=https://gamedistribution.com/games/xtreme-bottle-shoot/", 
    description: "Test your aim in Xtreme Bottle Shoot! Use your mouse to aim and shoot bottles in this fun and challenging shooting game. Perfect for quick reflexes and sharp shooting skills!" 
  },


  { 
    id: 36, 
    slug: slugify("Block Team Deathmatch"), 
    title: "Block Team Deathmatch", 
    category: "Action", 
    thumbnail: "https://img.gamedistribution.com/72ef728fe63d48b4a44a97947d5bff3c-1280x720.jpg", 
    embedUrl: "https://html5.gamedistribution.com/72ef728fe63d48b4a44a97947d5bff3c/?gd_sdk_referrer_url=https://gamedistribution.com/games/block-team-deathmatch/", 
    description: "Engage in intense block-style combat! Choose your team, strategize, and eliminate opponents in this fast-paced multiplayer shooter. Perfect for action lovers!" 
  },


  {
    id: 37,
    slug: "stunt-paradise",
    title: "Racing Go",
    category: "Racing",
    description: "Experience the thrill of high-speed racing in Racing Go! Choose your car, customize",
    embedUrl: "https://html5.gamedistribution.com/5167c5a7d37849d0b3766111500e0146/?gd_sdk_referrer_url=https://gamedistribution.com/games/racing-go/",
    thumbnail: "https://img.gamedistribution.com/5167c5a7d37849d0b3766111500e0146-512x384.jpeg"
  },
  {
    id: 38,
    slug: "ovo-adventure",
    title: "Charger City Driver",
    category: "Racing",
    description: "Drive a powerful Charger through busy city streets! Complete missions, avoid traffic, and enjoy stunning urban landscapes in this exciting driving game.",
    embedUrl: "https://html5.gamedistribution.com/3f0aec385266424bb0529dfcecfe30b4/?gd_sdk_referrer_url=https://gamedistribution.com/games/charger-city-driver/",
    thumbnail: "https://img.gamedistribution.com/3f0aec385266424bb0529dfcecfe30b4-1280x720.jpg"
  },
  {
    id: 39,
    slug: "super-racing",
    title: "NSR Street Car Racing",
    category: "Racing",
    description: "Race classic street cars in high-speed competitions! Customize your ride, master challenging tracks, and become the ultimate street racing champion.",
    embedUrl: "https://html5.gamedistribution.com/d632553ef7264d99aa438310073a6dc3/?gd_sdk_referrer_url=https://gamedistribution.com/games/nsr-street-car-racing/",
    thumbnail: "https://img.gamedistribution.com/d632553ef7264d99aa438310073a6dc3-512x512.jpg"
  },
{
    id: 40,
    slug: "FlipyBird",
    title: " Flipy Bird",
    category: "Arcade",
    description: "fly through obstacles and achieve the highest score in this addictive arcade game! Tap to keep Flipy Bird in the air and avoid crashing.",
    embedUrl: "/AllGame/gameFlipyBird.html",
    thumbnail: "https://img.gamedistribution.com/d632553ef7264d99aa438310073a6dc3-512x512.jpg"
  },

  {
    id: 41,
    slug: "Snake Master",
    title: " Snake Master",
    category: "Arcade",
    description: "Race classic street cars in high-speed competitions! Customize your ride, master challenging tracks, and become the ultimate street racing champion.",
    embedUrl: "/AllGame/gameSnake.html",
    thumbnail: "https://img.gamedistribution.com/d632553ef7264d99aa438310073a6dc3-512x512.jpg"
  },
  
   {
    id: 42,
    slug: "Cosmic Defender",
    title: " Cosmic Defender",
    category: "Action",
    description: "Defend the galaxy from alien invaders in this thrilling space shooter! Upgrade your ship, blast enemies, and save the universe.",
    embedUrl: "/AllGame/gameCosmicDefender.html",
    thumbnail: "https://img.gamedistribution.com/d632553ef7264d99aa438310073a6dc3-512x512.jpg"
  },
  
  {
    id: 43,
    slug: "Gem Blaster",
    title: " Gem Blaster",
    category: "Arcade",
    description: "Blast colorful gems and achieve high scores in this exciting puzzle game! Match gems, create combos, and clear levels to become the ultimate Gem Blaster.",
    embedUrl: "/AllGame/gameGemBlaster.html",
    thumbnail: "https://img.gamedistribution.com/d632553ef7264d99aa438310073a6dc3-512x512.jpg"
  },
];

export default games;