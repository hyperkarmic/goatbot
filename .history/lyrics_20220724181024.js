const lyrics = [
  'Bury you in a slimy grave/You will rot forever there!!!! - Mayhem',

  'Smell the putrid stench of flesh/As it burns you to your death!!! - Autopsy',

  'Spontaneous death, up in flames/Twisting and writhing as life burns away/Until nothing is left but charred remains... - Autopsy',

  'Pierce the blade – infected tissue starts to bleed/Diseased and plagued/tumours chew and feed… - Carcass',

  "Her innocent cries couldn't milden my heart/I stabbed and stabbed, and I cut her apart!!!! - Nattefrost",

  'Scour the malignant scabs/I collect the putrid offal/In a ziploc body bag... - Exhumed',

  'A tsunami of ordure saturated the hallowed soil/Corpulent ballast disinterred coffins, amongst the manure, embroiled/As rectal mung flows - Impaled',

  'Crowned children screaming from funeral shrouds/To rapid eye movement, heart-strings undone/our beautiful filth dances/and plague flowers... - Ne Obliviscaris',

  'Without gods, spores prevail/Without masters, slaves prevail/Without daemons, worms prevail/Without blindness, parasight prevail!!! - Mitochondrion',

  'Such a hideous clamour/An agony that stained the azure/The light of the world/And the wretched olive tree/Stars receded with shaking grace/Degraded holy essence/the 3rd hypostasis/Unaltered holy essence, the 3rd hypostasis/De profundis clamavi ad te, Domine - Deathspell Omega',

  "Aching bones cling to swollen limbs/Despair floods all senses/The world is dying around me - Be'lakor",

  "A flash in an abyss, a dream in the void/See that there is no meaning/Understand eternal death/You long now to try what you once feared/But the time is gone and dust will be your legacy - Be'lakor",

  'Anal-sadistic/This is our return/To a lost intimacy/Post-patricidal/Pleasures of animality/Feed on the orifice of Night/Rectal communion - Vastum',

  'Ravaged, torn and punctured /the carcass oozes from multiple wounds/Avulsed &sliced/the dermis weeps pus &purge fluid with clear/viscous goo/Prior to the initial incision, before my scalpel is baptized bloody wet... - The County Medical Examiners',

  'Revengeful corpse out to kill/Smell the stench, your guts will spill/Vomit for a mind/ maggots for a cock/with his axe the corpse will chop... - Death',

  'Malevolent hatred of life, seeing death fall from the sky/Resisting the view from my eyes/Receiving pleasure from watching you die... - Malevolent Creation',

  'The answer cannot be found/In the writing of others/Or the words of a trained mind/In a precious world of memories/We find ourselves confined... - Death',

  "Salvation is nothing- nothing is salvation/The great fractal of existence sinks into itself/Nature calls for destroyer, desires/It's the highest time for zero to come/Collapsing reality craves for the end/Everything rots in itself - Decrepit Birth",

  'Without hesitation, I will kick the TV in/Sick of all these fuckers with their Prozac grins/Always selling shit, that no one wants or needs/Choking up the planet with their get rich schemes... - Dying Fetus',

  "A sinister growth gestating in the whore of God/A parasite's host; glorified charlatan/A virgin womb defiled with the slithering parasitic seed of the Xenochrist/Adequately equipped with weapons of manipulation - Faceless",

  'Maggots and grubs bore into the mouldy remain. Masticating lymph, caked blood and cankered decay',

  "'Fusing symblepharon, your flesh turns into coke. Extravasative gunge now black, pungent smoke.",

  "'Tear out your intestines Cut your liver in two",

  "'With cankered disgorgement I excrete my gurgling prey",

  'Stricken from the holy book - deliverance to pain, Voices cry out to bid you welcome',

  'You pray for death, mourning does no good, you can only die once',

  'Hose rammed up your naked ass, scream is muffled',

  'There is a fascist inside of you, controlling your life and what you do',

  'Spiky hair makes Rabbits cry. One day soon, you will fucking die ',

  'No point in fighting, your life is already lost. Try to escape: youre nailed to the cross',

  'Broken the paradigm an example must be set, Invoke the Sirens song and sign the death warrant.',

  'Stoic in silence we are blind inside the void, Ruins remind us of all we have destroyed Dead rail',

  'A loose end to be tied up and cast aside, Left to find that you have dug your own grave with your spite.',

  'Frantic minds are terrified/Life lies in a grave/Silent death rides high above/On the wings of revelation',

  'Experimentation, slow infection, internal decay, Execution, need transfusion, body rots away',

  'Life preordained, Humanity maintained, Extraction termination, Pains agonizing stain.',

  'Needles stabbed into the walls, The executioners curtain call, Fighting back he found his identity, And there was no way out',

  'I hear flak inside my head, Deafening thunder cities burn, Carpet-bombing laid to waste, Throwned inside a death mask',

  'Mankind in his insatiable search for divine, Knowledge has discarded all biblical teachings',

  'Ancient crown placed on your head, The hangmen of Prague, Seven keys to the chamber, Surrendered to the God',

  'Children Of Bodom, angry are rising, Running amok slaying with a sense of desire',

  'A glance to my eyes, deep within reveals, This worn-out warrior mind, I am killing you by suffering, Discomposure of a deepest kind',

  "Get attacked by them, You’ll never heal, They’ll rob your conscience Your sanity they'll steal, They’ll beat your brains until they spill",

  'Deny our rights and we will break it, You got to break the chains that hold you down, Crush the tyrants to the ground, Freedom cannot be legislated',

  "I'm not crazy - in an institution, You’re the one who's crazy - in an institution, You’re driving me crazy - in an institution",

  'Get pissed off... Release your aggravation, Scream out, rise up... Represent your generation',

  'bile, chyme and blood in the offal effervesce, I eviscerate the bowels and drink the clotted cess',

  'FLOCKING LIKE SHEEP, THE INSTINCTUAL HERD, AS FASHION DICTATES, PRIMITIVELY SEDUCED, COMMONLY REDUCED, RESIGNED TO THEIR FATE,',

  'Brutalization, Humiliation, Dehumanization, Damnification, Degredation Annihilation',

  "Sensual awakening, Numbing feeling's dead, Conception’s romanticised Synthesized broken heart's to bled",

  'Storm rolls in from the sea, Covering the land with black thunder clouds, Rain whips the ground at their feet',

  'Clouds of black cover the sea, Day turns into night, Infinite darkness beckons me, No more sun, no more light',

  'Like the screaming eagle, I’m on the run, I blaze through the sky, I kill for the fun',

  "Abandon all hope for those who enter, Cause there ain't too much of that down here, A clouded mist in a darkened tunnel, And twisted screams are growing near",

  "Binding our eyes as the sun turns to black, A world full of hatred and fear, All are committed, there's no going back, There’ll be no one left to hear",

  "You're a train ride to no importance, You’re in love with hell existence, Money is all that you desire",

  'And it grows inside, Metastasize, And my brain goes crazy, Sepia toned days are hazy',

  'Down and under where the damned are riding, Down and under where you pay, Your golden halo is burned and melted, Crown the monster at the end',

  'Millions dead, More on the way, What is worth this cost, For your god, And country',

  ' hell that now has come to earth, Where must the blame now lie, A government that sponsors death, A science against life',

  'Now rendered dead as my organs fail, Thus pain exists inside this netherworld of fate',

  'Demolition of bodies, smashed and broken, piles of guts, moist and steaming',

  'Once flowing blood is now dried, resembling black pudding. Now all that bleeds is a slow trickle of hot, sticky muscle.',

  'The cataleptic remains incite the suppuration, Giving way to the stench of anal emanation',

  'Parasitic carnivorous carrion, your gastrointestinal tract, your preys cremator',

  'Effervescing entrails corroding after years, The stench of the canker brings me no tears',

  "YOUR KINGDOM IS OF EMPTINESS, INVISIBLE EMPIRE OF ILLUSION, THERE'S NO MAJESTY IN YOUR EMPTY WORDS",

  'TIME IS NO GREAT HEALER, QUICKLY THE SENSES NUMB, COME CROSS MY HEART, VOID AND NULL,',

  'The spirit distilled, the soul is bought. The D.N.A. split, the virus is caught.',

  'Your cavities rot with ulcers, Your infected inflammations torn',

  'Life is a twisted maze of obstacles, Presented by people with a secret face',

  'Laying your guilt and pain On people that had no part in the molding of a life That creates its destruction',

  "Are they the examples of regression A life form's abusive progression a realm so vast, we sit among the Vacant Planet",

  'From the mentally blind come ideas that are poison, Take away the power, a shallow person you will find.',

  'Prisoners of mental deception be free within singular judgement Twisting words to control the masses',

  'Rides the Metal Monster, Breathing smoke and fire, Closing in with vengeance soaring high',

  'behold the flesh and the power it holds, passion is a poison laced with pleasure bitter sweet, one of many faces that hide deep beneath',

  'Bloody killing spree, Brain fried eternally, Psychotic mission of death',

  'Nuclear warheads are ready to fight, Total destruction the only might',

  'There are traps behind every line, The combat zone in trench and fire, I know the danger every step',

  'We are the messengers, Of inmost thought, Our words of confession, Fall away to nought',

  "She can't control her, Abnormal inclination, But she found a congenial fellow",

  'Flash of light fills the midnight air, Scraps of metal flying here and there',

  "Black covers the mass, The mist it's so dense, It’s soothing to breathe",

  'Like a second hand politician, I’m a study in malnutrition',

  'Take this boy, and remind him, Just how fragile his un-sewn life',

  'Now that push turned to shove, damn it! And my mind is my own Still you poke and you prod daily',

  'Nothing can save them now, You’ve learned a lesson in violence',

  'They only live and die as a slave, With one foot, one foot in the grave',

  'A hammer to crash through what it is to be human, Wield it with contempt or have it torn from your arm, We are wolves chewing at the ankles of the world',

  "No one wishes you to suffer for we don't feel enough for you to mind.  A fallen motive curls to find a final breath and you may lay beside it",

  "I can see the blades you've placed, The ones you dance upon , On which you squirm, Forcing movements that beg us to believe that the pain is foreign ",

  'White marrowed iron, A field pronged belly with stakes of bone, Find a frozen wind and pregnant breath there, In hive lung',

  'Drag them from peace, Torn from the quiet of purpose, I create chewed gristle and meat',

  "Mechanized death, Borne by man's desire, Salacious pursuit, Of pestilent clutches ",

  'Fog of deceit Part billowing clouds, ethereal I watch them reveal unholy abominations Unknown to mankind',

  'Capillary extraction Bodily entitlement Regurgitated Image of self Eradicated',

  'Those in our way will be helpless Like dead, mangled prey in the jaws of a wolf',

  'The other gods A whirlwind of maniacal laughter The gods of outer hell The horrors of a lifetime unleashed momentarily',

  "Dog sniffs your severed dick, eats it as you're bleeding out Laughter fills the air, your balls are stomped into the ground",

  'In your eyes-reflection of evil staring back, Limbs are pulverized, prying apart your splintered bones',

  'Opening the steel door, Hear the snarling from the dark, Smell the stench of prior feedings, Rabid jaws of death revealed',

  "We're lurking in the undercroft We're creeping with the festering dead",

  'Rituals, an offering of blood The lives of the holy misled, a feast for the kraken In darkness we crawled from the sea',

  'Lavishing ruin, destroying the lands of the king Sewing destruction, destined to repeat',

  "It could have been me, it's lonesome now by my side It should have been me, your choice had been made",

  'Apparitions lurking these empty halls Centuries seeking a semblance of life Waiting for my vessel to arrive',

  'eyes pushed back deep into their sockets unclean and suffering with an odor of decay',

  'i took away their gods, took them captive i gathered together their heads i made of them all heaps of desolation',

  'The inset of rigor mortis, ulcerous corruption and decay Saponified fats lather as soap as you slowly eat yourself away',

  "Crying out, walls closing in Dark, silent Hell I'm trapped in Awaiting death as I lay In this coffin and Rot",

  'Tearing violently at the organs of sustainability, Flooding the lungs of habitation in a furore of malignant ravage',

  'The expansion of this doomed universe in futility is scripted, The measurement of beginning and end is rendering time defeated',

  'Reciprocal anxiety, low emphatic disease This constitutes raw authority A grievous synchroscheme',

  'Worlds demise for cognitive novelty and congenital eccentricity. All epochs of insanity a living language is finally tyranny',

  'Avoid the volatile ability that surrounds the disease of man Intrinsic behavior encased in terror Dehumanize this highest rank of cure once found',

  'It was the purest fear disease In corners of the sick All through the vastness of the mass',

  'Ripped carnification above impalement of own greed bowed towards the transition of iniquity Pounced-diminished, scared-infected undevoured, consumed by torment',

  'Allowing preformed deeds of gore and scant Apathy in continuity resuscitated morphology',

  'For withdrawal has subjugated us Through the discipline of a long-dead culture And the collective madness, of denying inevitable change',

  'Pathetic you stand before me, leader of disappointment For I have returned, behold, great falsifier',

  'Branded by the forge yet blessed with the promise of free will, Destined to return and engulf the cosmic foundry',

  "Corpses fall like burnt leaves Yet it's good I haven't known, beyond the boon That sheds a glimpse of divine indifference",

  'Cathode cages are built to purge Our Vitruvian sense of belonging Trapped in the shadow of long-lost memories',

  'Earth spit out the dead They suck the blood of the living',

  'The failure of human knowledge is near Terrible visions, hell is real Dead back to life synthetically zombified',

  'Priests vomit upon the cross of the rotten church The sacred scriptures shatter into the flames',

  'The sacred scriptures shatter into the flames The blood of Christ spilled on the altar',

  'Red vomit stains the hospital sheets Devoured by agony! Who killed me?',

  'Voices in my head, Grinning Demons, Lead me to kill once again',

  'Gory days fall on this timeless island Blood red in the sky, the sun makes you dry',

  'Chambers, incineration, death Ashes blown away by divine breath Almighty hand closes the book of lies Eternal peace is glowing from their eyes',

  'Joining the ranks of the dark Burning curiosity Feel the soul slipping away Into the realm of eternity',

  'And at the gate the Master was waiting Only one of all had privilege of power The rest is there to die a thousand deaths',

  'A detached world The abode of the dead The initiation into the ossuary',

  "Phenomena and vaguely perceptible forms Which are held, couldn't find freedom",

  'From the graves the bodies will rest in People deny their sickened sides Wars, they are sacred rites',

  'Vault of the narrowed wailing souls Echo of their moaning in your ears Invective unrest longing for return The silent dirge of sadness will remain',

  "The years of the leech, finished as we preach If you won't face death we will",

  'Pre-eminent symbol For blood the masses roar Indomitable justice The crowd demanding more',

  'Drilled since birth On sturdy beasts Hunting, racing, wrestling And archery',

  'Depleted clusters Nullified spheres Perpetual obliteration For countless light-years',

  'apaver somniferum Ambrosia of the ancients Morpheus, God of dreams grants me entrance to the den of the wicked',

  'Do you ever feel frightened in the dead of night Can you hear the children scream',

  'The heavens, the gods are all within you. Listen as the voice of reason speaks. The ranting and raving will tear the world apart ',

  'Of Human Bondage and Suffering We carve a monument to Megalomania',

  'Heralds of Pestilence Blackest Plague Rusheth through the Land',

  'Flesh burns right to the core Spits blood from every pore',

  'Darkened day Torturous ways Live only to die Slaughterday',

  'Morbid lust must be satisfied In the shadows she must hide',

  "Slow and cruel, I start to drool For moments you'll regret this day",

  'Made to be feared, this reaping scythe No one gets out of this world alive Doomed to the flow of the river of fear',

  'Skeletal sockets peering out through the mist Sun bleached fingers point while the stale winds hiss',

  'A nauseating reddish light filled the gloom Transfixed I walked up to the bridge bizarre',

  'A dark descent beneath the earth And hell was waiting there',

  'Humans insane, horrors are bred Raised on decay, born undead',

  'I have been there again My bare feet caked with mud Stench of the grave rising from my aching groin',

  'Before my waking tortured damaged eyes Darkened corners call and hiss',

  'You stop to help the wretched little thing When more emerges with stick and rocks and painful offerings',

  'The gates of madness call your wretched name Open wide your skinless arms, let the worms eat into your brain',

  "Reincarnation is the most obscure thing That we can't be sure We shall all come back to accomplish All the things we missed in the past",

  'Calamitous mortification Is the main cause of my mortality',

  "Lands which no one's seen before... Dark as hell There, alone, you are in this vault of fear",

  'Lost in the twilight Confinement in emptiness The granted land forsaken',

  'The mighty Sola Terra Forever fell asleep Mysterious sinking drama Lost in Daedalian deeps',

  'Tied ...facing the archers Pierced ...bleed with rapture',

  'Dreams of dismemberment, fantasies of torture Mopping up affords me a reminiscence of death',

  'Abominated, tiny god of mine Overseeing my rest, my lust, my life',

  'He died accidentally from auto-erotic asphyxiation',

  'All sons of ares, sons of mars Whose flesh be worms, whose souls be stars',

  'Suffering is the master from whom we learn:Keep this secret and be blessed',

  "Like a lump between two surgeons Man quivers 'twixt desire and need",

  'Thou shalt not be afraid for the terror by night For the arrow that flieth by day',

  'Beneath a shawl of midnight silence A howling blackness Where all is remade in necromorphosis Asleep in human remains',

  'The obscene animal, the sacrilegious putrid being Was plotting murder, there was no other way out',

  'The unholy malignancy devoured them both so slowly Our loved ones tortuously faded right before our eyes With our hands linked tight',

  'Existence is torn from my soul Perdition is what is believed to be seen',

  'The world is a graveyard of fools left to cope With the torment and regret of man now deceased',

  'Your credulous family somehow hears your pitiful cries.They take the urn which contains what is left of your mortal life',

  'Only one thing clinging to your mind.The prayers to the feeble god whom you once believed in',

  'Your credulous family somehow hears your pitiful cries. They take the urn which contains what is left of your mortal life.',

  'God has turned his back on you, we leave no human waste. Summon now my wings of hate suffocate.',

  'The thought of killing entered my mind some time ago. What possesses an individual to kill.',

  'Now that I control the rest of your existence. How does it feel to be in pain and misery.',

  "Unrelenting need to fulfill my lust for death. I must purge the world of it's filth.",

  'Vanish into the unseen origins of infinity. A pleasant swim in the seas of dormant ecstasy.',

  'Chemicals revive my life, reanimated, brought back again. My diametrical state has assured me eternal life.',

  "Withdraw our life's blood from within us. To reproduce their own kind.",

  'The structure collapses, spewing forth mutation. Plague bathes the earth from infected skies.',

  'To dissect the mind impaled of visions a delusional state from which one neglects',

  'Mass catacombs, putrefied lie beneath The uncivilized, disturbed and the weak',

  'Why do I think this way have I been pushed too far Nothing makes sense to me really what does it all mean',

  'For you are never allowed to sleep eternally. Countless prey have satisfied your hunger.',

  'Staring into your blood filled eyes. I know what you want to say, but I care not to hear',

  'Lies truth be untold. Impressions of lawless society.',

  'I sit as tomorrow I die and today I will unburden my soul These events have tortured me and destroyed me',

  'The sun turns black, faith eclipsed, hope devoured The moon, blood red, the stars fall like rain',

  'Man fell from his grace and strayed from the path His anger now intolerable',

  'Sullen days as I dwell in this empty shell Hopes of redemption decline',

  'Doomed into a retrograde entity Dim humanity, prolonged disparity',

  'To be this fortunate or cursed I know not the difference with such weight on my shoulders',

  "Perhaps it's a pestilence in a form of virus spreading in it's own epidemic.",

  "The servant of the higher power is summoned by the emptiness of the lost souls. With wings extended, it sweeps across the land looking for it's helpless victims. ",

  'Dormant hatred lies in state Hands of death await your fate Concession of pain, taste for power Life awaits its final hour',

  "Storms calm neon skies Still chilling winds roam the nuclear wastes Haunting the conscience of a forgotten existence Civilisation's mistake",

  "Awaiting the slaughter, time stands still Thoughts fade away, so does your will Enemy close in, blood on their minds You won't die once, die a thousand times",

  'Captive life, held in past Deranged memories still burning in your brain',

  'Here now you shall stay to grow in strength return some day To seek revenge on human prey, mutilated as your mind decays',

  'A world totally deformed, no hope of being reborn The heart from it now torn, this world now we all mourn',

  'Driven now by fetid winds, we came to this place of despair Fresh visions of death filled my mind with disgust Yet still we stood here and stared',

  "You can't begin to start to bear the taste, the morning after dark Close your eyes so that you can't see The reality of your tormented agony",

  'In the quest for perfection, life becomes obsolete Humanity faces deletion, this nightmare world is complete',

  'Killing for pleasure, only the strong shall remain An arising slaughter, as hatred and terror now reigns',

  'Without thinking of our future generations Our world descends to apocalyptic wars Through desolate wastes of infernal devastation Man shall rise to take control once more',

  'Breaking deadlocks World bleeding inside Now the tide is turning In ever present pride',

  'Advancing ever onwards Conditioned reflex feel no pain At the point beyond insane There is no shelter from the steel rain',

  'In death I will sleep Floating deep From dying heaven To living hell',

  'You were left to suffer in the burning aftermath Forced down on your knees in perpetual torment',

  'Lunatic dreams become nightmare reality Entangled into persistence No answer to your existence',

  'Strict adherence to formal ritual Proves that one has nothing better to think about',

  'A reality blown open wide Bruising the minds of millions Serpent of war hovering vast',

  'Internal tension erupt in war a proud nation is no more Under siege four long years blood flows with a million tears',

  'Lay down your banners at your feet Through conquest we bring you peace',

  'The blood soaked soil littered with shrapnel, flesh and bone A gruesome scenery, mosaic of mans destructive need',

  'Bleed for the devil Impious mortal lives Feel the enticing power Fill the chasm of your soul',

  'Vomit upon the cross And burn the book of lies',

  'Call of duty now...all the minutemen rise and shine Call of duty now...only sovereigns stand the test of time',

  'but now the sheep are wailing cries to a god they never see',

  "Praising the Weapon that Cleanses our land So perfect It's Way unopposed Punisher of the treacherous ones",

  'Dead - Deceased, but life goes on I will be the one who won Continue to seek and you will see That life is your worst enemy',

  'Carnal leftovers on the floor If you had come a little earlier You would have seen some gore',

  "blind eyes of opium dreams every time I get this far atmospheric distortion it's way to loud at the dead gods bar",

  "Try to break down the imaginary wall And if you couldn't be bothered Well then, my friend, you'll fall",

  "There ain't no god that will save you from regret It's just that god is in a state of neglect And it's your goddamn act that is a major threat",

  'Everyday victory. Everyday peace Just them little, little things that keeps you off your knees',

  "Didn't wanna be just another voice with an answer He'd seen it done before and turn into a cancer",

  "I'd like to see you corrected I'd like to see you destroyed",

  'Live and Die as Sodomites',

  "They fuck you standing up They fuck you when you're down",

  'Sterile carnage, dried sanguined personae desecration Scooping out the entrails, violent entrail emancipation',

  "The sound of rancid juices sloshing around your coffin The mould and the gore remind me of that you're rotting",

  'Osteoporous enzymes release deadly secretions As the clotted parasites devour the excretion',

  'A play on words, or words on play Last chapter, verse in the final act',

  'Machine coded, reduced to hard memory, in a data base Digitalised, statistical obituary, your only legacy, your final resting place',

  "Poisoned retention, with intoxication, Inflamed nephrons burst, your condition's getting worse,",

  'Bereaved relatives are not amused As on their dear departed I feverishly consume',

  "You'd better handle with care now A sleeping mongrel best to lie",

  "Rise above the charred believings' bowel. Rise above the soul's chalky chains.",

  "We're turned inside out. Beyond the darkness we arise. We're turned inside out. Beyond the fearless cries.",

  'Chopped in half. Feel the blood spill from your mouth. With rotting ways comes destiny. Feel the soul take control and bleed.',

  'Festering flesh, quivering cadaver, ligaments stretched around your own neck',

  'Demolition of bodies, smashed and broken, piles of guts, moist and steaming, Tendons severing, brains are boiling, unburied corpses in, state of decay',

  'Lucifer spreads his wings, Satans choir begins to sing, Dead will rise to witness hell, Revelation tolls the bell',

  'Lord of demons and a thousand years, Satans legions are near',

  'Ripping tearing slashing the axe, The blood starts to flow the axe of pain',

  'Every night I see through eyes, Of a different lunatic, And every night I fantasize, In trancial mesmeric',

  'Our world is a lie, The word does not exist, Chaos and oblivion, Our way of life',

  'Angels wings ripped from their backs, Cast down to hell in demon packs, Screams of torment from the damned, Hell and fire consume the land',

  "Twisting my mind, insane, Ripping our your brain, you're slain, Grieving the sunset, terror, And your last breath is nearer",

  'Holy Hell, death to us, Satan’s fell, unholy lust,Devil’s water starts to flood, God is slaughtered, drink his blood',

  "Watch the gods take revenge, Rot in hell for your sins, Sacrifice, to the sky, Terror strikes, you will die
"
]

module.exports = lyrics
