import { Moon, Zap, Heart, ShieldCheck, Sparkles, Clock, Calendar, CheckCircle2, HelpCircle, ArrowRight, UserCheck, Eye, Compass, HeartHandshake } from 'lucide-react'

export const servicesData = [
  {
    id: 'plr-therapy',
    title: 'Past Life Regression Therapy',
    shortTitle: 'Past Life Regression',
    badge: 'MOST POPULAR',
    badgeClass: 'badge-gold',
    image: '/plr-therapy.jpg',
    icon: Moon,
    duration: '2.5 Hours Deep Session',
    price: 25000,
    originalPrice: 30000,
    formattedPrice: '₹25,000',
    consultationPrice: 2500,
    hasSteps: true,
    steps: [
      { step: 1, title: 'Step 1: Consultation', price: 2500, duration: '30-45 Mins' },
      { step: 2, title: 'Step 2: Full Deep Session', price: 25000, duration: '2.5 Hours Deep Session' }
    ],
    tagline: 'Uncover past life memories, dissolve unexplainable fears & resolve ancient soul karma.',
    summary: 'Past Life Regression (PLR) is a holistic hypnosis-based therapy that guides your consciousness into past life memories stored within your soul subconscious. By visiting the root origin of present-day challenges, you release chronic emotional blocks, mysterious physical pains, and repetitive relationship patterns.',
    
    whoNeedsThis: [
      'You experience unexplained anxiety, fears, or phobias with no known origin in this life.',
      'You feel intense, instant connections or irrational conflicts with certain people (Soulmates / Karmic ties).',
      'You keep attracting identical painful relationship patterns or emotional heartbreaks repeatedly.',
      'You feel a deep, haunting sense of unfulfillment or feeling "out of place" in your current life.',
      'You struggle with unexplained bodily tensions, chronic fatigue, or psychosomatic ailments.'
    ],

    sessionProcess: [
      {
        step: '01',
        title: 'Pre-Session Intake & Intention Setting',
        desc: 'We start by sitting together to review your current life challenges, fears, physical ailments, and relationship dynamics. We define clear intentions for what your soul needs to resolve.'
      },
      {
        step: '02',
        title: 'Gentle Hypnotic Trance Induction',
        desc: 'Through guided deep relaxation and somatic breathing, your conscious mind quietens. You enter a peaceful, highly aware Theta brainwave state while remaining in complete control at all times.'
      },
      {
        step: '03',
        title: 'Guided Soul Regression & Memory Retrieval',
        desc: 'Your subconscious accesses relevant past life scenes—exploring your identity, key life events, relationships, oath commitments, and the exact moment of transition.'
      },
      {
        step: '04',
        title: 'Karmic Healing & Soul Contract Release',
        desc: 'We release unhelpful soul vows (poverty, sacrifice, guilt), forgive karmic debts, and receive wisdom messages from your Higher Self and Spiritual Guides.'
      },
      {
        step: '05',
        title: 'Grounding & Real-World Integration',
        desc: 'You are gently guided back into full conscious waking state. We debrief the experience, extract practical lessons, and integrate the healing into your daily life.'
      }
    ],

    benefits: [
      'Permanent release of unexplained anxiety, claustrophobia, water fear, or fear of height.',
      'Profound understanding of your soul purpose and why you chose your current family.',
      'Healing of toxic karmic loops and instant emotional freedom in current relationships.',
      'Relief from psychosomatic symptoms and chronic tightness in the physical body.',
      'Deep inner peace, clarity, and loss of the fear of death.'
    ],

    faqs: [
      {
        question: 'Will I remain in control during the session?',
        answer: 'Absolutely YES. You are never unconscious or controlled. Past Life Regression is a state of heightened relaxed focus. You can pause, speak, or open your eyes at any moment.'
      },
      {
        question: 'What if I cannot visualize or remember anything?',
        answer: 'Memory in hypnosis manifests through feelings, knowingness, bodily sensations, or inner visuals. Every person perceives past memories differently. Sonika gently guides your specific sensory style.'
      },
      {
        question: 'Can this session be conducted online?',
        answer: 'Yes! Over 80% of Sonika’s sessions are conducted worldwide over Zoom. High-quality audio and a quiet, private room are all that is required for a successful session.'
      },
      {
        question: 'How many sessions do I need?',
        answer: 'Most clients experience profound breakthroughs in just 1 comprehensive session for a specific issue. Complex multi-layered patterns may benefit from follow-up sessions.'
      },
      {
        question: 'Can I also explore the space between lives?',
        answer: 'Yes! For exploring inter-incarnation realms, spirit guide encounters, and soul contracts between lifetimes, Sonika offers Beyond-Life Regression (LBL Therapy).'
      }
    ]
  },
  {
    id: 'beyond-life-regression',
    title: 'Beyond Life Regression - Soul Contacts',
    shortTitle: 'Beyond Life Regression',
    badge: 'LIFE BETWEEN LIVES',
    badgeClass: 'badge-purple',
    image: '/beyond-life-therapy.jpg',
    icon: Compass,
    duration: '2.5 - 3 Hours Deep Session',
    price: 25000,
    originalPrice: 30000,
    formattedPrice: '₹25,000',
    consultationPrice: 2500,
    hasSteps: true,
    steps: [
      { step: 1, title: 'Step 1: Consultation', price: 2500, duration: '30-45 Mins' },
      { step: 2, title: 'Step 2: Full Deep Session', price: 25000, duration: '2.5 - 3 Hours Deep Session' }
    ],
    tagline: 'Explore inter-incarnation realms, connect with spiritual guides, soul contracts & life purpose.',
    summary: 'Beyond-life regression goes a step further than past life regression to explore experiences between incarnations. Often referred to as Life Between Lives (LBL) regression or Between-Lives Regression, this sacred spiritual therapy accesses the realm of the soul between earthly lives—allowing you to review lifetime lessons, meet your spiritual guides, understand soul contracts, and uncover why you selected your current incarnation.',
    
    whoNeedsThis: [
      'Experiences immediately after death in past transitions and moving gracefully into the light.',
      'Entering a perceived "between-lives" state of deep peace, wisdom, and higher spiritual awareness.',
      'Encounters with spiritual guides, soul group companions, or divine light beings.',
      'A profound sense of reviewing lessons, soul achievements, and karmic progress from past lifetimes.',
      'Perceived reasons and free-will choices for selecting your current incarnation, body, and parents.',
      'Understanding soul contracts, relationships, and karmic agreements with key people in your life.',
      'Exploring deep questions about your divine purpose, spiritual evolution, and soul growth.',
      'Experiences of returning toward another incarnation with clarity, mission, and focus.'
    ],

    sessionProcess: [
      {
        step: '01',
        title: 'Intention & Soul Contract Mapping',
        desc: 'We define your core spiritual questions, key relationship contracts, and life inquiries to present to your spiritual guides.'
      },
      {
        step: '02',
        title: 'Deep Trance & Transition Passage',
        desc: 'Through guided somatic relaxation and Theta brainwave induction, you pass through a past life memory to the gentle transition into the light.'
      },
      {
        step: '03',
        title: 'Entering the Between-Lives Soul Realm',
        desc: 'You step into the inter-incarnation realm, experiencing profound spiritual peace, meeting your Spirit Guides, and reconnecting with your Soul Family.'
      },
      {
        step: '04',
        title: 'Life Review, Soul Contracts & Council Wisdom',
        desc: 'You examine past lifetime lessons, review present soul contracts, and consult higher spiritual beings to understand your chosen life blueprint.'
      },
      {
        step: '05',
        title: 'Grounding & Purpose Integration',
        desc: 'You safely return to waking consciousness equipped with sacred soul insights, loss of fear of death, and clear alignment with your life mission.'
      }
    ],

    benefits: [
      'Profound clarity on your ultimate soul purpose and current life mission.',
      'Direct communication and guidance from spiritual guides and higher soul beings.',
      'Deep understanding of why you chose your family, body, and current life path.',
      'Complete freedom from the fear of death through direct soul-realm awareness.',
      'Healing of existential questioning and deep alignment with soul relationships.'
    ],

    faqs: [
      {
        question: 'What is Beyond-Life Regression (LBL)?',
        answer: 'Beyond-life regression goes a step further than past life regression to explore experiences between incarnations—such as the between-lives state, spiritual guide encounters, soul contracts, life reviews, and choosing another incarnation.'
      },
      {
        question: 'Is Beyond-Life Regression the same as Life Between Lives (LBL)?',
        answer: 'Yes! Practitioners call this Life Between Lives (LBL) regression or Between-Lives Regression. It focuses on the sacred journey your soul takes between physical earthly lifetimes.'
      },
      {
        question: 'What experiences can I explore during the session?',
        answer: 'You may explore experiences immediately after death, the between-lives state, encounters with spiritual guides or beings, reviewing lessons from a lifetime, reasons for choosing another incarnation, soul contracts or relationships, questions about purpose and spiritual growth, and returning toward another incarnation.'
      },
      {
        question: 'Can this session be conducted online?',
        answer: 'Yes! Sonika conducts private 1-on-1 Beyond-Life Regression sessions worldwide via Zoom with high audio quality and step-by-step guidance.'
      }
    ]
  },
  {
    id: 'hypnoheal-therapy',
    title: 'Hypnoheal & Subconscious Rewiring',
    shortTitle: 'Hypnoheal Therapy',
    badge: 'DEEP MIND REWIRING',
    badgeClass: 'badge-purple',
    image: '/hypnoheal-therapy.jpg',
    icon: Zap,
    duration: '90 Minutes Clinical Session',
    price: 5999,
    originalPrice: 7500,
    formattedPrice: '₹5,999',
    tagline: 'Reprogram subconscious limiting beliefs, overcome phobias & awaken mental clarity.',
    summary: 'Hypnoheal Therapy combines clinical hypnotherapy with subconscious energy realignment to rewrite negative belief programs formed during your life. Over 95% of your daily habits, feelings, and choices stem from subconscious programming. Hypnoheal opens the doorway to reprogram your mind for abundance, confidence, and calmness.',
    
    whoNeedsThis: [
      'You struggle with chronic overthinking, panic attacks, or persistent negative self-talk.',
      'You experience imposter syndrome, severe self-doubt, or fear of public speaking and visibility.',
      'You find yourself stuck in habits, emotional eating, addiction triggers, or sleep disturbances.',
      'You want to break free from subconscious poverty mindsets and money blocks.',
      'You need fast, structured mental clarity for major life transitions or career growth.'
    ],

    sessionProcess: [
      {
        step: '01',
        title: 'Subconscious Root Cause Diagnosis',
        desc: 'We map out your conscious goals against subconscious sabotage mechanisms to pinpoint the exact core beliefs holding you back.'
      },
      {
        step: '02',
        title: 'Deep Receptive Trance State',
        desc: 'Using clinical progressive muscle relaxation, your brainwaves slow down to Alpha-Theta, bypassing the critical analytical guard of the mind.'
      },
      {
        step: '03',
        title: 'Limiting Belief Deconstruction',
        desc: 'We locate the early memory nodes where negative suggestions (e.g. "I am not worthy", "Money is dangerous") were accepted and safely dissolve them.'
      },
      {
        step: '04',
        title: 'Positive Neuro-Linguistic & Energy Imprinting',
        desc: 'We plant high-vibrational, empowering suggestions and visual anchors tailored specifically to your personality and goals.'
      },
      {
        step: '05',
        title: 'Custom Subconscious Audio & Integration',
        desc: 'You emerge refreshed and renewed, equipped with practical daily mind practices to solidify your new neuro-pathways.'
      }
    ],

    benefits: [
      'Rapid freedom from chronic anxiety, stage fright, and phobias.',
      'Solid self-confidence, self-worth, and bold decision-making ability.',
      'Replacement of scarcity mindsets with natural magnetizing abundance.',
      'Better restful sleep and heightened daily focus.',
      'Automatic alignment between your conscious goals and inner actions.'
    ],

    faqs: [
      {
        question: 'How is Hypnoheal different from regular talk therapy?',
        answer: 'Talk therapy works with the conscious mind (5% of your brain power). Hypnoheal directly accesses the subconscious mind (95%), leading to breakthroughs in weeks rather than years.'
      },
      {
        question: 'Is hypnosis safe?',
        answer: '100% safe and natural. It is equivalent to the relaxed state you naturally experience right before falling asleep or when daydreaming.'
      },
      {
        question: 'Will I remember what happened in the session?',
        answer: 'Yes, you will remember everything clearly after the session is complete.'
      }
    ]
  },
  {
    id: 'inner-child-healing',
    title: 'Inner Child Healing Therapy',
    shortTitle: 'Inner Child Healing',
    badge: 'EMOTIONAL FREEDOM',
    badgeClass: 'badge-pink',
    image: '/inner-child-therapy.jpg',
    icon: Heart,
    duration: '90 Minutes Transformative Session',
    price: 5999,
    originalPrice: 7500,
    formattedPrice: '₹5,999',
    tagline: 'Heal childhood emotional wounds, abandonment fears & reclaim your authentic joy.',
    summary: 'Every adult carries an inner child—the emotional memory bank of our early years (ages 0 to 12). Unhealed childhood wounds like emotional neglect, harsh criticism, or feeling unsafe show up as relationship dependency, anger outbursts, or chronic people-pleasing in adult life. Inner Child Healing reparents and restores your core self.',
    
    whoNeedsThis: [
      'You are a chronic people-pleaser who struggles to say "No" or set healthy boundaries.',
      'You suffer from intense fear of abandonment, rejection, or emotional clinginess in relationships.',
      'You experience sudden defensive anger reactions or intense sensitivity to criticism.',
      'You feel guilty whenever you prioritize your own rest, desires, or well-being.',
      'You struggle to trust people or feel an underlying sense of emotional emptiness.'
    ],

    sessionProcess: [
      {
        step: '01',
        title: 'Childhood Timeline & Trigger Assessment',
        desc: 'We identify current emotional triggers and map them back to early developmental ages where your emotional needs were unfulfilled.'
      },
      {
        step: '02',
        title: 'Safe Emotional Sanctuary Creation',
        desc: 'Under gentle guided hypnosis, we establish a serene inner sanctuary where your adult self meets your vulnerable inner child.'
      },
      {
        step: '03',
        title: 'Reparenting & Somatic Release',
        desc: 'You provide your inner child with the exact love, protection, validation, and safety that was missing in childhood.'
      },
      {
        step: '04',
        title: 'Cutting Unhealthy Attachment Cords',
        desc: 'We release inherited parental guilt, old expectations, and emotional burdens that were never yours to carry.'
      },
      {
        step: '05',
        title: 'Reclaiming Joy, Playfulness & Wholeness',
        desc: 'Your inner child is integrated into your heart, unlocking your innate creative spark, spontaneous joy, and self-love.'
      }
    ],

    benefits: [
      'Ability to set firm, loving boundaries without guilt or fear.',
      'Healing of anxious or avoidant relationship attachment styles.',
      'Freedom from deep-seated shame, inadequacy, and perfectionism.',
      'Reconnection with playfulness, creative energy, and spontaneous happiness.',
      'Unshakeable foundation of genuine self-acceptance and self-care.'
    ],

    faqs: [
      {
        question: 'What if I had a happy childhood? Do I still need this?',
        answer: 'Even in loving families, small moments of perceived rejection, school bullying, or sibling comparison can create subconscious protective shields that affect adult choices.'
      },
      {
        question: 'Will I have to relive traumatic childhood memories?',
        answer: 'No. You observe memories safely as a protected adult with Sonika by your side. The goal is healing and comfort, never re-traumatization.'
      }
    ]
  },
  {
    id: 'emotional-trauma-healing',
    title: 'Emotional & Trauma Healing',
    shortTitle: 'Emotional Trauma Healing',
    badge: 'SOUL LIBERATION',
    badgeClass: 'badge-teal',
    image: '/emotional-healing-therapy.jpg',
    icon: ShieldCheck,
    duration: '2 Hours Somatic & Energy Session',
    price: 5999,
    originalPrice: 7500,
    formattedPrice: '₹5,999',
    tagline: 'Safely release stored bodily trauma, heavy emotional grief & restore aura vitality.',
    summary: 'Trauma is not just a mental memory—it is physically stored inside the nervous system, fascia, and energetic subtle body. When emotional distress from past betrayals, sudden loss, or heartbreak is suppressed, it manifests as chronic exhaustion, numbness, or tightness. This therapy provides somatic emotional catharsis and energy clearing.',
    
    whoNeedsThis: [
      'You are recovering from toxic relationships, betrayal, narcissism, or painful divorces.',
      'You carry heavy grief, unexplained sadness, or a feeling of emotional numbness.',
      'You experience physical symptoms like tight throat, chest heaviness, or stomach knots during stress.',
      'You feel hyper-vigilant, constantly expecting bad news or living in fight-or-flight mode.',
      'You struggle to forgive past hurts and feel heavy energetic luggage in your everyday life.'
    ],

    sessionProcess: [
      {
        step: '01',
        title: 'Somatic Body Scan & Energy Mapping',
        desc: 'We locate where trauma energy is trapped in your body (e.g. solar plexus, heart chakra, shoulders, gut).'
      },
      {
        step: '02',
        title: 'Somatic Emotional Release & Catharsis',
        desc: 'Using guided breathwork and vocalization techniques, stored trapped emotions are safely expressed and released.'
      },
      {
        step: '03',
        title: 'Energetic Cord Cutting & Aura Cleansing',
        desc: 'We sever negative energetic ties with toxic past partners or environments and cleanse your subtle auric field.'
      },
      {
        step: '04',
        title: 'Nervous System Reset & Regulation',
        desc: 'We down-regulate your sympathetic nervous system, shifting your body from survival mode into deep rest and repair.'
      },
      {
        step: '05',
        title: 'Soul Retrieval & Empowerment Shield',
        desc: 'We reclaim lost energy fragments and build a protective light aura to maintain your personal peace.'
      }
    ],

    benefits: [
      'Instant physical lightness and release of chest, throat, or neck heaviness.',
      'Complete emotional detachment and peace regarding past betrayals.',
      'Calming of hyper-vigilant fight-or-flight responses.',
      'Restored emotional openness to welcome healthy, loving relationships.',
      'Renewed physical energy and overall vitality.'
    ],

    faqs: [
      {
        question: 'Is emotional release painful during the session?',
        answer: 'Releasing emotions may bring tears or sighing, but it is accompanied by immense relief. You will feel lighter immediately afterwards.'
      },
      {
        question: 'Can this help after a recent painful breakup or loss?',
        answer: 'Yes, it accelerates emotional processing so you do not carry unresolved grief into your future years.'
      }
    ]
  },
  {
    id: 'soul-energy',
    title: 'Soul & Energy Healing',
    shortTitle: 'Soul & Energy Healing',
    badge: 'SPIRITUAL ALIGNMENT',
    badgeClass: 'badge-gold',
    image: '/plr-therapy.jpg',
    icon: Sparkles,
    duration: '90 Minutes Alignment Session',
    price: 5999,
    originalPrice: 7500,
    formattedPrice: '₹5,999',
    tagline: 'Align your chakras, elevate your aura frequency & connect with divine spiritual guidance.',
    summary: 'Soul & Energy Healing works on your subtle subtle bodies, 7 major chakras, and spiritual alignment. By clearing dense energetic sludge, spiritual attachments, and blockages, this session restores your natural intuitive flow, radiant aura vitality, and connection to your soul code.',
    
    whoNeedsThis: [
      'You feel spiritually drained, disconnected, or stuck in low energetic frequencies.',
      'You experience blocked chakras (e.g. unable to speak your truth, closed heart chakra).',
      'You want to deepen your intuition, spiritual practice, and connection to higher consciousness.',
      'You feel sensitive to negative energy from places or other people and need protection.',
      'You are seeking clarity on your soul mission and divine life direction.'
    ],

    sessionProcess: [
      {
        step: '01',
        title: 'Subtle Energy Audit & Chakra Reading',
        desc: 'We assess the frequency and balance of your 7 primary energy centers and auric field.'
      },
      {
        step: '02',
        title: 'High-Vibrational Energy Transmutation',
        desc: 'Universal vital energy (Prana / Light) is channeled to cleanse blockages and stagnant debris.'
      },
      {
        step: '03',
        title: 'Chakra Balancing & Frequency Elevation',
        desc: 'Each chakra is harmonized and aligned, optimizing your emotional, mental, and physical well-being.'
      },
      {
        step: '04',
        title: 'Higher Self & Guide Connection',
        desc: 'We facilitate a quiet inner channel to receive direct guidance and inspiration from your Spiritual Team.'
      },
      {
        step: '05',
        title: 'Auric Shielding & Grounding',
        desc: 'We seal your energy field with divine protection so you stay grounded and unaffected by external negativity.'
      }
    ],

    benefits: [
      'Radiant, vibrant physical and emotional energy levels.',
      'Openness and alignment in all 7 chakras for free expression.',
      'Enhanced intuitive clarity and inner guidance.',
      'Strong auric protection against emotional vampires and negative spaces.',
      'Deep alignment with your spiritual life purpose.'
    ],

    faqs: [
      {
        question: 'Do I need prior experience with meditation or spirituality?',
        answer: 'Not at all! Sonika guides every step in simple, accessible language suitable for complete beginners.'
      },
      {
        question: 'How will I feel after the energy session?',
        answer: 'Most clients report feeling deeply calm, relaxed, light, and mentally clear immediately after.'
      }
    ]
  }
]

export const consultationData = {
  id: 'consultation',
  title: '1-on-1 Consultation with Sonika Gupta',
  shortTitle: 'Book Consultation',
  badge: 'GUIDANCE & DIAGNOSIS',
  badgeClass: 'badge-gold',
  duration: '30-45 Mins Online Session',
  price: 2500,
  originalPrice: 3500,
  formattedPrice: '₹2,500',
  tagline: 'Personalized soul diagnosis, therapy recommendation & initial spiritual guidance call.',
  summary: 'Speak directly with Sonika Gupta for a private, confidential consultation. Understand the root cause behind your emotional blocks, repetitive karmic patterns, or anxiety, and receive a customized healing roadmap tailored to your soul.'
}

